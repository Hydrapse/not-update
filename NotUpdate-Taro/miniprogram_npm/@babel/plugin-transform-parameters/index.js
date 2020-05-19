module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950141, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "convertFunctionParams", {
  enumerable: true,
  get: function () {
    return _params.default;
  }
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _params = _interopRequireDefault(require("./params"));

var _rest = _interopRequireDefault(require("./rest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  const {
    loose
  } = options;
  return {
    name: "transform-parameters",
    visitor: {
      Function(path) {
        if (path.isArrowFunctionExpression() && path.get("params").some(param => param.isRestElement() || param.isAssignmentPattern())) {
          path.arrowFunctionToExpression();
        }

        const convertedRest = (0, _rest.default)(path);
        const convertedParams = (0, _params.default)(path, loose);

        if (convertedRest || convertedParams) {
          path.scope.crawl();
        }
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {"./params":1589772950142,"./rest":1589772950143}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950142, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertFunctionParams;

var _core = require("@babel/core");

const buildDefaultParam = (0, _core.template)(`
  let VARIABLE_NAME =
    arguments.length > ARGUMENT_KEY && arguments[ARGUMENT_KEY] !== undefined ?
      arguments[ARGUMENT_KEY]
    :
      DEFAULT_VALUE;
`);
const buildLooseDefaultParam = (0, _core.template)(`
  if (ASSIGNMENT_IDENTIFIER === UNDEFINED) {
    ASSIGNMENT_IDENTIFIER = DEFAULT_VALUE;
  }
`);
const buildLooseDestructuredDefaultParam = (0, _core.template)(`
  let ASSIGNMENT_IDENTIFIER = PARAMETER_NAME === UNDEFINED ? DEFAULT_VALUE : PARAMETER_NAME ;
`);
const buildSafeArgumentsAccess = (0, _core.template)(`
  let $0 = arguments.length > $1 ? arguments[$1] : undefined;
`);
const iifeVisitor = {
  "ReferencedIdentifier|BindingIdentifier"(path, state) {
    const {
      scope,
      node
    } = path;
    const {
      name
    } = node;

    if (name === "eval" || scope.getBinding(name) === state.scope.parent.getBinding(name) && state.scope.hasOwnBinding(name)) {
      state.needsOuterBinding = true;
      path.stop();
    }
  },

  "TypeAnnotation|TSTypeAnnotation|TypeParameterDeclaration|TSTypeParameterDeclaration": path => path.skip()
};

function convertFunctionParams(path, loose, shouldTransformParam, replaceRestElement) {
  const params = path.get("params");
  const isSimpleParameterList = params.every(param => param.isIdentifier());
  if (isSimpleParameterList) return false;
  const {
    node,
    scope
  } = path;
  const state = {
    stop: false,
    needsOuterBinding: false,
    scope
  };
  const body = [];
  const shadowedParams = new Set();

  for (const param of params) {
    for (const name of Object.keys(param.getBindingIdentifiers())) {
      var _scope$bindings$name;

      const constantViolations = (_scope$bindings$name = scope.bindings[name]) == null ? void 0 : _scope$bindings$name.constantViolations;

      if (constantViolations) {
        for (const redeclarator of constantViolations) {
          const node = redeclarator.node;

          switch (node.type) {
            case "VariableDeclarator":
              {
                if (node.init === null) {
                  const declaration = redeclarator.parentPath;

                  if (!declaration.parentPath.isFor() || declaration.parentPath.get("body") === declaration) {
                    redeclarator.remove();
                    break;
                  }
                }

                shadowedParams.add(name);
                break;
              }

            case "FunctionDeclaration":
              shadowedParams.add(name);
              break;
          }
        }
      }
    }
  }

  if (shadowedParams.size === 0) {
    for (const param of params) {
      if (!param.isIdentifier()) param.traverse(iifeVisitor, state);
      if (state.needsOuterBinding) break;
    }
  }

  let firstOptionalIndex = null;

  for (let i = 0; i < params.length; i++) {
    const param = params[i];

    if (shouldTransformParam && !shouldTransformParam(i)) {
      continue;
    }

    const transformedRestNodes = [];

    if (replaceRestElement) {
      replaceRestElement(param.parentPath, param, transformedRestNodes);
    }

    const paramIsAssignmentPattern = param.isAssignmentPattern();

    if (paramIsAssignmentPattern && (loose || node.kind === "set")) {
      const left = param.get("left");
      const right = param.get("right");
      const undefinedNode = scope.buildUndefinedNode();

      if (left.isIdentifier()) {
        body.push(buildLooseDefaultParam({
          ASSIGNMENT_IDENTIFIER: _core.types.cloneNode(left.node),
          DEFAULT_VALUE: right.node,
          UNDEFINED: undefinedNode
        }));
        param.replaceWith(left.node);
      } else if (left.isObjectPattern() || left.isArrayPattern()) {
        const paramName = scope.generateUidIdentifier();
        body.push(buildLooseDestructuredDefaultParam({
          ASSIGNMENT_IDENTIFIER: left.node,
          DEFAULT_VALUE: right.node,
          PARAMETER_NAME: _core.types.cloneNode(paramName),
          UNDEFINED: undefinedNode
        }));
        param.replaceWith(paramName);
      }
    } else if (paramIsAssignmentPattern) {
      if (firstOptionalIndex === null) firstOptionalIndex = i;
      const left = param.get("left");
      const right = param.get("right");
      const defNode = buildDefaultParam({
        VARIABLE_NAME: left.node,
        DEFAULT_VALUE: right.node,
        ARGUMENT_KEY: _core.types.numericLiteral(i)
      });
      body.push(defNode);
    } else if (firstOptionalIndex !== null) {
      const defNode = buildSafeArgumentsAccess([param.node, _core.types.numericLiteral(i)]);
      body.push(defNode);
    } else if (param.isObjectPattern() || param.isArrayPattern()) {
      const uid = path.scope.generateUidIdentifier("ref");

      const defNode = _core.types.variableDeclaration("let", [_core.types.variableDeclarator(param.node, uid)]);

      body.push(defNode);
      param.replaceWith(_core.types.cloneNode(uid));
    }

    if (transformedRestNodes) {
      for (const transformedNode of transformedRestNodes) {
        body.push(transformedNode);
      }
    }
  }

  if (firstOptionalIndex !== null) {
    node.params = node.params.slice(0, firstOptionalIndex);
  }

  path.ensureBlock();

  if (state.needsOuterBinding || shadowedParams.size > 0) {
    body.push(buildScopeIIFE(shadowedParams, path.get("body").node));
    path.set("body", _core.types.blockStatement(body));
    const bodyPath = path.get("body.body");
    const arrowPath = bodyPath[bodyPath.length - 1].get("argument.callee");
    arrowPath.arrowFunctionToExpression();
    arrowPath.node.generator = path.node.generator;
    arrowPath.node.async = path.node.async;
    path.node.generator = false;
  } else {
    path.get("body").unshiftContainer("body", body);
  }

  return true;
}

function buildScopeIIFE(shadowedParams, body) {
  const args = [];
  const params = [];

  for (const name of shadowedParams) {
    args.push(_core.types.identifier(name));
    params.push(_core.types.identifier(name));
  }

  return _core.types.returnStatement(_core.types.callExpression(_core.types.arrowFunctionExpression(params, body), params));
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950143, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertFunctionRest;

var _core = require("@babel/core");

const buildRest = (0, _core.template)(`
  for (var LEN = ARGUMENTS.length,
           ARRAY = new Array(ARRAY_LEN),
           KEY = START;
       KEY < LEN;
       KEY++) {
    ARRAY[ARRAY_KEY] = ARGUMENTS[KEY];
  }
`);
const restIndex = (0, _core.template)(`
  (INDEX < OFFSET || ARGUMENTS.length <= INDEX) ? undefined : ARGUMENTS[INDEX]
`);
const restIndexImpure = (0, _core.template)(`
  REF = INDEX, (REF < OFFSET || ARGUMENTS.length <= REF) ? undefined : ARGUMENTS[REF]
`);
const restLength = (0, _core.template)(`
  ARGUMENTS.length <= OFFSET ? 0 : ARGUMENTS.length - OFFSET
`);

function referencesRest(path, state) {
  if (path.node.name === state.name) {
    return path.scope.bindingIdentifierEquals(state.name, state.outerBinding);
  }

  return false;
}

const memberExpressionOptimisationVisitor = {
  Scope(path, state) {
    if (!path.scope.bindingIdentifierEquals(state.name, state.outerBinding)) {
      path.skip();
    }
  },

  Flow(path) {
    if (path.isTypeCastExpression()) return;
    path.skip();
  },

  Function(path, state) {
    const oldNoOptimise = state.noOptimise;
    state.noOptimise = true;
    path.traverse(memberExpressionOptimisationVisitor, state);
    state.noOptimise = oldNoOptimise;
    path.skip();
  },

  ReferencedIdentifier(path, state) {
    const {
      node
    } = path;

    if (node.name === "arguments") {
      state.deopted = true;
    }

    if (!referencesRest(path, state)) return;

    if (state.noOptimise) {
      state.deopted = true;
    } else {
      const {
        parentPath
      } = path;

      if (parentPath.listKey === "params" && parentPath.key < state.offset) {
        return;
      }

      if (parentPath.isMemberExpression({
        object: node
      })) {
        const grandparentPath = parentPath.parentPath;
        const argsOptEligible = !state.deopted && !(grandparentPath.isAssignmentExpression() && parentPath.node === grandparentPath.node.left || grandparentPath.isLVal() || grandparentPath.isForXStatement() || grandparentPath.isUpdateExpression() || grandparentPath.isUnaryExpression({
          operator: "delete"
        }) || (grandparentPath.isCallExpression() || grandparentPath.isNewExpression()) && parentPath.node === grandparentPath.node.callee);

        if (argsOptEligible) {
          if (parentPath.node.computed) {
            if (parentPath.get("property").isBaseType("number")) {
              state.candidates.push({
                cause: "indexGetter",
                path
              });
              return;
            }
          } else if (parentPath.node.property.name === "length") {
            state.candidates.push({
              cause: "lengthGetter",
              path
            });
            return;
          }
        }
      }

      if (state.offset === 0 && parentPath.isSpreadElement()) {
        const call = parentPath.parentPath;

        if (call.isCallExpression() && call.node.arguments.length === 1) {
          state.candidates.push({
            cause: "argSpread",
            path
          });
          return;
        }
      }

      state.references.push(path);
    }
  },

  BindingIdentifier(path, state) {
    if (referencesRest(path, state)) {
      state.deopted = true;
    }
  }

};

function getParamsCount(node) {
  let count = node.params.length;

  if (count > 0 && _core.types.isIdentifier(node.params[0], {
    name: "this"
  })) {
    count -= 1;
  }

  return count;
}

function hasRest(node) {
  const length = node.params.length;
  return length > 0 && _core.types.isRestElement(node.params[length - 1]);
}

function optimiseIndexGetter(path, argsId, offset) {
  const offsetLiteral = _core.types.numericLiteral(offset);

  let index;

  if (_core.types.isNumericLiteral(path.parent.property)) {
    index = _core.types.numericLiteral(path.parent.property.value + offset);
  } else if (offset === 0) {
    index = path.parent.property;
  } else {
    index = _core.types.binaryExpression("+", path.parent.property, _core.types.cloneNode(offsetLiteral));
  }

  const {
    scope
  } = path;

  if (!scope.isPure(index)) {
    const temp = scope.generateUidIdentifierBasedOnNode(index);
    scope.push({
      id: temp,
      kind: "var"
    });
    path.parentPath.replaceWith(restIndexImpure({
      ARGUMENTS: argsId,
      OFFSET: offsetLiteral,
      INDEX: index,
      REF: _core.types.cloneNode(temp)
    }));
  } else {
    const parentPath = path.parentPath;
    parentPath.replaceWith(restIndex({
      ARGUMENTS: argsId,
      OFFSET: offsetLiteral,
      INDEX: index
    }));
    const offsetTestPath = parentPath.get("test").get("left");
    const valRes = offsetTestPath.evaluate();

    if (valRes.confident) {
      if (valRes.value === true) {
        parentPath.replaceWith(parentPath.scope.buildUndefinedNode());
      } else {
        parentPath.get("test").replaceWith(parentPath.get("test").get("right"));
      }
    }
  }
}

function optimiseLengthGetter(path, argsId, offset) {
  if (offset) {
    path.parentPath.replaceWith(restLength({
      ARGUMENTS: argsId,
      OFFSET: _core.types.numericLiteral(offset)
    }));
  } else {
    path.replaceWith(argsId);
  }
}

function convertFunctionRest(path) {
  const {
    node,
    scope
  } = path;
  if (!hasRest(node)) return false;
  let rest = node.params.pop().argument;

  const argsId = _core.types.identifier("arguments");

  if (_core.types.isPattern(rest)) {
    const pattern = rest;
    rest = scope.generateUidIdentifier("ref");

    const declar = _core.types.variableDeclaration("let", [_core.types.variableDeclarator(pattern, rest)]);

    node.body.body.unshift(declar);
  }

  const paramsCount = getParamsCount(node);
  const state = {
    references: [],
    offset: paramsCount,
    argumentsNode: argsId,
    outerBinding: scope.getBindingIdentifier(rest.name),
    candidates: [],
    name: rest.name,
    deopted: false
  };
  path.traverse(memberExpressionOptimisationVisitor, state);

  if (!state.deopted && !state.references.length) {
    for (const {
      path,
      cause
    } of state.candidates) {
      const clonedArgsId = _core.types.cloneNode(argsId);

      switch (cause) {
        case "indexGetter":
          optimiseIndexGetter(path, clonedArgsId, state.offset);
          break;

        case "lengthGetter":
          optimiseLengthGetter(path, clonedArgsId, state.offset);
          break;

        default:
          path.replaceWith(clonedArgsId);
      }
    }

    return true;
  }

  state.references = state.references.concat(state.candidates.map(({
    path
  }) => path));

  const start = _core.types.numericLiteral(paramsCount);

  const key = scope.generateUidIdentifier("key");
  const len = scope.generateUidIdentifier("len");
  let arrKey, arrLen;

  if (paramsCount) {
    arrKey = _core.types.binaryExpression("-", _core.types.cloneNode(key), _core.types.cloneNode(start));
    arrLen = _core.types.conditionalExpression(_core.types.binaryExpression(">", _core.types.cloneNode(len), _core.types.cloneNode(start)), _core.types.binaryExpression("-", _core.types.cloneNode(len), _core.types.cloneNode(start)), _core.types.numericLiteral(0));
  } else {
    arrKey = _core.types.identifier(key.name);
    arrLen = _core.types.identifier(len.name);
  }

  const loop = buildRest({
    ARGUMENTS: argsId,
    ARRAY_KEY: arrKey,
    ARRAY_LEN: arrLen,
    START: start,
    ARRAY: rest,
    KEY: key,
    LEN: len
  });

  if (state.deopted) {
    node.body.body.unshift(loop);
  } else {
    let target = path.getEarliestCommonAncestorFrom(state.references).getStatementParent();
    target.findParent(path => {
      if (path.isLoop()) {
        target = path;
      } else {
        return path.isFunction();
      }
    });
    target.insertBefore(loop);
  }

  return true;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950141);
})()
//# sourceMappingURL=index.js.map