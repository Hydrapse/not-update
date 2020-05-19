module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950161, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _resolve = _interopRequireDefault(require("resolve"));

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _helperModuleImports = require("@babel/helper-module-imports");

var _core = require("@babel/core");

var _runtimeCorejs2Definitions = _interopRequireDefault(require("./runtime-corejs2-definitions"));

var _runtimeCorejs3Definitions = _interopRequireDefault(require("./runtime-corejs3-definitions"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveAbsoluteRuntime(moduleName, dirname) {
  try {
    return _path.default.dirname(_resolve.default.sync(`${moduleName}/package.json`, {
      basedir: dirname
    }));
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;
    throw Object.assign(new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`), {
      code: "BABEL_RUNTIME_NOT_FOUND",
      runtime: moduleName,
      dirname
    });
  }
}

function supportsStaticESM(caller) {
  return !!(caller && caller.supportsStaticESM);
}

var _default = (0, _helperPluginUtils.declare)((api, options, dirname) => {
  api.assertVersion(7);
  const {
    corejs,
    helpers: useRuntimeHelpers = true,
    regenerator: useRuntimeRegenerator = true,
    useESModules = false,
    version: runtimeVersion = "7.0.0-beta.0",
    absoluteRuntime = false
  } = options;
  let proposals = false;
  let rawVersion;

  if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }

  const corejsVersion = rawVersion ? Number(rawVersion) : false;

  if (![false, 2, 3].includes(corejsVersion)) {
    throw new Error(`The \`core-js\` version must be false, 2 or 3, but got ${JSON.stringify(rawVersion)}.`);
  }

  if (proposals && (!corejsVersion || corejsVersion < 3)) {
    throw new Error("The 'proposals' option is only supported when using 'corejs: 3'");
  }

  if (typeof useRuntimeRegenerator !== "boolean") {
    throw new Error("The 'regenerator' option must be undefined, or a boolean.");
  }

  if (typeof useRuntimeHelpers !== "boolean") {
    throw new Error("The 'helpers' option must be undefined, or a boolean.");
  }

  if (typeof useESModules !== "boolean" && useESModules !== "auto") {
    throw new Error("The 'useESModules' option must be undefined, or a boolean, or 'auto'.");
  }

  if (typeof absoluteRuntime !== "boolean" && typeof absoluteRuntime !== "string") {
    throw new Error("The 'absoluteRuntime' option must be undefined, a boolean, or a string.");
  }

  if (typeof runtimeVersion !== "string") {
    throw new Error(`The 'version' option must be a version string.`);
  }

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function hasMapping(methods, name) {
    return has(methods, name) && (proposals || methods[name].stable);
  }

  function hasStaticMapping(object, method) {
    return has(StaticProperties, object) && hasMapping(StaticProperties[object], method);
  }

  function isNamespaced(path) {
    const binding = path.scope.getBinding(path.node.name);
    if (!binding) return false;
    return binding.path.isImportNamespaceSpecifier();
  }

  function maybeNeedsPolyfill(path, methods, name) {
    if (isNamespaced(path.get("object"))) return false;
    if (!methods[name].types) return true;
    const typeAnnotation = path.get("object").getTypeAnnotation();
    const type = (0, _helpers.typeAnnotationToString)(typeAnnotation);
    if (!type) return true;
    return methods[name].types.some(name => name === type);
  }

  function resolvePropertyName(path, computed) {
    const {
      node
    } = path;
    if (!computed) return node.name;
    if (path.isStringLiteral()) return node.value;
    const result = path.evaluate();
    return result.value;
  }

  if (has(options, "useBuiltIns")) {
    if (options.useBuiltIns) {
      throw new Error("The 'useBuiltIns' option has been removed. The @babel/runtime " + "module now uses builtins by default.");
    } else {
      throw new Error("The 'useBuiltIns' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }

  if (has(options, "polyfill")) {
    if (options.polyfill === false) {
      throw new Error("The 'polyfill' option has been removed. The @babel/runtime " + "module now skips polyfilling by default.");
    } else {
      throw new Error("The 'polyfill' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }

  if (has(options, "moduleName")) {
    throw new Error("The 'moduleName' option has been removed. @babel/transform-runtime " + "no longer supports arbitrary runtimes. If you were using this to " + "set an absolute path for Babel's standard runtimes, please use the " + "'absoluteRuntime' option.");
  }

  const esModules = useESModules === "auto" ? api.caller(supportsStaticESM) : useESModules;
  const injectCoreJS2 = corejsVersion === 2;
  const injectCoreJS3 = corejsVersion === 3;
  const injectCoreJS = corejsVersion !== false;
  const moduleName = injectCoreJS3 ? "@babel/runtime-corejs3" : injectCoreJS2 ? "@babel/runtime-corejs2" : "@babel/runtime";
  const corejsRoot = injectCoreJS3 && !proposals ? "core-js-stable" : "core-js";
  const {
    BuiltIns,
    StaticProperties,
    InstanceProperties
  } = (injectCoreJS2 ? _runtimeCorejs2Definitions.default : _runtimeCorejs3Definitions.default)(runtimeVersion);
  const HEADER_HELPERS = ["interopRequireWildcard", "interopRequireDefault"];
  let modulePath = moduleName;

  if (absoluteRuntime !== false) {
    modulePath = resolveAbsoluteRuntime(moduleName, _path.default.resolve(dirname, absoluteRuntime === true ? "." : absoluteRuntime));
  }

  return {
    name: "transform-runtime",

    pre(file) {
      if (useRuntimeHelpers) {
        file.set("helperGenerator", name => {
          if (file.availableHelper && !file.availableHelper(name, runtimeVersion)) {
            return;
          }

          const isInteropHelper = HEADER_HELPERS.indexOf(name) !== -1;
          const blockHoist = isInteropHelper && !(0, _helperModuleImports.isModule)(file.path) ? 4 : undefined;
          const helpersDir = esModules && file.path.node.sourceType === "module" ? "helpers/esm" : "helpers";
          return this.addDefaultImport(`${modulePath}/${helpersDir}/${name}`, name, blockHoist);
        });
      }

      const cache = new Map();

      this.addDefaultImport = (source, nameHint, blockHoist) => {
        const cacheKey = (0, _helperModuleImports.isModule)(file.path);
        const key = `${source}:${nameHint}:${cacheKey || ""}`;
        let cached = cache.get(key);

        if (cached) {
          cached = _core.types.cloneNode(cached);
        } else {
          cached = (0, _helperModuleImports.addDefault)(file.path, source, {
            importedInterop: "uncompiled",
            nameHint,
            blockHoist
          });
          cache.set(key, cached);
        }

        return cached;
      };
    },

    visitor: {
      ReferencedIdentifier(path) {
        const {
          node,
          parent,
          scope
        } = path;
        const {
          name
        } = node;

        if (name === "regeneratorRuntime" && useRuntimeRegenerator) {
          path.replaceWith(this.addDefaultImport(`${modulePath}/regenerator`, "regeneratorRuntime"));
          return;
        }

        if (!injectCoreJS) return;
        if (_core.types.isMemberExpression(parent)) return;
        if (!hasMapping(BuiltIns, name)) return;
        if (scope.getBindingIdentifier(name)) return;
        path.replaceWith(this.addDefaultImport(`${modulePath}/${corejsRoot}/${BuiltIns[name].path}`, name));
      },

      CallExpression(path) {
        if (!injectCoreJS) return;
        const {
          node
        } = path;
        const {
          callee
        } = node;
        if (!_core.types.isMemberExpression(callee)) return;
        const {
          object
        } = callee;
        const propertyName = resolvePropertyName(path.get("callee.property"), callee.computed);

        if (injectCoreJS3 && !hasStaticMapping(object.name, propertyName)) {
          if (hasMapping(InstanceProperties, propertyName) && maybeNeedsPolyfill(path.get("callee"), InstanceProperties, propertyName)) {
            let context1, context2;

            if (_core.types.isIdentifier(object)) {
              context1 = object;
              context2 = _core.types.cloneNode(object);
            } else {
              context1 = path.scope.generateDeclaredUidIdentifier("context");
              context2 = _core.types.assignmentExpression("=", context1, object);
            }

            node.callee = _core.types.memberExpression(_core.types.callExpression(this.addDefaultImport(`${moduleName}/${corejsRoot}/instance/${InstanceProperties[propertyName].path}`, `${propertyName}InstanceProperty`), [context2]), _core.types.identifier("call"));
            node.arguments.unshift(context1);
            return;
          }
        }

        if (node.arguments.length) return;
        if (!callee.computed) return;

        if (!path.get("callee.property").matchesPattern("Symbol.iterator")) {
          return;
        }

        path.replaceWith(_core.types.callExpression(this.addDefaultImport(`${modulePath}/core-js/get-iterator`, "getIterator"), [object]));
      },

      BinaryExpression(path) {
        if (!injectCoreJS) return;
        if (path.node.operator !== "in") return;
        if (!path.get("left").matchesPattern("Symbol.iterator")) return;
        path.replaceWith(_core.types.callExpression(this.addDefaultImport(`${modulePath}/core-js/is-iterable`, "isIterable"), [path.node.right]));
      },

      MemberExpression: {
        enter(path) {
          if (!injectCoreJS) return;
          if (!path.isReferenced()) return;
          const {
            node
          } = path;
          const {
            object
          } = node;
          if (!_core.types.isReferenced(object, node)) return;

          if (!injectCoreJS2 && node.computed && path.get("property").matchesPattern("Symbol.iterator")) {
            path.replaceWith(_core.types.callExpression(this.addDefaultImport(`${moduleName}/core-js/get-iterator-method`, "getIteratorMethod"), [object]));
            return;
          }

          const objectName = object.name;
          const propertyName = resolvePropertyName(path.get("property"), node.computed);

          if (path.scope.getBindingIdentifier(objectName) || !hasStaticMapping(objectName, propertyName)) {
            if (injectCoreJS3 && hasMapping(InstanceProperties, propertyName) && maybeNeedsPolyfill(path, InstanceProperties, propertyName)) {
              path.replaceWith(_core.types.callExpression(this.addDefaultImport(`${moduleName}/${corejsRoot}/instance/${InstanceProperties[propertyName].path}`, `${propertyName}InstanceProperty`), [object]));
            }

            return;
          }

          path.replaceWith(this.addDefaultImport(`${modulePath}/${corejsRoot}/${StaticProperties[objectName][propertyName].path}`, `${objectName}$${propertyName}`));
        },

        exit(path) {
          if (!injectCoreJS) return;
          if (!path.isReferenced()) return;
          if (path.node.computed) return;
          const {
            node
          } = path;
          const {
            object
          } = node;
          const {
            name
          } = object;
          if (!hasMapping(BuiltIns, name)) return;
          if (path.scope.getBindingIdentifier(name)) return;
          path.replaceWith(_core.types.memberExpression(this.addDefaultImport(`${modulePath}/${corejsRoot}/${BuiltIns[name].path}`, name), node.property));
        }

      }
    }
  };
});

exports.default = _default;
}, function(modId) {var map = {"./runtime-corejs2-definitions":1589772950162,"./runtime-corejs3-definitions":1589772950164,"./helpers":1589772950163}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950162, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("./helpers");

var _default = runtimeVersion => {
  const includeMathModule = (0, _helpers.hasMinVersion)("7.0.1", runtimeVersion);
  return {
    BuiltIns: {
      Symbol: {
        stable: true,
        path: "symbol"
      },
      Promise: {
        stable: true,
        path: "promise"
      },
      Map: {
        stable: true,
        path: "map"
      },
      WeakMap: {
        stable: true,
        path: "weak-map"
      },
      Set: {
        stable: true,
        path: "set"
      },
      WeakSet: {
        stable: true,
        path: "weak-set"
      },
      setImmediate: {
        stable: true,
        path: "set-immediate"
      },
      clearImmediate: {
        stable: true,
        path: "clear-immediate"
      },
      parseFloat: {
        stable: true,
        path: "parse-float"
      },
      parseInt: {
        stable: true,
        path: "parse-int"
      }
    },
    StaticProperties: Object.assign({
      Array: {
        from: {
          stable: true,
          path: "array/from"
        },
        isArray: {
          stable: true,
          path: "array/is-array"
        },
        of: {
          stable: true,
          path: "array/of"
        }
      },
      JSON: {
        stringify: {
          stable: true,
          path: "json/stringify"
        }
      },
      Object: {
        assign: {
          stable: true,
          path: "object/assign"
        },
        create: {
          stable: true,
          path: "object/create"
        },
        defineProperties: {
          stable: true,
          path: "object/define-properties"
        },
        defineProperty: {
          stable: true,
          path: "object/define-property"
        },
        entries: {
          stable: true,
          path: "object/entries"
        },
        freeze: {
          stable: true,
          path: "object/freeze"
        },
        getOwnPropertyDescriptor: {
          stable: true,
          path: "object/get-own-property-descriptor"
        },
        getOwnPropertyDescriptors: {
          stable: true,
          path: "object/get-own-property-descriptors"
        },
        getOwnPropertyNames: {
          stable: true,
          path: "object/get-own-property-names"
        },
        getOwnPropertySymbols: {
          stable: true,
          path: "object/get-own-property-symbols"
        },
        getPrototypeOf: {
          stable: true,
          path: "object/get-prototype-of"
        },
        isExtensible: {
          stable: true,
          path: "object/is-extensible"
        },
        isFrozen: {
          stable: true,
          path: "object/is-frozen"
        },
        isSealed: {
          stable: true,
          path: "object/is-sealed"
        },
        is: {
          stable: true,
          path: "object/is"
        },
        keys: {
          stable: true,
          path: "object/keys"
        },
        preventExtensions: {
          stable: true,
          path: "object/prevent-extensions"
        },
        seal: {
          stable: true,
          path: "object/seal"
        },
        setPrototypeOf: {
          stable: true,
          path: "object/set-prototype-of"
        },
        values: {
          stable: true,
          path: "object/values"
        }
      }
    }, includeMathModule ? {
      Math: {
        acosh: {
          stable: true,
          path: "math/acosh"
        },
        asinh: {
          stable: true,
          path: "math/asinh"
        },
        atanh: {
          stable: true,
          path: "math/atanh"
        },
        cbrt: {
          stable: true,
          path: "math/cbrt"
        },
        clz32: {
          stable: true,
          path: "math/clz32"
        },
        cosh: {
          stable: true,
          path: "math/cosh"
        },
        expm1: {
          stable: true,
          path: "math/expm1"
        },
        fround: {
          stable: true,
          path: "math/fround"
        },
        hypot: {
          stable: true,
          path: "math/hypot"
        },
        imul: {
          stable: true,
          path: "math/imul"
        },
        log10: {
          stable: true,
          path: "math/log10"
        },
        log1p: {
          stable: true,
          path: "math/log1p"
        },
        log2: {
          stable: true,
          path: "math/log2"
        },
        sign: {
          stable: true,
          path: "math/sign"
        },
        sinh: {
          stable: true,
          path: "math/sinh"
        },
        tanh: {
          stable: true,
          path: "math/tanh"
        },
        trunc: {
          stable: true,
          path: "math/trunc"
        }
      }
    } : {}, {
      Symbol: {
        for: {
          stable: true,
          path: "symbol/for"
        },
        hasInstance: {
          stable: true,
          path: "symbol/has-instance"
        },
        isConcatSpreadable: {
          stable: true,
          path: "symbol/is-concat-spreadable"
        },
        iterator: {
          stable: true,
          path: "symbol/iterator"
        },
        keyFor: {
          stable: true,
          path: "symbol/key-for"
        },
        match: {
          stable: true,
          path: "symbol/match"
        },
        replace: {
          stable: true,
          path: "symbol/replace"
        },
        search: {
          stable: true,
          path: "symbol/search"
        },
        species: {
          stable: true,
          path: "symbol/species"
        },
        split: {
          stable: true,
          path: "symbol/split"
        },
        toPrimitive: {
          stable: true,
          path: "symbol/to-primitive"
        },
        toStringTag: {
          stable: true,
          path: "symbol/to-string-tag"
        },
        unscopables: {
          stable: true,
          path: "symbol/unscopables"
        }
      },
      String: {
        at: {
          stable: true,
          path: "string/at"
        },
        fromCodePoint: {
          stable: true,
          path: "string/from-code-point"
        },
        raw: {
          stable: true,
          path: "string/raw"
        }
      },
      Number: {
        EPSILON: {
          stable: true,
          path: "number/epsilon"
        },
        isFinite: {
          stable: true,
          path: "number/is-finite"
        },
        isInteger: {
          stable: true,
          path: "number/is-integer"
        },
        isNaN: {
          stable: true,
          path: "number/is-nan"
        },
        isSafeInteger: {
          stable: true,
          path: "number/is-safe-integer"
        },
        MAX_SAFE_INTEGER: {
          stable: true,
          path: "number/max-safe-integer"
        },
        MIN_SAFE_INTEGER: {
          stable: true,
          path: "number/min-safe-integer"
        },
        parseFloat: {
          stable: true,
          path: "number/parse-float"
        },
        parseInt: {
          stable: true,
          path: "number/parse-int"
        }
      },
      Reflect: {
        apply: {
          stable: true,
          path: "reflect/apply"
        },
        construct: {
          stable: true,
          path: "reflect/construct"
        },
        defineProperty: {
          stable: true,
          path: "reflect/define-property"
        },
        deleteProperty: {
          stable: true,
          path: "reflect/delete-property"
        },
        getOwnPropertyDescriptor: {
          stable: true,
          path: "reflect/get-own-property-descriptor"
        },
        getPrototypeOf: {
          stable: true,
          path: "reflect/get-prototype-of"
        },
        get: {
          stable: true,
          path: "reflect/get"
        },
        has: {
          stable: true,
          path: "reflect/has"
        },
        isExtensible: {
          stable: true,
          path: "reflect/is-extensible"
        },
        ownKeys: {
          stable: true,
          path: "reflect/own-keys"
        },
        preventExtensions: {
          stable: true,
          path: "reflect/prevent-extensions"
        },
        setPrototypeOf: {
          stable: true,
          path: "reflect/set-prototype-of"
        },
        set: {
          stable: true,
          path: "reflect/set"
        }
      },
      Date: {
        now: {
          stable: true,
          path: "date/now"
        }
      }
    })
  };
};

exports.default = _default;
}, function(modId) { var map = {"./helpers":1589772950163}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950163, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinVersion = hasMinVersion;
exports.typeAnnotationToString = typeAnnotationToString;

var _semver = _interopRequireDefault(require("semver"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasMinVersion(minVersion, runtimeVersion) {
  if (!runtimeVersion) return true;
  if (_semver.default.valid(runtimeVersion)) runtimeVersion = `^${runtimeVersion}`;
  return !_semver.default.intersects(`<${minVersion}`, runtimeVersion) && !_semver.default.intersects(`>=8.0.0`, runtimeVersion);
}

function typeAnnotationToString(node) {
  switch (node.type) {
    case "GenericTypeAnnotation":
      if (_core.types.isIdentifier(node.id, {
        name: "Array"
      })) return "array";
      break;

    case "StringTypeAnnotation":
      return "string";
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950164, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => {
  return {
    BuiltIns: {
      AggregateError: {
        stable: false,
        path: "aggregate-error"
      },
      Map: {
        stable: true,
        path: "map"
      },
      Observable: {
        stable: false,
        path: "observable"
      },
      Promise: {
        stable: true,
        path: "promise"
      },
      Set: {
        stable: true,
        path: "set"
      },
      Symbol: {
        stable: true,
        path: "symbol"
      },
      URL: {
        stable: true,
        path: "url"
      },
      URLSearchParams: {
        stable: true,
        path: "url-search-params"
      },
      WeakMap: {
        stable: true,
        path: "weak-map"
      },
      WeakSet: {
        stable: true,
        path: "weak-set"
      },
      clearImmediate: {
        stable: true,
        path: "clear-immediate"
      },
      compositeKey: {
        stable: false,
        path: "composite-key"
      },
      compositeSymbol: {
        stable: false,
        path: "composite-symbol"
      },
      globalThis: {
        stable: false,
        path: "global-this"
      },
      parseFloat: {
        stable: true,
        path: "parse-float"
      },
      parseInt: {
        stable: true,
        path: "parse-int"
      },
      queueMicrotask: {
        stable: true,
        path: "queue-microtask"
      },
      setImmediate: {
        stable: true,
        path: "set-immediate"
      },
      setInterval: {
        stable: true,
        path: "set-interval"
      },
      setTimeout: {
        stable: true,
        path: "set-timeout"
      }
    },
    StaticProperties: {
      Array: {
        from: {
          stable: true,
          path: "array/from"
        },
        isArray: {
          stable: true,
          path: "array/is-array"
        },
        of: {
          stable: true,
          path: "array/of"
        }
      },
      Date: {
        now: {
          stable: true,
          path: "date/now"
        }
      },
      JSON: {
        stringify: {
          stable: true,
          path: "json/stringify"
        }
      },
      Math: {
        DEG_PER_RAD: {
          stable: false,
          path: "math/deg-per-rad"
        },
        RAD_PER_DEG: {
          stable: false,
          path: "math/rad-per-deg"
        },
        acosh: {
          stable: true,
          path: "math/acosh"
        },
        asinh: {
          stable: true,
          path: "math/asinh"
        },
        atanh: {
          stable: true,
          path: "math/atanh"
        },
        cbrt: {
          stable: true,
          path: "math/cbrt"
        },
        clamp: {
          stable: false,
          path: "math/clamp"
        },
        clz32: {
          stable: true,
          path: "math/clz32"
        },
        cosh: {
          stable: true,
          path: "math/cosh"
        },
        degrees: {
          stable: false,
          path: "math/degrees"
        },
        expm1: {
          stable: true,
          path: "math/expm1"
        },
        fround: {
          stable: true,
          path: "math/fround"
        },
        fscale: {
          stable: false,
          path: "math/fscale"
        },
        hypot: {
          stable: true,
          path: "math/hypot"
        },
        iaddh: {
          stable: false,
          path: "math/iaddh"
        },
        imul: {
          stable: true,
          path: "math/imul"
        },
        imulh: {
          stable: false,
          path: "math/imulh"
        },
        isubh: {
          stable: false,
          path: "math/isubh"
        },
        log10: {
          stable: true,
          path: "math/log10"
        },
        log1p: {
          stable: true,
          path: "math/log1p"
        },
        log2: {
          stable: true,
          path: "math/log2"
        },
        radians: {
          stable: false,
          path: "math/radians"
        },
        scale: {
          stable: false,
          path: "math/scale"
        },
        seededPRNG: {
          stable: false,
          path: "math/seeded-prng"
        },
        sign: {
          stable: true,
          path: "math/sign"
        },
        signbit: {
          stable: false,
          path: "math/signbit"
        },
        sinh: {
          stable: true,
          path: "math/sinh"
        },
        tanh: {
          stable: true,
          path: "math/tanh"
        },
        trunc: {
          stable: true,
          path: "math/trunc"
        },
        umulh: {
          stable: false,
          path: "math/umulh"
        }
      },
      Number: {
        EPSILON: {
          stable: true,
          path: "number/epsilon"
        },
        MAX_SAFE_INTEGER: {
          stable: true,
          path: "number/max-safe-integer"
        },
        MIN_SAFE_INTEGER: {
          stable: true,
          path: "number/min-safe-integer"
        },
        fromString: {
          stable: false,
          path: "number/from-string"
        },
        isFinite: {
          stable: true,
          path: "number/is-finite"
        },
        isInteger: {
          stable: true,
          path: "number/is-integer"
        },
        isNaN: {
          stable: true,
          path: "number/is-nan"
        },
        isSafeInteger: {
          stable: true,
          path: "number/is-safe-integer"
        },
        parseFloat: {
          stable: true,
          path: "number/parse-float"
        },
        parseInt: {
          stable: true,
          path: "number/parse-int"
        }
      },
      Object: {
        assign: {
          stable: true,
          path: "object/assign"
        },
        create: {
          stable: true,
          path: "object/create"
        },
        defineProperties: {
          stable: true,
          path: "object/define-properties"
        },
        defineProperty: {
          stable: true,
          path: "object/define-property"
        },
        entries: {
          stable: true,
          path: "object/entries"
        },
        freeze: {
          stable: true,
          path: "object/freeze"
        },
        fromEntries: {
          stable: true,
          path: "object/from-entries"
        },
        getOwnPropertyDescriptor: {
          stable: true,
          path: "object/get-own-property-descriptor"
        },
        getOwnPropertyDescriptors: {
          stable: true,
          path: "object/get-own-property-descriptors"
        },
        getOwnPropertyNames: {
          stable: true,
          path: "object/get-own-property-names"
        },
        getOwnPropertySymbols: {
          stable: true,
          path: "object/get-own-property-symbols"
        },
        getPrototypeOf: {
          stable: true,
          path: "object/get-prototype-of"
        },
        isExtensible: {
          stable: true,
          path: "object/is-extensible"
        },
        isFrozen: {
          stable: true,
          path: "object/is-frozen"
        },
        isSealed: {
          stable: true,
          path: "object/is-sealed"
        },
        is: {
          stable: true,
          path: "object/is"
        },
        keys: {
          stable: true,
          path: "object/keys"
        },
        preventExtensions: {
          stable: true,
          path: "object/prevent-extensions"
        },
        seal: {
          stable: true,
          path: "object/seal"
        },
        setPrototypeOf: {
          stable: true,
          path: "object/set-prototype-of"
        },
        values: {
          stable: true,
          path: "object/values"
        }
      },
      Reflect: {
        apply: {
          stable: true,
          path: "reflect/apply"
        },
        construct: {
          stable: true,
          path: "reflect/construct"
        },
        defineMetadata: {
          stable: false,
          path: "reflect/define-metadata"
        },
        defineProperty: {
          stable: true,
          path: "reflect/define-property"
        },
        deleteMetadata: {
          stable: false,
          path: "reflect/delete-metadata"
        },
        deleteProperty: {
          stable: true,
          path: "reflect/delete-property"
        },
        getMetadata: {
          stable: false,
          path: "reflect/get-metadata"
        },
        getMetadataKeys: {
          stable: false,
          path: "reflect/get-metadata-keys"
        },
        getOwnMetadata: {
          stable: false,
          path: "reflect/get-own-metadata"
        },
        getOwnMetadataKeys: {
          stable: false,
          path: "reflect/get-own-metadata-keys"
        },
        getOwnPropertyDescriptor: {
          stable: true,
          path: "reflect/get-own-property-descriptor"
        },
        getPrototypeOf: {
          stable: true,
          path: "reflect/get-prototype-of"
        },
        get: {
          stable: true,
          path: "reflect/get"
        },
        has: {
          stable: true,
          path: "reflect/has"
        },
        hasMetadata: {
          stable: false,
          path: "reflect/has-metadata"
        },
        hasOwnMetadata: {
          stable: false,
          path: "reflect/has-own-metadata"
        },
        isExtensible: {
          stable: true,
          path: "reflect/is-extensible"
        },
        metadata: {
          stable: false,
          path: "reflect/metadata"
        },
        ownKeys: {
          stable: true,
          path: "reflect/own-keys"
        },
        preventExtensions: {
          stable: true,
          path: "reflect/prevent-extensions"
        },
        set: {
          stable: true,
          path: "reflect/set"
        },
        setPrototypeOf: {
          stable: true,
          path: "reflect/set-prototype-of"
        }
      },
      String: {
        fromCodePoint: {
          stable: true,
          path: "string/from-code-point"
        },
        raw: {
          stable: true,
          path: "string/raw"
        }
      },
      Symbol: {
        asyncIterator: {
          stable: true,
          path: "symbol/async-iterator"
        },
        dispose: {
          stable: false,
          path: "symbol/dispose"
        },
        for: {
          stable: true,
          path: "symbol/for"
        },
        hasInstance: {
          stable: true,
          path: "symbol/has-instance"
        },
        isConcatSpreadable: {
          stable: true,
          path: "symbol/is-concat-spreadable"
        },
        iterator: {
          stable: true,
          path: "symbol/iterator"
        },
        keyFor: {
          stable: true,
          path: "symbol/key-for"
        },
        match: {
          stable: true,
          path: "symbol/match"
        },
        observable: {
          stable: false,
          path: "symbol/observable"
        },
        patternMatch: {
          stable: false,
          path: "symbol/pattern-match"
        },
        replace: {
          stable: true,
          path: "symbol/replace"
        },
        search: {
          stable: true,
          path: "symbol/search"
        },
        species: {
          stable: true,
          path: "symbol/species"
        },
        split: {
          stable: true,
          path: "symbol/split"
        },
        toPrimitive: {
          stable: true,
          path: "symbol/to-primitive"
        },
        toStringTag: {
          stable: true,
          path: "symbol/to-string-tag"
        },
        unscopables: {
          stable: true,
          path: "symbol/unscopables"
        }
      }
    },
    InstanceProperties: {
      at: {
        stable: false,
        path: "at"
      },
      bind: {
        stable: true,
        path: "bind"
      },
      codePointAt: {
        stable: true,
        path: "code-point-at"
      },
      codePoints: {
        stable: false,
        path: "code-points"
      },
      concat: {
        stable: true,
        path: "concat",
        types: ["array"]
      },
      copyWithin: {
        stable: true,
        path: "copy-within"
      },
      endsWith: {
        stable: true,
        path: "ends-with"
      },
      entries: {
        stable: true,
        path: "entries"
      },
      every: {
        stable: true,
        path: "every"
      },
      fill: {
        stable: true,
        path: "fill"
      },
      filter: {
        stable: true,
        path: "filter"
      },
      find: {
        stable: true,
        path: "find"
      },
      findIndex: {
        stable: true,
        path: "find-index"
      },
      flags: {
        stable: true,
        path: "flags"
      },
      flatMap: {
        stable: true,
        path: "flat-map"
      },
      flat: {
        stable: true,
        path: "flat"
      },
      forEach: {
        stable: true,
        path: "for-each"
      },
      includes: {
        stable: true,
        path: "includes"
      },
      indexOf: {
        stable: true,
        path: "index-of"
      },
      keys: {
        stable: true,
        path: "keys"
      },
      lastIndexOf: {
        stable: true,
        path: "last-index-of"
      },
      map: {
        stable: true,
        path: "map"
      },
      matchAll: {
        stable: false,
        path: "match-all"
      },
      padEnd: {
        stable: true,
        path: "pad-end"
      },
      padStart: {
        stable: true,
        path: "pad-start"
      },
      reduce: {
        stable: true,
        path: "reduce"
      },
      reduceRight: {
        stable: true,
        path: "reduce-right"
      },
      repeat: {
        stable: true,
        path: "repeat"
      },
      replaceAll: {
        stable: false,
        path: "replace-all"
      },
      reverse: {
        stable: true,
        path: "reverse"
      },
      slice: {
        stable: true,
        path: "slice"
      },
      some: {
        stable: true,
        path: "some"
      },
      sort: {
        stable: true,
        path: "sort"
      },
      splice: {
        stable: true,
        path: "splice"
      },
      startsWith: {
        stable: true,
        path: "starts-with"
      },
      trim: {
        stable: true,
        path: "trim"
      },
      trimEnd: {
        stable: true,
        path: "trim-end"
      },
      trimLeft: {
        stable: true,
        path: "trim-left"
      },
      trimRight: {
        stable: true,
        path: "trim-right"
      },
      trimStart: {
        stable: true,
        path: "trim-start"
      },
      values: {
        stable: true,
        path: "values"
      }
    }
  };
};

exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950161);
})()
//# sourceMappingURL=index.js.map