module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951354, function(require, module, exports) {
var __TEMP__ = require('react-native');var Platform = __TEMP__['Platform'];
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var BrightnessMode = exports.BrightnessMode = undefined;
(function (BrightnessMode) {
    BrightnessMode[BrightnessMode["UNKNOWN"] = 0] = "UNKNOWN";
    BrightnessMode[BrightnessMode["AUTOMATIC"] = 1] = "AUTOMATIC";
    BrightnessMode[BrightnessMode["MANUAL"] = 2] = "MANUAL";
})(BrightnessMode || (BrightnessMode = {}));
;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getBrightnessAsync = async function getBrightnessAsync() {
    return await NativeModulesProxy.ExpoBrightness.getBrightnessAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setBrightnessAsync = async function setBrightnessAsync(brightnessValue) {
    let clampedBrightnessValue = Math.max(0, Math.min(brightnessValue, 1));
    if (isNaN(clampedBrightnessValue)) {
        throw new TypeError(`setBrightnessAsync cannot be called with ${brightnessValue}`);
    }
    return await NativeModulesProxy.ExpoBrightness.setBrightnessAsync(clampedBrightnessValue);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSystemBrightnessAsync = async function getSystemBrightnessAsync() {
    if (Platform.OS !== 'android') {
        return await getBrightnessAsync();
    }
    return await NativeModulesProxy.ExpoBrightness.getSystemBrightnessAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setSystemBrightnessAsync = async function setSystemBrightnessAsync(brightnessValue) {
    let clampedBrightnessValue = Math.max(0, Math.min(brightnessValue, 1));
    if (isNaN(clampedBrightnessValue)) {
        throw new TypeError(`setSystemBrightnessAsync cannot be called with ${brightnessValue}`);
    }
    if (Platform.OS !== 'android') {
        return await setBrightnessAsync(clampedBrightnessValue);
    }
    return await NativeModulesProxy.ExpoBrightness.setSystemBrightnessAsync(clampedBrightnessValue);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.useSystemBrightnessAsync = async function useSystemBrightnessAsync() {
    if (Platform.OS !== 'android') {
        return;
    }
    return await NativeModulesProxy.ExpoBrightness.useSystemBrightnessAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isUsingSystemBrightnessAsync = async function isUsingSystemBrightnessAsync() {
    if (Platform.OS !== 'android') {
        return false;
    }
    return await NativeModulesProxy.ExpoBrightness.isUsingSystemBrightnessAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSystemBrightnessModeAsync = async function getSystemBrightnessModeAsync() {
    if (Platform.OS !== 'android') {
        return BrightnessMode.UNKNOWN;
    }
    return await NativeModulesProxy.ExpoBrightness.getSystemBrightnessModeAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setSystemBrightnessModeAsync = async function setSystemBrightnessModeAsync(brightnessMode) {
    if (Platform.OS !== 'android' || brightnessMode === BrightnessMode.UNKNOWN) {
        return;
    }
    return await NativeModulesProxy.ExpoBrightness.setSystemBrightnessModeAsync(brightnessMode);
};
//# sourceMappingURL=Brightness.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951354);
})()
//# sourceMappingURL=index.js.map