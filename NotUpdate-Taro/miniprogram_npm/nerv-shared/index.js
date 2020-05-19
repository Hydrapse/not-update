module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951495, function(require, module, exports) {
module.exports = require('./dist/index.js')
module.exports.default = module.exports

}, function(modId) {var map = {"./dist/index.js":1589772951496}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951496, function(require, module, exports) {
const EMPTY_CHILDREN = [];
const EMPTY_OBJ = {};
function isNullOrUndef(o) {
    return o === undefined || o === null;
}
function isInvalid(o) {
    return isNullOrUndef(o) || o === true || o === false;
}
function isVNode(node) {
    return !isNullOrUndef(node) && node.vtype === 2 /* Node */;
}
function isVText(node) {
    return !isNullOrUndef(node) && node.vtype === 1 /* Text */;
}
function isComponent(instance) {
    return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}
function isWidget(node) {
    return (!isNullOrUndef(node) &&
        (node.vtype & (4 /* Composite */)) > 0);
}
function isPortal(vtype, node) {
    return (vtype & 32 /* Portal */) > 0;
}
function isComposite(node) {
    return !isNullOrUndef(node) && node.vtype === 4 /* Composite */;
}
function isValidElement(node) {
    return !isNullOrUndef(node) && node.vtype;
}
function isHook(arg) {
    return !isNullOrUndef(arg) && typeof arg.vhook === 'number';
}
// tslint:disable-next-line:no-empty
function noop() { }
// typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4
var VType;
(function (VType) {
    VType[VType["Text"] = 1] = "Text";
    VType[VType["Node"] = 2] = "Node";
    VType[VType["Composite"] = 4] = "Composite";
    VType[VType["Void"] = 16] = "Void";
    VType[VType["Portal"] = 32] = "Portal";
})(VType || (VType = {}));

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'EMPTY_CHILDREN', { enumerable: true, configurable: true, get: function() { return EMPTY_CHILDREN; } });Object.defineProperty(exports, 'EMPTY_OBJ', { enumerable: true, configurable: true, get: function() { return EMPTY_OBJ; } });Object.defineProperty(exports, 'isNullOrUndef', { enumerable: true, configurable: true, get: function() { return isNullOrUndef; } });Object.defineProperty(exports, 'isInvalid', { enumerable: true, configurable: true, get: function() { return isInvalid; } });Object.defineProperty(exports, 'isVNode', { enumerable: true, configurable: true, get: function() { return isVNode; } });Object.defineProperty(exports, 'isVText', { enumerable: true, configurable: true, get: function() { return isVText; } });Object.defineProperty(exports, 'isComponent', { enumerable: true, configurable: true, get: function() { return isComponent; } });Object.defineProperty(exports, 'isWidget', { enumerable: true, configurable: true, get: function() { return isWidget; } });Object.defineProperty(exports, 'isPortal', { enumerable: true, configurable: true, get: function() { return isPortal; } });Object.defineProperty(exports, 'isComposite', { enumerable: true, configurable: true, get: function() { return isComposite; } });Object.defineProperty(exports, 'isValidElement', { enumerable: true, configurable: true, get: function() { return isValidElement; } });Object.defineProperty(exports, 'isHook', { enumerable: true, configurable: true, get: function() { return isHook; } });Object.defineProperty(exports, 'noop', { enumerable: true, configurable: true, get: function() { return noop; } });Object.defineProperty(exports, 'VType', { enumerable: true, configurable: true, get: function() { return VType; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951495);
})()
//# sourceMappingURL=index.js.map