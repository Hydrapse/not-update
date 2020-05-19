module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951418, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = levenArray;

var _leven = _interopRequireDefault(require("leven"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function levenArray(str, array) {
  var minLeven = Number.POSITIVE_INFINITY;
  var result = undefined;

  for (var _i2 = 0; _i2 < array.length; _i2++) {
    var item = array[_i2];
    var distance = (0, _leven.default)(str, item);

    if (distance < minLeven) {
      minLeven = distance;
      result = item;
    }
  }

  return result;
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951418);
})()
//# sourceMappingURL=index.js.map