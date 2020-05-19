module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951374, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Accelerometer');Object.defineProperty(exports, 'Accelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Barometer');Object.defineProperty(exports, 'Barometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./DeviceMotion');Object.defineProperty(exports, 'DeviceMotion', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Gyroscope');Object.defineProperty(exports, 'Gyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Magnetometer');Object.defineProperty(exports, 'Magnetometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./MagnetometerUncalibrated');Object.defineProperty(exports, 'MagnetometerUncalibrated', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./Pedometer');var Pedometer = __REQUIRE_WILDCARD__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Pedometer', { enumerable: true, configurable: true, get: function() { return Pedometer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./DeviceSensor');Object.defineProperty(exports, 'DeviceSensor', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./Accelerometer":1589772951375,"./Barometer":1589772951379,"./DeviceMotion":1589772951381,"./Gyroscope":1589772951383,"./Magnetometer":1589772951385,"./MagnetometerUncalibrated":1589772951387,"./Pedometer":1589772951389,"./DeviceSensor":1589772951378}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951375, function(require, module, exports) {
var __TEMP__ = require('./ExponentAccelerometer');var ExponentAccelerometer = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ThreeAxisSensor');var ThreeAxisSensor = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new ThreeAxisSensor(ExponentAccelerometer, 'accelerometerDidUpdate');
//# sourceMappingURL=Accelerometer.js.map
}, function(modId) { var map = {"./ExponentAccelerometer":1589772951376,"./ThreeAxisSensor":1589772951377}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951376, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentAccelerometer;
//# sourceMappingURL=ExponentAccelerometer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951377, function(require, module, exports) {
var __TEMP__ = require('./DeviceSensor');var DeviceSensor = __REQUIRE_DEFAULT__(__TEMP__);
/**
 * A base class for subscribable sensors that take {x, y, z} measurements.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = class ThreeAxisSensor extends DeviceSensor {
};
//# sourceMappingURL=ThreeAxisSensor.js.map
}, function(modId) { var map = {"./DeviceSensor":1589772951378}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951378, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var EventEmitter = __TEMP__['EventEmitter'];var Platform = __TEMP__['Platform'];
/**
 * A base class for subscribable sensors. The events emitted by this class are measurements
 * specified by the parameter type `M`.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = class DeviceSensor {
    constructor(nativeSensorModule, nativeEventName) {
        this._nativeModule = nativeSensorModule;
        this._nativeEmitter = new EventEmitter(nativeSensorModule);
        this._nativeEventName = nativeEventName;
        this._listenerCount = 0;
    }
    addListener(listener) {
        let subscription = this._nativeEmitter.addListener(this._nativeEventName, listener);
        subscription.remove = () => this.removeSubscription(subscription);
        this._listenerCount++;
        return subscription;
    }
    hasListeners() {
        return this._listenerCount > 0;
    }
    getListenerCount() {
        return this._listenerCount;
    }
    removeAllListeners() {
        this._listenerCount = 0;
        this._nativeEmitter.removeAllListeners(this._nativeEventName);
    }
    removeSubscription(subscription) {
        this._listenerCount--;
        this._nativeEmitter.removeSubscription(subscription);
    }
    setUpdateInterval(intervalMs) {
        if (!this._nativeModule.setUpdateInterval) {
            console.warn(`expo-sensors: setUpdateInterval() is not supported on ${Platform.OS}`);
        }
        else {
            this._nativeModule.setUpdateInterval(intervalMs);
        }
    }
    async isAvailableAsync() {
        if (!this._nativeModule.isAvailableAsync) {
            return false;
        }
        else {
            return await this._nativeModule.isAvailableAsync();
        }
    }
};
//# sourceMappingURL=DeviceSensor.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951379, function(require, module, exports) {
var __TEMP__ = require('./DeviceSensor');var DeviceSensor = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ExpoBarometer');var ExpoBarometer = __REQUIRE_DEFAULT__(__TEMP__);
class BarometerSensor extends DeviceSensor {
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new BarometerSensor(ExpoBarometer, 'barometerDidUpdate');
//# sourceMappingURL=Barometer.js.map
}, function(modId) { var map = {"./DeviceSensor":1589772951378,"./ExpoBarometer":1589772951380}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951380, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExpoBarometer;
//# sourceMappingURL=ExpoBarometer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951381, function(require, module, exports) {
var __TEMP__ = require('./DeviceSensor');var DeviceSensor = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ExponentDeviceMotion');var ExponentDeviceMotion = __REQUIRE_DEFAULT__(__TEMP__);
class DeviceMotionSensor extends DeviceSensor {
    constructor() {
        super(...arguments);
        this.Gravity = ExponentDeviceMotion.Gravity;
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var Gravity = exports.Gravity = ExponentDeviceMotion.Gravity;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new DeviceMotionSensor(ExponentDeviceMotion, 'deviceMotionDidUpdate');
//# sourceMappingURL=DeviceMotion.js.map
}, function(modId) { var map = {"./DeviceSensor":1589772951378,"./ExponentDeviceMotion":1589772951382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951382, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentDeviceMotion;
//# sourceMappingURL=ExponentDeviceMotion.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951383, function(require, module, exports) {
var __TEMP__ = require('./ExponentGyroscope');var ExponentGyroscope = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ThreeAxisSensor');var ThreeAxisSensor = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new ThreeAxisSensor(ExponentGyroscope, 'gyroscopeDidUpdate');
//# sourceMappingURL=Gyroscope.js.map
}, function(modId) { var map = {"./ExponentGyroscope":1589772951384,"./ThreeAxisSensor":1589772951377}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951384, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentGyroscope;
//# sourceMappingURL=ExponentGyroscope.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951385, function(require, module, exports) {
var __TEMP__ = require('./ExponentMagnetometer');var ExponentMagnetometer = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ThreeAxisSensor');var ThreeAxisSensor = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new ThreeAxisSensor(ExponentMagnetometer, 'magnetometerDidUpdate');
//# sourceMappingURL=Magnetometer.js.map
}, function(modId) { var map = {"./ExponentMagnetometer":1589772951386,"./ThreeAxisSensor":1589772951377}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951386, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentMagnetometer;
//# sourceMappingURL=ExponentMagnetometer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951387, function(require, module, exports) {
var __TEMP__ = require('./ExponentMagnetometerUncalibrated');var ExponentMagnetometerUncalibrated = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ThreeAxisSensor');var ThreeAxisSensor = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new ThreeAxisSensor(ExponentMagnetometerUncalibrated, 'magnetometerUncalibratedDidUpdate');
//# sourceMappingURL=MagnetometerUncalibrated.js.map
}, function(modId) { var map = {"./ExponentMagnetometerUncalibrated":1589772951388,"./ThreeAxisSensor":1589772951377}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951388, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentMagnetometerUncalibrated;
//# sourceMappingURL=ExponentMagnetometerUncalibrated.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951389, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var EventEmitter = __TEMP__['EventEmitter'];
var __TEMP__ = require('invariant');var invariant = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@unimodules/core');var UnavailabilityError = __TEMP__['UnavailabilityError'];
var __TEMP__ = require('./ExponentPedometer');var ExponentPedometer = __REQUIRE_DEFAULT__(__TEMP__);
const PedometerEventEmitter = new EventEmitter(ExponentPedometer);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.watchStepCount = function watchStepCount(callback) {
    return PedometerEventEmitter.addListener('Exponent.pedometerUpdate', callback);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getStepCountAsync = async function getStepCountAsync(start, end) {
    if (!ExponentPedometer.getStepCountAsync) {
        throw new UnavailabilityError('ExponentPedometer', 'getStepCountAsync');
    }
    invariant(start <= end, 'Pedometer: The start date must precede the end date.');
    return await ExponentPedometer.getStepCountAsync(start.getTime(), end.getTime());
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isAvailableAsync = async function isAvailableAsync() {
    return await ExponentPedometer.isAvailableAsync();
};
//# sourceMappingURL=Pedometer.js.map
}, function(modId) { var map = {"./ExponentPedometer":1589772951390}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951390, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentPedometer;
//# sourceMappingURL=ExponentPedometer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951374);
})()
//# sourceMappingURL=index.js.map