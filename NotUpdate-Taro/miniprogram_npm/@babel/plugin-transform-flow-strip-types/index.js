module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950127, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxFlow = _interopRequireDefault(require("@babel/plugin-syntax-flow"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const FLOW_DIRECTIVE = /(@flow(\s+(strict(-local)?|weak))?|@noflow)/;
  let skipStrip = false;
  const {
    requireDirective = false,
    allowDeclareFields = false
  } = opts;
  return {
    name: "transform-flow-strip-types",
    inherits: _pluginSyntaxFlow.default,
    visitor: {
      Program(path, {
        file: {
          ast: {
            comments
          }
        }
      }) {
        skipStrip = false;
        let directiveFound = false;

        if (comments) {
          for (const comment of comments) {
            if (FLOW_DIRECTIVE.test(comment.value)) {
              directiveFound = true;
              comment.value = comment.value.replace(FLOW_DIRECTIVE, "");

              if (!comment.value.replace(/\*/g, "").trim()) {
                comment.ignore = true;
              }
            }
          }
        }

        if (!directiveFound && requireDirective) {
          skipStrip = true;
        }
      },

      ImportDeclaration(path) {
        if (skipStrip) return;
        if (!path.node.specifiers.length) return;
        let typeCount = 0;
        path.node.specifiers.forEach(({
          importKind
        }) => {
          if (importKind === "type" || importKind === "typeof") {
            typeCount++;
          }
        });

        if (typeCount === path.node.specifiers.length) {
          path.remove();
        }
      },

      Flow(path) {
        if (skipStrip) {
          throw path.buildCodeFrameError("A @flow directive is required when using Flow annotations with " + "the `requireDirective` option.");
        }

        path.remove();
      },

      ClassPrivateProperty(path) {
        if (skipStrip) return;
        path.node.typeAnnotation = null;
      },

      Class(path) {
        if (skipStrip) return;
        path.node.implements = null;
        path.get("body.body").forEach(child => {
          if (child.isClassProperty()) {
            const {
              node
            } = child;

            if (!allowDeclareFields && node.declare) {
              throw child.buildCodeFrameError(`The 'declare' modifier is only allowed when the ` + `'allowDeclareFields' option of ` + `@babel/plugin-transform-flow-strip-types or ` + `@babel/preset-flow is enabled.`);
            }

            if (node.declare) {
              child.remove();
            } else if (!allowDeclareFields && !node.value && !node.decorators) {
              child.remove();
            } else {
              node.variance = null;
              node.typeAnnotation = null;
            }
          }
        });
      },

      AssignmentPattern({
        node
      }) {
        if (skipStrip) return;
        node.left.optional = false;
      },

      Function({
        node
      }) {
        if (skipStrip) return;

        for (let i = 0; i < node.params.length; i++) {
          const param = node.params[i];
          param.optional = false;

          if (param.type === "AssignmentPattern") {
            param.left.optional = false;
          }
        }

        node.predicate = null;
      },

      TypeCastExpression(path) {
        if (skipStrip) return;
        let {
          node
        } = path;

        do {
          node = node.expression;
        } while (_core.types.isTypeCastExpression(node));

        path.replaceWith(node);
      },

      CallExpression({
        node
      }) {
        if (skipStrip) return;
        node.typeArguments = null;
      },

      OptionalCallExpression({
        node
      }) {
        if (skipStrip) return;
        node.typeArguments = null;
      },

      NewExpression({
        node
      }) {
        if (skipStrip) return;
        node.typeArguments = null;
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950127);
})()
//# sourceMappingURL=index.js.map