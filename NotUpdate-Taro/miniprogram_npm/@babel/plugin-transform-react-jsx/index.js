module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950147, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transformClassic = _interopRequireDefault(require("./transform-classic"));

var _transformAutomatic = _interopRequireDefault(require("./transform-automatic"));

var _helperPluginUtils = require("@babel/helper-plugin-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  const {
    runtime = "classic"
  } = options;

  if (runtime === "classic") {
    return (0, _transformClassic.default)(api, options);
  } else {
    return (0, _transformAutomatic.default)(api, options);
  }
});

exports.default = _default;
}, function(modId) {var map = {"./transform-classic":1589772950148,"./transform-automatic":1589772950149}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950148, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxJsx = _interopRequireDefault(require("@babel/plugin-syntax-jsx"));

var _helperBuilderReactJsx = _interopRequireDefault(require("@babel/helper-builder-react-jsx"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT = {
  pragma: "React.createElement",
  pragmaFrag: "React.Fragment"
};

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  const THROW_IF_NAMESPACE = options.throwIfNamespace === undefined ? true : !!options.throwIfNamespace;
  const PRAGMA_DEFAULT = options.pragma || DEFAULT.pragma;
  const PRAGMA_FRAG_DEFAULT = options.pragmaFrag || DEFAULT.pragmaFrag;
  const PURE_ANNOTATION = options.pure;
  const JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;
  const JSX_FRAG_ANNOTATION_REGEX = /\*?\s*@jsxFrag\s+([^\s]+)/;

  const createIdentifierParser = id => () => {
    return id.split(".").map(name => _core.types.identifier(name)).reduce((object, property) => _core.types.memberExpression(object, property));
  };

  const visitor = (0, _helperBuilderReactJsx.default)({
    pre(state) {
      const tagName = state.tagName;
      const args = state.args;

      if (_core.types.react.isCompatTag(tagName)) {
        args.push(_core.types.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },

    post(state, pass) {
      state.callee = pass.get("jsxIdentifier")();
      state.pure = PURE_ANNOTATION != null ? PURE_ANNOTATION : pass.get("pragma") === DEFAULT.pragma;
    },

    throwIfNamespace: THROW_IF_NAMESPACE
  });
  visitor.Program = {
    enter(path, state) {
      const {
        file
      } = state;
      let pragma = PRAGMA_DEFAULT;
      let pragmaFrag = PRAGMA_FRAG_DEFAULT;
      let pragmaSet = !!options.pragma;
      let pragmaFragSet = !!options.pragma;

      if (file.ast.comments) {
        for (const comment of file.ast.comments) {
          const jsxMatches = JSX_ANNOTATION_REGEX.exec(comment.value);

          if (jsxMatches) {
            pragma = jsxMatches[1];
            pragmaSet = true;
          }

          const jsxFragMatches = JSX_FRAG_ANNOTATION_REGEX.exec(comment.value);

          if (jsxFragMatches) {
            pragmaFrag = jsxFragMatches[1];
            pragmaFragSet = true;
          }
        }
      }

      state.set("jsxIdentifier", createIdentifierParser(pragma));
      state.set("jsxFragIdentifier", createIdentifierParser(pragmaFrag));
      state.set("usedFragment", false);
      state.set("pragma", pragma);
      state.set("pragmaSet", pragmaSet);
      state.set("pragmaFragSet", pragmaFragSet);
    },

    exit(path, state) {
      if (state.get("pragmaSet") && state.get("usedFragment") && !state.get("pragmaFragSet")) {
        throw new Error("transform-react-jsx: pragma has been set but " + "pragmaFrag has not been set");
      }
    }

  };

  visitor.JSXAttribute = function (path) {
    if (_core.types.isJSXElement(path.node.value)) {
      path.node.value = _core.types.jsxExpressionContainer(path.node.value);
    }
  };

  return {
    name: "transform-react-jsx",
    inherits: _pluginSyntaxJsx.default,
    visitor
  };
});

exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950149, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pluginSyntaxJsx = _interopRequireDefault(require("@babel/plugin-syntax-jsx"));

var _helperBuilderReactJsxExperimental = require("@babel/helper-builder-react-jsx-experimental");

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  const PURE_ANNOTATION = options.pure;
  const visitor = (0, _helperBuilderReactJsxExperimental.helper)(api, Object.assign({
    pre(state) {
      const tagName = state.tagName;
      const args = state.args;

      if (_core.types.react.isCompatTag(tagName)) {
        args.push(_core.types.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },

    post(state, pass) {
      if (pass.get("@babel/plugin-react-jsx/runtime") === "classic") {
        state.createElementCallee = pass.get("@babel/plugin-react-jsx/createElementIdentifier")();
        state.pure = PURE_ANNOTATION != null ? PURE_ANNOTATION : !pass.get("@babel/plugin-react-jsx/pragmaSet");
      } else {
        state.jsxCallee = pass.get("@babel/plugin-react-jsx/jsxIdentifier")();
        state.jsxStaticCallee = pass.get("@babel/plugin-react-jsx/jsxStaticIdentifier")();
        state.createElementCallee = pass.get("@babel/plugin-react-jsx/createElementIdentifier")();
        state.pure = PURE_ANNOTATION != null ? PURE_ANNOTATION : !pass.get("@babel/plugin-react-jsx/importSourceSet");
      }
    }

  }, options, {
    development: false
  }));
  return {
    name: "transform-react-jsx",
    inherits: _pluginSyntaxJsx.default,
    visitor
  };
});

exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950147);
})()
//# sourceMappingURL=index.js.map