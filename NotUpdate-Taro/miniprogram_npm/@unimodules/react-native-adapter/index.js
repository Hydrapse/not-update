module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950386, function(require, module, exports) {
var __TEMP__ = require('react-native');var ReactNativePlatform = __TEMP__['Platform'];
var __TEMP__ = require('./EventEmitter');var EventEmitter = __TEMP__['EventEmitter'];
var __TEMP__ = require('./NativeModulesProxy');var NativeModulesProxy = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./NativeViewManagerAdapter');var requireNativeViewManager = __TEMP__['requireNativeViewManager'];
var __TEMP__ = require('./SyntheticPlatformEmitter');var SyntheticPlatformEmitter = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./errors/CodedError');var CodedError = __TEMP__['CodedError'];
var __TEMP__ = require('./errors/UnavailabilityError');var UnavailabilityError = __TEMP__['UnavailabilityError'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var Platform = exports.Platform = {
    OS: ReactNativePlatform.OS,
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'EventEmitter', { enumerable: true, configurable: true, get: function() { return EventEmitter; } });Object.defineProperty(exports, 'NativeModulesProxy', { enumerable: true, configurable: true, get: function() { return NativeModulesProxy; } });Object.defineProperty(exports, 'SyntheticPlatformEmitter', { enumerable: true, configurable: true, get: function() { return SyntheticPlatformEmitter; } });Object.defineProperty(exports, 'requireNativeViewManager', { enumerable: true, configurable: true, get: function() { return requireNativeViewManager; } });Object.defineProperty(exports, 'CodedError', { enumerable: true, configurable: true, get: function() { return CodedError; } });Object.defineProperty(exports, 'UnavailabilityError', { enumerable: true, configurable: true, get: function() { return UnavailabilityError; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./EventEmitter":1589772950387,"./NativeModulesProxy":1589772950388,"./SyntheticPlatformEmitter":1589772950390,"./errors/CodedError":1589772950391,"./errors/UnavailabilityError":1589772950392}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950387, function(require, module, exports) {
var __TEMP__ = require('invariant');var invariant = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var NativeEventEmitter = __TEMP__['NativeEventEmitter'];var Platform = __TEMP__['Platform'];
const nativeEmitterSubscriptionKey = '@@nativeEmitterSubscription@@';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.EventEmitter = class EventEmitter {
    constructor(nativeModule) {
        this._listenerCount = 0;
        this._nativeModule = nativeModule;
        this._eventEmitter = new NativeEventEmitter(nativeModule);
    }
    addListener(eventName, listener) {
        if (!this._listenerCount && Platform.OS !== 'ios' && this._nativeModule.startObserving) {
            this._nativeModule.startObserving();
        }
        this._listenerCount++;
        const nativeEmitterSubscription = this._eventEmitter.addListener(eventName, listener);
        const subscription = {
            [nativeEmitterSubscriptionKey]: nativeEmitterSubscription,
            remove: () => {
                this.removeSubscription(subscription);
            },
        };
        return subscription;
    }
    removeAllListeners(eventName) {
        const removedListenerCount = this._eventEmitter.listeners(eventName).length;
        this._eventEmitter.removeAllListeners(eventName);
        this._listenerCount -= removedListenerCount;
        invariant(this._listenerCount >= 0, `EventEmitter must have a non-negative number of listeners`);
        if (!this._listenerCount && Platform.OS !== 'ios' && this._nativeModule.stopObserving) {
            this._nativeModule.stopObserving();
        }
    }
    removeSubscription(subscription) {
        const nativeEmitterSubscription = subscription[nativeEmitterSubscriptionKey];
        if (!nativeEmitterSubscription) {
            return;
        }
        this._eventEmitter.removeSubscription(nativeEmitterSubscription);
        this._listenerCount--;
        // Ensure that the emitter's internal state remains correct even if `removeSubscription` is
        // called again with the same subscription
        delete subscription[nativeEmitterSubscriptionKey];
        // Release closed-over references to the emitter
        subscription.remove = () => { };
        if (!this._listenerCount && Platform.OS !== 'ios' && this._nativeModule.stopObserving) {
            this._nativeModule.stopObserving();
        }
    }
    emit(eventName, ...params) {
        this._eventEmitter.emit(eventName, ...params);
    }
};
//# sourceMappingURL=EventEmitter.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950388, function(require, module, exports) {
var __TEMP__ = require('react-native');var NativeModules = __TEMP__['NativeModules'];
const NativeProxy = NativeModules.NativeUnimoduleProxy;
const modulesConstantsKey = 'modulesConstants';
const exportedMethodsKey = 'exportedMethods';
const NativeModulesProxy = {};
if (NativeProxy) {
    Object.keys(NativeProxy[exportedMethodsKey]).forEach(moduleName => {
        NativeModulesProxy[moduleName] = NativeProxy[modulesConstantsKey][moduleName] || {};
        NativeProxy[exportedMethodsKey][moduleName].forEach(methodInfo => {
            NativeModulesProxy[moduleName][methodInfo.name] = async (...args) => {
                const { key, argumentsCount } = methodInfo;
                if (argumentsCount !== args.length) {
                    throw new Error(`Native method ${moduleName}.${methodInfo.name} expects ${argumentsCount} ${argumentsCount === 1 ? 'argument' : 'arguments'} but received ${args.length}`);
                }
                return await NativeProxy.callMethod(moduleName, key, args);
            };
        });
        // These are called by EventEmitter (which is a wrapper for NativeEventEmitter)
        // only on iOS and they use iOS-specific native module, EXReactNativeEventEmitter.
        //
        // On Android only {start,stop}Observing are called on the native module
        // and these should be exported as Expo methods.
        NativeModulesProxy[moduleName].addListener = (...args) => NativeModules.UMReactNativeEventEmitter.addProxiedListener(moduleName, ...args);
        NativeModulesProxy[moduleName].removeListeners = (...args) => NativeModules.UMReactNativeEventEmitter.removeProxiedListeners(moduleName, ...args);
    });
}
else {
    console.warn(`The "UMNativeModulesProxy" native module is not exported through NativeModules; verify that @unimodules/react-native-adapter's native code is linked properly`);
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy;
//# sourceMappingURL=NativeModulesProxy.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950390, function(require, module, exports) {
var __TEMP__ = require('react-native/Libraries/vendor/emitter/EventEmitter');var EventEmitter = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native/Libraries/EventEmitter/RCTDeviceEventEmitter');var RCTDeviceEventEmitter = __REQUIRE_DEFAULT__(__TEMP__);
/**
 * This emitter is used for sending synthetic native events to listeners
 * registered in the API layer with `NativeEventEmitter`.
 */
class SyntheticPlatformEmitter {
    constructor() {
        this._emitter = new EventEmitter(RCTDeviceEventEmitter.sharedSubscriber);
    }
    emit(eventName, props) {
        this._emitter.emit(eventName, props);
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new SyntheticPlatformEmitter();
//# sourceMappingURL=SyntheticPlatformEmitter.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950391, function(require, module, exports) {
/**
 * A general error class that should be used for all errors in Expo modules.
 * Guarantees a `code` field that can be used to differentiate between different
 * types of errors without further subclassing Error.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.CodedError = class CodedError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
};
//# sourceMappingURL=CodedError.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950392, function(require, module, exports) {
var __TEMP__ = require('../index');var Platform = __TEMP__['Platform'];
var __TEMP__ = require('./CodedError');var CodedError = __TEMP__['CodedError'];
/**
 * A class for errors to be thrown when a property is accessed which is
 * unavailable, unsupported, or not currently implemented on the running
 * platform.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.UnavailabilityError = class UnavailabilityError extends CodedError {
    constructor(moduleName, propertyName) {
        super('ERR_UNAVAILABLE', `The method or property ${moduleName}.${propertyName} is not available on ${Platform.OS}, are you sure you've linked all the native dependencies properly?`);
    }
};
//# sourceMappingURL=UnavailabilityError.js.map
}, function(modId) { var map = {"../index":1589772950386,"./CodedError":1589772950391}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950386);
})()
//# sourceMappingURL=index.js.map