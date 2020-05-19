module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950074, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simplifyAccess;

var t = _interopRequireWildcard(require("@babel/types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function simplifyAccess(path, bindingNames) {
  path.traverse(simpleAssignmentVisitor, {
    scope: path.scope,
    bindingNames,
    seen: new WeakSet()
  });
}

const simpleAssignmentVisitor = {
  UpdateExpression: {
    exit(path) {
      const {
        scope,
        bindingNames
      } = this;
      const arg = path.get("argument");
      if (!arg.isIdentifier()) return;
      const localName = arg.node.name;
      if (!bindingNames.has(localName)) return;

      if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
        return;
      }

      if (path.parentPath.isExpressionStatement() && !path.isCompletionRecord()) {
        const operator = path.node.operator == "++" ? "+=" : "-=";
        path.replaceWith(t.assignmentExpression(operator, arg.node, t.numericLiteral(1)));
      } else if (path.node.prefix) {
        path.replaceWith(t.assignmentExpression("=", t.identifier(localName), t.binaryExpression(path.node.operator[0], t.unaryExpression("+", arg.node), t.numericLiteral(1))));
      } else {
        const old = path.scope.generateUidIdentifierBasedOnNode(arg.node, "old");
        const varName = old.name;
        path.scope.push({
          id: old
        });
        const binary = t.binaryExpression(path.node.operator[0], t.identifier(varName), t.numericLiteral(1));
        path.replaceWith(t.sequenceExpression([t.assignmentExpression("=", t.identifier(varName), t.unaryExpression("+", arg.node)), t.assignmentExpression("=", t.cloneNode(arg.node), binary), t.identifier(varName)]));
      }
    }

  },
  AssignmentExpression: {
    exit(path) {
      const {
        scope,
        seen,
        bindingNames
      } = this;
      if (path.node.operator === "=") return;
      if (seen.has(path.node)) return;
      seen.add(path.node);
      const left = path.get("left");
      if (!left.isIdentifier()) return;
      const localName = left.node.name;
      if (!bindingNames.has(localName)) return;

      if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
        return;
      }

      path.node.right = t.binaryExpression(path.node.operator.slice(0, -1), t.cloneNode(path.node.left), path.node.right);
      path.node.operator = "=";
    }

  }
};
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950074);
})()
//# sourceMappingURL=index.js.map