module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951370, function(require, module, exports) {
var __TEMP__ = require('./CoalescedPermissions');var coalesceExpirations = __TEMP__['coalesceExpirations'];var coalesceStatuses = __TEMP__['coalesceStatuses'];
var __TEMP__ = require('./ExpoPermissions');var Permissions = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./Permissions.types');var PermissionStatus = __TEMP__['PermissionStatus'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'PermissionStatus', { enumerable: true, configurable: true, get: function() { return PermissionStatus; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var CAMERA = exports.CAMERA = 'camera';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var CAMERA_ROLL = exports.CAMERA_ROLL = 'cameraRoll';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var AUDIO_RECORDING = exports.AUDIO_RECORDING = 'audioRecording';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LOCATION = exports.LOCATION = 'location';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var USER_FACING_NOTIFICATIONS = exports.USER_FACING_NOTIFICATIONS = 'userFacingNotifications';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var NOTIFICATIONS = exports.NOTIFICATIONS = 'notifications';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var CONTACTS = exports.CONTACTS = 'contacts';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var CALENDAR = exports.CALENDAR = 'calendar';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REMINDERS = exports.REMINDERS = 'reminders';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var SYSTEM_BRIGHTNESS = exports.SYSTEM_BRIGHTNESS = 'systemBrightness';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getAsync = async function getAsync(...types) {
    return await _handlePermissionsRequestAsync(types, Permissions.getAsync);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.askAsync = async function askAsync(...types) {
    return await _handlePermissionsRequestAsync(types, Permissions.askAsync);
};
async function _handlePermissionsRequestAsync(types, handlePermissions) {
    if (!types.length) {
        throw new Error('At least one permission type must be specified');
    }
    const permissions = await handlePermissions(types);
    return {
        status: coalesceStatuses(permissions),
        expires: coalesceExpirations(permissions),
        permissions,
    };
}
//# sourceMappingURL=Permissions.js.map
}, function(modId) {var map = {"./CoalescedPermissions":1589772951371,"./ExpoPermissions":1589772951373,"./Permissions.types":1589772951372}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951371, function(require, module, exports) {
var __TEMP__ = require('./Permissions.types');var PermissionStatus = __TEMP__['PermissionStatus'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.coalesceStatuses = function coalesceStatuses(permissions) {
    const statuses = Object.keys(permissions).map(type => permissions[type].status);
    statuses.sort((status1, status2) => _getStatusWeight(status1) - _getStatusWeight(status2));
    // We choose the "heaviest" status with the most implications
    return statuses[statuses.length - 1];
};
function _getStatusWeight(status) {
    // In terms of weight, we treat UNDETERMINED > DENIED > GRANTED since UNDETERMINED requires the
    // most amount of further handling (prompting for permission and then checking that permission)
    // and GRANTED requires the least
    switch (status) {
        case PermissionStatus.GRANTED:
            return 0;
        case PermissionStatus.DENIED:
            return 1;
        case PermissionStatus.UNDETERMINED:
            return 2;
        default:
            return 100;
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.coalesceExpirations = function coalesceExpirations(permissions) {
    const maxExpiration = 9007199254740991; // Number.MAX_SAFE_INTEGER
    const expirations = Object.keys(permissions).map(type => permissions[type].expires);
    expirations.sort((e1, e2) => (e1 == null || e1 === 'never' ? maxExpiration : e1) -
        (e2 == null || e2 === 'never' ? maxExpiration : e2));
    // We choose the earliest expiration
    return expirations[0];
};
//# sourceMappingURL=CoalescedPermissions.js.map
}, function(modId) { var map = {"./Permissions.types":1589772951372}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951372, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var PermissionStatus = exports.PermissionStatus = undefined;
(function (PermissionStatus) {
    PermissionStatus["UNDETERMINED"] = "undetermined";
    PermissionStatus["GRANTED"] = "granted";
    PermissionStatus["DENIED"] = "denied";
})(PermissionStatus || (PermissionStatus = {}));
//# sourceMappingURL=Permissions.types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951373, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExpoPermissions;
//# sourceMappingURL=ExpoPermissions.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951370);
})()
//# sourceMappingURL=index.js.map