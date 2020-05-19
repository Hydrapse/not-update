module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950397, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _normalizeOptions = _interopRequireDefault(require("./normalizeOptions"));

var _resolvePath = _interopRequireDefault(require("./resolvePath"));

exports.resolvePath = _resolvePath.default;

var _call = _interopRequireDefault(require("./transformers/call"));

var _import = _interopRequireDefault(require("./transformers/import"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Public API for external plugins
const importVisitors = {
  CallExpression: _call.default,
  'ImportDeclaration|ExportDeclaration': _import.default
};
const visitor = {
  Program: {
    enter(programPath, state) {
      programPath.traverse(importVisitors, state);
    },

    exit(programPath, state) {
      programPath.traverse(importVisitors, state);
    }

  }
};

var _default = ({
  types
}) => ({
  name: 'module-resolver',

  manipulateOptions(opts) {
    if (opts.filename === undefined) {
      opts.filename = 'unknown';
    }
  },

  pre(file) {
    this.types = types;
    const currentFile = file.opts.filename;
    this.normalizedOpts = (0, _normalizeOptions.default)(currentFile, this.opts); // We need to keep track of all handled nodes so we do not try to transform them twice,
    // because we run before (enter) and after (exit) all nodes are handled

    this.moduleResolverVisited = new Set();
  },

  visitor,

  post() {
    this.moduleResolverVisited.clear();
  }

});

exports.default = _default;
}, function(modId) {var map = {"./normalizeOptions":1589772950398,"./resolvePath":1589772950400,"./transformers/call":1589772950403,"./transformers/import":1589772950404}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950398, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _reselect = require("reselect");

var _findBabelConfig = _interopRequireDefault(require("find-babel-config"));

var _glob = _interopRequireDefault(require("glob"));

var _pkgUp = _interopRequireDefault(require("pkg-up"));

var _utils = require("./utils");

var _resolvePath = _interopRequireDefault(require("./resolvePath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultExtensions = ['.js', '.jsx', '.es', '.es6', '.mjs'];
const defaultTransformedFunctions = ['require', 'require.resolve', 'System.import', // Jest methods
'jest.genMockFromModule', 'jest.mock', 'jest.unmock', 'jest.doMock', 'jest.dontMock', 'jest.setMock', 'require.requireActual', 'require.requireMock'];

function isRegExp(string) {
  return string.startsWith('^') || string.endsWith('$');
}

const specialCwd = {
  babelrc: startPath => _findBabelConfig.default.sync(startPath).file,
  packagejson: startPath => _pkgUp.default.sync(startPath)
};

function normalizeCwd(optsCwd, currentFile) {
  let cwd;

  if (optsCwd in specialCwd) {
    const startPath = currentFile === 'unknown' ? './' : currentFile;
    const computedCwd = specialCwd[optsCwd](startPath);
    cwd = computedCwd ? _path.default.dirname(computedCwd) : null;
  } else {
    cwd = optsCwd;
  }

  return cwd || process.cwd();
}

function normalizeRoot(optsRoot, cwd) {
  if (!optsRoot) {
    return [];
  }

  const rootArray = Array.isArray(optsRoot) ? optsRoot : [optsRoot];
  return rootArray.map(dirPath => _path.default.resolve(cwd, dirPath)).reduce((resolvedDirs, absDirPath) => {
    if (_glob.default.hasMagic(absDirPath)) {
      const roots = _glob.default.sync(absDirPath).filter(resolvedPath => _fs.default.lstatSync(resolvedPath).isDirectory());

      return [...resolvedDirs, ...roots];
    }

    return [...resolvedDirs, absDirPath];
  }, []);
}

function getAliasTarget(key, isKeyRegExp) {
  const regExpPattern = isKeyRegExp ? key : `^${(0, _utils.escapeRegExp)(key)}(/.*|)$`;
  return new RegExp(regExpPattern);
}

function getAliasSubstitute(value, isKeyRegExp) {
  if (typeof value === 'function') {
    return value;
  }

  if (!isKeyRegExp) {
    return ([, match]) => `${value}${match}`;
  }

  const parts = value.split('\\\\');
  return execResult => parts.map(part => part.replace(/\\\d+/g, number => execResult[number.slice(1)] || '')).join('\\');
}

function normalizeAlias(optsAlias) {
  if (!optsAlias) {
    return [];
  }

  const aliasArray = Array.isArray(optsAlias) ? optsAlias : [optsAlias];
  return aliasArray.reduce((aliasPairs, alias) => {
    const aliasKeys = Object.keys(alias);
    aliasKeys.forEach(key => {
      const isKeyRegExp = isRegExp(key);
      aliasPairs.push([getAliasTarget(key, isKeyRegExp), getAliasSubstitute(alias[key], isKeyRegExp)]);
    });
    return aliasPairs;
  }, []);
}

function normalizeTransformedFunctions(optsTransformFunctions) {
  if (!optsTransformFunctions) {
    return defaultTransformedFunctions;
  }

  return [...defaultTransformedFunctions, ...optsTransformFunctions];
}

function normalizeLoglevel(optsLoglevel) {
  return optsLoglevel || 'warn';
}

var _default = (0, _reselect.createSelector)( // The currentFile should have an extension; otherwise it's considered a special value
currentFile => currentFile.includes('.') ? _path.default.dirname(currentFile) : currentFile, (_, opts) => opts, (currentFile, opts) => {
  const cwd = normalizeCwd(opts.cwd, currentFile);
  const root = normalizeRoot(opts.root, cwd);
  const alias = normalizeAlias(opts.alias);
  const loglevel = normalizeLoglevel(opts.loglevel);
  const transformFunctions = normalizeTransformedFunctions(opts.transformFunctions);
  const extensions = opts.extensions || defaultExtensions;
  const stripExtensions = opts.stripExtensions || extensions;
  const resolvePath = opts.resolvePath || _resolvePath.default;
  return {
    cwd,
    root,
    alias,
    loglevel,
    transformFunctions,
    extensions,
    stripExtensions,
    resolvePath
  };
});

exports.default = _default;
}, function(modId) { var map = {"./utils":1589772950399,"./resolvePath":1589772950400}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950399, function(require, module, exports) {


exports.__esModule = true;
exports.nodeResolvePath = nodeResolvePath;
exports.isRelativePath = isRelativePath;
exports.toPosixPath = toPosixPath;
exports.toLocalPath = toLocalPath;
exports.stripExtension = stripExtension;
exports.replaceExtension = replaceExtension;
exports.matchesPattern = matchesPattern;
exports.mapPathString = mapPathString;
exports.isImportCall = isImportCall;
exports.escapeRegExp = escapeRegExp;

var _path = _interopRequireDefault(require("path"));

var _resolve = _interopRequireDefault(require("resolve"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeResolvePath(modulePath, basedir, extensions) {
  try {
    return _resolve.default.sync(modulePath, {
      basedir,
      extensions
    });
  } catch (e) {
    return null;
  }
}

function isRelativePath(nodePath) {
  return nodePath.match(/^\.?\.\//);
}

function toPosixPath(modulePath) {
  return modulePath.replace(/\\/g, '/');
}

function toLocalPath(modulePath) {
  let localPath = modulePath.replace(/\/index$/, ''); // remove trailing /index

  if (!isRelativePath(localPath)) {
    localPath = `./${localPath}`; // insert `./` to make it a relative path
  }

  return localPath;
}

function stripExtension(modulePath, stripExtensions) {
  let name = _path.default.basename(modulePath);

  stripExtensions.some(extension => {
    if (name.endsWith(extension)) {
      name = name.slice(0, name.length - extension.length);
      return true;
    }

    return false;
  });
  return name;
}

function replaceExtension(modulePath, opts) {
  const filename = stripExtension(modulePath, opts.stripExtensions);
  return _path.default.join(_path.default.dirname(modulePath), filename);
}

function matchesPattern(types, calleePath, pattern) {
  const node = calleePath.node;

  if (types.isMemberExpression(node)) {
    return calleePath.matchesPattern(pattern);
  }

  if (!types.isIdentifier(node) || pattern.includes('.')) {
    return false;
  }

  const name = pattern.split('.')[0];
  return node.name === name;
}

function mapPathString(nodePath, state) {
  if (!state.types.isStringLiteral(nodePath)) {
    return;
  }

  const sourcePath = nodePath.node.value;
  const currentFile = state.file.opts.filename;
  const modulePath = state.normalizedOpts.resolvePath(sourcePath, currentFile, state.opts);

  if (modulePath) {
    if (nodePath.node.pathResolved) {
      return;
    }

    nodePath.replaceWith(state.types.stringLiteral(modulePath));
    nodePath.node.pathResolved = true;
  }
}

function isImportCall(types, calleePath) {
  return types.isImport(calleePath.node.callee);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950400, function(require, module, exports) {


exports.__esModule = true;
exports.default = resolvePath;

var _path = _interopRequireDefault(require("path"));

var _log = require("./log");

var _mapToRelative = _interopRequireDefault(require("./mapToRelative"));

var _normalizeOptions = _interopRequireDefault(require("./normalizeOptions"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativePath(sourcePath, currentFile, absFileInRoot, opts) {
  const realSourceFileExtension = _path.default.extname(absFileInRoot);

  const sourceFileExtension = _path.default.extname(sourcePath);

  let relativePath = (0, _mapToRelative.default)(opts.cwd, currentFile, absFileInRoot);

  if (realSourceFileExtension !== sourceFileExtension) {
    relativePath = (0, _utils.replaceExtension)(relativePath, opts);
  }

  return (0, _utils.toLocalPath)((0, _utils.toPosixPath)(relativePath));
}

function findPathInRoots(sourcePath, {
  extensions,
  root
}) {
  // Search the source path inside every custom root directory
  let resolvedSourceFile;
  root.some(basedir => {
    resolvedSourceFile = (0, _utils.nodeResolvePath)(`./${sourcePath}`, basedir, extensions);
    return resolvedSourceFile !== null;
  });
  return resolvedSourceFile;
}

function resolvePathFromRootConfig(sourcePath, currentFile, opts) {
  const absFileInRoot = findPathInRoots(sourcePath, opts);

  if (!absFileInRoot) {
    return null;
  }

  return getRelativePath(sourcePath, currentFile, absFileInRoot, opts);
}

function checkIfPackageExists(modulePath, currentFile, extensions, loglevel) {
  const resolvedPath = (0, _utils.nodeResolvePath)(modulePath, currentFile, extensions);

  if (resolvedPath === null && loglevel !== 'silent') {
    (0, _log.warn)(`Could not resolve "${modulePath}" in file ${currentFile}.`);
  }
}

function resolvePathFromAliasConfig(sourcePath, currentFile, opts) {
  let aliasedSourceFile;
  opts.alias.find(([regExp, substitute]) => {
    const execResult = regExp.exec(sourcePath);

    if (execResult === null) {
      return false;
    }

    aliasedSourceFile = substitute(execResult);
    return true;
  });

  if (!aliasedSourceFile) {
    return null;
  }

  if ((0, _utils.isRelativePath)(aliasedSourceFile)) {
    return (0, _utils.toLocalPath)((0, _utils.toPosixPath)((0, _mapToRelative.default)(opts.cwd, currentFile, aliasedSourceFile)));
  }

  if (process.env.NODE_ENV !== 'production') {
    checkIfPackageExists(aliasedSourceFile, currentFile, opts.extensions, opts.loglevel);
  }

  return aliasedSourceFile;
}

const resolvers = [resolvePathFromAliasConfig, resolvePathFromRootConfig];

function resolvePath(sourcePath, currentFile, opts) {
  if ((0, _utils.isRelativePath)(sourcePath)) {
    return sourcePath;
  }

  const normalizedOpts = (0, _normalizeOptions.default)(currentFile, opts); // File param is a relative path from the environment current working directory
  // (not from cwd param)

  const absoluteCurrentFile = _path.default.resolve(currentFile);

  let resolvedPath = null;
  resolvers.some(resolver => {
    resolvedPath = resolver(sourcePath, absoluteCurrentFile, normalizedOpts);
    return resolvedPath !== null;
  });
  return resolvedPath;
}
}, function(modId) { var map = {"./log":1589772950401,"./mapToRelative":1589772950402,"./normalizeOptions":1589772950398,"./utils":1589772950399}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950401, function(require, module, exports) {


exports.__esModule = true;
exports.warn = warn;

// This module exists only for abstracting logging away and making testing easier
// eslint-disable-next-line import/prefer-default-export
function warn(...args) {
  // eslint-disable-next-line no-console
  console.warn(...args);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950402, function(require, module, exports) {


exports.__esModule = true;
exports.default = mapToRelative;

var _path = _interopRequireDefault(require("path"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToRelative(cwd, currentFile, module) {
  let from = _path.default.dirname(currentFile);

  let to = _path.default.normalize(module);

  from = _path.default.resolve(cwd, from);
  to = _path.default.resolve(cwd, to);

  const moduleMapped = _path.default.relative(from, to);

  return (0, _utils.toPosixPath)(moduleMapped);
}
}, function(modId) { var map = {"./utils":1589772950399}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950403, function(require, module, exports) {


exports.__esModule = true;
exports.default = transformCall;

var _utils = require("../utils");

function transformCall(nodePath, state) {
  if (state.moduleResolverVisited.has(nodePath)) {
    return;
  }

  const calleePath = nodePath.get('callee');
  const isNormalCall = state.normalizedOpts.transformFunctions.some(pattern => (0, _utils.matchesPattern)(state.types, calleePath, pattern));

  if (isNormalCall || (0, _utils.isImportCall)(state.types, nodePath)) {
    state.moduleResolverVisited.add(nodePath);
    (0, _utils.mapPathString)(nodePath.get('arguments.0'), state);
  }
}
}, function(modId) { var map = {"../utils":1589772950399}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950404, function(require, module, exports) {


exports.__esModule = true;
exports.default = transformImport;

var _utils = require("../utils");

function transformImport(nodePath, state) {
  if (state.moduleResolverVisited.has(nodePath)) {
    return;
  }

  state.moduleResolverVisited.add(nodePath);
  (0, _utils.mapPathString)(nodePath.get('source'), state);
}
}, function(modId) { var map = {"../utils":1589772950399}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950397);
})()
//# sourceMappingURL=index.js.map