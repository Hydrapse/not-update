module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951497, function(require, module, exports) {
module.exports = require('./dist/index.js')
module.exports.default = module.exports

}, function(modId) {var map = {"./dist/index.js":1589772951498}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951498, function(require, module, exports) {
// tslint:disable-next-line
var global = (function () {
    let local;
    if (typeof global !== 'undefined') {
        local = global;
    }
    else if (typeof self !== 'undefined') {
        local = self;
    }
    else {
        try {
            // tslint:disable-next-line:function-constructor
            local = Function('return this')();
        }
        catch (e) {
            throw new Error('global object is unavailable in this environment');
        }
    }
    return local;
})();
const isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-empty
function noop() { }
const fakeDoc = {
    createElement: noop,
    createElementNS: noop,
    createTextNode: noop
};
const doc = isBrowser ? document : fakeDoc;
const UA = isBrowser && window.navigator.userAgent.toLowerCase();
const isMacSafari = isBrowser && UA && window.navigator.platform &&
    /mac/i.test(window.navigator.platform) && /^((?!chrome|android).)*safari/i.test(UA);
const isTaro = isBrowser && !document.scripts;
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
const isiOS = (UA && /iphone|ipad|ipod|ios/.test(UA));

function isNumber(arg) {
    return typeof arg === 'number';
}
const isSupportSVG = isFunction(doc.createAttributeNS);
function isString(arg) {
    return typeof arg === 'string';
}
function isFunction(arg) {
    return typeof arg === 'function';
}
function isBoolean(arg) {
    return arg === true || arg === false;
}
const isArray = Array.isArray;
function isObject(arg) {
    return arg === Object(arg) && !isFunction(arg);
}
function isNative(Ctor) {
    return isFunction(Ctor) && /native code/.test(Ctor.toString());
}
function isUndefined(o) {
    return o === undefined;
}
// Object.is polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
    if (x === y) { // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    }
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
}

const canUsePromise = 'Promise' in global && !isMacSafari;
let resolved;
if (canUsePromise) {
    resolved = Promise.resolve();
}
const nextTick = (fn, ...args) => {
    fn = isFunction(fn) ? fn.bind(null, ...args) : fn;
    if (canUsePromise) {
        return resolved.then(fn);
    }
    const timerFunc = 'requestAnimationFrame' in global && !isMacSafari ? requestAnimationFrame : setTimeout;
    timerFunc(fn);
};

/* istanbul ignore next */
// tslint:disable-next-line
Object.is = Object.is || function (x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
};
function shallowEqual(obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        return false;
    }
    if (Object.is(obj1, obj2)) {
        return true;
    }
    const obj1Keys = obj1 ? Object.keys(obj1) : [];
    const obj2Keys = obj2 ? Object.keys(obj2) : [];
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (let i = 0; i < obj1Keys.length; i++) {
        const obj1KeyItem = obj1Keys[i];
        if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
            return false;
        }
    }
    return true;
}

class SimpleMap {
    constructor() {
        this.cache = [];
        this.size = 0;
    }
    set(k, v) {
        const len = this.cache.length;
        if (!len) {
            this.cache.push({ k, v });
            this.size += 1;
            return;
        }
        for (let i = 0; i < len; i++) {
            const item = this.cache[i];
            if (item.k === k) {
                item.v = v;
                return;
            }
        }
        this.cache.push({ k, v });
        this.size += 1;
    }
    get(k) {
        const len = this.cache.length;
        if (!len) {
            return;
        }
        for (let i = 0; i < len; i++) {
            const item = this.cache[i];
            if (item.k === k) {
                return item.v;
            }
        }
    }
    has(k) {
        const len = this.cache.length;
        if (!len) {
            return false;
        }
        for (let i = 0; i < len; i++) {
            const item = this.cache[i];
            if (item.k === k) {
                return true;
            }
        }
        return false;
    }
    delete(k) {
        const len = this.cache.length;
        for (let i = 0; i < len; i++) {
            const item = this.cache[i];
            if (item.k === k) {
                this.cache.splice(i, 1);
                this.size -= 1;
                return true;
            }
        }
        return false;
    }
    clear() {
        let len = this.cache.length;
        this.size = 0;
        if (!len) {
            return;
        }
        while (len) {
            this.cache.pop();
            len--;
        }
    }
}
const MapClass = 'Map' in global ? Map : SimpleMap;

