module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950326, function(require, module, exports) {
module.exports = require('./dist/index.js').default
module.exports.default = module.exports

}, function(modId) {var map = {"./dist/index.js":1589772950327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950327, function(require, module, exports) {
/* eslint-disable camelcase */
var __TEMP__ = require('@tarojs/taro');var getEnv = __TEMP__['getEnv'];var ENV_TYPE = __TEMP__['ENV_TYPE'];var Events = __TEMP__['Events'];var eventCenter = __TEMP__['eventCenter'];var render = __TEMP__['render'];var internal_safe_get = __TEMP__['internal_safe_get'];var internal_safe_set = __TEMP__['internal_safe_set'];
var __TEMP__ = require('./native-api');var initNativeApi = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./component');var Component = __TEMP__['Component'];var PureComponent = __TEMP__['PureComponent'];
var __TEMP__ = require('react');var Children = __TEMP__['Children'];var createElement = __TEMP__['createElement'];var cloneElement = __TEMP__['cloneElement'];var isValidElement = __TEMP__['isValidElement'];var createFactory = __TEMP__['createFactory'];var version = __TEMP__['version'];var createRef = __TEMP__['createRef'];var forwardRef = __TEMP__['forwardRef'];var memo = __TEMP__['memo'];var createContext = __TEMP__['createContext'];var useState = __TEMP__['useState'];var useEffect = __TEMP__['useEffect'];var useReducer = __TEMP__['useReducer'];var useCallback = __TEMP__['useCallback'];var useMemo = __TEMP__['useMemo'];var useRef = __TEMP__['useRef'];var useLayoutEffect = __TEMP__['useLayoutEffect'];var useContext = __TEMP__['useContext'];
const Taro = {
    getEnv,
    ENV_TYPE,
    Events,
    eventCenter,
    render,
    initNativeApi,
    internal_safe_get,
    internal_safe_set,
    Component,
    PureComponent,
    //react
    Children,
    createElement,
    cloneElement,
    isValidElement,
    createFactory,
    version,
    createRef,
    forwardRef,
    memo,
    createContext,
    useState,
    useEffect,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useLayoutEffect,
    useContext
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getEnv', { enumerable: true, configurable: true, get: function() { return getEnv; } });Object.defineProperty(exports, 'ENV_TYPE', { enumerable: true, configurable: true, get: function() { return ENV_TYPE; } });Object.defineProperty(exports, 'Events', { enumerable: true, configurable: true, get: function() { return Events; } });Object.defineProperty(exports, 'eventCenter', { enumerable: true, configurable: true, get: function() { return eventCenter; } });Object.defineProperty(exports, 'render', { enumerable: true, configurable: true, get: function() { return render; } });Object.defineProperty(exports, 'initNativeApi', { enumerable: true, configurable: true, get: function() { return initNativeApi; } });Object.defineProperty(exports, 'internal_safe_get', { enumerable: true, configurable: true, get: function() { return internal_safe_get; } });Object.defineProperty(exports, 'internal_safe_set', { enumerable: true, configurable: true, get: function() { return internal_safe_set; } });Object.defineProperty(exports, 'Component', { enumerable: true, configurable: true, get: function() { return Component; } });Object.defineProperty(exports, 'PureComponent', { enumerable: true, configurable: true, get: function() { return PureComponent; } });Object.defineProperty(exports, 'Children', { enumerable: true, configurable: true, get: function() { return Children; } });Object.defineProperty(exports, 'createElement', { enumerable: true, configurable: true, get: function() { return createElement; } });Object.defineProperty(exports, 'cloneElement', { enumerable: true, configurable: true, get: function() { return cloneElement; } });Object.defineProperty(exports, 'isValidElement', { enumerable: true, configurable: true, get: function() { return isValidElement; } });Object.defineProperty(exports, 'createFactory', { enumerable: true, configurable: true, get: function() { return createFactory; } });Object.defineProperty(exports, 'version', { enumerable: true, configurable: true, get: function() { return version; } });Object.defineProperty(exports, 'createRef', { enumerable: true, configurable: true, get: function() { return createRef; } });Object.defineProperty(exports, 'forwardRef', { enumerable: true, configurable: true, get: function() { return forwardRef; } });Object.defineProperty(exports, 'memo', { enumerable: true, configurable: true, get: function() { return memo; } });Object.defineProperty(exports, 'createContext', { enumerable: true, configurable: true, get: function() { return createContext; } });Object.defineProperty(exports, 'useState', { enumerable: true, configurable: true, get: function() { return useState; } });Object.defineProperty(exports, 'useEffect', { enumerable: true, configurable: true, get: function() { return useEffect; } });Object.defineProperty(exports, 'useReducer', { enumerable: true, configurable: true, get: function() { return useReducer; } });Object.defineProperty(exports, 'useCallback', { enumerable: true, configurable: true, get: function() { return useCallback; } });Object.defineProperty(exports, 'useMemo', { enumerable: true, configurable: true, get: function() { return useMemo; } });Object.defineProperty(exports, 'useRef', { enumerable: true, configurable: true, get: function() { return useRef; } });Object.defineProperty(exports, 'useLayoutEffect', { enumerable: true, configurable: true, get: function() { return useLayoutEffect; } });Object.defineProperty(exports, 'useContext', { enumerable: true, configurable: true, get: function() { return useContext; } });


initNativeApi(Taro);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Taro;

}, function(modId) { var map = {"./native-api":1589772950328,"./component":1589772950372}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950328, function(require, module, exports) {
var __TEMP__ = require('react-native');var Dimensions = __TEMP__['Dimensions'];
var __TEMP__ = require('@tarojs/taro');var onAndSyncApis = __TEMP__['onAndSyncApis'];var noPromiseApis = __TEMP__['noPromiseApis'];var otherApis = __TEMP__['otherApis'];var initPxTransform = __TEMP__['initPxTransform'];
var __TEMP__ = require('./api/request');var request = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/storage');var storage = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/system');var system = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/device/network');var network = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/device/clipboard');var clipboard = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/device/phone');var phone = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/device/screen');var screen = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/device/vibrate');var vibrate = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/accelerometer');var accelerometer = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./api/device/deviceMotion');var deviceMotion = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/others');var others = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/media');var media = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./api/file');var file = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./api/webSocket');var webSocket = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/location');var location = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./api/interface');var toast = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./api/image');var image = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./api/web');var web = __REQUIRE_DEFAULT__(__TEMP__);
function processApis(taro) {
    const weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
    Object.keys(weApis).forEach(key => {
        taro[key] = () => {
            console.log(`暂时不支持 ${key}`);
        };
    });
}
function pxTransform(size) {
    const deviceWidthDp = Dimensions.get('window').width;
    const uiWidthPx = 375;
    const { designWidth, deviceRatio } = this.config;
    if (!(designWidth in deviceRatio)) {
        throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`);
    }
    const rateSize = parseInt(size, 10) / (deviceRatio[designWidth] * 2);
    return rateSize * deviceWidthDp / uiWidthPx;
}
function getApp(taro) {
    return this._$app;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = function initNativeApi(taro) {
    processApis(taro);
    taro.initPxTransform = initPxTransform.bind(taro);
    taro.pxTransform = pxTransform.bind(taro);
    taro.getApp = getApp.bind(taro);
    Object.assign(taro, request, storage, system, network, clipboard, phone, screen, web, vibrate, accelerometer, deviceMotion, media, file, webSocket, location, toast, image, others);
};

}, function(modId) { var map = {"./api/request":1589772950329,"./api/storage":1589772950330,"./api/system":1589772950331,"./api/device/network":1589772950332,"./api/device/clipboard":1589772950333,"./api/device/phone":1589772950334,"./api/device/screen":1589772950335,"./api/device/vibrate":1589772950337,"./api/accelerometer":1589772950338,"./api/device/deviceMotion":1589772950340,"./api/others":1589772950341,"./api/media":1589772950342,"./api/file":1589772950349,"./api/webSocket":1589772950351,"./api/location":1589772950353,"./api/interface":1589772950354,"./api/image":1589772950369,"./api/web":1589772950371}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950329, function(require, module, exports) {
var __TEMP__ = require('@tarojs/taro');var Link = __TEMP__['Link'];
function serializeParams(params) {
    if (!params) {
        return '';
    }
    return Object.keys(params)
        .map(key => (`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)).join('&');
}
function generateRequestUrlWithParams(url, params) {
    params = typeof params === 'string' ? params : serializeParams(params);
    url += (~url.indexOf('?') ? '&' : '?') + params;
    url = url.replace('?&', '?');
    return url;
}
function _request(options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            url: options
        };
    }
    let url = options.url;
    let data = options.data || {};
    const params = {};
    const res = {};
    let method = options.method || 'GET';
    method = method.toUpperCase();
    if (method === 'GET') {
        url = generateRequestUrlWithParams(url, data);
    }
    else {
        if (typeof data === 'object') {
            const contentType = options.header && (options.header['content-type'] || options.header['Content-Type']);
            if (contentType === 'application/json') {
                data = JSON.stringify(data);
            }
            else if (contentType === 'application/x-www-form-urlencoded') {
                data = serializeParams(data);
            }
        }
    }
    if (method !== 'GET' && method !== 'HEAD') {
        params.body = data;
    }
    params.headers = options.header;
    params.mode = options.mode;
    params.credentials = options.credentials;
    params.cache = options.cache;
    params.method = method;
    const originSuccess = options.success;
    const originFail = options.fail;
    const originComplete = options.complete;
    let completeRes;
    const p = new Promise((resolve, reject) => {
        fetch(url, params)
            .then(response => {
            res.statusCode = response.status;
            res.header = response.headers;
            if (options.dataType === 'json') {
                return response.json();
            }
            if (options.responseType === 'arraybuffer') {
                return response.arrayBuffer();
            }
            if (options.responseType === 'text') {
                return response.text();
            }
            if (typeof options.dataType === 'undefined') {
                return response.json();
            }
            return Promise.resolve(null);
        })
            .then(resData => {
            res.data = resData;
            completeRes = Object.assign({}, res);
            originSuccess && originSuccess(res);
            resolve(res);
        })
            .catch(error => {
            completeRes = Object.assign({}, error);
            originFail && originFail(error);
            reject(error);
        })
            .finally(() => {
            originComplete && originComplete(completeRes);
        });
    });
    return p;
}
function taroInterceptor(chain) {
    return _request(chain.requestParams);
}
const link = new Link(taroInterceptor);
const request = link.request.bind(link);
const addInterceptor = link.addInterceptor.bind(link);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    request,
    addInterceptor
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950330, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('react-native');var AsyncStorage = __TEMP__['AsyncStorage'];
function generateUnSupportApi(errText, fnNames) {
    const res = {};
    fnNames.forEach((fnName) => {
        res[fnName] = function () {
            throw new Error(`${errText} ##  ${JSON.stringify(arguments)}`);
        };
    });
    return res;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setStorage = function setStorage(opts = {}) {
    const { key, data, success, fail, complete } = opts;
    const res = { errMsg: 'setStorage:ok' };
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, JSON.stringify(data))
            .then((e) => {
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(err);
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getStorage = function getStorage(opts = {}) {
    const { key, success, fail, complete } = opts;
    const res = { errMsg: 'getStorage:ok' };
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
            .then((data) => {
            res.data = JSON.parse(data);
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(err);
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getStorageInfo = function getStorageInfo(opts = {}) {
    const { success, fail, complete } = opts;
    const res = { errMsg: 'getStorageInfo:ok' };
    return new Promise((resolve, reject) => {
        AsyncStorage.getAllKeys()
            .then((data) => {
            res.keys = data;
            res.currentSize = null;
            res.limitSize = null;
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(err);
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.removeStorage = function removeStorage(opts = {}) {
    const { key, success, fail, complete } = opts;
    const res = { errMsg: 'removeStorage:ok' };
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key)
            .then(() => {
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(err);
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.clearStorage = function clearStorage() {
    return __awaiter(this, void 0, void 0, function* () {
        return AsyncStorage.clear();
    });
};
let unSupportApis = ['setStorageSync', 'getStorageSync', 'getStorageInfoSync', 'removeStorageSync', 'clearStorageSync'];
unSupportApis = generateUnSupportApi('React Native暂不支持storage的同步存取', unSupportApis);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Object.assign({ setStorage,
    getStorage,
    getStorageInfo,
    removeStorage,
    clearStorage }, unSupportApis);

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950331, function(require, module, exports) {
var __TEMP__ = require('react-native');var Platform = __TEMP__['Platform'];var Dimensions = __TEMP__['Dimensions'];var StatusBar = __TEMP__['StatusBar'];var PixelRatio = __TEMP__['PixelRatio'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSystemInfo = function getSystemInfo(opts = {}) {
    const { success, fail, complete } = opts;
    try {
        const res = getSystemInfoSync();
        success && success(res);
        complete && complete(res);
        return Promise.resolve(res);
    }
    catch (err) {
        const res = { errMsg: err.message };
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(err);
    }
};
const isIPhoneX = (function () {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    const XS_MAX_WIDTH = 414;
    const XS_MAX_HEIGHT = 896;
    const getResolvedDimensions = () => {
        const { width, height } = Dimensions.get('window');
        if (width === 0 && height === 0)
            return Dimensions.get('window');
        return { width, height };
    };
    const { height: D_HEIGHT, width: D_WIDTH } = getResolvedDimensions();
    if (Platform.OS === 'web')
        return false;
    return ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
        ((D_HEIGHT === XS_MAX_HEIGHT && D_WIDTH === XS_MAX_WIDTH) ||
            (D_HEIGHT === XS_MAX_WIDTH && D_WIDTH === XS_MAX_HEIGHT)));
})();
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSystemInfoSync = function getSystemInfoSync() {
    const res = {};
    const pixelRatio = PixelRatio.get();
    const fontScale = PixelRatio.getFontScale();
    const os = Platform.OS;
    const version = Platform.Version;
    const isAndroid = Platform.OS === 'android';
    const statusBarHeight = isAndroid ? StatusBar.currentHeight : isIPhoneX ? 44 : 20;
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    res.brand = null;
    res.model = null;
    res.pixelRatio = pixelRatio;
    res.screenWidth = screenWidth;
    res.screenHeight = screenHeight;
    res.windowWidth = windowWidth;
    res.windowHeight = windowHeight;
    res.statusBarHeight = statusBarHeight;
    res.language = null;
    res.version = null;
    res.system = version;
    res.platform = os;
    res.fontSizeSetting = fontScale;
    res.SDKVersion = null;
    return res;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.canIUse = function canIUse() {
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    getSystemInfo,
    getSystemInfoSync,
    canIUse
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950332, function(require, module, exports) {
var __TEMP__ = require('react-native');var NetInfo = __TEMP__['NetInfo'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getNetworkType = function getNetworkType(opts = {}) {
    const { success, fail, complete } = opts;
    const res = {};
    return new Promise((resolve, reject) => {
        NetInfo.getConnectionInfo()
            .then((connectionInfo) => {
            const { type, effectiveType } = connectionInfo;
            if (type === 'wifi' || type === 'none') {
                res.networkType = type;
            }
            else {
                res.networkType = effectiveType;
            }
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(err);
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    function changeCallback(connectionInfo) {
        const res = {};
        const { type, effectiveType } = connectionInfo;
        if (type === 'wifi' || type === 'none') {
            res.networkType = type;
        }
        else {
            res.networkType = effectiveType;
        }
        NetInfo.isConnected.fetch().then((isConnected) => {
            res.isConnected = isConnected;
            callback && callback(res);
        });
    }
    NetInfo.addEventListener('connectionChange', changeCallback);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    getNetworkType,
    onNetworkStatusChange
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950333, function(require, module, exports) {
var __TEMP__ = require('react-native');var Clipboard = __TEMP__['Clipboard'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setClipboardData = function setClipboardData(opts = {}) {
    const { data, success, fail, complete } = opts;
    const res = { errMsg: 'setClipboardData:ok' };
    if (typeof data !== 'string') {
        res.errMsg = 'setClipboardData:fail parameter error: parameter.data should be String';
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(res);
    }
    Clipboard.setString(data);
    res.data = data;
    success && success(res);
    complete && complete(res);
    return Promise.resolve(res);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getClipboardData = function getClipboardData(opts = {}) {
    const { success, fail, complete } = opts;
    const res = { errMsg: 'getClipboardData:ok' };
    return Clipboard.getString()
        .then((content) => {
        res.data = content;
        success && success(res);
        complete && complete(res);
        return Promise.resolve(res);
    }).catch((err) => {
        res.errMsg = err.message;
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(err);
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    setClipboardData,
    getClipboardData
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950334, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('react-native');var Linking = __TEMP__['Linking'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.makePhoneCall = function makePhoneCall(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { phoneNumber, success, fail, complete } = opts;
        const res = { errMsg: 'makePhoneCall:ok' };
        const telUrl = `tel:${phoneNumber}`;
        const isSupport = yield Linking.canOpenURL(telUrl);
        if (isSupport) {
            yield Linking.openURL(telUrl);
            success && success(res);
            complete && complete(res);
            return Promise.resolve(res);
        }
        else {
            res.errMsg = 'makePhoneCall:fail. Do not support the makePhoneCall Api';
            fail && fail(res);
            complete && complete(res);
            return Promise.reject(res);
        }
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    makePhoneCall
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950335, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('expo-brightness');var Brightness = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('expo-keep-awake');var activateKeepAwake = __TEMP__['activateKeepAwake'];var deactivateKeepAwake = __TEMP__['deactivateKeepAwake'];
var __TEMP__ = require('../utils');var errorHandler = __TEMP__['errorHandler'];var shouleBeObject = __TEMP__['shouleBeObject'];var successHandler = __TEMP__['successHandler'];
/**
 * 设置屏幕亮度
 * @param opts
 * @param {number} opts.value - 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setScreenBrightness = function setScreenBrightness(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = { errMsg: 'setScreenBrightness:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res = { errMsg: `setScreenBrightness${isObject.msg}` };
            console.error(res.errMsg);
            return Promise.reject(res);
        }
        const { value, success, fail, complete } = opts;
        try {
            yield Brightness.setBrightnessAsync(value);
            return successHandler(success, complete)(res);
        }
        catch (e) {
            res.errMsg = `setScreenBrightness:fail invalid ${e}`;
            return errorHandler(fail, complete)(res);
        }
    });
};
/**
 * 获取屏幕亮度
 * @param opts
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getScreenBrightness = function getScreenBrightness(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = { errMsg: 'getScreenBrightness:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res = { errMsg: `getScreenBrightness${isObject.msg}` };
            console.error(res.errMsg);
            return Promise.reject(res);
        }
        const { success, fail, complete } = opts;
        try {
            res.num = yield Brightness.getBrightnessAsync();
            return successHandler(success, complete)(res);
        }
        catch (e) {
            res.errMsg = `getScreenBrightness:fail invalid ${e}`;
            return errorHandler(fail, complete)(res);
        }
    });
};
/**
 * keepScreenOn
 * @param {{}} opts
 * @param {boolean} opts.keepScreenOn - 是否保持屏幕常亮
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setKeepScreenOn = function setKeepScreenOn(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = { errMsg: 'setKeepScreenOn:ok' };
        const { keepScreenOn, success, fail, complete } = opts;
        try {
            if (keepScreenOn) {
                activateKeepAwake();
            }
            else {
                deactivateKeepAwake();
            }
            return successHandler(success, complete)(res);
        }
        catch (e) {
            res.errMsg = `setKeepScreenOn:fail invalid ${e}`;
            return errorHandler(fail, complete)(res);
        }
    });
};
/**
 * @todo
 * 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    console.log('onUserCaptureScreen has not finished');
};

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950336, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.askAsyncPermissions = function askAsyncPermissions(PermissionsType) {
    return __awaiter(this, void 0, void 0, function* () {
        const { status } = yield Permissions.askAsync(PermissionsType);
        return status;
    });
};
function upperCaseFirstLetter(string) {
    if (typeof string !== 'string')
        return string;
    string = string.replace(/^./, match => match.toUpperCase());
    return string;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getParameterError = function getParameterError({ name = '', para, correct, wrong }) {
    const parameter = para ? `parameter.${para}` : 'parameter';
    const errorType = upperCaseFirstLetter(wrong === null ? 'Null' : typeof wrong);
    return `${name}:fail parameter error: ${parameter} should be ${correct} instead of ${errorType}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.shouleBeObject = function shouleBeObject(target) {
    if (target && typeof target === 'object')
        return { res: true };
    return {
        res: false,
        msg: getParameterError({
            correct: 'Object',
            wrong: target
        })
    };
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isFunction = function isFunction(obj) {
    return typeof obj === 'function';
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.successHandler = function successHandler(success, complete) {
    return function (res) {
        isFunction(success) && success(res);
        isFunction(complete) && complete(res);
        return Promise.resolve(res);
    };
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.errorHandler = function errorHandler(fail, complete) {
    return function (res) {
        isFunction(fail) && fail(res);
        isFunction(complete) && complete(res);
        return Promise.reject(res);
    };
};
/**
 * RegExps.
 * A URL must match #1 and then at least one of #2/#3.
 * Use two levels of REs to avoid REDOS.
 */
const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isUrl = function isUrl(string) {
    if (typeof string !== 'string') {
        return false;
    }
    let match = string.match(protocolAndDomainRE);
    if (!match) {
        return false;
    }
    let everythingAfterProtocol = match[1];
    if (!everythingAfterProtocol) {
        return false;
    }
    if (localhostDomainRE.test(everythingAfterProtocol) ||
        nonLocalhostDomainRE.test(everythingAfterProtocol)) {
        return true;
    }
    return false;
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950337, function(require, module, exports) {
var __TEMP__ = require('react-native');var Vibration = __TEMP__['Vibration'];
function vibrate(DURATION, API) {
    const res = { errMsg: `${API}:ok` };
    return new Promise((resolve, reject) => {
        try {
            Vibration.vibrate(DURATION);
            resolve(res);
        }
        catch (err) {
            console.log(err);
            res.errMsg = err.message;
            reject(res);
        }
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.vibrateShort = function vibrateShort() {
    return vibrate(15, 'vibrateShort');
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.vibrateLong = function vibrateLong() {
    return vibrate(400, 'vibrateLong');
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    vibrateLong,
    vibrateShort
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950338, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./accelerometer');Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopAccelerometer; } });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAccelerometerChange; } });

}, function(modId) { var map = {"./accelerometer":1589772950339}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950339, function(require, module, exports) {
var __TEMP__ = require('expo-sensors');var Accelerometer = __TEMP__['Accelerometer'];
const accCase = {};
const intervalMap = {
    game: 29,
    ui: 60,
    normal: 200
};
function onAccelerometerChange(fnc) {
    accCase.callback = fnc;
}
/**
 * 开始监听加速度数据。
 * @param {Object} opts
 * @param {string} [opts.interval='normal'] 监听加速度数据回调函数的执行频率
 */
function startAccelerometer(opts = {}) {
    const { interval = 'normal', success, fail, complete } = opts;
    accCase.interval = interval;
    try {
        accCase.listener = Accelerometer.addListener(accCase.callback);
        success && success();
        complete && complete();
    }
    catch (error) {
        fail && fail();
        complete && complete();
        const res = { errMsg: 'stopAccelerometer failed' };
        return Promise.reject(res);
    }
    Accelerometer.setUpdateInterval(intervalMap[interval]);
    return Promise.resolve({ errMsg: 'ok' });
}
/**
 * 停止监听加速度数据
 * @param opts
 */
function stopAccelerometer(opts = {}) {
    const { success, fail, complete } = opts;
    try {
        accCase.listener.remove();
        accCase.listener = null;
        success && success();
        complete && complete();
        return Promise.resolve({ errMsg: 'ok' });
    }
    catch (error) {
        fail && fail();
        complete && complete();
        const res = { errMsg: 'stopAccelerometer failed' };
        return Promise.reject(res);
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return onAccelerometerChange; } });Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return stopAccelerometer; } });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950340, function(require, module, exports) {
var __TEMP__ = require('expo-sensors');var DeviceMotion = __TEMP__['DeviceMotion'];
const devMotionCase = {};
const intervalMap = {
    game: 20,
    ui: 60,
    normal: 200
};
function onDeviceMotionChange(fnc) {
    devMotionCase.callback = fnc;
}
/**
 * 开始监听设备方向的变化
 * @param object
 * @param {string} [object.interval='normal'] - 监听设备方向的变化回调函数的执行频率
 */
function startDeviceMotionListening(object = {}) {
    const { interval = 'normal', success, fail, complete } = object;
    devMotionCase.interval = interval;
    try {
        devMotionCase.listener = DeviceMotion.addListener((res) => {
            const { rotation } = res;
            devMotionCase.callback && devMotionCase.callback(rotation);
        });
        success && success();
        complete && complete();
    }
    catch (error) {
        fail && fail();
        complete && complete();
        const res = { errMsg: 'startDeviceMotionListening failed' };
        return Promise.reject(res);
    }
    DeviceMotion.setUpdateInterval(intervalMap[interval] || intervalMap.normal);
    return Promise.resolve({ errMsg: 'ok' });
}
/**
 * 停止监听设备方向的变化
 * @param object
 */
function stopDeviceMotionListening(object = {}) {
    const { success, fail, complete } = object;
    try {
        devMotionCase.listener.remove();
        devMotionCase.listener = null;
        success && success();
        complete && complete();
        return Promise.resolve({ errMsg: 'ok' });
    }
    catch (error) {
        fail && fail();
        complete && complete();
        const res = { errMsg: 'stopDeviceMotionListening failed' };
        return Promise.reject(res);
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'onDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return onDeviceMotionChange; } });Object.defineProperty(exports, 'startDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return startDeviceMotionListening; } });Object.defineProperty(exports, 'stopDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return stopDeviceMotionListening; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    onDeviceMotionChange,
    startDeviceMotionListening,
    stopDeviceMotionListening
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950341, function(require, module, exports) {
let base64js = require('base64-js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    return base64js.fromByteArray(arrayBuffer);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    return base64js.toByteArray(base64);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    arrayBufferToBase64,
    base64ToArrayBuffer
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950342, function(require, module, exports) {
var __TEMP__ = require('react-native');var Image = __TEMP__['Image'];
var __TEMP__ = require('./chooseMedia');var chooseMedia = __TEMP__['chooseMedia'];
var __TEMP__ = require('./saveMedia');var saveMedia = __TEMP__['saveMedia'];
/**
 * 从本地相册选择图片或使用相机拍照。
 * @param {Object} opts
 * @param {number} [opts.count=9] - ✖
 * @param {Array} [opts.sizeType=['original', 'compressed']] - 所选的图片的尺寸 ✔
 * @param {Array} [opts.sourceType=['album', 'camera']] - ✔
 * @returns {Promise<*>}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.chooseImage = function chooseImage(opts) {
    return chooseMedia(opts, 'Images');
};
/**
 * 拍摄视频或从手机相册中选视频。
 * @param {Object} opts
 * @param {Array} [opts.sourceType=['album', 'camera']] ✔
 * @param {boolean} [opts.compressed=true] ✔
 * @param {number} [opts.maxDuration=60] - 拍摄视频最长拍摄时间，单位秒 ✖
 * @param {string} [opts.maxDuration='camera'] - 默认拉起的是前置或者后置摄像头。✖
 * @returns {Promise<*>}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.chooseVideo = function chooseVideo(opts) {
    return chooseMedia(opts, 'Videos');
};
/**
 * 获取图片信息。网络图片需先配置download域名才能生效。
 * @param opts
 * @param {string} opts.src 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
 * @returns {Promise}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getImageInfo = function getImageInfo(opts = {}) {
    const { src, success, fail, complete } = opts;
    const res = {};
    return new Promise((resolve, reject) => {
        Image.getSize(src, (width, height) => {
            res.width = width;
            res.height = height;
            res.path = src;
            res.orientation = null;
            res.type = null;
            success && success(res);
            complete && complete(res);
            resolve(res);
        }, (err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            reject(res);
        });
    });
};
/**
 * 保存图片到系统相册
 * @param opts
 * @param {string} opts.filePath  图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
 * @returns {*}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(opts = {}) {
    return saveMedia(opts, 'photo', 'saveImageToPhotosAlbum');
};
/**
 * 保存视频到系统相册。支持mp4视频格式。
 * @param opts
 * @param {string} opts.filePath - 视频文件路径，可以是临时文件路径也可以是永久文件路径
 * @returns {Promise<*>}
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(opts = {}) {
    return saveMedia(opts, 'video', 'saveVideoToPhotosAlbum');
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./record');Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRecorderManager; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./video');Object.defineProperty(exports, 'createVideoContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./audio');Object.defineProperty(exports, 'createInnerAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInnerAudioContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./map');Object.defineProperty(exports, 'createMapContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMapContext; } });

}, function(modId) { var map = {"./chooseMedia":1589772950343,"./saveMedia":1589772950344,"./record":1589772950345,"./video":1589772950346,"./audio":1589772950347,"./map":1589772950348}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950343, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('../utils');var askAsyncPermissions = __TEMP__['askAsyncPermissions'];
var __TEMP__ = require('expo-image-picker');var ImagePicker = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
function chooseMedia(opts, mediaTypes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!opts || typeof opts !== 'object') {
            opts = {};
        }
        const { sizeType = [], sourceType = [], success, fail, complete } = opts;
        const options = {
            mediaTypes,
            quality: sizeType[0] === 'compressed' ? 0.7 : 1
        };
        const isCamera = sourceType[0] === 'camera';
        const status = isCamera ? yield askAsyncPermissions(Permissions.CAMERA) : yield askAsyncPermissions(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            const res = { errMsg: `Permissions denied!` };
            return Promise.reject(res);
        }
        let p;
        return new Promise((resolve, reject) => {
            p = isCamera ? ImagePicker.launchCameraAsync(options) : ImagePicker.launchImageLibraryAsync(options);
            p.then((resp) => {
                const { uri } = resp;
                resp.path = uri;
                const res = {
                    tempFilePaths: [uri],
                    tempFiles: [resp]
                };
                success && success(res);
                complete && complete(res);
                resolve(res);
            }).catch((err) => {
                const res = {
                    errMsg: `chooseImage fail`,
                    err
                };
                fail && fail(res);
                complete && complete(res);
                reject(res);
            });
        });
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseMedia', { enumerable: true, configurable: true, get: function() { return chooseMedia; } });

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950344, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('react-native');var CameraRoll = __TEMP__['CameraRoll'];
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
var __TEMP__ = require('../utils');var askAsyncPermissions = __TEMP__['askAsyncPermissions'];
/**
 * 需要手动 Link RTCCameraRoll
 * @param opts
 * @param type
 * @param API
 * @returns {Promise<*>}
 */
function saveMedia(opts, type, API) {
    return __awaiter(this, void 0, void 0, function* () {
        const { status } = yield askAsyncPermissions(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            const res = { errMsg: `Permissions denied!` };
            return Promise.reject(res);
        }
        const { filePath, success, fail, complete } = opts;
        const res = { errMsg: `${API}:ok` };
        return CameraRoll.saveToCameraRoll(filePath, type)
            .then((url) => {
            res.path = url;
            success && success(res);
            complete && complete(res);
            return Promise.resolve(res);
        }).catch((err) => {
            res.errMsg = err.message;
            fail && fail(res);
            complete && complete(res);
            return Promise.reject(res);
        });
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'saveMedia', { enumerable: true, configurable: true, get: function() { return saveMedia; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = { saveMedia };

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950345, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('expo-av');var Audio = __TEMP__['Audio'];
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
var __TEMP__ = require('../utils');var askAsyncPermissions = __TEMP__['askAsyncPermissions'];
class RecorderManager {
    constructor() { }
    static getInstance() {
        if (!RecorderManager.instance) {
            RecorderManager.recordInstance = new Audio.Recording();
            RecorderManager.instance = new RecorderManager();
        }
        return RecorderManager.instance;
    }
    /**
     * 开始录音
     * @param {object} opts
     * @param {number} [opts.duration=60000] - 录音的时长，单位 ms，最大值 600000（10 分钟）❓
     * @param {number} [opts.sampleRate=8000] - 采样率
     * @param {number} [opts.numberOfChannels=2] - 录音通道数
     * @param {number} [opts.encodeBitRate=48000] - 编码码率，有效值见下表格
     * @param {string} [opts.format='acc'] - 音频格式 ❌
     * @param {number} [opts.frameSize] - 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 ❌
     * @param {string} [opts.audioSource='auto'] - 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源 ❌
     */
    start(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield askAsyncPermissions(Permissions.AUDIO_RECORDING);
            if (status !== 'granted') {
                const res = { errMsg: `Permissions denied!` };
                return Promise.reject(res);
            }
            const { duration = 60000, sampleRate = 8000, numberOfChannels = 2, encodeBitRate = 48000, format = 'aac', frameSize, audioSource = 'auto' } = opts;
            let options = {
                android: Object.assign({}, RecorderManager.RecordingOptions.android, { sampleRate, numberOfChannels, bitRate: encodeBitRate }),
                ios: Object.assign({}, RecorderManager.RecordingOptions.ios, { sampleRate, numberOfChannels, bitRate: encodeBitRate })
            };
            try {
                const res = RecorderManager.recordInstance.getStatusAsync();
                console.log('res', res);
                yield Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                    playsInSilentModeIOS: true,
                    staysActiveInBackground: false,
                    shouldDuckAndroid: true,
                    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                    playThroughEarpieceAndroid: true
                });
                yield RecorderManager.recordInstance.prepareToRecordAsync(options);
                const res2 = RecorderManager.recordInstance.getStatusAsync();
                console.log('res2', res2);
                yield RecorderManager.recordInstance.startAsync();
            }
            catch (error) {
                this.onErrorCallback && this.onErrorCallback({ errMsg: error.message });
            }
        });
    }
    /**
     * 暂停录音
     */
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield RecorderManager.recordInstance.pauseAsync();
                this.onPauseCallback && this.onPauseCallback();
            }
            catch (error) {
                this.onErrorCallback && this.onErrorCallback({ errMsg: error.message });
            }
        });
    }
    /**
     * 继续录音
     * @returns {Promise<void>}
     */
    resume() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield RecorderManager.recordInstance.startAsync();
                this.onResumeCallback && this.onResumeCallback();
            }
            catch (error) {
                this.onErrorCallback && this.onErrorCallback({ errMsg: error.message });
            }
        });
    }
    /**
     * 停止录音
     * @returns {Promise<void>}
     */
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield RecorderManager.recordInstance.stopAndUnloadAsync();
                this.onStopCallback && this.onStopCallback();
            }
            catch (error) {
                this.onErrorCallback && this.onErrorCallback({ errMsg: error.message });
            }
        });
    }
    onRecordingStatusUpdate(status) {
        if (this.preStatus === undefined) {
            this.preStatus = status;
            return;
        }
        if (!this.preStatus.isRecording && status.isRecording) {
            console.log('start');
        }
    }
    /**
     * 监听录音开始事件
     * @param {function} callback
     */
    onError(callback) {
        this.onErrorCallback = callback;
    }
    /**
     * 监听录音开始事件
     * @param {function} callback
     */
    onStart(callback) {
        this.onStartCallback = callback;
        RecorderManager.recordInstance.setOnRecordingStatusUpdate(this.onRecordingStatusUpdate);
    }
    /**
     * 监听录音结束事件
     * @param {function} callback
     */
    onStop(callback) {
        this.onStopCallback = callback;
    }
    /**
     * 监听录音暂停事件
     * @param {function} callback
     */
    onPause(callback) {
        this.onPauseCallback = callback;
    }
    /**
     * 监听录音继续事件
     * @param {function} callback
     */
    onResume(callback) {
        this.onResumeCallback = callback;
    }
    /**
     * @todo
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
     * @param callback
     */
    onFrameRecorded(callback) {
        console.log('not achieve');
    }
    /**
     * @todo
     * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     * @param callback
     */
    onInterruptionBegin(callback) {
        console.log('not achieve');
    }
    /**
     * @todo
     * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
     * @param callback
     */
    onInterruptionEnd(callback) {
        console.log('not achieve');
    }
}
RecorderManager.RecordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 8000,
        numberOfChannels: 2,
        bitRate: 48000
    },
    ios: {
        extension: '.caf',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
        sampleRate: 8000,
        numberOfChannels: 2,
        bitRate: 48000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false
    }
};
/**
 * 获取全局唯一的录音管理器 RecorderManager
 * @returns {RecorderManager}
 */
function getRecorderManager() {
    return RecorderManager.getInstance();
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return getRecorderManager; } });

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950346, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const globalAny = global;
globalAny._taroVideoMap = {};
class VideoContext {
    constructor(videoRef) {
        this.videoRef = videoRef;
    }
    /**
     * 退出全屏
     */
    exitFullScreen() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.dismissFullscreenPlayer();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 隐藏状态栏，仅在iOS全屏下有效
     * @todo
     */
    hideStatusBar() {
    }
    /**
     * 暂停视频
     */
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.pauseAsync();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 播放视频
     */
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.playAsync();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 设置倍速播放
     * {number} @param rate - 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速
     */
    playbackRate(rate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.setRateAsync(rate);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 进入全屏
     * @package {object} [object]
     * @package {number} [object.direction] - 设置全屏时视频的方向，不指定则根据宽高比自动判断。
     */
    requestFullScreen(object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.presentFullscreenPlayer();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 跳转到指定位置
     * @param {number} position - 跳转到的位置，单位 s
     */
    seek(position) {
        return __awaiter(this, void 0, void 0, function* () {
            const millis = position * 1000;
            try {
                yield this.videoRef.setPositionAsync(millis);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * 发送弹幕 ❌
     * @ todo
     * @deprecated 暂未实现
     * @param {DanmuData} data 弹幕内容
     * @param {string} data.text 弹幕文字
     * @param {string} data.color 弹幕颜色
     */
    sendDanmu(data) {
    }
    /**
     * 显示状态栏，仅在iOS全屏下有效
     * @todo
     */
    showStatusBar() {
    }
    /**
     * 停止视频
     */
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.videoRef.stopAsync();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
/**
 * 创建 video 上下文 VideoContext 对象。
 * {string} @param - id video 组件的 id
 * {object} @param t - 在自定义组件下，当前组件实例的this，以操作组件内 video 组件
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.createVideoContext = function createVideoContext(id, t) {
    const ref = globalAny._taroVideoMap[id];
    if (ref) {
        return new VideoContext(ref);
    }
    else {
        return undefined;
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950347, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('expo-av');var Audio = __TEMP__['Audio'];
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
var __TEMP__ = require('../utils');var askAsyncPermissions = __TEMP__['askAsyncPermissions'];var isUrl = __TEMP__['isUrl'];
/**
 * InnerAudioContext 实例，可通过 wx.createInnerAudioContext 接口获取实例。
 */
class InnerAudioContext {
    constructor() {
        this._autoplay = false;
        this._loop = false;
        this._obeyMuteSwitch = true; // TODO
        this._volume = 1;
        this._onPlaybackStatusUpdate = playbackStatus => {
            this.duration = playbackStatus.durationMillis / 1000;
            this.currentTime = playbackStatus.positionMillis / 1000;
            this.buffered = playbackStatus.playableDurationMillis / 1000;
            this.paused = !playbackStatus.isPlaying;
            // 监听音频播放进度更新事件
            this.onTimeUpdateCallback && this.onTimeUpdateCallback(playbackStatus);
            if (!playbackStatus.isLoaded) {
                // Update your UI for the unloaded state
                console.log('isLoaded');
                if (playbackStatus.error) {
                    console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
                }
            }
            else {
                // Update your UI for the loaded state
                if (playbackStatus.isPlaying) {
                    // Update your UI for the playing state
                    console.log('isPlaying');
                }
                else {
                    // paused state
                    console.log('paused');
                }
                if (playbackStatus.isBuffering) {
                    this.onWaitingCallback && this.onWaitingCallback();
                }
                if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                    this.onEndedCallback && this.onEndedCallback();
                }
            }
        };
        this.soundObject = new Audio.Sound();
        this.soundObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
    }
    set src(value) {
        this._src = value;
        if (this._autoplay) {
            this._firstPlay();
        }
    }
    set autoplay(value) {
        this._autoplay = value;
    }
    set startTime(value) {
        this._startTime = value;
    }
    set volume(value) {
        this._volume = value;
    }
    set loop(value) {
        this._loop = value;
    }
    set obeyMuteSwitch(value) {
        this._obeyMuteSwitch = value;
    }
    _firstPlay() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._src)
                return { errMsg: `src is undefined` };
            const source = isUrl(this._src) ? { uri: this._src } : this._src;
            yield this.soundObject.loadAsync(source, {}, true);
            this.onCanplayCallback && this.onCanplayCallback();
            yield this.soundObject.playAsync();
            if (this._startTime) {
                yield this.soundObject.playFromPositionAsync(this._startTime * 1000);
            }
            this.onPlayCallback && this.onPlayCallback();
        });
    }
    /**
     *  播放
     */
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield askAsyncPermissions(Permissions.AUDIO_RECORDING);
            if (status !== 'granted') {
                const res = { errMsg: `Permissions denied!` };
                return Promise.reject(res);
            }
            const soundStatus = yield this.soundObject.getStatusAsync();
            try {
                if (soundStatus.isLoaded === false && soundStatus.isPlaying === undefined) {
                    // First load
                    yield this._firstPlay();
                }
                else {
                    yield this.soundObject.playAsync();
                }
                // TODO
                // await this.soundObject.setIsMutedAsync(this._obeyMuteSwitch)
                yield this.soundObject.setVolumeAsync(this._volume);
                yield this.soundObject.setIsLoopingAsync(this._loop);
                this.onPlayCallback && this.onPlayCallback();
            }
            catch (error) {
                this.onError && this.onError(error);
            }
        });
    }
    /**
     *  暂停。暂停后的音频再播放会从暂停处开始播放
     */
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.soundObject.pauseAsync();
                this.onPauseCallback && this.onPauseCallback();
            }
            catch (error) {
                this.onError && this.onError(error);
            }
        });
    }
    /**
     * 停止。停止后的音频再播放会从头开始播放
     */
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.soundObject.stopAsync();
                this.onStopCallback && this.onStopCallback();
            }
            catch (error) {
                this.onError && this.onError(error);
            }
        });
    }
    /**
     * 跳转到指定位置
     * @param position - 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度
     */
    seek(position) {
        return __awaiter(this, void 0, void 0, function* () {
            const millis = position * 1000;
            try {
                this.onSeekingCallback && this.onSeekingCallback();
                yield this.soundObject.setPositionAsync(millis);
                this.onSeekedCallback && this.onSeekedCallback();
            }
            catch (error) {
                this.onError && this.onError(error);
            }
        });
    }
    /**
     * @todo
     * 销毁当前实例
     */
    destroy() {
        console.log('destroy');
        this.stop();
        // this.soundObject = undefined
    }
    /**
     * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
     * @param callback
     */
    onCanplay(callback) {
        this.onCanplayCallback = callback;
    }
    /**
     * 取消监听音频进入可以播放状态的事件
     * @param callback
     */
    offCanplay(callback) {
        this.offCanplayCallback = callback;
    }
    /**
     * 监听音频播放事件
     * @param callback
     */
    onPlay(callback) {
        this.onPlayCallback = callback;
    }
    /**
     * 取消监听音频播放事件
     * @param callback
     */
    offPlay(callback) {
        this.offPlayCallback = callback;
    }
    /**
     *  监听音频暂停事件
     * @param callback
     */
    onPause(callback) {
        this.onPauseCallback = callback;
    }
    /**
     * 取消监听音频暂停事件
     * @param callback
     */
    offPause(callback) {
        this.offPauseCallback = callback;
    }
    /**
     * 监听音频停止事件
     * @param callback
     */
    onStop(callback) {
        this.onStopCallback = callback;
    }
    /**
     *  取消监听音频停止事件
     * @param callback
     */
    offStop(callback) {
        this.offStopCallback = callback;
    }
    /**
     * 监听音频自然播放至结束的事件
     * @param callback
     */
    onEnded(callback) {
        this.onEndedCallback = callback;
    }
    /**
     * 取消监听音频自然播放至结束的事件
     * @param callback
     */
    offEnded(callback) {
        this.offEndedCallback = callback;
    }
    /**
     * 监听音频播放进度更新事件
     * @param callback
     */
    onTimeUpdate(callback) {
        this.onTimeUpdateCallback = callback;
    }
    /**
     * 取消监听音频播放进度更新事件
     * @param callback
     */
    offTimeUpdate(callback) {
        this.offTimeUpdateCallback = callback;
    }
    /**
     * 监听音频播放错误事件
     * @param callback
     */
    onError(callback) {
        this.onErrorCallback = callback;
    }
    /**
     * 取消监听音频播放错误事件
     * @param callback
     */
    offError(callback) {
        this.offErrorCallback = callback;
    }
    /**
     * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
     * @param callback
     */
    onWaiting(callback) {
        this.onWaitingCallback = callback;
    }
    /**
     * 取消监听音频加载中事件
     * @param callback
     */
    offWaiting(callback) {
        this.offWaitingCallback = callback;
    }
    /**
     * 监听音频进行跳转操作的事件
     * @param callback
     */
    onSeeking(callback) {
        this.onSeekingCallback = callback;
    }
    /**
     * 取消监听音频进行跳转操作的事件
     * @param callback
     */
    offSeeking(callback) {
        this.offSeekingCallback = callback;
    }
    /**
     *  监听音频完成跳转操作的事件
     * @param callback
     */
    onSeeked(callback) {
        this.onSeekedCallback = callback;
    }
    /**
     * 取消监听音频完成跳转操作的事件
     * @param callback
     */
    offSeeked(callback) {
        this.offSeekedCallback = callback;
    }
}
/**
 * 创建 audio 上下文 AudioContext 对象。
 * @param {string} id - audio 组件的 id
 * @param {object} t - 在自定义组件下，当前组件实例的this，以操作组件内 audio 组件
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.createInnerAudioContext = function createInnerAudioContext(id, t) {
    return new InnerAudioContext();
};

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950348, function(require, module, exports) {
const globalAny = global;
globalAny._taroMapMap = {};
class MapContext {
    constructor(mapRef) {
        this.mapRef = mapRef;
    }
    /**
     * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
     */
    getCenterLocation() {
    }
    /**
     * 获取当前地图的视野范围
     * @param opts
     */
    getRegion(opts) {
    }
    /**
     * 获取当前地图的缩放级别
     */
    getScale() {
    }
    /**
     * 缩放视野展示所有经纬度
     */
    includePoints() {
    }
    /**
     * 将地图中心移动到当前定位点。需要配合map组件的show-location使用
     */
    moveToLocation() {
    }
    /**
     * 平移marker，带动画
     */
    translateMarker() {
    }
}
/**
 * 创建 map 上下文 MapContext 对象。
 * {string} @param - id map 组件的 id
 * {object} @param t - 在自定义组件下，当前组件实例的this，以操作组件内 map 组件
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.createMapContext = function createMapContext(id, t) {
    const ref = globalAny._taroMapMap[id];
    if (ref) {
        return new MapContext(ref);
    }
    else {
        return undefined;
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950349, function(require, module, exports) {
var __TEMP__ = require('expo-file-system');var FileSystem = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('react-native');var Platform = __TEMP__['Platform'];
const createFormData = (file, body, name) => {
    const data = new FormData();
    data.append(name, {
        name: file.fileName,
        type: file.type,
        uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', '')
    });
    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });
    return data;
};
/**
 * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。
 * @param {object} opts
 * @param {string} opts.url - 开发者服务器地址
 * @param {string} opts.filePath - 要上传文件资源的路径
 * @param {string} opts.name - 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
 * @param {object} [opts.header] - HTTP 请求 Header，Header 中不能设置 Referer
 * @param {object} [opts.formData] - HTTP 请求中其他额外的 form data
 * @return UploadTask - 一个可以监听上传进度进度变化的事件和取消上传的对象
 */
function uploadFile(opts = {}) {
    const { url, filePath, name, header, formData, success, fail, complete } = opts;
    return fetch(url, {
        method: 'POST',
        body: createFormData(filePath, formData, name),
        headers: header
    }).then(res => {
        if (res.ok) {
            console.log(res);
            success && success(res);
            complete && complete(res);
            return res.json();
        }
        else {
            console.log(res);
            const errMsg = `uploadFile fail: ${res.status} ${res.statusText}`;
            fail && fail({ errMsg });
            complete && complete({ errMsg });
            return Promise.reject(new Error(errMsg));
        }
    }).catch(e => {
        const errMsg = `uploadFile fail: ${e}`;
        fail && fail({ errMsg });
        complete && complete({ errMsg });
        return Promise.reject(new Error(errMsg));
    });
}
/**
 * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。
 * @param opts
 * @param {string} opts.url - 下载资源的 url
 * @param {Object} [opts.header] - HTTP 请求的 Header，Header 中不能设置 Referer
 * @param {string} [opts.filePath] - 指定文件下载后存储的路径
 * @returns {*}
 */
function downloadFile(opts = {}) {
    if (typeof opts !== 'object') {
        const res = { errMsg: `fail parameter error: ${opts} should be Object` };
        return Promise.reject(res);
    }
    const { url, header, filePath, success, fail, complete } = opts;
    let downloadResumable;
    let p = new Promise((resolve, reject) => {
        let fileName = url.split('/');
        fileName = fileName[fileName.length - 1];
        const downloadFileCallback = (res) => {
            const { totalBytesWritten, totalBytesExpectedToWrite } = res;
            let progress = totalBytesWritten / totalBytesExpectedToWrite * 100;
            progress = Number(progress.toFixed(2));
            p.onProgressUpdateCb && p.onProgressUpdateCb({
                progress,
                totalBytesWritten,
                totalBytesExpectedToWrite
            });
        };
        downloadResumable = FileSystem.createDownloadResumable(url, filePath || `${FileSystem.documentDirectory}${fileName}`, {
            headers: header
        }, downloadFileCallback);
        downloadResumable.downloadAsync().then((resp) => {
            const { uri, status } = resp;
            const res = {
                tempFilePath: uri,
                statusCode: status
            };
            success && success(res);
            complete && complete(res);
            resolve(res);
        }).catch((err) => {
            const res = {
                errMsg: `download file fail`,
                err
            };
            fail && fail(res);
            complete && complete(res);
            reject(res);
        });
    });
    p.onProgressUpdate = (cb) => {
        if (cb) {
            p.onProgressUpdateCb = cb;
        }
    };
    p.abort = (cb) => {
        downloadResumable.pauseAsync();
        cb && cb();
    };
    return p;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./file-system');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'downloadFile', { enumerable: true, configurable: true, get: function() { return downloadFile; } });Object.defineProperty(exports, 'uploadFile', { enumerable: true, configurable: true, get: function() { return uploadFile; } });

}, function(modId) { var map = {"./file-system":1589772950350}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950350, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('expo-file-system');var FileSystem = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('../utils');var shouleBeObject = __TEMP__['shouleBeObject'];
console.log(FileSystem.cacheDirectory, FileSystem.documentDirectory);
/**
 * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
 * @param opts
 * @param {string} opts.tempFilePath 需要保存的文件的临时路径
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.saveFile = function saveFile(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = { errMsg: 'removeSavedFile:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res.errMsg = `removeSavedFile${isObject.msg}`;
            console.error(res);
            return Promise.reject(res);
        }
        let { tempFilePath, success, fail, complete } = opts;
        let fileName = tempFilePath.substring(tempFilePath.lastIndexOf('/') + 1);
        let destPath = FileSystem.documentDirectory + fileName;
        try {
            yield FileSystem.moveAsync({ from: tempFilePath, to: destPath });
            res.savedFilePath = destPath;
            success && success(res);
            complete && complete(res);
            return res;
        }
        catch (e) {
            res.errMsg = `removeSavedFile:fail. ${e.message}`;
            fail && fail(res);
            complete && complete(res);
            throw res;
        }
    });
};
/**
 * 删除本地缓存文件
 * @param opts
 * @param {string} opts.filePath 需要删除的文件路径
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.removeSavedFile = function removeSavedFile(opts = {}) {
    const res = { errMsg: 'removeSavedFile:ok' };
    const isObject = shouleBeObject(opts);
    if (!isObject.res) {
        res.errMsg = `removeSavedFile${isObject.msg}`;
        console.error(res);
        return Promise.reject(res);
    }
    let { filePath, success, fail, complete } = opts;
    return FileSystem.deleteAsync(filePath)
        .then((obj) => {
        success && success(res);
        complete && complete(res);
        return obj;
    }).catch(e => {
        res.errMsg = `removeSavedFile:fail. ${e.message}`;
        fail && fail(res);
        complete && complete(res);
        throw res;
    });
};
/**
 * @todo
 * 新开页面打开文档
 * @param opts
 * @param opts.filePath 文件路径，可通过 downloadFile 获得
 * @param opts.fileType 文件类型，指定文件类型打开文件
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.openDocument = function openDocument(opts = {}) {
    console.log('not finished');
};
/**
 * 获取该小程序下已保存的本地缓存文件列表
 * @param opts
 * @param {string} opts.filePath 文件路径
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSavedFileList = function getSavedFileList(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = { errMsg: 'getSavedFileList:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res.errMsg = `getFileInfo${isObject.msg}`;
            console.error(res);
            return Promise.reject(res);
        }
        let { success, fail, complete } = opts;
        let fileList = [];
        try {
            const fileNameList = yield FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
            fileNameList.forEach((fileName, index) => __awaiter(this, void 0, void 0, function* () {
                const fileInfo = yield FileSystem.getInfoAsync(FileSystem.cacheDirectory + fileName);
                if (fileInfo.isDirectory) {
                    fileList.push({
                        filePath: fileInfo.uri,
                        size: fileInfo.size,
                        createTime: fileInfo.modificationTime
                    });
                }
            }));
            res.fileList = fileList;
            success && success(res);
            complete && complete(res);
            return res;
        }
        catch (e) {
            res.errMsg = `getSavedFileList:fail. ${e.message}`;
            fail && fail(res);
            complete && complete(res);
            throw res;
        }
    });
};
/**
 * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。
 * @param opts
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getSavedFileInfo = function getSavedFileInfo(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = { errMsg: 'getSavedFileInfo:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res.errMsg = `getSavedFileInfo${isObject.msg}`;
            console.error(res);
            return Promise.reject(res);
        }
        let { filePath, digestAlgorithm = 'md5', success, fail, complete } = opts;
        try {
            const obj = yield FileSystem.getInfoAsync(filePath, { md5: true });
            console.log(obj);
            if (!obj.exists) {
                throw new Error('filePath not exists');
            }
            res.size = obj.size;
            res.createTime = obj.modificationTime;
            success && success(res);
            complete && complete(res);
            return res;
        }
        catch (e) {
            res.errMsg = `getSavedFileInfo:fail. ${e.message}`;
            fail && fail(res);
            complete && complete(res);
            throw res;
        }
    });
};
/**
 * 获取文件信息
 * @param opts
 * @param {string} opts.filePath -  本地文件路径
 * @param {string} [opts.digestAlgorithm] - 计算文件摘要的算法
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getFileInfo = function getFileInfo(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = { errMsg: 'getFileInfo:ok' };
        const isObject = shouleBeObject(opts);
        if (!isObject.res) {
            res.errMsg = `getFileInfo${isObject.msg}`;
            console.error(res);
            return Promise.reject(res);
        }
        let { filePath, digestAlgorithm = 'md5', success, fail, complete } = opts;
        try {
            const obj = yield FileSystem.getInfoAsync(filePath, { md5: true });
            if (!obj.exists) {
                throw new Error('filePath not exists');
            }
            res.size = obj.size;
            res.md5 = obj.md5;
            success && success(res);
            complete && complete(res);
            return res;
        }
        catch (e) {
            res.errMsg = `getFileInfo:fail. ${e.message}`;
            fail && fail(res);
            complete && complete(res);
            throw res;
        }
    });
};
/**
 * @todo
 * 获取全局唯一的文件管理器
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getFileSystemManager = function getFileSystemManager() {
    console.log('not finished');
};

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950351, function(require, module, exports) {
var __TEMP__ = require('./socketTask');var SocketTask = __REQUIRE_DEFAULT__(__TEMP__);
let socketsCounter = 1;
let socketTasks = [];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.connectSocket = function connectSocket(opts = {}) {
    return new Promise((resolve, reject) => {
        const { url, success, fail, complete } = opts;
        let { protocols } = opts;
        const res = { errMsg: 'connectSocket:ok' };
        if (typeof url !== 'string') {
            const error = new Error(`connectSocket:fail parameter error: parameter.url should be String`);
            res.errMsg = error.message;
            console.error(res.errMsg);
            fail && fail(res);
            complete && complete(res);
            return reject(res);
        }
        if (Object.prototype.toString.call(protocols) !== '[object Array]') {
            protocols = null;
        }
        // 最多同时存在两个SocketTask
        if (socketTasks.length >= 2) {
            const error = new Error(`同时最多发起 2 个 socket 请求，更多请参考文档。`);
            res.errMsg = error.message;
            console.error(res.errMsg);
            fail && fail(res);
            complete && complete(res);
            return reject(res);
        }
        const task = new SocketTask(url, protocols);
        task._destroyWhenClose = () => {
            socketTasks = socketTasks.filter(socketTask => { return socketTask !== task; });
        };
        socketTasks.push(task);
        res.socketTaskId = socketsCounter++;
        res.socketTask = task;
        success && success(res);
        complete && complete(res);
        return resolve(task);
    });
};
function onSocketOpen() {
    console.warn('已废弃。请使用socketTask.onOpen方法');
}
function onSocketError() {
    console.warn('已废弃。请使用socketTask.onError方法');
}
function sendSocketMessage() {
    console.warn('已废弃。请使用socketTask.send方法');
}
function onSocketMessage() {
    console.warn('已废弃。请使用socketTask.onMessage方法');
}
function closeSocket() {
    console.warn('已废弃。请使用socketTask.close方法');
}
function onSocketClose() {
    console.warn('已废弃.请使用socketTask.onClose方法');
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    connectSocket,
    onSocketOpen,
    onSocketError,
    sendSocketMessage,
    onSocketMessage,
    closeSocket,
    onSocketClose
};

}, function(modId) { var map = {"./socketTask":1589772950352}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950352, function(require, module, exports) {
class SocketTask {
    constructor(url, protocols) {
        if (protocols) {
            this.ws = new WebSocket(url, protocols);
        }
        else {
            this.ws = new WebSocket(url);
        }
    }
    get readyState() {
        return this.ws.readyState;
    }
    send(opts = {}) {
        if (Object.prototype.toString.call(opts) !== '[object Object]') {
            opts = {};
        }
        const { data, success, fail, complete } = opts;
        const res = { errMsg: 'sendSocketMessage:ok' };
        try {
            this.ws.send(data);
            success && success(res);
            complete && complete(res);
            return Promise.resolve(res);
        }
        catch (err) {
            const res = { errMsg: err.message };
            fail && fail(res);
            complete && complete(res);
            return Promise.reject(err);
        }
    }
    close(opts = {}) {
        if (Object.prototype.toString.call(opts) !== '[object Object]') {
            opts = {};
        }
        const { code = 1000, reason = 'server complete, close', success, fail, complete } = opts;
        const res = { errMsg: 'closeSocket:ok' };
        this.closeDetail = { code, reason };
        try {
            this.ws.close(code, reason);
            // 把自己从链接数组中清除
            this._destroyWhenClose && this._destroyWhenClose();
            success && success(res);
            complete && complete(res);
            return Promise.resolve(res);
        }
        catch (err) {
            const res = { errMsg: err.message };
            fail && fail(res);
            complete && complete(res);
            return Promise.reject(err);
        }
    }
    onOpen(func) {
        this.ws.onopen = func;
    }
    onMessage(func) {
        this.ws.onmessage = func;
    }
    onClose(func) {
        this.ws.onclose = () => {
            this._destroyWhenClose && this._destroyWhenClose();
            func(this.closeDetail || { code: 1006, reason: 'abnormal closure' });
        };
    }
    onError(func) {
        this.ws.onerror = func;
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = SocketTask;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950353, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('expo-location');var Location = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('react-native-unimodules');var Permissions = __TEMP__['Permissions'];
var __TEMP__ = require('../utils');var askAsyncPermissions = __TEMP__['askAsyncPermissions'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getLocation = function getLocation(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const status = yield askAsyncPermissions(Permissions.LOCATION);
        if (status !== 'granted') {
            const res = { errMsg: `Permissions denied!` };
            return Promise.reject(res);
        }
        if (!opts || typeof opts !== 'object') {
            opts = {};
        }
        const { altitude = false, success, fail, complete } = opts;
        return new Promise((resolve, reject) => {
            Location.getCurrentPositionAsync({
                enableHighAccuracy: Boolean(altitude)
            }).then((resp) => {
                const { coords, timestamp } = resp;
                const { latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed } = coords;
                const res = {
                    latitude,
                    longitude,
                    speed,
                    altitude,
                    accuracy,
                    verticalAccuracy: altitudeAccuracy,
                    horizontalAccuracy: null,
                    heading,
                    timestamp
                };
                success && success(res);
                complete && complete(res);
                resolve(res);
            }).catch((err) => {
                const res = {
                    errMsg: `getLocation fail`,
                    err
                };
                fail && fail(res);
                complete && complete(res);
                reject(res);
            });
        });
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    getLocation
};

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950354, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./showActionSheet');Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return __TEMP__.showActionSheet; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./showModal');Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return __TEMP__.showModal; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./toast');Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showLoading; } });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.showToast; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideToast; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideLoading; } });

}, function(modId) { var map = {"./showActionSheet":1589772950355,"./showModal":1589772950365,"./toast":1589772950368}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950355, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../ActionSheet');var ActionSheet = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native-root-siblings');var RootSiblings = __REQUIRE_DEFAULT__(__TEMP__);
function showActionSheet(obj) {
    let { itemList = [], itemColor = '#000000', success, fail, complete, autoDectect = true, type = 'ios' } = obj || {};
    return new Promise((resolve, reject) => {
        let sibling = new RootSiblings(React.createElement(ActionSheet, { autoDectect: autoDectect, type: type, visible: false, onClose: onFail, menus: itemList.map((item, index) => {
                return {
                    type: 'default',
                    label: item,
                    textStyle: { color: itemColor },
                    onPress: onSuccess.bind(this, index)
                };
            }), actions: [
                {
                    type: 'default',
                    label: '取消',
                    textStyle: { color: itemColor },
                    onPress: onFail.bind(this)
                }
            ] }));
        // hack 的做法。不推荐
        setTimeout(() => {
            sibling.update(React.createElement(ActionSheet, { autoDectect: autoDectect, type: type, visible: true, onClose: onFail, menus: itemList.map((item, index) => {
                    return {
                        type: 'default',
                        label: item,
                        textStyle: { color: itemColor },
                        onPress: onSuccess.bind(this, index)
                    };
                }), actions: [
                    {
                        type: 'default',
                        label: '取消',
                        textStyle: { color: itemColor },
                        onPress: onFail.bind(this)
                    }
                ] }));
        }, 100);
        function onSuccess(tapIndex) {
            sibling && sibling.destroy();
            sibling = undefined;
            const res = { tapIndex, errMsg: 'showActionSheet:ok' };
            success && success(res);
            complete && complete(res);
            resolve(res);
        }
        function onFail() {
            const res = { errMsg: 'showActionSheet:fail cancel' };
            sibling && sibling.destroy();
            sibling = undefined;
            fail && fail(res);
            complete && complete(res);
            reject(res);
        }
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return showActionSheet; } });

}, function(modId) { var map = {"../ActionSheet":1589772950356}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950356, function(require, module, exports) {
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('prop-types');var PropTypes = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Modal = __TEMP__['Modal'];var View = __TEMP__['View'];var Text = __TEMP__['Text'];var TouchableHighlight = __TEMP__['TouchableHighlight'];var StyleSheet = __TEMP__['StyleSheet'];var Platform = __TEMP__['Platform'];var ViewPropTypes = __TEMP__['ViewPropTypes'];
var __TEMP__ = require('../Mask');var Mask = __TEMP__['Mask'];
var __TEMP__ = require('../Popup');var Popup = __TEMP__['Popup'];
var __TEMP__ = require('../variable');var V = __REQUIRE_DEFAULT__(__TEMP__);
const styles = StyleSheet.create({
    iosActionsheet: {
        backgroundColor: V.weuiBgColorDefault
    },
    androidActionsheetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    androidActionsheet: {
        width: 274,
        backgroundColor: V.weuiBgColorDefault,
        borderRadius: V.weuiActionSheetAndroidBorderRadius
    },
    actionsheetMenu: {
        backgroundColor: '#fff'
    },
    actionsheetAction: {
        marginTop: 6,
        backgroundColor: '#fff'
    },
    actionsheetCell: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.weuiCellBorderColor,
        borderStyle: 'solid'
    },
    iosActionsheetCell: {
        paddingTop: 10,
        paddingBottom: 10
    },
    androidActionsheetCell: {
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 24,
        paddingRight: 24
    },
    firstActionsheetCell: {
        borderTopWidth: 0
    },
    iosActionsheetCellText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: ((18 * V.baseLineHeight) - 18) / 2,
        marginBottom: ((18 * V.baseLineHeight) - 18) / 2
    },
    androidActionsheetCellText: {
        textAlign: 'left',
        fontSize: 16,
        marginTop: ((16 * 1.4) - 16) / 2,
        marginBottom: ((16 * 1.4) - 16) / 2
    },
    defaultActionsheetCellText: {
        color: '#000'
    },
    primaryActionsheetCellText: {
        color: '#0BB20C'
    },
    warnActionsheetCellText: {
        color: V.weuiColorWarn
    }
});
const underlayColor = V.weuiBgColorActive;
const Index = ({ visible, style, maskStyle, onShow, onClose, menus = [], actions = [], autoDectect = true, type = 'ios' }) => {
    let _type = type;
    if (autoDectect)
        _type = Platform.OS;
    const _renderMenuItems = () => menus.map((_a, idx) => {
        var { type: btnType, label, style: btnStyle, textStyle } = _a, others = __rest(_a, ["type", "label", "style", "textStyle"]);
        return React.createElement(TouchableHighlight, Object.assign({ key: idx, underlayColor: underlayColor, style: [
                styles.actionsheetCell,
                styles[`${_type}ActionsheetCell`],
                idx === 0 ? styles.firstActionsheetCell : {},
                btnStyle
            ] }, others),
            React.createElement(Text, { style: [
                    styles.actionsheetCellText,
                    styles[`${_type}ActionsheetCellText`],
                    styles[`${btnType}ActionsheetCellText`],
                    textStyle
                ] }, label));
    });
    const _renderActions = () => actions.map((_a, idx) => {
        var { type: btnType, label, style: btnStyle, textStyle } = _a, others = __rest(_a, ["type", "label", "style", "textStyle"]);
        return React.createElement(TouchableHighlight, Object.assign({ key: idx, underlayColor: underlayColor, style: [
                styles.actionsheetCell,
                styles[`${_type}ActionsheetCell`],
                idx === 0 ? styles.firstActionsheetCell : {},
                btnStyle
            ] }, others),
            React.createElement(Text, { style: [
                    styles.actionsheetCellText,
                    styles[`${_type}ActionsheetCellText`],
                    styles[`${btnType}ActionsheetCellText`],
                    textStyle
                ] }, label));
    });
    return _type === 'ios' ? (React.createElement(Popup, { visible: visible, style: [styles.iosActionsheet, style], maskStyle: maskStyle, onShow: onShow, onClose: onClose },
        menus.length ? (React.createElement(View, { style: [styles.actionsheetMenu] }, _renderMenuItems())) : false,
        actions.length ? (React.createElement(View, { style: [styles.actionsheetAction] }, _renderActions())) : false)) : (React.createElement(Modal, { visible: visible, transparent: true, animationType: 'fade', onShow: onShow, onRequestClose: onClose },
        React.createElement(Mask, { style: [styles.androidActionsheetWrapper, maskStyle], onPress: onClose },
            React.createElement(View, { style: [styles.androidActionsheet, style] },
                menus.length ? (React.createElement(View, { style: [styles.actionsheetMenu] }, _renderMenuItems())) : false,
                actions.length ? (React.createElement(View, { style: [styles.actionsheetAction] }, _renderActions())) : false))));
};
Index.propTypes = {
    autoDectect: PropTypes.bool,
    type: PropTypes.oneOf(['ios', 'android']),
    menus: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
    maskStyle: ViewPropTypes.style
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Index;

}, function(modId) { var map = {"../Mask":1589772950357,"../Popup":1589772950359,"../variable":1589772950362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950357, function(require, module, exports) {
var __TEMP__ = require('./Mask');var Mask = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Mask', { enumerable: true, configurable: true, get: function() { return Mask; } });

}, function(modId) { var map = {"./Mask":1589772950358}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950358, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('prop-types');var PropTypes = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var StyleSheet = __TEMP__['StyleSheet'];var TouchableWithoutFeedback = __TEMP__['TouchableWithoutFeedback'];var View = __TEMP__['View'];var ViewPropTypes = __TEMP__['ViewPropTypes'];
const styles = StyleSheet.create({
    mask: {
        flex: 1,
        zIndex: 1000
    }
});
const Mask = ({ transparent = false, style, onPress, children }) => React.createElement(TouchableWithoutFeedback, { onPress: onPress },
    React.createElement(View, { style: [styles.mask, { backgroundColor: transparent ? 'transparent' : 'rgba(0,0,0,.6)' }, style] },
        React.createElement(TouchableWithoutFeedback, null, children)));
Mask.propTypes = {
    transparent: PropTypes.bool,
    style: ViewPropTypes.style,
    children: PropTypes.node,
    onPress: PropTypes.func
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Mask;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950359, function(require, module, exports) {
var __TEMP__ = require('./Popup');var Popup = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./PopupHeader');var PopupHeader = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Popup', { enumerable: true, configurable: true, get: function() { return Popup; } });Object.defineProperty(exports, 'PopupHeader', { enumerable: true, configurable: true, get: function() { return PopupHeader; } });

}, function(modId) { var map = {"./Popup":1589772950360,"./PopupHeader":1589772950361}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950360, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var Component = __TEMP__['Component'];
var __TEMP__ = require('prop-types');var PropTypes = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Modal = __TEMP__['Modal'];var View = __TEMP__['View'];var StyleSheet = __TEMP__['StyleSheet'];var Dimensions = __TEMP__['Dimensions'];var Animated = __TEMP__['Animated'];var Easing = __TEMP__['Easing'];var ViewPropTypes = __TEMP__['ViewPropTypes'];
var __TEMP__ = require('../Mask');var Mask = __TEMP__['Mask'];
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        backgroundColor: '#EFEFF4'
    }
});
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, translateY: new Animated.Value(height) };
        this.handleLayout = this.handleLayout.bind(this);
    }
    componentWillReceiveProps(nextProp) {
        if (this.props.visible !== nextProp.visible) {
            if (nextProp.visible) {
                this.setState({ visible: true });
                return;
            }
            Animated.timing(this.state.translateY, {
                toValue: this.height,
                duration: 300,
                easing: Easing.easeInOut
            }).start(() => this.setState({ visible: false }));
        }
    }
    handleLayout() {
        this.popup.measure((x, y, w, h) => {
            this.height = h;
            this.setState({ translateY: new Animated.Value(h) });
            Animated.timing(this.state.translateY, {
                toValue: 0,
                duration: 300,
                easing: Easing.easeInOut
            }).start();
        });
    }
    render() {
        const { style, maskStyle, onShow, onClose, children } = this.props;
        return (React.createElement(Modal, { visible: this.state.visible, transparent: true, onShow: onShow, onRequestClose: onClose },
            React.createElement(Mask, { style: maskStyle, onPress: onClose },
                React.createElement(Animated.View, { style: [styles.popup, style, {
                            transform: [{ translateY: this.state.translateY }]
                        }] },
                    React.createElement(View, { ref: (ref) => { this.popup = ref; }, onLayout: this.handleLayout }, children)))));
    }
}
Popup.propTypes = {
    visible: PropTypes.bool,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
    maskStyle: ViewPropTypes.style,
    children: PropTypes.node
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Popup;

}, function(modId) { var map = {"../Mask":1589772950357}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950361, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('prop-types');var PropTypes = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var View = __TEMP__['View'];var StyleSheet = __TEMP__['StyleSheet'];var Text = __TEMP__['Text'];var ViewPropTypes = __TEMP__['ViewPropTypes'];
var __TEMP__ = require('../variable');var V = __REQUIRE_DEFAULT__(__TEMP__);
const styles = StyleSheet.create({
    popupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#E5E5E5',
        backgroundColor: '#fbf9fe'
    },
    popupActionLeft: {
        flex: 1,
        color: '#586C94',
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        fontSize: V.baseFontSize
    },
    popupActionRight: {
        flex: 1,
        color: '#586C94',
        textAlign: 'right',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        fontSize: V.baseFontSize
    }
});
const PopupHeader = ({ style, left = {}, right = {} }) => React.createElement(View, { style: [styles.popupHeader, style] },
    React.createElement(Text, { style: [styles.popupActionLeft, left.style], onPress: left.onPress }, left.label),
    React.createElement(Text, { style: [styles.popupActionRight, right.style], onPress: right.onPress }, right.label));
PopupHeader.propTypes = {
    style: ViewPropTypes.style,
    left: PropTypes.object,
    right: PropTypes.object
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = PopupHeader;

}, function(modId) { var map = {"../variable":1589772950362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950362, function(require, module, exports) {
var __TEMP__ = require('lodash/merge');var merge = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./Cell/variable');var _cell = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./Dialog/variable');var _dialog = __REQUIRE_DEFAULT__(__TEMP__);
const _global = {
    // color
    weuiColorPrimary: '#1AAD19',
    weuiColorWarn: '#E64340',
    // link
    weuiLinkColorDefault: '#586C94',
    // background
    weuiBgColorDefault: '#EFEFF4',
    weuiBgColorActive: '#ECECEC',
    // line
    weuiLineColorLight: '#E5E5E5',
    weuiLineColorDark: '#BCBAB6',
    // text
    weuiTextColorTitle: '#000000',
    weuiTextColorTips: '#B2B2B2',
    weuiTextColorWarn: '#E64340',
    weuiTextColorGray: '#999999',
    weuiActionSheetAndroidBorderRadius: 2,
    // ------------------------- old
    baseFontSize: 16,
    baseLineHeight: 1.6
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = merge({}, _global, _cell, _dialog);

}, function(modId) { var map = {"./Cell/variable":1589772950363,"./Dialog/variable":1589772950364}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950363, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    weuiCellBg: '#FFFFFF',
    weuiCellBorderColor: '#D9D9D9',
    weuiCellGapV: 10,
    weuiCellGapH: 15,
    weuiCellInnerGapH: 17 * 0.35,
    weuiCellHeight: 44,
    weuiCellFontSize: 17,
    weuiCellTipsFontSize: 14,
    weuiCellLabelWidth: 105,
    // unit((weuiCellHeight - 2 * weuiCellGapV) / weuiCellFontSize)
    // 高度为44，减去上下padding的行高
    weuiCellLineHeight: 44 - 20,
    // unit(20 / @weuiCellFontSize, em),
    weuiCellsMarginTop: 20,
    // weui switch
    weuiSwitchHeight: 32,
    // weui uploader
    weuiUploaderBorderColor: '#D9D9D9',
    weuiUploaderActiveBorderColor: '#999999',
    weuiUploaderFileSpacing: '9px',
    weuiUploaderSize: '79px',
    weuiUploaderBorderWidth: '1px'
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950364, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    weuiDialogBackgroundColor: '#FFFFFF',
    weuiDialogLineColor: '#D5D5D6',
    weuiDialogLinkColor: '#3CC51F',
    weuiDialogLinkActiveBc: '#EEEEEE',
    weuiDialogGapWidth: 1.6 * 16
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950365, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Text = __TEMP__['Text'];
var __TEMP__ = require('react-native-root-siblings');var RootSiblings = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../Dialog');var Dialog = __REQUIRE_DEFAULT__(__TEMP__);
function showModal(obj) {
    let { title = '', content = '', showCancel = true, cancelText = '取消', cancelColor = '#000000', confirmText = '确定', confirmColor = '#3CC51F', success, fail, complete } = obj || {};
    let sibling;
    return new Promise((resolve, reject) => {
        try {
            sibling = new RootSiblings(React.createElement(Dialog, { visible: true, autoDectect: true, title: title, onClose: onCancel, buttons: [
                    showCancel && {
                        type: cancelColor,
                        label: cancelText,
                        onPress: onCancel
                    },
                    {
                        type: confirmColor,
                        label: confirmText,
                        onPress: onConfirm
                    }
                ].filter(Boolean) },
                React.createElement(Text, null, content)));
        }
        catch (e) {
            const res = { errMsg: `showModal fail:${e.message}` };
            fail && fail(res);
            complete && complete(res);
            reject(res);
        }
        function onConfirm() {
            console.log('onConfirm');
            const res = { errMsg: 'showModal:ok', confirm: true, cancel: false };
            sibling && sibling.destroy();
            sibling = undefined;
            success && success(res);
            complete && complete(res);
            resolve(res);
        }
        function onCancel() {
            const res = { errMsg: 'showModal:fail cancel', confirm: false, cancel: true };
            sibling && sibling.destroy();
            sibling = undefined;
            fail && fail(res);
            complete && complete(res);
            resolve(res);
        }
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return showModal; } });

}, function(modId) { var map = {"../Dialog":1589772950366}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950366, function(require, module, exports) {
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('prop-types');var PropTypes = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Modal = __TEMP__['Modal'];var View = __TEMP__['View'];var Text = __TEMP__['Text'];var TouchableHighlight = __TEMP__['TouchableHighlight'];var Dimensions = __TEMP__['Dimensions'];var StyleSheet = __TEMP__['StyleSheet'];var Platform = __TEMP__['Platform'];var ViewPropTypes = __TEMP__['ViewPropTypes'];
var __TEMP__ = require('../Mask');var Mask = __TEMP__['Mask'];
var __TEMP__ = require('../StyleSheet');var create = __TEMP__['create'];
var __TEMP__ = require('../variable');var V = __REQUIRE_DEFAULT__(__TEMP__);
const { width } = Dimensions.get('window');
const styles = create({
    dialogWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialog: {
        width: width - 60,
        backgroundColor: V.weuiDialogBackgroundColor,
        borderRadius: 3,
        overflow: 'hidden'
    },
    dialogHeader: {
        paddingTop: 1.3 * V.baseFontSize,
        paddingBottom: 0.5 * V.baseFontSize,
        paddingLeft: V.weuiDialogGapWidth,
        paddingRight: V.weuiDialogGapWidth
    },
    dialogTitle: {
        fontWeight: '400'
    },
    iosDialogTitle: {
        fontSize: 18,
        textAlign: 'center'
    },
    androidDialogTitle: {
        fontSize: 21,
        textAlign: 'left'
    },
    dialogBody: {
        paddingLeft: V.weuiDialogGapWidth,
        paddingRight: V.weuiDialogGapWidth
    },
    iosDialogBody: {
        paddingBottom: (0.8 * 15) + 20
    },
    androidDialogBody: {
        paddingTop: 0.25 * 17,
        paddingBottom: (17 * 2) + 20
    },
    dialogBodyText: {
        color: V.weuiTextColorGray,
        lineHeight: 15 * 1.3,
        android: {
            lineHeight: Math.round(15 * 1.3)
        }
    },
    iosDialogBodyText: {
        fontSize: 15,
        textAlign: 'center'
    },
    androidDialogBodyText: {
        fontSize: 17,
        textAlign: 'left'
    },
    dialogFooter: {
        flexDirection: 'row'
    },
    iosDialogFooter: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.weuiDialogLineColor,
        borderStyle: 'solid'
    },
    androidDialogFooter: {
        height: 42,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingLeft: V.weuiDialogGapWidth,
        paddingRight: V.weuiDialogGapWidth,
        paddingBottom: 16 * 0.7
    },
    dialogFooterOpr: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iosDialogFooterOpr: {
        height: 48,
        flex: 1
    },
    androidDialogFooterOpr: {
        height: 42,
        paddingLeft: 16 * 0.8,
        paddingRight: 16 * 0.8
    },
    dialogFooterOprWithNegativeMarginRight: {
        marginRight: 0 - (16 * 0.8)
    },
    dialogFooterOprWithBorder: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: V.weuiDialogLineColor,
        borderStyle: 'solid'
    },
    iosDialogFooterOprText: {
        fontSize: 18
    },
    androidDialogFooterOprText: {
        fontSize: 16
    },
    defaultDialogFooterOprText: {
        color: '#353535'
    },
    primaryDialogFooterOprText: {
        color: '#0BB20C'
    },
    warnDialogFooterOprText: {
        color: V.weuiColorWarn
    }
});
const underlayColor = V.weuiDialogLinkActiveBc;
const Index = ({ visible = false, buttons = [], title, style, maskStyle, headerStyle, titleStyle, bodyStyle, bodyTextStyle, footerStyle, children, onShow, onClose, autoDectect = true, type = 'ios' }) => {
    let _type = type;
    if (autoDectect)
        _type = Platform.OS;
    const _renderButtons = () => buttons.map((_a, idx) => {
        var { type: btnType, label } = _a, others = __rest(_a, ["type", "label"]);
        return React.createElement(TouchableHighlight, Object.assign({ key: idx, style: [
                styles.dialogFooterOpr,
                styles[`${_type}DialogFooterOpr`],
                _type === 'ios' && idx > 0 ? styles.dialogFooterOprWithBorder : {},
                _type === 'android' && idx === buttons.length - 1 ? styles.dialogFooterOprWithNegativeMarginRight : {}
            ], underlayColor: underlayColor }, others),
            React.createElement(Text, { style: [styles[`${_type}DialogFooterOprText`], { color: btnType }] }, label));
    });
    const childrenWithProps = React.Children.map(children, (child) => {
        if (child.type.displayName === 'Text') {
            return React.cloneElement(child, {
                style: [styles.dialogBodyText, styles[`${type}DialogBodyText`], bodyTextStyle, child.props.style]
            });
        }
        return child;
    });
    return (React.createElement(Modal, { visible: visible, transparent: !false, onShow: onShow, onRequestClose: onClose },
        React.createElement(Mask, { style: [styles.dialogWrapper, maskStyle], onPress: onClose },
            React.createElement(View, { style: [styles.dialog, style] },
                React.createElement(View, { style: [styles.dialogHeader, headerStyle] },
                    React.createElement(Text, { style: [styles.dialogTitle, styles[`${type}DialogTitle`], titleStyle] }, title)),
                React.createElement(View, { style: [styles.dialogBody, styles[`${type}DialogBody`], bodyStyle] }, childrenWithProps),
                React.createElement(View, { style: [styles.dialogFooter, styles[`${type}DialogFooter`], footerStyle] }, _renderButtons())))));
};
Index.propTypes = {
    autoDectect: PropTypes.bool,
    type: PropTypes.oneOf(['ios', 'android']),
    title: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
    maskStyle: ViewPropTypes.style,
    headerStyle: ViewPropTypes.style,
    titleStyle: Text.propTypes.style,
    bodyStyle: ViewPropTypes.style,
    bodyTextStyle: Text.propTypes.style,
    footerStyle: ViewPropTypes.style,
    children: PropTypes.node
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = Index;

}, function(modId) { var map = {"../Mask":1589772950357,"../StyleSheet":1589772950367,"../variable":1589772950362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950367, function(require, module, exports) {
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __TEMP__ = require('react-native');var StyleSheet = __TEMP__['StyleSheet'];var Platform = __TEMP__['Platform'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.create = function create(styles) {
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
        const copyStyles = Object.assign({}, styles[name]);
        const ios = copyStyles.ios;
        const android = copyStyles.android;
        /* eslint-disable no-param-reassign */
        delete styles[name].ios;
        delete styles[name].android;
        /* eslint-enable no-param-reassign */
        let style = __rest(Object.assign({}, styles[name]), []);
        if (ios && Platform.OS === 'ios') {
            style = Object.assign({}, style, ios);
        }
        if (android && Platform.OS === 'android') {
            style = Object.assign({}, style, android);
        }
        platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = { create };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950368, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var View = __TEMP__['View'];var Text = __TEMP__['Text'];var Image = __TEMP__['Image'];var StyleSheet = __TEMP__['StyleSheet'];var ActivityIndicator = __TEMP__['ActivityIndicator'];
var __TEMP__ = require('react-native-root-siblings');var RootSiblings = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./success.png');var successPng = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../utils');var errorHandler = __TEMP__['errorHandler'];var shouleBeObject = __TEMP__['shouleBeObject'];var successHandler = __TEMP__['successHandler'];
const styles = StyleSheet.create({
    toastView: {
        width: 76,
        height: 76,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toastIcon: {
        width: 55,
        height: 55
    },
    toastContent: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    textToastContent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        lineHeight: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    container: {
        zIndex: 10000,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)'
    },
    grayBlock: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20,20,20,0.8)',
        borderRadius: 8,
        flexDirection: 'column'
    },
    textGrayBlock: {
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20,20,20,0.8)',
        borderRadius: 8,
        flexDirection: 'column'
    }
});
class WXLoading extends React.Component {
    constructor() {
        super();
        this.state = {
            animating: true
        };
    }
    render() {
        const { title = 'loading' } = this.props;
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.grayBlock },
                React.createElement(ActivityIndicator, { animating: this.state.animating, style: { flex: 1 }, size: 'small', color: '#eee' }),
                React.createElement(Text, { style: {
                        paddingTop: 10,
                        position: 'absolute',
                        bottom: '15%',
                        color: 'white',
                        fontSize: 15
                    } }, title))));
    }
}
function showToast(options) {
    const isObject = shouleBeObject(options);
    if (!isObject.res) {
        const res = { errMsg: `showLoading${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const res = { errMsg: 'showToast:ok' };
    let { title = '', icon = 'success', image, duration = 1500, mask, success, fail, complete } = options || {}; // eslint-disable-line
    let ToastView;
    if (image) {
        ToastView = React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.grayBlock },
                React.createElement(View, { style: styles.toastView },
                    React.createElement(Image, { source: image, style: styles.toastIcon }),
                    React.createElement(Text, { style: styles.toastContent }, title || ''))));
    }
    else if (icon === 'loading') {
        ToastView = React.createElement(WXLoading, { title: title });
    }
    else if (icon === 'none') {
        ToastView = React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.textGrayBlock },
                React.createElement(Text, { style: styles.textToastContent }, title || '')));
    }
    else {
        ToastView = React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.grayBlock },
                React.createElement(View, { style: styles.toastView },
                    React.createElement(Image, { source: successPng, style: styles.toastIcon }),
                    React.createElement(Text, { style: styles.toastContent }, title || ''))));
    }
    try {
        // setTimeout fires incorrectly when using chrome debug #4470
        // https://github.com/facebook/react-native/issues/4470
        global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
        global.wxToastRootSiblings = new RootSiblings(ToastView);
        setTimeout(() => {
            global.wxToastRootSiblings && global.wxToastRootSiblings.update(ToastView);
            success && success();
        }, 100);
        if (duration > 0) {
            setTimeout(() => {
                console.log('destroy');
                global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
            }, duration);
        }
        return successHandler(success, complete)(res);
    }
    catch (e) {
        res.errMsg = `showToast:fail invalid ${e}`;
        return errorHandler(fail, complete)(res);
    }
}
function showLoading(options) {
    const isObject = shouleBeObject(options);
    if (!isObject.res) {
        const res = { errMsg: `showLoading${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    let { title = '', mask, success, fail, complete } = options || {};
    return showToast({
        title,
        icon: 'loading',
        duration: 0,
        mask,
        success,
        fail,
        complete
    });
}
function hideToast() {
    global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
    global.wxToastRootSiblings = undefined;
}
function hideLoading() {
    hideToast();
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return showToast; } });Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return showLoading; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return hideToast; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return hideLoading; } });

}, function(modId) { var map = {"../utils":1589772950336}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950369, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./previewImage');Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewImage; } });
// export { chooseImage } from './chooseImage'

}, function(modId) { var map = {"./previewImage":1589772950370}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950370, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Modal = __TEMP__['Modal'];var View = __TEMP__['View'];var ActivityIndicator = __TEMP__['ActivityIndicator'];var StyleSheet = __TEMP__['StyleSheet'];
var __TEMP__ = require('react-native-root-siblings');var RootSiblings = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native-image-zoom-viewer');var ImageViewer = __REQUIRE_DEFAULT__(__TEMP__);
const styles = StyleSheet.create({
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
function previewImage(obj) {
    let { current, urls, success, fail, complete } = obj || {};
    let index = urls.indexOf(current);
    let sibling;
    try {
        sibling = new RootSiblings(React.createElement(Modal, { visible: true, transparent: true },
            React.createElement(ImageViewer, { imageUrls: urls.map((item) => {
                    return {
                        url: item,
                        props: ''
                    };
                }), index: index === -1 ? 0 : index, onClick: onSuccess, onSwipeDown: onSuccess, enableSwipeDown: true, loadingRender: () => {
                    return (React.createElement(View, { style: [styles.loadingWrapper] },
                        React.createElement(ActivityIndicator, { size: "large", color: '#999' })));
                } })));
    }
    catch (e) {
        onFail(e);
    }
    function onSwipeDown() {
        sibling && sibling.destroy();
        sibling = undefined;
    }
    function onSuccess() {
        const rsp = { errMsg: 'previewImage:ok' };
        onSwipeDown();
        success && success(rsp);
        complete && complete(rsp);
    }
    function onFail(e) {
        onSwipeDown();
        fail && fail(Object.assign({ errMsg: 'err' }, e));
        complete && complete('err', ...e);
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return previewImage; } });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950371, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('react-native');var Linking = __TEMP__['Linking'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.openUrl = function openUrl(opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url, success, fail, complete } = opts;
        const res = { errMsg: 'openUrl:ok' };
        const isSupport = yield Linking.canOpenURL(url);
        if (isSupport) {
            yield Linking.openURL(url);
            success && success(res);
            complete && complete(res);
            return Promise.resolve(res);
        }
        else {
            res.errMsg = 'openUrl:fail. Do not support the openUrl Api';
            fail && fail(res);
            complete && complete(res);
            return Promise.reject(res);
        }
    });
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    openUrl
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950372, function(require, module, exports) {
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
/**
 * @description 组件的基类，注入 $router 等
 */
class Component extends React.Component {
    constructor(props, context) {
        super(props, context);
        if (props.navigation) {
            this.$router = { params: props.navigation.state.params || {}, path: props.navigation.state.routeName ? ('/' + props.navigation.state.routeName) : null };
        }
    }
    get $app() {
        if (!this._reactInternalFiber)
            return {};
        return Taro._$app; // eslint-disable-line
    }
    set $app(app) {
        console.warn('Please try not to set $app.');
    }
}
class PureComponent extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        if (props.navigation) {
            this.$router = { params: props.navigation.state.params || {}, path: props.navigation.state.routeName ? ('/' + props.navigation.state.routeName) : null };
        }
    }
    get $app() {
        if (!this._reactInternalFiber)
            return {};
        return Taro._$app; // eslint-disable-line
    }
    set $app(app) {
        console.warn('Please try not to set $app.');
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Component', { enumerable: true, configurable: true, get: function() { return Component; } });Object.defineProperty(exports, 'PureComponent', { enumerable: true, configurable: true, get: function() { return PureComponent; } });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950326);
})()
//# sourceMappingURL=index.js.map