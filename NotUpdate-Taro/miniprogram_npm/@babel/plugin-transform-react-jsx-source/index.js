module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950146, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _core = require("@babel/core");

const TRACE_ID = "__source";
const FILE_NAME_VAR = "_jsxFileName";

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);

  function makeTrace(fileNameIdentifier, lineNumber, column0Based) {
    const fileLineLiteral = lineNumber != null ? _core.types.numericLiteral(lineNumber) : _core.types.nullLiteral();
    const fileColumnLiteral = column0Based != null ? _core.types.numericLiteral(column0Based + 1) : _core.types.nullLiteral();

    const fileNameProperty = _core.types.objectProperty(_core.types.identifier("fileName"), fileNameIdentifier);

    const lineNumberProperty = _core.types.objectProperty(_core.types.identifier("lineNumber"), fileLineLiteral);

    const columnNumberProperty = _core.types.objectProperty(_core.types.identifier("columnNumber"), fileColumnLiteral);

    return _core.types.objectExpression([fileNameProperty, lineNumberProperty, columnNumberProperty]);
  }

  const visitor = {
    JSXOpeningElement(path, state) {
      const id = _core.types.jsxIdentifier(TRACE_ID);

      const location = path.container.openingElement.loc;

      if (!location) {
        return;
      }

      const attributes = path.container.openingElement.attributes;

      for (let i = 0; i < attributes.length; i++) {
        const name = attributes[i].name;

        if (name && name.name === TRACE_ID) {
          return;
        }
      }

      if (!state.fileNameIdentifier) {
        const fileName = state.filename || "";
        const fileNameIdentifier = path.scope.generateUidIdentifier(FILE_NAME_VAR);
        const scope = path.hub.getScope();

        if (scope) {
          scope.push({
            id: fileNameIdentifier,
            init: _core.types.stringLiteral(fileName)
          });
        }

        state.fileNameIdentifier = fileNameIdentifier;
      }

      const trace = makeTrace(state.fileNameIdentifier, location.start.line, location.start.column);
      attributes.push(_core.types.jsxAttribute(id, _core.types.jsxExpressionContainer(trace)));
    }

  };
  return {
    name: "transform-react-jsx-source",
    visitor
  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950146);
})()
//# sourceMappingURL=index.js.map