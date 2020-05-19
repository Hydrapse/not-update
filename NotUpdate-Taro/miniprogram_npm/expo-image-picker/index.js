module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951363, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var UnavailabilityError = __TEMP__['UnavailabilityError'];
var __TEMP__ = require('./ExponentImagePicker');var ExponentImagePicker = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ImagePicker.types');var MediaTypeOptions = __TEMP__['MediaTypeOptions'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.launchImageLibraryAsync = async function launchImageLibraryAsync(options = {}) {
    if (!ExponentImagePicker.launchImageLibraryAsync) {
        throw new UnavailabilityError('ImagePicker', 'launchImageLibraryAsync');
    }
    return await ExponentImagePicker.launchImageLibraryAsync(options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.launchCameraAsync = async function launchCameraAsync(options = {}) {
    if (!ExponentImagePicker.launchCameraAsync) {
        throw new UnavailabilityError('ImagePicker', 'launchCameraAsync');
    }
    return await ExponentImagePicker.launchCameraAsync(options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'MediaTypeOptions', { enumerable: true, configurable: true, get: function() { return MediaTypeOptions; } });
//# sourceMappingURL=ImagePicker.js.map
}, function(modId) {var map = {"./ExponentImagePicker":1589772951364,"./ImagePicker.types":1589772951365}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951364, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentImagePicker;
//# sourceMappingURL=ExponentImagePicker.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951365, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var MediaTypeOptions = exports.MediaTypeOptions = undefined;
(function (MediaTypeOptions) {
    MediaTypeOptions["All"] = "All";
    MediaTypeOptions["Videos"] = "Videos";
    MediaTypeOptions["Images"] = "Images";
})(MediaTypeOptions || (MediaTypeOptions = {}));
//# sourceMappingURL=ImagePicker.types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951363);
})()
//# sourceMappingURL=index.js.map