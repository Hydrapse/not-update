module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950194, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _helperPluginUtils = require("@babel/helper-plugin-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @babel/preset-modules produces clean, minimal output for ES Modules-supporting browsers.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode skips seldom-needed transforms that increase output size.
 */
var _default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const loose = opts.loose === true;
  return {
    plugins: [_path.default.resolve(__dirname, "./plugins/transform-edge-default-parameters"), _path.default.resolve(__dirname, "./plugins/transform-tagged-template-caching"), _path.default.resolve(__dirname, "./plugins/transform-jsx-spread"), _path.default.resolve(__dirname, "./plugins/transform-safari-for-shadowing"), _path.default.resolve(__dirname, "./plugins/transform-safari-block-shadowing"), _path.default.resolve(__dirname, "./plugins/transform-async-arrows-in-class"), !loose && _path.default.resolve(__dirname, "./plugins/transform-edge-function-name"), // Proposals
    require.resolve("@babel/plugin-proposal-unicode-property-regex"), require.resolve("@babel/plugin-transform-dotall-regex")].filter(Boolean)
  };
});

exports.default = _default;
module.exports = exports.default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950194);
})()
//# sourceMappingURL=index.js.map