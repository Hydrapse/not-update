module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950170, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxTypescript = _interopRequireDefault(require("@babel/plugin-syntax-typescript"));

var _core = require("@babel/core");

var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");

var _enum = _interopRequireDefault(require("./enum"));

var _namespace = _interopRequireDefault(require("./namespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isInType(path) {
  switch (path.parent.type) {
    case "TSTypeReference":
    case "TSQualifiedName":
    case "TSExpressionWithTypeArguments":
    case "TSTypeQuery":
      return true;

    default:
      return false;
  }
}

const PARSED_PARAMS = new WeakSet();
const GLOBAL_TYPES = new WeakMap();

function isGlobalType(path, name) {
  const program = path.find(path => path.isProgram()).node;
  if (path.scope.hasOwnBinding(name)) return false;
  if (GLOBAL_TYPES.get(program).has(name)) return true;
  console.warn(`The exported identifier "${name}" is not declared in Babel's scope tracker\n` + `as a JavaScript value binding, and "@babel/plugin-transform-typescript"\n` + `never encountered it as a TypeScript type declaration.\n` + `It will be treated as a JavaScript value.\n\n` + `This problem is likely caused by another plugin injecting\n` + `"${name}" without registering it in the scope tracker. If you are the author\n` + ` of that plugin, please use "scope.registerDeclaration(declarationPath)".`);
  return false;
}

function registerGlobalType(programScope, name) {
  GLOBAL_TYPES.get(programScope.path.node).add(name);
}

var _default = (0, _helperPluginUtils.declare)((api, {
  jsxPragma = "React",
  allowNamespaces = false,
  allowDeclareFields = false,
  onlyRemoveTypeImports = false
}) => {
  api.assertVersion(7);
  const JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;
  const classMemberVisitors = {
    field(path) {
      const {
        node
      } = path;

      if (!allowDeclareFields && node.declare) {
        throw path.buildCodeFrameError(`The 'declare' modifier is only allowed when the 'allowDeclareFields' option of ` + `@babel/plugin-transform-typescript or @babel/preset-typescript is enabled.`);
      }

      if (node.definite || node.declare) {
        if (node.value) {
          throw path.buildCodeFrameError(`Definietly assigned fields and fields with the 'declare' modifier cannot` + ` be initialized here, but only in the constructor`);
        }

        if (!node.decorators) {
          path.remove();
        }
      } else if (!allowDeclareFields && !node.value && !node.decorators && !_core.types.isClassPrivateProperty(node)) {
        path.remove();
      }

      if (node.accessibility) node.accessibility = null;
      if (node.abstract) node.abstract = null;
      if (node.readonly) node.readonly = null;
      if (node.optional) node.optional = null;
      if (node.typeAnnotation) node.typeAnnotation = null;
      if (node.definite) node.definite = null;
    },

    method({
      node
    }) {
      if (node.accessibility) node.accessibility = null;
      if (node.abstract) node.abstract = null;
      if (node.optional) node.optional = null;
    },

    constructor(path, classPath) {
      if (path.node.accessibility) path.node.accessibility = null;
      const parameterProperties = [];

      for (const param of path.node.params) {
        if (param.type === "TSParameterProperty" && !PARSED_PARAMS.has(param.parameter)) {
          PARSED_PARAMS.add(param.parameter);
          parameterProperties.push(param.parameter);
        }
      }

      if (parameterProperties.length) {
        const assigns = parameterProperties.map(p => {
          let id;

          if (_core.types.isIdentifier(p)) {
            id = p;
          } else if (_core.types.isAssignmentPattern(p) && _core.types.isIdentifier(p.left)) {
            id = p.left;
          } else {
            throw path.buildCodeFrameError("Parameter properties can not be destructuring patterns.");
          }

          return _core.template.statement.ast`this.${id} = ${id}`;
        });
        (0, _helperCreateClassFeaturesPlugin.injectInitialization)(classPath, path, assigns);
      }
    }

  };
  return {
    name: "transform-typescript",
    inherits: _pluginSyntaxTypescript.default,
    visitor: {
      Pattern: visitPattern,
      Identifier: visitPattern,
      RestElement: visitPattern,

      Program(path, state) {
        const {
          file
        } = state;
        let fileJsxPragma = null;

        if (!GLOBAL_TYPES.has(path.node)) {
          GLOBAL_TYPES.set(path.node, new Set());
        }

        if (file.ast.comments) {
          for (const comment of file.ast.comments) {
            const jsxMatches = JSX_ANNOTATION_REGEX.exec(comment.value);

            if (jsxMatches) {
              fileJsxPragma = jsxMatches[1];
            }
          }
        }

        for (let stmt of path.get("body")) {
          if (_core.types.isImportDeclaration(stmt)) {
            if (stmt.node.importKind === "type") {
              stmt.remove();
              continue;
            }

            if (!onlyRemoveTypeImports) {
              if (stmt.node.specifiers.length === 0) {
                continue;
              }

              let allElided = true;
              const importsToRemove = [];

              for (const specifier of stmt.node.specifiers) {
                const binding = stmt.scope.getBinding(specifier.local.name);

                if (binding && isImportTypeOnly({
                  binding,
                  programPath: path,
                  jsxPragma: fileJsxPragma || jsxPragma
                })) {
                  importsToRemove.push(binding.path);
                } else {
                  allElided = false;
                }
              }

              if (allElided) {
                stmt.remove();
              } else {
                for (const importPath of importsToRemove) {
                  importPath.remove();
                }
              }
            }

            continue;
          }

          if (stmt.isExportDeclaration()) {
            stmt = stmt.get("declaration");
          }

          if (stmt.isVariableDeclaration({
            declare: true
          })) {
            for (const name of Object.keys(stmt.getBindingIdentifiers())) {
              registerGlobalType(path.scope, name);
            }
          } else if (stmt.isTSTypeAliasDeclaration() || stmt.isTSDeclareFunction() || stmt.isTSInterfaceDeclaration() || stmt.isClassDeclaration({
            declare: true
          }) || stmt.isTSEnumDeclaration({
            declare: true
          }) || stmt.isTSModuleDeclaration({
            declare: true
          }) && stmt.get("id").isIdentifier()) {
            registerGlobalType(path.scope, stmt.node.id.name);
          }
        }
      },

      ExportNamedDeclaration(path) {
        if (path.node.exportKind === "type") {
          path.remove();
          return;
        }

        if (!path.node.source && path.node.specifiers.length > 0 && path.node.specifiers.every(({
          local
        }) => isGlobalType(path, local.name))) {
          path.remove();
        }
      },

      ExportSpecifier(path) {
        if (!path.parent.source && isGlobalType(path, path.node.local.name)) {
          path.remove();
        }
      },

      ExportDefaultDeclaration(path) {
        if (_core.types.isIdentifier(path.node.declaration) && isGlobalType(path, path.node.declaration.name)) {
          path.remove();
        }
      },

      TSDeclareFunction(path) {
        path.remove();
      },

      TSDeclareMethod(path) {
        path.remove();
      },

      VariableDeclaration(path) {
        if (path.node.declare) {
          path.remove();
        }
      },

      VariableDeclarator({
        node
      }) {
        if (node.definite) node.definite = null;
      },

      TSIndexSignature(path) {
        path.remove();
      },

      ClassDeclaration(path) {
        const {
          node
        } = path;

        if (node.declare) {
          path.remove();
          return;
        }
      },

      Class(path) {
        const {
          node
        } = path;
        if (node.typeParameters) node.typeParameters = null;
        if (node.superTypeParameters) node.superTypeParameters = null;
        if (node.implements) node.implements = null;
        if (node.abstract) node.abstract = null;
        path.get("body.body").forEach(child => {
          if (child.isClassMethod() || child.isClassPrivateMethod()) {
            if (child.node.kind === "constructor") {
              classMemberVisitors.constructor(child, path);
            } else {
              classMemberVisitors.method(child, path);
            }
          } else if (child.isClassProperty() || child.isClassPrivateProperty()) {
            classMemberVisitors.field(child, path);
          }
        });
      },

      Function({
        node
      }) {
        if (node.typeParameters) node.typeParameters = null;
        if (node.returnType) node.returnType = null;
        const p0 = node.params[0];

        if (p0 && _core.types.isIdentifier(p0) && p0.name === "this") {
          node.params.shift();
        }

        node.params = node.params.map(p => {
          return p.type === "TSParameterProperty" ? p.parameter : p;
        });
      },

      TSModuleDeclaration(path) {
        (0, _namespace.default)(path, _core.types, allowNamespaces);
      },

      TSInterfaceDeclaration(path) {
        path.remove();
      },

      TSTypeAliasDeclaration(path) {
        path.remove();
      },

      TSEnumDeclaration(path) {
        (0, _enum.default)(path, _core.types);
      },

      TSImportEqualsDeclaration(path) {
        throw path.buildCodeFrameError("`import =` is not supported by @babel/plugin-transform-typescript\n" + "Please consider using " + "`import <moduleName> from '<moduleName>';` alongside " + "Typescript's --allowSyntheticDefaultImports option.");
      },

      TSExportAssignment(path) {
        throw path.buildCodeFrameError("`export =` is not supported by @babel/plugin-transform-typescript\n" + "Please consider using `export <value>;`.");
      },

      TSTypeAssertion(path) {
        path.replaceWith(path.node.expression);
      },

      TSAsExpression(path) {
        let {
          node
        } = path;

        do {
          node = node.expression;
        } while (_core.types.isTSAsExpression(node));

        path.replaceWith(node);
      },

      TSNonNullExpression(path) {
        path.replaceWith(path.node.expression);
      },

      CallExpression(path) {
        path.node.typeParameters = null;
      },

      NewExpression(path) {
        path.node.typeParameters = null;
      },

      JSXOpeningElement(path) {
        path.node.typeParameters = null;
      },

      TaggedTemplateExpression(path) {
        path.node.typeParameters = null;
      }

    }
  };

  function visitPattern({
    node
  }) {
    if (node.typeAnnotation) node.typeAnnotation = null;
    if (_core.types.isIdentifier(node) && node.optional) node.optional = null;
  }

  function isImportTypeOnly({
    binding,
    programPath,
    jsxPragma
  }) {
    for (const path of binding.referencePaths) {
      if (!isInType(path)) {
        return false;
      }
    }

    if (binding.identifier.name !== jsxPragma) {
      return true;
    }

    let sourceFileHasJsx = false;
    programPath.traverse({
      JSXElement() {
        sourceFileHasJsx = true;
      },

      JSXFragment() {
        sourceFileHasJsx = true;
      }

    });
    return !sourceFileHasJsx;
  }
});

exports.default = _default;
}, function(modId) {var map = {"./enum":1589772950171,"./namespace":1589772950172}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950171, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpileEnum;

var _assert = _interopRequireDefault(require("assert"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transpileEnum(path, t) {
  const {
    node
  } = path;

  if (node.declare) {
    path.remove();
    return;
  }

  if (node.const) {
    throw path.buildCodeFrameError("'const' enums are not supported.");
  }

  const name = node.id.name;
  const fill = enumFill(path, t, node.id);

  switch (path.parent.type) {
    case "BlockStatement":
    case "ExportNamedDeclaration":
    case "Program":
      {
        path.insertAfter(fill);

        if (seen(path.parentPath)) {
          path.remove();
        } else {
          const isGlobal = t.isProgram(path.parent);
          path.scope.registerDeclaration(path.replaceWith(makeVar(node.id, t, isGlobal ? "var" : "let"))[0]);
        }

        break;
      }

    default:
      throw new Error(`Unexpected enum parent '${path.parent.type}`);
  }

  function seen(parentPath) {
    if (parentPath.isExportDeclaration()) {
      return seen(parentPath.parentPath);
    }

    if (parentPath.getData(name)) {
      return true;
    } else {
      parentPath.setData(name, true);
      return false;
    }
  }
}

function makeVar(id, t, kind) {
  return t.variableDeclaration(kind, [t.variableDeclarator(id)]);
}

const buildEnumWrapper = (0, _core.template)(`
  (function (ID) {
    ASSIGNMENTS;
  })(ID || (ID = {}));
`);
const buildStringAssignment = (0, _core.template)(`
  ENUM["NAME"] = VALUE;
`);
const buildNumericAssignment = (0, _core.template)(`
  ENUM[ENUM["NAME"] = VALUE] = "NAME";
`);

const buildEnumMember = (isString, options) => (isString ? buildStringAssignment : buildNumericAssignment)(options);

function enumFill(path, t, id) {
  const x = translateEnumValues(path, t);
  const assignments = x.map(([memberName, memberValue]) => buildEnumMember(t.isStringLiteral(memberValue), {
    ENUM: t.cloneNode(id),
    NAME: memberName,
    VALUE: memberValue
  }));
  return buildEnumWrapper({
    ID: t.cloneNode(id),
    ASSIGNMENTS: assignments
  });
}

function translateEnumValues(path, t) {
  const seen = Object.create(null);
  let prev = -1;
  return path.node.members.map(member => {
    const name = t.isIdentifier(member.id) ? member.id.name : member.id.value;
    const initializer = member.initializer;
    let value;

    if (initializer) {
      const constValue = evaluate(initializer, seen);

      if (constValue !== undefined) {
        seen[name] = constValue;

        if (typeof constValue === "number") {
          value = t.numericLiteral(constValue);
          prev = constValue;
        } else {
          (0, _assert.default)(typeof constValue === "string");
          value = t.stringLiteral(constValue);
          prev = undefined;
        }
      } else {
        value = initializer;
        prev = undefined;
      }
    } else {
      if (prev !== undefined) {
        prev++;
        value = t.numericLiteral(prev);
        seen[name] = prev;
      } else {
        throw path.buildCodeFrameError("Enum member must have initializer.");
      }
    }

    return [name, value];
  });
}

function evaluate(expr, seen) {
  return evalConstant(expr);

  function evalConstant(expr) {
    switch (expr.type) {
      case "StringLiteral":
        return expr.value;

      case "UnaryExpression":
        return evalUnaryExpression(expr);

      case "BinaryExpression":
        return evalBinaryExpression(expr);

      case "NumericLiteral":
        return expr.value;

      case "ParenthesizedExpression":
        return evalConstant(expr.expression);

      case "Identifier":
        return seen[expr.name];

      case "TemplateLiteral":
        if (expr.quasis.length === 1) {
          return expr.quasis[0].value.cooked;
        }

      default:
        return undefined;
    }
  }

  function evalUnaryExpression({
    argument,
    operator
  }) {
    const value = evalConstant(argument);

    if (value === undefined) {
      return undefined;
    }

    switch (operator) {
      case "+":
        return value;

      case "-":
        return -value;

      case "~":
        return ~value;

      default:
        return undefined;
    }
  }

  function evalBinaryExpression(expr) {
    const left = evalConstant(expr.left);

    if (left === undefined) {
      return undefined;
    }

    const right = evalConstant(expr.right);

    if (right === undefined) {
      return undefined;
    }

    switch (expr.operator) {
      case "|":
        return left | right;

      case "&":
        return left & right;

      case ">>":
        return left >> right;

      case ">>>":
        return left >>> right;

      case "<<":
        return left << right;

      case "^":
        return left ^ right;

      case "*":
        return left * right;

      case "/":
        return left / right;

      case "+":
        return left + right;

      case "-":
        return left - right;

      case "%":
        return left % right;

      default:
        return undefined;
    }
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950172, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpileNamespace;

var _core = require("@babel/core");

function transpileNamespace(path, t, allowNamespaces) {
  if (path.node.declare || path.node.id.type === "StringLiteral") {
    path.remove();
    return;
  }

  if (!allowNamespaces) {
    throw path.hub.file.buildCodeFrameError(path.node.id, "Namespace not marked type-only declare." + " Non-declarative namespaces are only supported experimentally in Babel." + " To enable and review caveats see:" + " https://babeljs.io/docs/en/babel-plugin-transform-typescript");
  }

  const name = path.node.id.name;
  const value = handleNested(path, t, t.cloneDeep(path.node));
  const bound = path.scope.hasOwnBinding(name);

  if (path.parent.type === "ExportNamedDeclaration") {
    if (!bound) {
      path.parentPath.insertAfter(value);
      path.replaceWith(getDeclaration(t, name));
      path.scope.registerDeclaration(path.parentPath);
    } else {
      path.parentPath.replaceWith(value);
    }
  } else if (bound) {
    path.replaceWith(value);
  } else {
    path.scope.registerDeclaration(path.replaceWithMultiple([getDeclaration(t, name), value])[0]);
  }
}

function getDeclaration(t, name) {
  return t.variableDeclaration("let", [t.variableDeclarator(t.identifier(name))]);
}

function getMemberExpression(t, name, itemName) {
  return t.memberExpression(t.identifier(name), t.identifier(itemName));
}

function handleNested(path, t, node, parentExport) {
  const names = new Set();
  const realName = node.id;
  const name = path.scope.generateUid(realName.name);
  const namespaceTopLevel = node.body.body;

  for (let i = 0; i < namespaceTopLevel.length; i++) {
    const subNode = namespaceTopLevel[i];

    switch (subNode.type) {
      case "TSModuleDeclaration":
        {
          const transformed = handleNested(path, t, subNode);
          const moduleName = subNode.id.name;

          if (names.has(moduleName)) {
            namespaceTopLevel[i] = transformed;
          } else {
            names.add(moduleName);
            namespaceTopLevel.splice(i++, 1, getDeclaration(t, moduleName), transformed);
          }

          continue;
        }

      case "TSEnumDeclaration":
      case "FunctionDeclaration":
      case "ClassDeclaration":
        names.add(subNode.id.name);
        continue;

      case "VariableDeclaration":
        for (const variable of subNode.declarations) {
          names.add(variable.id.name);
        }

        continue;

      default:
        continue;

      case "ExportNamedDeclaration":
    }

    switch (subNode.declaration.type) {
      case "TSEnumDeclaration":
      case "FunctionDeclaration":
      case "ClassDeclaration":
        {
          const itemName = subNode.declaration.id.name;
          names.add(itemName);
          namespaceTopLevel.splice(i++, 1, subNode.declaration, t.expressionStatement(t.assignmentExpression("=", getMemberExpression(t, name, itemName), t.identifier(itemName))));
          break;
        }

      case "VariableDeclaration":
        if (subNode.declaration.kind !== "const") {
          throw path.hub.file.buildCodeFrameError(subNode.declaration, "Namespaces exporting non-const are not supported by Babel." + " Change to const or see:" + " https://babeljs.io/docs/en/babel-plugin-transform-typescript");
        }

        for (const variable of subNode.declaration.declarations) {
          variable.init = t.assignmentExpression("=", getMemberExpression(t, name, variable.id.name), variable.init);
        }

        namespaceTopLevel[i] = subNode.declaration;
        break;

      case "TSModuleDeclaration":
        {
          const transformed = handleNested(path, t, subNode.declaration, t.identifier(name));
          const moduleName = subNode.declaration.id.name;

          if (names.has(moduleName)) {
            namespaceTopLevel[i] = transformed;
          } else {
            names.add(moduleName);
            namespaceTopLevel.splice(i++, 1, getDeclaration(t, moduleName), transformed);
          }
        }
    }
  }

  let fallthroughValue = t.objectExpression([]);

  if (parentExport) {
    fallthroughValue = _core.template.expression.ast`
      ${parentExport}.${realName} || (
        ${parentExport}.${realName} = ${fallthroughValue}
      )
    `;
  }

  return _core.template.statement.ast`
    (function (${t.identifier(name)}) {
      ${namespaceTopLevel}
    })(${realName} || (${realName} = ${fallthroughValue}));
  `;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950170);
})()
//# sourceMappingURL=index.js.map