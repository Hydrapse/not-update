module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950094, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxNullishCoalescingOperator = _interopRequireDefault(require("@babel/plugin-syntax-nullish-coalescing-operator"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)((api, {
  loose = false
}) => {
  api.assertVersion(7);
  return {
    name: "proposal-nullish-coalescing-operator",
    inherits: _pluginSyntaxNullishCoalescingOperator.default,
    visitor: {
      LogicalExpression(path) {
        const {
          node,
          scope
        } = path;

        if (node.operator !== "??") {
          return;
        }

        let ref = scope.maybeGenerateMemoised(node.left);
        let assignment;

        if (ref === null) {
          ref = node.left;
          assignment = _core.types.cloneNode(node.left);
        } else {
          assignment = _core.types.assignmentExpression("=", ref, node.left);
        }

        path.replaceWith(_core.types.conditionalExpression(loose ? _core.types.binaryExpression("!=", assignment, _core.types.nullLiteral()) : _core.types.logicalExpression("&&", _core.types.binaryExpression("!==", assignment, _core.types.nullLiteral()), _core.types.binaryExpression("!==", _core.types.cloneNode(ref), scope.buildUndefinedNode())), _core.types.cloneNode(ref), node.right));
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950094);
})()
//# sourceMappingURL=index.js.map