module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951355, function(require, module, exports) {
var __TEMP__ = require('./Constants.types');var AppOwnership = __TEMP__['AppOwnership'];var UserInterfaceIdiom = __TEMP__['UserInterfaceIdiom'];
var __TEMP__ = require('./ExponentConstants');var ExponentConstants = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'AppOwnership', { enumerable: true, configurable: true, get: function() { return AppOwnership; } });Object.defineProperty(exports, 'UserInterfaceIdiom', { enumerable: true, configurable: true, get: function() { return UserInterfaceIdiom; } });
if (!ExponentConstants) {
    console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");
}
// On Android we pass the manifest in JSON form so this step is necessary
let manifest = null;
if (ExponentConstants && ExponentConstants.manifest) {
    manifest = ExponentConstants.manifest;
    if (typeof manifest === 'string') {
        manifest = JSON.parse(manifest);
    }
}
const { name, ...constants } = (ExponentConstants || {});
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    ...constants,
    manifest,
    // Legacy aliases
    deviceId: constants.installationId,
    linkingUrl: constants.linkingUri,
};
//# sourceMappingURL=Constants.js.map
}, function(modId) {var map = {"./Constants.types":1589772951356,"./ExponentConstants":1589772951357}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951356, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var AppOwnership = exports.AppOwnership = undefined;
(function (AppOwnership) {
    AppOwnership["Standalone"] = "standalone";
    AppOwnership["Expo"] = "expo";
    AppOwnership["Guest"] = "guest";
})(AppOwnership || (AppOwnership = {}));
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var UserInterfaceIdiom = exports.UserInterfaceIdiom = undefined;
(function (UserInterfaceIdiom) {
    UserInterfaceIdiom["Handset"] = "handset";
    UserInterfaceIdiom["Tablet"] = "tablet";
    UserInterfaceIdiom["Unsupported"] = "unsupported";
})(UserInterfaceIdiom || (UserInterfaceIdiom = {}));
//# sourceMappingURL=Constants.types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951357, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentConstants;
//# sourceMappingURL=ExponentConstants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951355);
})()
//# sourceMappingURL=index.js.map