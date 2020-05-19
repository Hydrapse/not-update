module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950383, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./AdapterProxy');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./deprecate');Object.defineProperty(exports, 'deprecate', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./AdapterProxy":1589772950384,"./deprecate":1589772950385}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950384, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@unimodules/react-native-adapter');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
//# sourceMappingURL=AdapterProxy.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950385, function(require, module, exports) {
var __TEMP__ = require('compare-versions');var compareVersions = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@unimodules/react-native-adapter');var CodedError = __TEMP__['CodedError'];
const postedWarnings = {};
/**
 * Used for deprecating values and throwing an error if a given version of Expo has passed.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = function deprecate(library, deprecatedAPI, options = {}) {
    const { currentVersion, versionToRemove, replacement } = options;
    const code = codeFromLibrary(library);
    const key = `${code}:${deprecatedAPI}:${replacement}`;
    if (!postedWarnings[key]) {
        postedWarnings[key] = true;
    }
    if (!currentVersion ||
        !versionToRemove ||
        compareVersions(currentVersion, versionToRemove) >= 0) {
        let message = `\`${deprecatedAPI}\` has been removed`;
        if (versionToRemove) {
            message = `${message} as of version "${versionToRemove}"`;
        }
        if (replacement && replacement.length) {
            message = `${message} please migrate to: \`${replacement}\``;
        }
        throw new CodedError(`ERR_DEPRECATED_API`, prependLibrary(library, message));
    }
    let message = `\`${deprecatedAPI}\` has been deprecated`;
    if (replacement && replacement.length) {
        message = `${message} in favor of \`${replacement}\``;
    }
    if (versionToRemove && versionToRemove.length) {
        message = `${message} and will be removed in version "${versionToRemove}"`;
    }
    console.warn(prependLibrary(library, message));
};
function prependLibrary(library, message) {
    return `${library}: ${message}`;
}
/**
 * Transform format:
 * Expo.AR -> EXPO_AR
 * expo-ar -> EXPO_AR
 */
function codeFromLibrary(library) {
    const code = library.replace(/[-\.]/g, '_').toUpperCase();
    return code;
}
//# sourceMappingURL=deprecate.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950383);
})()
//# sourceMappingURL=index.js.map