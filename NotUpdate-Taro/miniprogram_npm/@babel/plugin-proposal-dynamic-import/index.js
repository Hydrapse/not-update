module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950090, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxDynamicImport = _interopRequireDefault(require("@babel/plugin-syntax-dynamic-import"));

var _package = require("../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SUPPORTED_MODULES = ["commonjs", "amd", "systemjs"];
const MODULES_NOT_FOUND = `\
@babel/plugin-proposal-dynamic-import depends on a modules
transform plugin. Supported plugins are:
 - @babel/plugin-transform-modules-commonjs ^7.4.0
 - @babel/plugin-transform-modules-amd ^7.4.0
 - @babel/plugin-transform-modules-systemjs ^7.4.0

If you are using Webpack or Rollup and thus don't want
Babel to transpile your imports and exports, you can use
the @babel/plugin-syntax-dynamic-import plugin and let your
bundler handle dynamic imports.
`;

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "proposal-dynamic-import",
    inherits: _pluginSyntaxDynamicImport.default,

    pre() {
      this.file.set("@babel/plugin-proposal-dynamic-import", _package.version);
    },

    visitor: {
      Program() {
        const modules = this.file.get("@babel/plugin-transform-modules-*");

        if (!SUPPORTED_MODULES.includes(modules)) {
          throw new Error(MODULES_NOT_FOUND);
        }
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {"../package.json":1589772950091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950091, function(require, module, exports) {
module.exports = {
  "name": "@babel/plugin-proposal-dynamic-import",
  "version": "7.8.3",
  "description": "Transform import() expressions",
  "repository": "https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-dynamic-import",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "main": "lib/index.js",
  "keywords": [
    "babel-plugin"
  ],
  "dependencies": {
    "@babel/helper-plugin-utils": "^7.8.3",
    "@babel/plugin-syntax-dynamic-import": "^7.8.0"
  },
  "peerDependencies": {
    "@babel/core": "^7.0.0-0"
  },
  "devDependencies": {
    "@babel/core": "^7.8.3",
    "@babel/helper-plugin-test-runner": "^7.8.3"
  },
  "gitHead": "a7620bd266ae1345975767bbc7abf09034437017"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950090);
})()
//# sourceMappingURL=index.js.map