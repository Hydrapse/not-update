module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950395, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (api) {
  var transformImport = (0, _utils.createDynamicImportTransform)(api);

  return {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
    manipulateOptions: function () {
      function manipulateOptions(opts, parserOpts) {
        parserOpts.plugins.push('dynamicImport');
      }

      return manipulateOptions;
    }(),


    visitor: {
      Import: function () {
        function Import(path) {
          transformImport(this, path);
        }

        return Import;
      }()
    }
  };
};

var _utils = require('./utils');

module.exports = exports['default'];
}, function(modId) {var map = {"./utils":1589772950396}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950396, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getImportSource = getImportSource;
exports.createDynamicImportTransform = createDynamicImportTransform;
function getImportSource(t, callNode) {
  var importArguments = callNode.arguments;

  var _importArguments = _slicedToArray(importArguments, 1),
      importPath = _importArguments[0];

  var isString = t.isStringLiteral(importPath) || t.isTemplateLiteral(importPath);
  if (isString) {
    t.removeComments(importPath);
    return importPath;
  }

  return t.templateLiteral([t.templateElement({ raw: '', cooked: '' }), t.templateElement({ raw: '', cooked: '' }, true)], importArguments);
}

function createDynamicImportTransform(_ref) {
  var template = _ref.template,
      t = _ref.types;

  var builders = {
    'static': {
      interop: template('Promise.resolve().then(() => INTEROP(require(SOURCE)))'),
      noInterop: template('Promise.resolve().then(() => require(SOURCE))')
    },
    dynamic: {
      interop: template('Promise.resolve(SOURCE).then(s => INTEROP(require(s)))'),
      noInterop: template('Promise.resolve(SOURCE).then(s => require(s))')
    }
  };

  var visited = typeof WeakSet === 'function' && new WeakSet();

  var isString = function isString(node) {
    return t.isStringLiteral(node) || t.isTemplateLiteral(node) && node.expressions.length === 0;
  };

  return function (context, path) {
    if (visited) {
      if (visited.has(path)) {
        return;
      }
      visited.add(path);
    }

    var SOURCE = getImportSource(t, path.parent);

    var builder = isString(SOURCE) ? builders['static'] : builders.dynamic;

    var newImport = context.opts.noInterop ? builder.noInterop({ SOURCE: SOURCE }) : builder.interop({ SOURCE: SOURCE, INTEROP: context.addHelper('interopRequireWildcard') });

    path.parentPath.replaceWith(newImport);
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950395);
})()
//# sourceMappingURL=index.js.map