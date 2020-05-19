module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950145, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _path = _interopRequireDefault(require("path"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);

  function addDisplayName(id, call) {
    const props = call.arguments[0].properties;
    let safe = true;

    for (let i = 0; i < props.length; i++) {
      const prop = props[i];

      const key = _core.types.toComputedKey(prop);

      if (_core.types.isLiteral(key, {
        value: "displayName"
      })) {
        safe = false;
        break;
      }
    }

    if (safe) {
      props.unshift(_core.types.objectProperty(_core.types.identifier("displayName"), _core.types.stringLiteral(id)));
    }
  }

  const isCreateClassCallExpression = _core.types.buildMatchMemberExpression("React.createClass");

  const isCreateClassAddon = callee => callee.name === "createReactClass";

  function isCreateClass(node) {
    if (!node || !_core.types.isCallExpression(node)) return false;

    if (!isCreateClassCallExpression(node.callee) && !isCreateClassAddon(node.callee)) {
      return false;
    }

    const args = node.arguments;
    if (args.length !== 1) return false;
    const first = args[0];
    if (!_core.types.isObjectExpression(first)) return false;
    return true;
  }

  return {
    name: "transform-react-display-name",
    visitor: {
      ExportDefaultDeclaration({
        node
      }, state) {
        if (isCreateClass(node.declaration)) {
          const filename = state.filename || "unknown";

          let displayName = _path.default.basename(filename, _path.default.extname(filename));

          if (displayName === "index") {
            displayName = _path.default.basename(_path.default.dirname(filename));
          }

          addDisplayName(displayName, node.declaration);
        }
      },

      CallExpression(path) {
        const {
          node
        } = path;
        if (!isCreateClass(node)) return;
        let id;
        path.find(function (path) {
          if (path.isAssignmentExpression()) {
            id = path.node.left;
          } else if (path.isObjectProperty()) {
            id = path.node.key;
          } else if (path.isVariableDeclarator()) {
            id = path.node.id;
          } else if (path.isStatement()) {
            return true;
          }

          if (id) return true;
        });
        if (!id) return;

        if (_core.types.isMemberExpression(id)) {
          id = id.property;
        }

        if (_core.types.isIdentifier(id)) {
          addDisplayName(id.name, node);
        }
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950145);
})()
//# sourceMappingURL=index.js.map