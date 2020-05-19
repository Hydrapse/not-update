module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951366, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);var useEffect = __TEMP__['useEffect'];
var __TEMP__ = require('./ExpoKeepAwake');var ExpoKeepAwake = __REQUIRE_DEFAULT__(__TEMP__);
// NOTE(brentvatne): in tests this value won't be reset because we
// can render a component and never unmount it.
let __keepAwakeMountedCount = 0;
const ExpoKeepAwakeTag = 'ExpoKeepAwakeDefaultTag';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = class KeepAwake extends React.PureComponent {
    componentDidMount() {
        console.warn(`The KeepAwake component has been deprecated in favor of the useKeepAwake hook and will be removed in SDK 35`);
        __keepAwakeMountedCount++;
        if (__keepAwakeMountedCount === 1) {
            activateKeepAwake();
        }
    }
    componentWillUnmount() {
        __keepAwakeMountedCount--;
        if (__keepAwakeMountedCount === 0) {
            deactivateKeepAwake();
        }
    }
    render() {
        return null;
    }
};
KeepAwake.activate = (tag) => {
    console.warn(`The "KeepAwake.activate" static method has been deprecated in favor of the "activateKeepAwake" function exported from expo-keep-awake and will be removed in SDK 35`);
    activateKeepAwake(tag);
};
KeepAwake.deactivate = (tag) => {
    console.warn(`The "KeepAwake.deactivate" static method has been deprecated in favor of the "deactivateKeepAwake" function exported from expo-keep-awake and will be removed in SDK 35`);
    deactivateKeepAwake(tag);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.useKeepAwake = function useKeepAwake(tag = ExpoKeepAwakeTag) {
    useEffect(() => {
        activateKeepAwake(tag);
        return () => deactivateKeepAwake(tag);
    }, [tag]);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.activateKeepAwake = function activateKeepAwake(tag = ExpoKeepAwakeTag) {
    ExpoKeepAwake.activate(tag);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.deactivateKeepAwake = function deactivateKeepAwake(tag = ExpoKeepAwakeTag) {
    ExpoKeepAwake.deactivate(tag);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.activate = function activate(tag) {
    console.warn(`"activate" from expo-keep-awake has been deprecated in favor of "activateKeepAwake" and will be removed in SDK 35`);
    activateKeepAwake(tag);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.deactivate = function deactivate(tag) {
    console.warn(`"deactivate" from expo-keep-awake has been deprecated in favor of "deactivateKeepAwake" and will be removed in SDK 35`);
    deactivateKeepAwake(tag);
};
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./ExpoKeepAwake":1589772951367}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951367, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExpoKeepAwake;
//# sourceMappingURL=ExpoKeepAwake.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951366);
})()
//# sourceMappingURL=index.js.map