module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951358, function(require, module, exports) {
var __TEMP__ = require('./FileSystem');var FileSystem = __REQUIRE_WILDCARD__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./FileSystem');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (module && module.exports) {
    let wasImportWarningShown = false;
    // @ts-ignore: Temporarily define an export named "FileSystem" for legacy compatibility
    Object.defineProperty(module.exports, 'FileSystem', {
        get() {
            if (!wasImportWarningShown) {
                console.warn(`The syntax "import { FileSystem } from 'expo-file-system'" is deprecated. Use "import * as FileSystem from 'expo-file-system'" or import named exports instead. Support for the old syntax will be removed in SDK 34.`);
                wasImportWarningShown = true;
            }
            return FileSystem;
        },
    });
}
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./FileSystem":1589772951359}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951359, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var UnavailabilityError = __TEMP__['UnavailabilityError'];
var __TEMP__ = require('@unimodules/core');var EventEmitter = __TEMP__['EventEmitter'];
var __TEMP__ = require('uuid-js');var UUID = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./ExponentFileSystem');var ExponentFileSystem = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var Platform = __TEMP__['Platform'];
var __TEMP__ = require('./FileSystem.types');var EncodingType = __TEMP__['EncodingType'];
if (!ExponentFileSystem) {
    console.warn("No native ExponentFileSystem module found, are you sure the expo-file-system's module is linked properly?");
}
// Prevent webpack from pruning this.
const _unused = new EventEmitter(ExponentFileSystem);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'EncodingType', { enumerable: true, configurable: true, get: function() { return EncodingType; } });
function normalizeEndingSlash(p) {
    if (p != null) {
        return p.replace(/\/*$/, '') + '/';
    }
    return null;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var documentDirectory = exports.documentDirectory = normalizeEndingSlash(ExponentFileSystem.documentDirectory);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var cacheDirectory = exports.cacheDirectory = normalizeEndingSlash(ExponentFileSystem.cacheDirectory);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getInfoAsync = async function getInfoAsync(fileUri, options = {}) {
    if (!ExponentFileSystem.getInfoAsync) {
        throw new UnavailabilityError('expo-file-system', 'getInfoAsync');
    }
    return await ExponentFileSystem.getInfoAsync(fileUri, options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.readAsStringAsync = async function readAsStringAsync(fileUri, options) {
    if (!ExponentFileSystem.readAsStringAsync) {
        throw new UnavailabilityError('expo-file-system', 'readAsStringAsync');
    }
    return await ExponentFileSystem.readAsStringAsync(fileUri, options || {});
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getContentUriAsync = async function getContentUriAsync(fileUri) {
    if (Platform.OS === 'android') {
        if (!ExponentFileSystem.getContentUriAsync) {
            throw new UnavailabilityError('expo-file-system', 'getContentUriAsync');
        }
        return await ExponentFileSystem.getContentUriAsync(fileUri);
    }
    else {
        return new Promise(function (resolve, reject) {
            resolve(fileUri);
        });
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.writeAsStringAsync = async function writeAsStringAsync(fileUri, contents, options = {}) {
    if (!ExponentFileSystem.writeAsStringAsync) {
        throw new UnavailabilityError('expo-file-system', 'writeAsStringAsync');
    }
    return await ExponentFileSystem.writeAsStringAsync(fileUri, contents, options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.deleteAsync = async function deleteAsync(fileUri, options = {}) {
    if (!ExponentFileSystem.deleteAsync) {
        throw new UnavailabilityError('expo-file-system', 'deleteAsync');
    }
    return await ExponentFileSystem.deleteAsync(fileUri, options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.moveAsync = async function moveAsync(options) {
    if (!ExponentFileSystem.moveAsync) {
        throw new UnavailabilityError('expo-file-system', 'moveAsync');
    }
    return await ExponentFileSystem.moveAsync(options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.copyAsync = async function copyAsync(options) {
    if (!ExponentFileSystem.copyAsync) {
        throw new UnavailabilityError('expo-file-system', 'copyAsync');
    }
    return await ExponentFileSystem.copyAsync(options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.makeDirectoryAsync = async function makeDirectoryAsync(fileUri, options = {}) {
    if (!ExponentFileSystem.makeDirectoryAsync) {
        throw new UnavailabilityError('expo-file-system', 'makeDirectoryAsync');
    }
    return await ExponentFileSystem.makeDirectoryAsync(fileUri, options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.readDirectoryAsync = async function readDirectoryAsync(fileUri) {
    if (!ExponentFileSystem.readDirectoryAsync) {
        throw new UnavailabilityError('expo-file-system', 'readDirectoryAsync');
    }
    return await ExponentFileSystem.readDirectoryAsync(fileUri, {});
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getFreeDiskStorageAsync = async function getFreeDiskStorageAsync() {
    if (!ExponentFileSystem.getFreeDiskStorageAsync) {
        throw new UnavailabilityError('expo-file-system', 'getFreeDiskStorageAsync');
    }
    return await ExponentFileSystem.getFreeDiskStorageAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getTotalDiskCapacityAsync = async function getTotalDiskCapacityAsync() {
    if (!ExponentFileSystem.getTotalDiskCapacityAsync) {
        throw new UnavailabilityError('expo-file-system', 'getTotalDiskCapacityAsync');
    }
    return await ExponentFileSystem.getTotalDiskCapacityAsync();
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.downloadAsync = async function downloadAsync(uri, fileUri, options = {}) {
    if (!ExponentFileSystem.downloadAsync) {
        throw new UnavailabilityError('expo-file-system', 'downloadAsync');
    }
    return await ExponentFileSystem.downloadAsync(uri, fileUri, options);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.createDownloadResumable = function createDownloadResumable(uri, fileUri, options, callback, resumeData) {
    return new DownloadResumable(uri, fileUri, options, callback, resumeData);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.DownloadResumable = class DownloadResumable {
    constructor(url, fileUri, options = {}, callback, resumeData) {
        this._uuid = UUID.create(4).toString();
        this._url = url;
        this._fileUri = fileUri;
        this._options = options;
        this._resumeData = resumeData;
        this._callback = callback;
        this._subscription = null;
        this._emitter = new EventEmitter(ExponentFileSystem);
    }
    async downloadAsync() {
        if (!ExponentFileSystem.downloadResumableStartAsync) {
            throw new UnavailabilityError('expo-file-system', 'downloadResumableStartAsync');
        }
        this._addSubscription();
        return await ExponentFileSystem.downloadResumableStartAsync(this._url, this._fileUri, this._uuid, this._options, this._resumeData);
    }
    async pauseAsync() {
        if (!ExponentFileSystem.downloadResumablePauseAsync) {
            throw new UnavailabilityError('expo-file-system', 'downloadResumablePauseAsync');
        }
        const pauseResult = await ExponentFileSystem.downloadResumablePauseAsync(this._uuid);
        this._removeSubscription();
        if (pauseResult) {
            this._resumeData = pauseResult.resumeData;
            return this.savable();
        }
        else {
            throw new Error('Unable to generate a savable pause state');
        }
    }
    async resumeAsync() {
        if (!ExponentFileSystem.downloadResumableStartAsync) {
            throw new UnavailabilityError('expo-file-system', 'downloadResumableStartAsync');
        }
        this._addSubscription();
        return await ExponentFileSystem.downloadResumableStartAsync(this._url, this._fileUri, this._uuid, this._options, this._resumeData);
    }
    savable() {
        return {
            url: this._url,
            fileUri: this._fileUri,
            options: this._options,
            resumeData: this._resumeData,
        };
    }
    _addSubscription() {
        if (this._subscription) {
            return;
        }
        this._subscription = this._emitter.addListener('Exponent.downloadProgress', (event) => {
            if (event.uuid === this._uuid) {
                const callback = this._callback;
                if (callback) {
                    callback(event.data);
                }
            }
        });
    }
    _removeSubscription() {
        if (!this._subscription) {
            return;
        }
        this._emitter.removeSubscription(this._subscription);
        this._subscription = null;
    }
};
//# sourceMappingURL=FileSystem.js.map
}, function(modId) { var map = {"./ExponentFileSystem":1589772951360,"./FileSystem.types":1589772951362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951360, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
var __TEMP__ = require('./ExponentFileSystemShim');var ExponentFileSystemShim = __REQUIRE_DEFAULT__(__TEMP__);
let platformModule;
if (NativeModulesProxy.ExponentFileSystem) {
    platformModule = NativeModulesProxy.ExponentFileSystem;
}
else {
    platformModule = ExponentFileSystemShim;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = platformModule;
//# sourceMappingURL=ExponentFileSystem.js.map
}, function(modId) { var map = {"./ExponentFileSystemShim":1589772951361}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951361, function(require, module, exports) {
const platformModule = {
    get name() {
        return 'ExponentFileSystem';
    },
    get documentDirectory() {
        return null;
    },
    get cacheDirectory() {
        return null;
    },
    get bundledAssets() {
        return null;
    },
    get bundleDirectory() {
        return null;
    },
    addListener(eventName) { },
    removeListeners(count) { },
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = platformModule;
//# sourceMappingURL=ExponentFileSystemShim.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951362, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var EncodingType = exports.EncodingType = undefined;
(function (EncodingType) {
    EncodingType["UTF8"] = "utf8";
    EncodingType["Base64"] = "base64";
})(EncodingType || (EncodingType = {}));
//# sourceMappingURL=FileSystem.types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951358);
})()
//# sourceMappingURL=index.js.map