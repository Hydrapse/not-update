module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951346, function(require, module, exports) {
var __TEMP__ = require('./Audio');var Audio = __REQUIRE_WILDCARD__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Audio', { enumerable: true, configurable: true, get: function() { return Audio; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Video');Object.defineProperty(exports, 'Video', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./Audio":1589772951347}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951347, function(require, module, exports) {
var __TEMP__ = require('./ExponentAV');var ExponentAV = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Audio/Recording');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Audio/Sound');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./Audio/AudioAvailability');Object.defineProperty(exports, 'setIsEnabledAsync', { enumerable: true, configurable: true, get: function() { return __TEMP__.setIsEnabledAsync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./AV');Object.defineProperty(exports, 'PitchCorrectionQuality', { enumerable: true, configurable: true, get: function() { return __TEMP__.PitchCorrectionQuality; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = exports.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = 0;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var INTERRUPTION_MODE_IOS_DO_NOT_MIX = exports.INTERRUPTION_MODE_IOS_DO_NOT_MIX = 1;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var INTERRUPTION_MODE_IOS_DUCK_OTHERS = exports.INTERRUPTION_MODE_IOS_DUCK_OTHERS = 2;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = exports.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = 1;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = exports.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = 2;
// Returns true if value is in validValues, and false if not.
const _isValueValid = (value, validValues) => {
    return validValues.filter(validValue => validValue === value).length > 0;
};
// Returns array of missing keys in object. Returns an empty array if no missing keys are found.
const _findMissingKeys = (object, requiredKeys) => {
    return requiredKeys.filter(requiredKey => !(requiredKey in object));
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setAudioModeAsync = async function setAudioModeAsync(mode) {
    const missingKeys = _findMissingKeys(mode, [
        'allowsRecordingIOS',
        'interruptionModeIOS',
        'playsInSilentModeIOS',
        'staysActiveInBackground',
        'interruptionModeAndroid',
        'shouldDuckAndroid',
        'playThroughEarpieceAndroid',
    ]);
    if (missingKeys.length > 0) {
        throw new Error(`Audio mode attempted to be set without the required keys: ${JSON.stringify(missingKeys)}`);
    }
    if (!_isValueValid(mode.interruptionModeIOS, [
        INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
        INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    ])) {
        throw new Error(`"interruptionModeIOS" was set to an invalid value.`);
    }
    if (!_isValueValid(mode.interruptionModeAndroid, [
        INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    ])) {
        throw new Error(`"interruptionModeAndroid" was set to an invalid value.`);
    }
    if (typeof mode.allowsRecordingIOS !== 'boolean' ||
        typeof mode.playsInSilentModeIOS !== 'boolean' ||
        typeof mode.staysActiveInBackground !== 'boolean' ||
        typeof mode.shouldDuckAndroid !== 'boolean' ||
        typeof mode.playThroughEarpieceAndroid !== 'boolean') {
        throw new Error('"allowsRecordingIOS", "playsInSilentModeIOS", "playThroughEarpieceAndroid", "staysActiveInBackground" and "shouldDuckAndroid" must be booleans.');
    }
    return await ExponentAV.setAudioMode(mode);
};
//# sourceMappingURL=Audio.js.map
}, function(modId) { var map = {"./ExponentAV":1589772951348,"./Audio/Recording":1589772951349,"./Audio/Sound":1589772951352,"./Audio/AudioAvailability":1589772951351,"./AV":1589772951350}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951348, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var NativeModulesProxy = __TEMP__['NativeModulesProxy'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = NativeModulesProxy.ExponentAV;
//# sourceMappingURL=ExponentAV.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951349, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var EventEmitter = __TEMP__['EventEmitter'];var Platform = __TEMP__['Platform'];
var __TEMP__ = require('../AV');var _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS = __TEMP__['_DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS'];
var __TEMP__ = require('../ExponentAV');var ExponentAV = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./AudioAvailability');var isAudioEnabled = __TEMP__['isAudioEnabled'];var throwIfAudioIsDisabled = __TEMP__['throwIfAudioIsDisabled'];
var __TEMP__ = require('./Sound');var Sound = __TEMP__['Sound'];
// TODO: consider changing these to enums
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT = 0;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP = 1;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4 = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4 = 2;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB = 3;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB = 4;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF = 5;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS = 6;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP = 7;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS = 8;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM = exports.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM = 9;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT = 0;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB = 1;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB = 2;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC = 3;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC = 4;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD = exports.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD = 5;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM = 'lpcm';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3 = 'ac-3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3 = 'cac3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4 = 'ima4';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC = 'aac ';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP = 'celp';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC = 'hvxc';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ = 'twvq';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3 = 'MAC3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6 = 'MAC6';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW = 'ulaw';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW = 'alaw';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN = 'QDMC';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2 = 'QDM2';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM = 'Qclp';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1 = '.mp1';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2 = '.mp2';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3 = '.mp3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS = 'alac';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE = 'aach';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD = 'aacl';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD = 'aace';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR = 'aacf';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2 = 'aacg';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2 = 'aacp';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL = 'aacs';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR = 'samr';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB = 'sawb';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE = 'AUDB';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC = 'ilbc';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA = 0x6d730011;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM = 0x6d730031;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 = 'aes3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 = exports.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 = 'ec-3';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN = exports.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN = 0;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW = exports.RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW = 0x20;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM = exports.RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM = 0x40;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH = exports.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH = 0x60;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX = exports.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX = 0x7f;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT = exports.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT = 0;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE = exports.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE = 1;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED = exports.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED = 2;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE = exports.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE = 3;
// TODO : maybe make presets for music and speech, or lossy / lossless.
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTIONS_PRESET_HIGH_QUALITY = exports.RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
    android: {
        extension: '.m4a',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.caf',
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var RECORDING_OPTIONS_PRESET_LOW_QUALITY = exports.RECORDING_OPTIONS_PRESET_LOW_QUALITY = {
    android: {
        extension: '.3gp',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.caf',
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};
let _recorderExists = false;
const eventEmitter = Platform.OS === 'android' ? new EventEmitter(ExponentAV) : null;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.Recording = class Recording {
    constructor() {
        this._subscription = null;
        this._canRecord = false;
        this._isDoneRecording = false;
        this._finalDurationMillis = 0;
        this._uri = null;
        this._onRecordingStatusUpdate = null;
        this._progressUpdateTimeoutVariable = null;
        this._progressUpdateIntervalMillis = _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS;
        this._options = null;
        // Internal methods
        this._cleanupForUnloadedRecorder = async (finalStatus) => {
            this._canRecord = false;
            this._isDoneRecording = true;
            // $FlowFixMe(greg): durationMillis is not always defined
            this._finalDurationMillis = finalStatus.durationMillis;
            _recorderExists = false;
            if (this._subscription) {
                this._subscription.remove();
                this._subscription = null;
            }
            this._disablePolling();
            return await this.getStatusAsync(); // Automatically calls onRecordingStatusUpdate for the final state.
        };
        this._pollingLoop = async () => {
            if (isAudioEnabled() && this._canRecord && this._onRecordingStatusUpdate != null) {
                this._progressUpdateTimeoutVariable = setTimeout(this._pollingLoop, this._progressUpdateIntervalMillis);
                try {
                    await this.getStatusAsync();
                }
                catch (error) {
                    this._disablePolling();
                }
            }
        };
        // Note that all calls automatically call onRecordingStatusUpdate as a side effect.
        // Get status API
        this.getStatusAsync = async () => {
            // Automatically calls onRecordingStatusUpdate.
            if (this._canRecord) {
                return this._performOperationAndHandleStatusAsync(() => ExponentAV.getAudioRecordingStatus());
            }
            const status = {
                canRecord: false,
                isRecording: false,
                isDoneRecording: this._isDoneRecording,
                durationMillis: this._finalDurationMillis,
            };
            this._callOnRecordingStatusUpdateForNewStatus(status);
            return status;
        };
    }
    _disablePolling() {
        if (this._progressUpdateTimeoutVariable != null) {
            clearTimeout(this._progressUpdateTimeoutVariable);
            this._progressUpdateTimeoutVariable = null;
        }
    }
    _enablePollingIfNecessaryAndPossible() {
        if (isAudioEnabled() && this._canRecord && this._onRecordingStatusUpdate != null) {
            this._disablePolling();
            this._pollingLoop();
        }
    }
    _callOnRecordingStatusUpdateForNewStatus(status) {
        if (this._onRecordingStatusUpdate != null) {
            this._onRecordingStatusUpdate(status);
        }
    }
    async _performOperationAndHandleStatusAsync(operation) {
        throwIfAudioIsDisabled();
        if (this._canRecord) {
            const status = await operation();
            this._callOnRecordingStatusUpdateForNewStatus(status);
            return status;
        }
        else {
            throw new Error('Cannot complete operation because this recorder is not ready to record.');
        }
    }
    setOnRecordingStatusUpdate(onRecordingStatusUpdate) {
        this._onRecordingStatusUpdate = onRecordingStatusUpdate;
        if (onRecordingStatusUpdate == null) {
            this._disablePolling();
        }
        else {
            this._enablePollingIfNecessaryAndPossible();
        }
        this.getStatusAsync();
    }
    setProgressUpdateInterval(progressUpdateIntervalMillis) {
        this._progressUpdateIntervalMillis = progressUpdateIntervalMillis;
        this.getStatusAsync();
    }
    // Record API
    async prepareToRecordAsync(options = RECORDING_OPTIONS_PRESET_LOW_QUALITY) {
        throwIfAudioIsDisabled();
        if (_recorderExists) {
            throw new Error('Only one Recording object can be prepared at a given time.');
        }
        if (this._isDoneRecording) {
            throw new Error('This Recording object is done recording; you must make a new one.');
        }
        if (!options || !options.android || !options.ios) {
            throw new Error('You must provide recording options for android and ios in order to prepare to record.');
        }
        const extensionRegex = /^\.\w+$/;
        if (!options.android.extension ||
            !options.ios.extension ||
            !extensionRegex.test(options.android.extension) ||
            !extensionRegex.test(options.ios.extension)) {
            throw new Error(`Your file extensions must match ${extensionRegex.toString()}.`);
        }
        if (!this._canRecord) {
            if (eventEmitter) {
                this._subscription = eventEmitter.addListener('Expo.Recording.recorderUnloaded', this._cleanupForUnloadedRecorder);
            }
            const { uri, status, } = await ExponentAV.prepareAudioRecorder(options);
            _recorderExists = true;
            this._uri = uri;
            this._options = options;
            this._canRecord = true;
            const currentStatus = { ...status, canRecord: true };
            this._callOnRecordingStatusUpdateForNewStatus(currentStatus);
            this._enablePollingIfNecessaryAndPossible();
            return currentStatus;
        }
        else {
            throw new Error('This Recording object is already prepared to record.');
        }
    }
    async startAsync() {
        return this._performOperationAndHandleStatusAsync(() => ExponentAV.startAudioRecording());
    }
    async pauseAsync() {
        return this._performOperationAndHandleStatusAsync(() => ExponentAV.pauseAudioRecording());
    }
    async stopAndUnloadAsync() {
        if (!this._canRecord) {
            if (this._isDoneRecording) {
                throw new Error('Cannot unload a Recording that has already been unloaded.');
            }
            else {
                throw new Error('Cannot unload a Recording that has not been prepared.');
            }
        }
        // We perform a separate native API call so that the state of the Recording can be updated with
        // the final duration of the recording. (We cast stopStatus as Object to appease Flow)
        const finalStatus = await ExponentAV.stopAudioRecording();
        await ExponentAV.unloadAudioRecorder();
        return this._cleanupForUnloadedRecorder(finalStatus);
    }
    // Read API
    getURI() {
        return this._uri;
    }
    async createNewLoadedSound(initialStatus = {}, onPlaybackStatusUpdate = null) {
        console.warn(`createNewLoadedSound is deprecated in favor of createNewLoadedSoundAsync, which has the same API aside from the method name`);
        return this.createNewLoadedSoundAsync(initialStatus, onPlaybackStatusUpdate);
    }
    async createNewLoadedSoundAsync(initialStatus = {}, onPlaybackStatusUpdate = null) {
        if (this._uri == null || !this._isDoneRecording) {
            throw new Error('Cannot create sound when the Recording has not finished!');
        }
        return Sound.createAsync(
        // $FlowFixMe: Flow can't distinguish between this literal and Asset
        { uri: this._uri }, initialStatus, onPlaybackStatusUpdate, false);
    }
};
//# sourceMappingURL=Recording.js.map
}, function(modId) { var map = {"../AV":1589772951350,"../ExponentAV":1589772951348,"./AudioAvailability":1589772951351,"./Sound":1589772951352}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951350, function(require, module, exports) {
var __TEMP__ = require('./ExponentAV');var ExponentAV = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('expo-asset');var Asset = __TEMP__['Asset'];
var __TEMP__ = require('@unimodules/core');var Platform = __TEMP__['Platform'];
// TODO add:
//  disableFocusOnAndroid
//  audio routes (at least did become noisy on android)
//  pan
//  pitch
//  API to explicitly request audio focus / session
//  API to select stream type on Android
//  subtitles API
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var PitchCorrectionQuality = exports.PitchCorrectionQuality = undefined;
(function (PitchCorrectionQuality) {
    PitchCorrectionQuality[PitchCorrectionQuality["Low"] = ExponentAV && ExponentAV.Qualities && ExponentAV.Qualities.Low] = "Low";
    PitchCorrectionQuality[PitchCorrectionQuality["Medium"] = ExponentAV && ExponentAV.Qualities && ExponentAV.Qualities.Medium] = "Medium";
    PitchCorrectionQuality[PitchCorrectionQuality["High"] = ExponentAV && ExponentAV.Qualities && ExponentAV.Qualities.High] = "High";
})(PitchCorrectionQuality || (PitchCorrectionQuality = {}));
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS = exports._DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS = 500;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var _DEFAULT_INITIAL_PLAYBACK_STATUS = exports._DEFAULT_INITIAL_PLAYBACK_STATUS = {
    positionMillis: 0,
    progressUpdateIntervalMillis: _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS,
    shouldPlay: false,
    rate: 1.0,
    shouldCorrectPitch: false,
    volume: 1.0,
    isMuted: false,
    isLooping: false,
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getNativeSourceFromSource = function getNativeSourceFromSource(source) {
    let uri = null;
    let overridingExtension = null;
    let headers;
    if (typeof source === 'string' && Platform.OS === 'web') {
        return {
            uri: source,
            overridingExtension,
            headers,
        };
    }
    let asset = _getAssetFromPlaybackSource(source);
    if (asset != null) {
        uri = asset.localUri || asset.uri;
    }
    else if (source != null &&
        typeof source !== 'number' &&
        'uri' in source &&
        typeof source.uri === 'string') {
        uri = source.uri;
    }
    if (uri == null) {
        return null;
    }
    if (source != null &&
        typeof source !== 'number' &&
        'overrideFileExtensionAndroid' in source &&
        typeof source.overrideFileExtensionAndroid === 'string') {
        overridingExtension = source.overrideFileExtensionAndroid;
    }
    if (source != null &&
        typeof source !== 'number' &&
        'headers' in source &&
        typeof source.headers === 'object') {
        headers = source.headers;
    }
    return { uri, overridingExtension, headers };
};
function _getAssetFromPlaybackSource(source) {
    if (source == null) {
        return null;
    }
    let asset = null;
    if (typeof source === 'number') {
        asset = Asset.fromModule(source);
    }
    else if (source instanceof Asset) {
        asset = source;
    }
    return asset;
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.assertStatusValuesInBounds = function assertStatusValuesInBounds(status) {
    if (typeof status.rate === 'number' && (status.rate < 0 || status.rate > 32)) {
        throw new RangeError('Rate value must be between 0.0 and 32.0');
    }
    if (typeof status.volume === 'number' && (status.volume < 0 || status.volume > 1)) {
        throw new RangeError('Volume value must be between 0.0 and 1.0');
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getNativeSourceAndFullInitialStatusForLoadAsync = async function getNativeSourceAndFullInitialStatusForLoadAsync(source, initialStatus, downloadFirst) {
    // Get the full initial status
    const fullInitialStatus = initialStatus == null
        ? _DEFAULT_INITIAL_PLAYBACK_STATUS
        : {
            ..._DEFAULT_INITIAL_PLAYBACK_STATUS,
            ...initialStatus,
        };
    assertStatusValuesInBounds(fullInitialStatus);
    if (typeof source === 'string' && Platform.OS === 'web') {
        return {
            nativeSource: {
                uri: source,
                overridingExtension: null,
            },
            fullInitialStatus,
        };
    }
    // Download first if necessary.
    let asset = _getAssetFromPlaybackSource(source);
    if (downloadFirst && asset) {
        // TODO we can download remote uri too once @nikki93 has integrated this into Asset
        await asset.downloadAsync();
    }
    // Get the native source
    const nativeSource = getNativeSourceFromSource(source);
    if (nativeSource === null) {
        throw new Error(`Cannot load an AV asset from a null playback source`);
    }
    return { nativeSource, fullInitialStatus };
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.getUnloadedStatus = function getUnloadedStatus(error = null) {
    return {
        isLoaded: false,
        ...(error ? { error } : null),
    };
};
/**
 * A mixin that defines common playback methods for A/V classes so they implement the `Playback`
 * interface
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var PlaybackMixin = exports.PlaybackMixin = {
    async playAsync() {
        return this.setStatusAsync({ shouldPlay: true });
    },
    async playFromPositionAsync(positionMillis, tolerances = {}) {
        return this.setStatusAsync({
            positionMillis,
            shouldPlay: true,
            seekMillisToleranceAfter: tolerances.toleranceMillisAfter,
            seekMillisToleranceBefore: tolerances.toleranceMillisBefore,
        });
    },
    async pauseAsync() {
        return this.setStatusAsync({ shouldPlay: false });
    },
    async stopAsync() {
        return this.setStatusAsync({ positionMillis: 0, shouldPlay: false });
    },
    async setPositionAsync(positionMillis, tolerances = {}) {
        return this.setStatusAsync({
            positionMillis,
            seekMillisToleranceAfter: tolerances.toleranceMillisAfter,
            seekMillisToleranceBefore: tolerances.toleranceMillisBefore,
        });
    },
    async setRateAsync(rate, shouldCorrectPitch = false, pitchCorrectionQuality = PitchCorrectionQuality.Low) {
        return this.setStatusAsync({
            rate,
            shouldCorrectPitch,
            pitchCorrectionQuality,
        });
    },
    async setVolumeAsync(volume) {
        return this.setStatusAsync({ volume });
    },
    async setIsMutedAsync(isMuted) {
        return this.setStatusAsync({ isMuted });
    },
    async setIsLoopingAsync(isLooping) {
        return this.setStatusAsync({ isLooping });
    },
    async setProgressUpdateIntervalAsync(progressUpdateIntervalMillis) {
        return this.setStatusAsync({ progressUpdateIntervalMillis });
    },
};
//# sourceMappingURL=AV.js.map
}, function(modId) { var map = {"./ExponentAV":1589772951348}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951351, function(require, module, exports) {
var __TEMP__ = require('../ExponentAV');var ExponentAV = __REQUIRE_DEFAULT__(__TEMP__);
let _enabled = true;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.isAudioEnabled = function isAudioEnabled() {
    return _enabled;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.throwIfAudioIsDisabled = function throwIfAudioIsDisabled() {
    if (!_enabled) {
        throw new Error('Cannot complete operation because audio is not enabled.');
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.setIsEnabledAsync = async function setIsEnabledAsync(value) {
    _enabled = value;
    await ExponentAV.setAudioIsEnabled(value);
    // TODO : We immediately pause all players when disabled, but we do not resume all shouldPlay
    // players when enabled. Perhaps for completeness we should allow this; the design of the
    // enabling API is for people to enable / disable this audio library, but I think that it should
    // intuitively also double as a global pause/resume.
};
//# sourceMappingURL=AudioAvailability.js.map
}, function(modId) { var map = {"../ExponentAV":1589772951348}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951352, function(require, module, exports) {
var __TEMP__ = require('@unimodules/core');var EventEmitter = __TEMP__['EventEmitter'];
var __TEMP__ = require('./AudioAvailability');var throwIfAudioIsDisabled = __TEMP__['throwIfAudioIsDisabled'];
var __TEMP__ = require('../AV');var PlaybackMixin = __TEMP__['PlaybackMixin'];var assertStatusValuesInBounds = __TEMP__['assertStatusValuesInBounds'];var getNativeSourceAndFullInitialStatusForLoadAsync = __TEMP__['getNativeSourceAndFullInitialStatusForLoadAsync'];var getUnloadedStatus = __TEMP__['getUnloadedStatus'];
var __TEMP__ = require('../ExponentAV');var ExponentAV = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.Sound = class Sound {
    constructor() {
        this._loaded = false;
        this._loading = false;
        this._key = null;
        this._lastStatusUpdate = null;
        this._lastStatusUpdateTime = null;
        this._subscriptions = [];
        this._eventEmitter = new EventEmitter(ExponentAV);
        this._coalesceStatusUpdatesInMillis = 100;
        this._onPlaybackStatusUpdate = null;
        this._internalStatusUpdateCallback = ({ key, status, }) => {
            if (this._key === key) {
                this._callOnPlaybackStatusUpdateForNewStatus(status);
            }
        };
        this._internalErrorCallback = ({ key, error }) => {
            if (this._key === key) {
                this._errorCallback(error);
            }
        };
        this._errorCallback = (error) => {
            this._clearSubscriptions();
            this._loaded = false;
            this._key = null;
            this._callOnPlaybackStatusUpdateForNewStatus(getUnloadedStatus(error));
        };
        // ### Unified playback API ### (consistent with Video.js)
        // All calls automatically call onPlaybackStatusUpdate as a side effect.
        // Get status API
        this.getStatusAsync = async () => {
            if (this._loaded) {
                return this._performOperationAndHandleStatusAsync(() => ExponentAV.getStatusForSound(this._key));
            }
            const status = getUnloadedStatus();
            this._callOnPlaybackStatusUpdateForNewStatus(status);
            return status;
        };
    }
    // Internal methods
    _callOnPlaybackStatusUpdateForNewStatus(status) {
        const shouldDismissBasedOnCoalescing = this._lastStatusUpdateTime &&
            JSON.stringify(status) === this._lastStatusUpdate &&
            Date.now() - this._lastStatusUpdateTime.getTime() < this._coalesceStatusUpdatesInMillis;
        if (this._onPlaybackStatusUpdate != null && !shouldDismissBasedOnCoalescing) {
            this._onPlaybackStatusUpdate(status);
            this._lastStatusUpdateTime = new Date();
            this._lastStatusUpdate = JSON.stringify(status);
        }
    }
    async _performOperationAndHandleStatusAsync(operation) {
        throwIfAudioIsDisabled();
        if (this._loaded) {
            const status = await operation();
            this._callOnPlaybackStatusUpdateForNewStatus(status);
            return status;
        }
        else {
            throw new Error('Cannot complete operation because sound is not loaded.');
        }
    }
    // TODO: We can optimize by only using time observer on native if (this._onPlaybackStatusUpdate).
    _subscribeToNativeEvents() {
        if (this._loaded) {
            this._subscriptions.push(this._eventEmitter.addListener('didUpdatePlaybackStatus', this._internalStatusUpdateCallback));
            this._subscriptions.push(this._eventEmitter.addListener('ExponentAV.onError', this._internalErrorCallback));
        }
    }
    _clearSubscriptions() {
        this._subscriptions.forEach(e => e.remove());
        this._subscriptions = [];
    }
    setOnPlaybackStatusUpdate(onPlaybackStatusUpdate) {
        this._onPlaybackStatusUpdate = onPlaybackStatusUpdate;
        this.getStatusAsync();
    }
    // Loading / unloading API
    async loadAsync(source, initialStatus = {}, downloadFirst = true) {
        throwIfAudioIsDisabled();
        if (this._loading) {
            throw new Error('The Sound is already loading.');
        }
        if (!this._loaded) {
            this._loading = true;
            const { nativeSource, fullInitialStatus, } = await getNativeSourceAndFullInitialStatusForLoadAsync(source, initialStatus, downloadFirst);
            // This is a workaround, since using load with resolve / reject seems to not work.
            return new Promise((resolve, reject) => {
                const loadSuccess = (result) => {
                    const [key, status] = result;
                    this._key = key;
                    this._loaded = true;
                    this._loading = false;
                    this._subscribeToNativeEvents();
                    this._callOnPlaybackStatusUpdateForNewStatus(status);
                    resolve(status);
                };
                const loadError = (error) => {
                    this._loading = false;
                    reject(error);
                };
                ExponentAV.loadForSound(nativeSource, fullInitialStatus)
                    .then(loadSuccess)
                    .catch(loadError);
            });
        }
        else {
            throw new Error('The Sound is already loaded.');
        }
    }
    async unloadAsync() {
        if (this._loaded) {
            this._loaded = false;
            const key = this._key;
            this._key = null;
            const status = await ExponentAV.unloadForSound(key);
            this._callOnPlaybackStatusUpdateForNewStatus(status);
            this._clearSubscriptions();
            return status;
        }
        else {
            return this.getStatusAsync(); // Automatically calls onPlaybackStatusUpdate.
        }
    }
    // Set status API (only available while isLoaded = true)
    async setStatusAsync(status) {
        assertStatusValuesInBounds(status);
        return this._performOperationAndHandleStatusAsync(() => ExponentAV.setStatusForSound(this._key, status));
    }
    async replayAsync(status = {}) {
        if (status.positionMillis && status.positionMillis !== 0) {
            throw new Error('Requested position after replay has to be 0.');
        }
        return this._performOperationAndHandleStatusAsync(() => ExponentAV.replaySound(this._key, {
            ...status,
            positionMillis: 0,
            shouldPlay: true,
        }));
    }
};
Sound.create = async (source, initialStatus = {}, onPlaybackStatusUpdate = null, downloadFirst = true) => {
    console.warn(`Sound.create is deprecated in favor of Sound.createAsync with the same API except for the new method name`);
    return Sound.createAsync(source, initialStatus, onPlaybackStatusUpdate, downloadFirst);
};
Sound.createAsync = async (source, initialStatus = {}, onPlaybackStatusUpdate = null, downloadFirst = true) => {
    const sound = new Sound();
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    const status = await sound.loadAsync(source, initialStatus, downloadFirst);
    return { sound, status };
};
Object.assign(Sound.prototype, PlaybackMixin);
//# sourceMappingURL=Sound.js.map
}, function(modId) { var map = {"./AudioAvailability":1589772951351,"../AV":1589772951350,"../ExponentAV":1589772951348}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951346);
})()
//# sourceMappingURL=index.js.map