module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951336, function(require, module, exports) {
var __TEMP__ = require('./Asset.fx');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Asset');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./Asset.fx":1589772951337,"./Asset":1589772951338}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951337, function(require, module, exports) {
var __TEMP__ = require('./Asset');var Asset = __TEMP__['Asset'];
var __TEMP__ = require('./resolveAssetSource');var setCustomSourceTransformer = __TEMP__['setCustomSourceTransformer'];
// Override React Native's asset resolution for `Image` components
setCustomSourceTransformer(resolver => {
    try {
        const asset = Asset.fromMetadata(resolver.asset);
        return resolver.fromSource(asset.downloaded ? asset.localUri : asset.uri);
    }
    catch (e) {
        return resolver.defaultAsset();
    }
});
//# sourceMappingURL=Asset.fx.js.map
}, function(modId) { var map = {"./Asset":1589772951338,"./resolveAssetSource":1589772951340}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951338, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var Platform = __TEMP__['Platform'];
var __TEMP__ = require('expo-file-system');var FileSystem = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('expo-constants');var Constants = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('blueimp-md5');var computeMd5 = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./AssetRegistry');var getAssetByID = __TEMP__['getAssetByID'];
var __TEMP__ = require('./resolveAssetSource');var resolveAssetSource = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./AssetSources');var AssetSources = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./AssetUris');var AssetUris = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./EmbeddedAssets');var EmbeddedAssets = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./ImageAssets');var ImageAssets = __REQUIRE_WILDCARD__(__TEMP__);
const IS_MANAGED_ENV = !!Constants.appOwnership;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.Asset = class Asset {
    constructor({ name, type, hash = null, uri, width, height }) {
        this.hash = null;
        this.localUri = null;
        this.width = null;
        this.height = null;
        this.downloading = false;
        this.downloaded = false;
        this._downloadCallbacks = [];
        this.name = name;
        this.type = type;
        this.hash = hash;
        this.uri = uri;
        if (typeof width === 'number') {
            this.width = width;
        }
        if (typeof height === 'number') {
            this.height = height;
        }
        // This only applies to assets that are bundled in Expo standalone apps
        if (IS_MANAGED_ENV && hash) {
            this.localUri = EmbeddedAssets.getEmbeddedAssetUri(hash, type);
            if (this.localUri) {
                this.downloaded = true;
            }
        }
    }
    static loadAsync(moduleId) {
        const moduleIds = Array.isArray(moduleId) ? moduleId : [moduleId];
        return Promise.all(moduleIds.map(moduleId => Asset.fromModule(moduleId).downloadAsync()));
    }
    static fromModule(virtualAssetModule) {
        if (typeof virtualAssetModule === 'string') {
            return Asset.fromURI(virtualAssetModule);
        }
        const meta = getAssetByID(virtualAssetModule);
        if (!meta) {
            throw new Error(`Module "${virtualAssetModule}" is missing from the asset registry`);
        }
        // Outside of the managed env we need the moduleId to initialize the asset
        // because resolveAssetSource depends on it
        if (!IS_MANAGED_ENV) {
            const { uri } = resolveAssetSource(virtualAssetModule);
            const asset = new Asset({
                name: meta.name,
                type: meta.type,
                hash: meta.hash,
                uri,
                width: meta.width,
                height: meta.height,
            });
            // TODO: FileSystem should probably support 'downloading' from drawable
            // resources But for now it doesn't (it only supports raw resources) and
            // React Native's Image works fine with drawable resource names for
            // images.
            if (Platform.OS === 'android' && !uri.includes(':') && (meta.width || meta.height)) {
                asset.localUri = asset.uri;
                asset.downloaded = true;
            }
            Asset.byHash[meta.hash] = asset;
            return asset;
        }
        return Asset.fromMetadata(meta);
    }
    static fromMetadata(meta) {
        // The hash of the whole asset, not to be confused with the hash of a specific file returned
        // from `selectAssetSource`
        const metaHash = meta.hash;
        if (Asset.byHash[metaHash]) {
            return Asset.byHash[metaHash];
        }
        else if (!IS_MANAGED_ENV && !Asset.byHash[metaHash]) {
            throw new Error('Assets must be initialized with Asset.fromModule');
        }
        const { uri, hash } = AssetSources.selectAssetSource(meta);
        const asset = new Asset({
            name: meta.name,
            type: meta.type,
            hash,
            uri,
            width: meta.width,
            height: meta.height,
        });
        Asset.byHash[metaHash] = asset;
        return asset;
    }
    static fromURI(uri) {
        if (Asset.byUri[uri]) {
            return Asset.byUri[uri];
        }
        // Possibly a Base64-encoded URI
        let type = '';
        if (uri.indexOf(';base64') > -1) {
            type = uri.split(';')[0].split('/')[1];
        }
        else {
            const extension = AssetUris.getFileExtension(uri);
            type = extension.startsWith('.') ? extension.substring(1) : extension;
        }
        const asset = new Asset({
            name: '',
            type,
            hash: null,
            uri,
        });
        Asset.byUri[uri] = asset;
        return asset;
    }
    async _downloadAsyncWeb() {
        if (ImageAssets.isImageType(this.type)) {
            const { width, height, name } = await ImageAssets.getImageInfoAsync(this.uri);
            this.width = width;
            this.height = height;
            this.name = name;
        }
        else {
            this.name = AssetUris.getFilename(this.uri);
        }
        this.localUri = this.uri;
    }
    async _downloadAsyncManagedEnv() {
        const cacheFileId = this.hash || computeMd5(this.uri);
        const localUri = `${FileSystem.cacheDirectory}ExponentAsset-${cacheFileId}.${this.type}`;
        let { exists, md5 } = await FileSystem.getInfoAsync(localUri, {
            md5: true,
        });
        if (!exists || (this.hash !== null && md5 !== this.hash)) {
            ({ md5 } = await FileSystem.downloadAsync(this.uri, localUri, {
                md5: true,
            }));
            if (this.hash !== null && md5 !== this.hash) {
                throw new Error(`Downloaded file for asset '${this.name}.${this.type}' ` +
                    `Located at ${this.uri} ` +
                    `failed MD5 integrity check`);
            }
        }
        this.localUri = localUri;
    }
    async _downloadAsyncUnmanagedEnv() {
        // Bail out if it's already at a file URL because it's already available locally
        if (this.uri.startsWith('file://')) {
            this.localUri = this.uri;
            return;
        }
        const cacheFileId = this.hash || computeMd5(this.uri);
        const localUri = `${FileSystem.cacheDirectory}ExponentAsset-${cacheFileId}.${this.type}`;
        // We don't check the FileSystem for an existing version of the asset and we
        // also don't perform an integrity check!
        await FileSystem.downloadAsync(this.uri, localUri);
        this.localUri = localUri;
    }
    async downloadAsync() {
        if (this.downloaded) {
            return;
        }
        if (this.downloading) {
            await new Promise((resolve, reject) => {
                this._downloadCallbacks.push({ resolve, reject });
            });
            return;
        }
        this.downloading = true;
        try {
            if (Platform.OS === 'web') {
                await this._downloadAsyncWeb();
            }
            else if (IS_MANAGED_ENV) {
                await this._downloadAsyncManagedEnv();
            }
            else {
                await this._downloadAsyncUnmanagedEnv();
            }
            this.downloaded = true;
            this._downloadCallbacks.forEach(({ resolve }) => resolve());
        }
        catch (e) {
            this._downloadCallbacks.forEach(({ reject }) => reject(e));
            throw e;
        }
        finally {
            this.downloading = false;
            this._downloadCallbacks = [];
        }
    }
};
Asset.byHash = {};
Asset.byUri = {};
//# sourceMappingURL=Asset.js.map
}, function(modId) { var map = {"./AssetRegistry":1589772951339,"./resolveAssetSource":1589772951340,"./AssetSources":1589772951341,"./AssetUris":1589772951343,"./EmbeddedAssets":1589772951344,"./ImageAssets":1589772951345}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951339, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('react-native/Libraries/Image/AssetRegistry');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
//# sourceMappingURL=AssetRegistry.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951340, function(require, module, exports) {
var __TEMP__ = require('react-native/Libraries/Image/resolveAssetSource');var resolveAssetSource = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = resolveAssetSource;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('react-native/Libraries/Image/resolveAssetSource');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
//# sourceMappingURL=resolveAssetSource.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951341, function(require, module, exports) {
var __TEMP__ = require('expo-constants');var Constants = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@unimodules/core');var Platform = __TEMP__['Platform'];
var __TEMP__ = require('path-browserify');var path = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react-native');var PixelRatio = __TEMP__['PixelRatio'];
var __TEMP__ = require('url-parse');var URL = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./AssetSourceResolver');var AssetSourceResolver = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./AssetUris');var getManifestBaseUrl = __TEMP__['getManifestBaseUrl'];
// Fast lookup check if asset map has any overrides in the manifest
const assetMapOverride = Constants.manifest && Constants.manifest.assetMapOverride;
// Compute manifest base URL if available
const manifestBaseUrl = Constants.experienceUrl
    ? getManifestBaseUrl(Constants.experienceUrl)
    : null;