function getPrototype(obj) {
    /* istanbul ignore next */
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(obj);
    }
    else if (obj.__proto__) {
        return obj.__proto__;
    }
    /* istanbul ignore next */
    return obj.constructor.prototype;
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
const extend = (() => {
    if ('assign' in Object) {
        return (source, from) => {
            if (!from) {
                return source;
            }
            Object.assign(source, from);
            return source;
        };
    }
    else {
        return (source, from) => {
            if (!from) {
                return source;
            }
            for (const key in from) {
                if (from.hasOwnProperty(key)) {
                    source[key] = from[key];
                }
            }
            return source;
        };
    }
})();
function clone(obj) {
    return extend({}, obj);
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getPrototype', { enumerable: true, configurable: true, get: function() { return getPrototype; } });Object.defineProperty(exports, 'isAttrAnEvent', { enumerable: true, configurable: true, get: function() { return isAttrAnEvent; } });Object.defineProperty(exports, 'extend', { enumerable: true, configurable: true, get: function() { return extend; } });Object.defineProperty(exports, 'clone', { enumerable: true, configurable: true, get: function() { return clone; } });Object.defineProperty(exports, 'nextTick', { enumerable: true, configurable: true, get: function() { return nextTick; } });Object.defineProperty(exports, 'shallowEqual', { enumerable: true, configurable: true, get: function() { return shallowEqual; } });Object.defineProperty(exports, 'SimpleMap', { enumerable: true, configurable: true, get: function() { return SimpleMap; } });Object.defineProperty(exports, 'MapClass', { enumerable: true, configurable: true, get: function() { return MapClass; } });Object.defineProperty(exports, 'isNumber', { enumerable: true, configurable: true, get: function() { return isNumber; } });Object.defineProperty(exports, 'isSupportSVG', { enumerable: true, configurable: true, get: function() { return isSupportSVG; } });Object.defineProperty(exports, 'isString', { enumerable: true, configurable: true, get: function() { return isString; } });Object.defineProperty(exports, 'isFunction', { enumerable: true, configurable: true, get: function() { return isFunction; } });Object.defineProperty(exports, 'isBoolean', { enumerable: true, configurable: true, get: function() { return isBoolean; } });Object.defineProperty(exports, 'isArray', { enumerable: true, configurable: true, get: function() { return isArray; } });Object.defineProperty(exports, 'isObject', { enumerable: true, configurable: true, get: function() { return isObject; } });Object.defineProperty(exports, 'isNative', { enumerable: true, configurable: true, get: function() { return isNative; } });Object.defineProperty(exports, 'isUndefined', { enumerable: true, configurable: true, get: function() { return isUndefined; } });Object.defineProperty(exports, 'objectIs', { enumerable: true, configurable: true, get: function() { return objectIs; } });Object.defineProperty(exports, 'global', { enumerable: true, configurable: true, get: function() { return global; } });Object.defineProperty(exports, 'isBrowser', { enumerable: true, configurable: true, get: function() { return isBrowser; } });Object.defineProperty(exports, 'doc', { enumerable: true, configurable: true, get: function() { return doc; } });Object.defineProperty(exports, 'UA', { enumerable: true, configurable: true, get: function() { return UA; } });Object.defineProperty(exports, 'isMacSafari', { enumerable: true, configurable: true, get: function() { return isMacSafari; } });Object.defineProperty(exports, 'isTaro', { enumerable: true, configurable: true, get: function() { return isTaro; } });Object.defineProperty(exports, 'isIE9', { enumerable: true, configurable: true, get: function() { return isIE9; } });Object.defineProperty(exports, 'isiOS', { enumerable: true, configurable: true, get: function() { return isiOS; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951497);
})()
//# sourceMappingURL=index.js.map