module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950050, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegExpFeaturePlugin = createRegExpFeaturePlugin;

var _regexpuCore = _interopRequireDefault(require("regexpu-core"));

var _features = require("./features");

var _util = require("./util");

var _package = _interopRequireDefault(require("../package.json"));

var _core = require("@babel/core");

var _helperRegex = require("@babel/helper-regex");

var _helperAnnotateAsPure = _interopRequireDefault(require("@babel/helper-annotate-as-pure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const version = _package.default.version.split(".").reduce((v, x) => v * 1e5 + +x, 0);

const versionKey = "@babel/plugin-regexp-features/version";

function createRegExpFeaturePlugin({
  name,
  feature,
  options = {}
}) {
  return {
    name,

    pre() {
      var _file$get;

      const {
        file
      } = this;
      const features = (_file$get = file.get(_features.featuresKey)) != null ? _file$get : 0;
      let newFeatures = (0, _features.enableFeature)(features, _features.FEATURES[feature]);
      const {
        useUnicodeFlag,
        runtime = true
      } = options;

      if (useUnicodeFlag === false) {
        newFeatures = (0, _features.enableFeature)(newFeatures, _features.FEATURES.unicodeFlag);
      }

      if (newFeatures !== features) {
        file.set(_features.featuresKey, newFeatures);
      }

      if (!runtime) {
        file.set(_features.runtimeKey, false);
      }

      if (!file.has(versionKey) || file.get(versionKey) < version) {
        file.set(versionKey, version);
      }
    },

    visitor: {
      RegExpLiteral(path) {
        var _file$get2;

        const {
          node
        } = path;
        const {
          file
        } = this;
        const features = file.get(_features.featuresKey);
        const runtime = (_file$get2 = file.get(_features.runtimeKey)) != null ? _file$get2 : true;
        const regexpuOptions = (0, _util.generateRegexpuOptions)(node, features);

        if (regexpuOptions === null) {
          return;
        }

        const namedCaptureGroups = {};

        if (regexpuOptions.namedGroup) {
          regexpuOptions.onNamedGroup = (name, index) => {
            namedCaptureGroups[name] = index;
          };
        }

        node.pattern = (0, _regexpuCore.default)(node.pattern, node.flags, regexpuOptions);

        if (regexpuOptions.namedGroup && Object.keys(namedCaptureGroups).length > 0 && runtime && !isRegExpTest(path)) {
          const call = _core.types.callExpression(this.addHelper("wrapRegExp"), [node, _core.types.valueToNode(namedCaptureGroups)]);

          (0, _helperAnnotateAsPure.default)(call);
          path.replaceWith(call);
        }

        if ((0, _features.hasFeature)(features, _features.FEATURES.unicodeFlag)) {
          (0, _helperRegex.pullFlag)(node, "u");
        }

        if ((0, _features.hasFeature)(features, _features.FEATURES.dotAllFlag)) {
          (0, _helperRegex.pullFlag)(node, "s");
        }
      }

    }
  };
}

function isRegExpTest(path) {
  return path.parentPath.isMemberExpression({
    object: path.node,
    computed: false
  }) && path.parentPath.get("property").isIdentifier({
    name: "test"
  });
}
}, function(modId) {var map = {"./features":1589772950051,"./util":1589772950052,"../package.json":1589772950053}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950051, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableFeature = enableFeature;
exports.hasFeature = hasFeature;
exports.runtimeKey = exports.featuresKey = exports.FEATURES = void 0;
const FEATURES = Object.freeze({
  unicodeFlag: 1 << 0,
  dotAllFlag: 1 << 1,
  unicodePropertyEscape: 1 << 2,
  namedCaptureGroups: 1 << 3
});
exports.FEATURES = FEATURES;
const featuresKey = "@babel/plugin-regexp-features/featuresKey";
exports.featuresKey = featuresKey;
const runtimeKey = "@babel/plugin-regexp-features/runtimeKey";
exports.runtimeKey = runtimeKey;

function enableFeature(features, feature) {
  return features | feature;
}

function hasFeature(features, feature) {
  return !!(features & feature);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950052, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRegexpuOptions = generateRegexpuOptions;

var _features = require("./features");

function generateRegexpuOptions(node, features) {
  let useUnicodeFlag = false,
      dotAllFlag = false,
      unicodePropertyEscape = false,
      namedGroup = false;
  const {
    flags,
    pattern
  } = node;
  const flagsIncludesU = flags.includes("u");

  if (flagsIncludesU) {
    if (!(0, _features.hasFeature)(features, _features.FEATURES.unicodeFlag)) {
      useUnicodeFlag = true;
    }

    if ((0, _features.hasFeature)(features, _features.FEATURES.unicodePropertyEscape) && /\\[pP]{/.test(pattern)) {
      unicodePropertyEscape = true;
    }
  }

  if ((0, _features.hasFeature)(features, _features.FEATURES.dotAllFlag) && flags.indexOf("s") >= 0) {
    dotAllFlag = true;
  }

  if ((0, _features.hasFeature)(features, _features.FEATURES.namedCaptureGroups) && /\(\?<(?![=!])/.test(pattern)) {
    namedGroup = true;
  }

  if (!namedGroup && !unicodePropertyEscape && !dotAllFlag && (!flagsIncludesU || useUnicodeFlag)) {
    return null;
  }

  if (flagsIncludesU && flags.indexOf("s") >= 0) {
    dotAllFlag = true;
  }

  return {
    useUnicodeFlag,
    onNamedGroup: () => {},
    namedGroup,
    unicodePropertyEscape,
    dotAllFlag,
    lookbehind: true
  };
}
}, function(modId) { var map = {"./features":1589772950051}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950053, function(require, module, exports) {
module.exports = {
  "name": "@babel/helper-create-regexp-features-plugin",
  "version": "7.8.8",
  "author": "The Babel Team (https://babeljs.io/team)",
  "license": "MIT",
  "description": "Compile ESNext Regular Expressions to ES5",
  "repository": {
    "type": "git",
    "url": "https://github.com/babel/babel",
    "directory": "packages/babel-helper-create-regexp-features-plugin"
  },
  "main": "lib/index.js",
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "babel",
    "babel-plugin"
  ],
  "dependencies": {
    "@babel/helper-annotate-as-pure": "^7.8.3",
    "@babel/helper-regex": "^7.8.3",
    "regexpu-core": "^4.7.0"
  },
  "peerDependencies": {
    "@babel/core": "^7.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "@babel/helper-plugin-test-runner": "^7.8.3"
  },
  "gitHead": "c831a2450dbf252c75750a455c63e1016c2f2244"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950050);
})()
//# sourceMappingURL=index.js.map