/**
 * Selects the best file for the given asset (ex: choosing the best scale for images) and returns
 * a { uri, hash } pair for the specific asset file.
 *
 * If the asset isn't an image with multiple scales, the first file is selected.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.selectAssetSource = function selectAssetSource(meta) {
    // Override with the asset map in manifest if available
    if (assetMapOverride && assetMapOverride.hasOwnProperty(meta.hash)) {
        meta = { ...meta, ...assetMapOverride[meta.hash] };
    }
    // This logic is based on that of AssetSourceResolver, with additional support for file hashes and
    // explicitly provided URIs
    const scale = AssetSourceResolver.pickScale(meta.scales, PixelRatio.get());
    const index = meta.scales.findIndex(s => s === scale);
    const hash = meta.fileHashes ? meta.fileHashes[index] || meta.fileHashes[0] : meta.hash;
    // Allow asset processors to directly provide the URL to load
    const uri = meta.fileUris ? meta.fileUris[index] || meta.fileUris[0] : meta.uri;
    if (uri) {
        return { uri: resolveUri(uri), hash };
    }
    // Check if the assetUrl was overridden in the manifest
    const assetUrlOverride = Constants.manifest && Constants.manifest.assetUrlOverride;
    if (assetUrlOverride) {
        const uri = path.join(assetUrlOverride, hash);
        return { uri: resolveUri(uri), hash };
    }
    const fileScale = scale === 1 ? '' : `@${scale}x`;
    const fileExtension = meta.type ? `.${encodeURIComponent(meta.type)}` : '';
    const suffix = `/${encodeURIComponent(meta.name)}${fileScale}${fileExtension}?platform=${encodeURIComponent(Platform.OS)}&hash=${encodeURIComponent(meta.hash)}`;
    // For assets with a specified absolute URL, we use the existing origin instead of prepending the
    // development server or production CDN URL origin
    if (/^https?:\/\//.test(meta.httpServerLocation)) {
        const uri = meta.httpServerLocation + suffix;
        return { uri, hash };
    }
    // For assets during development, we use the development server's URL origin
    if (Constants.manifest && Constants.manifest.developer) {
        const baseUrl = new URL(Constants.manifest.bundleUrl);
        baseUrl.set('pathname', meta.httpServerLocation + suffix);
        return { uri: baseUrl.href, hash };
    }
    // Production CDN URIs are based on each asset file hash
    return {
        uri: `https://d1wp6m56sqw74a.cloudfront.net/~assets/${encodeURIComponent(hash)}`,
        hash,
    };
};
/**
 * Resolves the given URI to an absolute URI. If the given URI is already an absolute URI, it is
 * simply returned. Otherwise, if it is a relative URI, it is resolved relative to the manifest's
 * base URI.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.resolveUri = function resolveUri(uri) {
    if (!manifestBaseUrl) {
        return uri;
    }
    const { protocol } = new URL(uri);
    if (protocol !== '') {
        return uri;
    }
    const baseUrl = new URL(manifestBaseUrl);
    const resolvedPath = uri.startsWith('/') ? uri : path.join(baseUrl.pathname, uri);
    baseUrl.set('pathname', resolvedPath);
    return baseUrl.href;
};
//# sourceMappingURL=AssetSources.js.map
}, function(modId) { var map = {"./AssetSourceResolver":1589772951342,"./AssetUris":1589772951343}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951342, function(require, module, exports) {
var __TEMP__ = require('react-native/Libraries/Image/AssetSourceResolver');var AssetSourceResolver = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = AssetSourceResolver;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('react-native/Libraries/Image/AssetSourceResolver');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
//# sourceMappingURL=AssetSourceResolver.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951343, function(require, module, exports) {
var __TEMP__ = require('url-parse');var URL = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getFilename = function getFilename(url) {
    const { pathname } = new URL(url, {});
    return pathname.substring(pathname.lastIndexOf('/') + 1);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getFileExtension = function getFileExtension(url) {
    const filename = getFilename(url);
    const dotIndex = filename.lastIndexOf('.');
    // Ignore leading dots for hidden files
    return dotIndex > 0 ? filename.substring(dotIndex) : '';
};
/**
 * Returns the base URL from a manifest's URL. For example, given a manifest hosted at
 * https://example.com/app/manifest.json, the base URL would be https://example.com/app/. Query
 * parameters and fragments also are removed.
 *
 * For an Expo-hosted project with a manifest hosted at https://expo.io/@user/project/index.exp, the
 * base URL would be https://expo.io/@user/project.
 *
 * We also normalize the "exp" protocol to "http" to handle internal URLs with the Expo schemes used
 * to tell the OS to open the URLs in the the Expo client.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getManifestBaseUrl = function getManifestBaseUrl(manifestUrl) {
    const urlObject = new URL(manifestUrl, {});
    // Change the scheme to http(s) if it is exp(s)
    if (urlObject.protocol === 'exp:') {
        urlObject.set('protocol', 'http:');
    }
    else if (urlObject.protocol === 'exps:') {
        urlObject.set('protocol', 'https:');
    }
    // Trim filename, query parameters, and fragment, if any
    const directory = urlObject.pathname.substring(0, urlObject.pathname.lastIndexOf('/') + 1);
    urlObject.set('pathname', directory);
    urlObject.set('query', '');
    urlObject.set('hash', '');
    return urlObject.href;
};
//# sourceMappingURL=AssetUris.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951344, function(require, module, exports) {
var __TEMP__ = require('expo-constants');var Constants = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('expo-file-system');var FileSystem = __REQUIRE_WILDCARD__(__TEMP__);
// Fast lookup check if assets are available in the local bundle
const bundledAssets = new Set(FileSystem.bundledAssets || []);
/**
 * Returns the local URI of an embedded asset from its hash and type, or null if the asset is not
 * included in the app bundle.
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getEmbeddedAssetUri = function getEmbeddedAssetUri(hash, type) {
    const assetName = `asset_${hash}${type ? `.${type}` : ''}`;
    if (__DEV__ || Constants.appOwnership !== 'standalone' || !bundledAssets.has(assetName)) {
        return null;
    }
    return `${FileSystem.bundleDirectory}${assetName}`;
};
//# sourceMappingURL=EmbeddedAssets.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951345, function(require, module, exports) {
var __TEMP__ = require('./AssetUris');var getFilename = __TEMP__['getFilename'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isImageType = function isImageType(type) {
    return /^(jpeg|jpg|gif|png|bmp|webp|heic)$/i.test(type);
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getImageInfoAsync = function getImageInfoAsync(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
            resolve({
                name: getFilename(url),
                width: img.naturalWidth,
                height: img.naturalHeight,
            });
        };
        img.src = url;
    });
};
//# sourceMappingURL=ImageAssets.js.map
}, function(modId) { var map = {"./AssetUris":1589772951343}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951336);
})()
//# sourceMappingURL=index.js.map