module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950085, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _helperRemapAsyncToGenerator = _interopRequireDefault(require("@babel/helper-remap-async-to-generator"));

var _pluginSyntaxAsyncGenerators = _interopRequireDefault(require("@babel/plugin-syntax-async-generators"));

var _core = require("@babel/core");

var _forAwait = _interopRequireDefault(require("./for-await"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  const yieldStarVisitor = {
    Function(path) {
      path.skip();
    },

    YieldExpression({
      node
    }, state) {
      if (!node.delegate) return;
      const callee = state.addHelper("asyncGeneratorDelegate");
      node.argument = _core.types.callExpression(callee, [_core.types.callExpression(state.addHelper("asyncIterator"), [node.argument]), state.addHelper("awaitAsyncGenerator")]);
    }

  };
  const forAwaitVisitor = {
    Function(path) {
      path.skip();
    },

    ForOfStatement(path, {
      file
    }) {
      const {
        node
      } = path;
      if (!node.await) return;
      const build = (0, _forAwait.default)(path, {
        getAsyncIterator: file.addHelper("asyncIterator")
      });
      const {
        declar,
        loop
      } = build;
      const block = loop.body;
      path.ensureBlock();

      if (declar) {
        block.body.push(declar);
      }

      block.body = block.body.concat(node.body.body);

      _core.types.inherits(loop, node);

      _core.types.inherits(loop.body, node.body);

      if (build.replaceParent) {
        path.parentPath.replaceWithMultiple(build.node);
      } else {
        path.replaceWithMultiple(build.node);
      }
    }

  };
  const visitor = {
    Function(path, state) {
      if (!path.node.async) return;
      path.traverse(forAwaitVisitor, state);
      if (!path.node.generator) return;
      path.traverse(yieldStarVisitor, state);
      (0, _helperRemapAsyncToGenerator.default)(path, {
        wrapAsync: state.addHelper("wrapAsyncGenerator"),
        wrapAwait: state.addHelper("awaitAsyncGenerator")
      });
    }

  };
  return {
    name: "proposal-async-generator-functions",
    inherits: _pluginSyntaxAsyncGenerators.default,
    visitor: {
      Program(path, state) {
        path.traverse(visitor, state);
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {"./for-await":1589772950086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950086, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _core = require("@babel/core");

const buildForAwait = (0, _core.template)(`
  async function wrapper() {
    var ITERATOR_COMPLETION = true;
    var ITERATOR_HAD_ERROR_KEY = false;
    var ITERATOR_ERROR_KEY;
    try {
      for (
        var ITERATOR_KEY = GET_ITERATOR(OBJECT), STEP_KEY, STEP_VALUE;
        (
          STEP_KEY = await ITERATOR_KEY.next(),
          ITERATOR_COMPLETION = STEP_KEY.done,
          STEP_VALUE = await STEP_KEY.value,
          !ITERATOR_COMPLETION
        );
        ITERATOR_COMPLETION = true) {
      }
    } catch (err) {
      ITERATOR_HAD_ERROR_KEY = true;
      ITERATOR_ERROR_KEY = err;
    } finally {
      try {
        if (!ITERATOR_COMPLETION && ITERATOR_KEY.return != null) {
          await ITERATOR_KEY.return();
        }
      } finally {
        if (ITERATOR_HAD_ERROR_KEY) {
          throw ITERATOR_ERROR_KEY;
        }
      }
    }
  }
`);

function _default(path, {
  getAsyncIterator
}) {
  const {
    node,
    scope,
    parent
  } = path;
  const stepKey = scope.generateUidIdentifier("step");
  const stepValue = scope.generateUidIdentifier("value");
  const left = node.left;
  let declar;

  if (_core.types.isIdentifier(left) || _core.types.isPattern(left) || _core.types.isMemberExpression(left)) {
    declar = _core.types.expressionStatement(_core.types.assignmentExpression("=", left, stepValue));
  } else if (_core.types.isVariableDeclaration(left)) {
    declar = _core.types.variableDeclaration(left.kind, [_core.types.variableDeclarator(left.declarations[0].id, stepValue)]);
  }

  let template = buildForAwait({
    ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
    ITERATOR_COMPLETION: scope.generateUidIdentifier("iteratorNormalCompletion"),
    ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
    ITERATOR_KEY: scope.generateUidIdentifier("iterator"),
    GET_ITERATOR: getAsyncIterator,
    OBJECT: node.right,
    STEP_VALUE: stepValue,
    STEP_KEY: stepKey
  });
  template = template.body.body;

  const isLabeledParent = _core.types.isLabeledStatement(parent);

  const tryBody = template[3].block.body;
  const loop = tryBody[0];

  if (isLabeledParent) {
    tryBody[0] = _core.types.labeledStatement(parent.label, loop);
  }

  return {
    replaceParent: isLabeledParent,
    node: template,
    declar,
    loop
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950085);
})()
//# sourceMappingURL=index.js.map