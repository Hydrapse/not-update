module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950408, function(require, module, exports) {
module.exports = function(api, options) {
  const isWeb = api.caller(isTargetWeb);

  if (isWeb) {
    return getWebConfig(options.web);
  }

  return getNativeConfig();
};

function getNativeConfig() {
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            'react-native-vector-icons': '@expo/vector-icons',
          },
        },
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  };
}

function getWebConfig(options = {}) {
  const defaultPlugins = [
    ['@babel/plugin-transform-flow-strip-types'],
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          'react-native-vector-icons': '@expo/vector-icons',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-proposal-class-properties',
      // use `this.foo = bar` instead of `this.defineProperty('foo', ...)`
      { loose: true },
    ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-transform-react-jsx'],
    ['babel-plugin-react-native-web'],
  ];

  const otherPlugins = [
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-transform-object-assign'],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
    ['@babel/plugin-transform-react-display-name'],
    ['@babel/plugin-transform-react-jsx-source'],
    options.transformImportExport && ['@babel/plugin-transform-modules-commonjs'],
  ].filter(Boolean);

  return {
    comments: false,
    compact: true,

    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            esmodules: true,
          },
        },
      ],
    ],
    overrides: [
      {
        plugins: defaultPlugins,
      },
      {
        test: isTypeScriptSource,
        plugins: [['@babel/plugin-transform-typescript', { isTSX: false }]],
      },
      {
        test: isTSXSource,
        plugins: [['@babel/plugin-transform-typescript', { isTSX: true }]],
      },
      {
        plugins: otherPlugins,
      },
    ],
  };
}

function isTargetWeb(caller) {
  return caller && caller.name === 'babel-loader';
}

function isTypeScriptSource(fileName) {
  return !!fileName && fileName.endsWith('.ts');
}

function isTSXSource(fileName) {
  return !!fileName && fileName.endsWith('.tsx');
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950408);
})()
//# sourceMappingURL=index.js.map