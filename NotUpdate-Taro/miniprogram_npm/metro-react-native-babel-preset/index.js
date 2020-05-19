module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951426, function(require, module, exports) {
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */


const main = require("./configs/main");

module.exports = function(babel, options) {
  return main(options);
};

module.exports.getPreset = main.getPreset;

}, function(modId) {var map = {"./configs/main":1589772951427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951427, function(require, module, exports) {
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */


function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function isTypeScriptSource(fileName) {
  return !!fileName && fileName.endsWith(".ts");
}

function isTSXSource(fileName) {
  return !!fileName && fileName.endsWith(".tsx");
}

const defaultPlugins = [
  [require("@babel/plugin-proposal-optional-catch-binding")],
  [require("@babel/plugin-transform-block-scoping")], // the flow strip types plugin must go BEFORE class properties!
  // there'll be a test case that fails if you don't.
  [require("@babel/plugin-transform-flow-strip-types")],
  [
    require("@babel/plugin-proposal-class-properties"), // use `this.foo = bar` instead of `this.defineProperty('foo', ...)`
    {
      loose: true
    }
  ],
  [require("@babel/plugin-syntax-dynamic-import")],
  [require("@babel/plugin-syntax-export-default-from")],
  [require("@babel/plugin-transform-computed-properties")],
  [require("@babel/plugin-transform-destructuring")],
  [require("@babel/plugin-transform-function-name")],
  [require("@babel/plugin-transform-literals")],
  [require("@babel/plugin-transform-parameters")],
  [require("@babel/plugin-transform-shorthand-properties")],
  [require("@babel/plugin-transform-react-jsx")],
  [require("@babel/plugin-transform-regenerator")],
  [require("@babel/plugin-transform-sticky-regex")],
  [require("@babel/plugin-transform-unicode-regex")]
];
const es2015ArrowFunctions = [
  require("@babel/plugin-transform-arrow-functions")
];
const es2015Classes = [require("@babel/plugin-transform-classes")];
const es2015ForOf = [
  require("@babel/plugin-transform-for-of"),
  {
    loose: true
  }
];
const es2015Spread = [require("@babel/plugin-transform-spread")];
const es2015TemplateLiterals = [
  require("@babel/plugin-transform-template-literals"),
  {
    loose: true
  }
];
const exponentiationOperator = [
  require("@babel/plugin-transform-exponentiation-operator")
];
const objectAssign = [require("@babel/plugin-transform-object-assign")];
const objectRestSpread = [require("@babel/plugin-proposal-object-rest-spread")];
const nullishCoalescingOperator = [
  require("@babel/plugin-proposal-nullish-coalescing-operator"),
  {
    loose: true
  }
];
const optionalChaining = [
  require("@babel/plugin-proposal-optional-chaining"),
  {
    loose: true
  }
];
const reactDisplayName = [
  require("@babel/plugin-transform-react-display-name")
];
const reactJsxSource = [require("@babel/plugin-transform-react-jsx-source")];
const symbolMember = [require("../transforms/transform-symbol-member")];
const babelRuntime = [
  require("@babel/plugin-transform-runtime"),
  {
    helpers: true,
    regenerator: true
  }
];

const getPreset = (src, options) => {
  const isNull = src == null;
  const hasClass = isNull || src.indexOf("class") !== -1;
  const hasForOf =
    isNull || (src.indexOf("for") !== -1 && src.indexOf("of") !== -1);
  const extraPlugins = [];

  if (!options || !options.disableImportExportTransform) {
    extraPlugins.push(
      [require("@babel/plugin-proposal-export-default-from")],
      [
        require("@babel/plugin-transform-modules-commonjs"),
        {
          strict: false,
          strictMode: false,
          // prevent "use strict" injections
          lazy: !!(options && options.lazyImportExportTransform),
          allowTopLevelThis: true // dont rewrite global `this` -> `undefined`
        }
      ]
    );
  }

  if (!options || !options.lazyCommonJS) {
  }

  if (hasClass) {
    extraPlugins.push(es2015Classes);
  }

  if (isNull || src.indexOf("=>") !== -1) {
    extraPlugins.push(es2015ArrowFunctions);
  }

  if (isNull || hasClass || src.indexOf("...") !== -1) {
    extraPlugins.push(es2015Spread);
    extraPlugins.push(objectRestSpread);
  }

  if (isNull || src.indexOf("`") !== -1) {
    extraPlugins.push(es2015TemplateLiterals);
  }

  if (isNull || src.indexOf("**") !== -1) {
    extraPlugins.push(exponentiationOperator);
  }

  if (isNull || src.indexOf("Object.assign") !== -1) {
    extraPlugins.push(objectAssign);
  }

  if (hasForOf) {
    extraPlugins.push(es2015ForOf);
  }

  if (hasForOf || src.indexOf("Symbol") !== -1) {
    extraPlugins.push(symbolMember);
  }

  if (
    isNull ||
    src.indexOf("React.createClass") !== -1 ||
    src.indexOf("createReactClass") !== -1
  ) {
    extraPlugins.push(reactDisplayName);
  }

  if (isNull || src.indexOf("?.") !== -1) {
    extraPlugins.push(optionalChaining);
  }

  if (isNull || src.indexOf("??") !== -1) {
    extraPlugins.push(nullishCoalescingOperator);
  }

  if (options && options.dev) {
    extraPlugins.push(reactJsxSource);
  }

  if (!options || options.enableBabelRuntime !== false) {
    extraPlugins.push(babelRuntime);
  }

  return {
    comments: false,
    compact: true,
    overrides: [
      {
        plugins: defaultPlugins
      },
      {
        test: isTypeScriptSource,
        plugins: [
          [
            require("@babel/plugin-transform-typescript"),
            {
              isTSX: false
            }
          ]
        ]
      },
      {
        test: isTSXSource,
        plugins: [
          [
            require("@babel/plugin-transform-typescript"),
            {
              isTSX: true
            }
          ]
        ]
      },
      {
        plugins: extraPlugins
      }
    ]
  };
};

module.exports = options => {
  if (options.withDevTools == null) {
    const env = process.env.BABEL_ENV || process.env.NODE_ENV;

    if (!env || env === "development") {
      return getPreset(
        null,
        _objectSpread({}, options, {
          dev: true
        })
      );
    }
  }

  return getPreset(null, options);
};

module.exports.getPreset = getPreset;

}, function(modId) { var map = {"../transforms/transform-symbol-member":1589772951428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951428, function(require, module, exports) {
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/*eslint consistent-return: 0*/

/**
 * Transforms function properties of the `Symbol` into
 * the presence check, and fallback string "@@<name>".
 *
 * Example:
 *
 *   Symbol.iterator;
 *
 * Transformed to:
 *
 *   typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
 */

module.exports = function symbolMember(babel) {
  const t = babel.types;
  return {
    visitor: {
      MemberExpression(path) {
        if (!isAppropriateMember(path)) {
          return;
        }

        const node = path.node;
        path.replaceWith(
          t.conditionalExpression(
            t.binaryExpression(
              "===",
              t.unaryExpression("typeof", t.identifier("Symbol"), true),
              t.stringLiteral("function")
            ),
            node,
            t.stringLiteral(`@@${node.property.name}`)
          )
        ); // We should stop to avoid infinite recursion, since Babel
        // traverses replaced path, and again would hit our transform.

        path.stop();
      }
    }
  };
};

function isAppropriateMember(path) {
  const node = path.node;
  return (
    path.parentPath.type !== "AssignmentExpression" &&
    node.object.type === "Identifier" &&
    node.object.name === "Symbol" &&
    node.property.type === "Identifier"
  );
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951426);
})()
//# sourceMappingURL=index.js.map