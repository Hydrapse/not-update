module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950971, function(require, module, exports) {

const compat = require('./compat');
const data = require('./data');
const entries = require('./entries');
const getModulesListForTargetVersion = require('./get-modules-list-for-target-version');
const modules = require('./modules');

module.exports = Object.assign(compat, {
  compat,
  data,
  entries,
  getModulesListForTargetVersion,
  modules,
});

}, function(modId) {var map = {"./compat":1589772950972,"./get-modules-list-for-target-version":1589772950974}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950972, function(require, module, exports) {

const { compare, has, intersection } = require('./helpers');
const data = require('./data');
const getModulesListForTargetVersion = require('./get-modules-list-for-target-version');
const modules = require('./modules');
const targetsParser = require('./targets-parser');

function checkModule(name, targets) {
  if (!has(data, name)) throw new TypeError(`Incorrect module: ${ name }`);

  const requirements = data[name];
  const result = {
    required: false,
    targets: {},
  };

  for (const [engine, version] of targets) {
    if (!has(requirements, engine) || compare(version, '<', requirements[engine])) {
      result.required = true;
      result.targets[engine] = version;
    }
  }

  return result;
}

module.exports = function ({ targets, filter, version }) {
  const parsedTargets = targetsParser(targets);

  const result = {
    list: [],
    targets: {},
  };

  let $modules = Array.isArray(filter) ? filter : modules;

  if (filter instanceof RegExp) {
    $modules = $modules.filter(it => filter.test(it));
  } else if (typeof filter == 'string') {
    $modules = $modules.filter(it => it.startsWith(filter));
  }

  if (version) {
    $modules = intersection($modules, getModulesListForTargetVersion(version));
  }

  for (const key of $modules) {
    const check = checkModule(key, parsedTargets);
    if (check.required) {
      result.list.push(key);
      result.targets[key] = check.targets;
    }
  }

  return result;
};

}, function(modId) { var map = {"./helpers":1589772950973,"./get-modules-list-for-target-version":1589772950974,"./targets-parser":1589772950975}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950973, function(require, module, exports) {

const cmp = require('semver/functions/cmp');
const semver = require('semver/functions/coerce');

const has = Function.call.bind({}.hasOwnProperty);

function compare(a, operator, b) {
  return cmp(semver(a), operator, semver(b));
}

function intersection(list, order) {
  const set = list instanceof Set ? list : new Set(list);
  return order.filter(name => set.has(name));
}

function sortObjectByKey(object, fn) {
  return Object.keys(object).sort(fn).reduce((memo, key) => {
    memo[key] = object[key];
    return memo;
  }, {});
}

module.exports = {
  compare,
  has,
  intersection,
  semver,
  sortObjectByKey,
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950974, function(require, module, exports) {

const { compare, intersection, semver } = require('./helpers');
const modulesByVersions = require('./modules-by-versions');
const modules = require('./modules');

module.exports = function (raw) {
  const corejs = semver(raw);
  if (corejs.major !== 3) {
    throw RangeError('This version of `core-js-compat` works only with `core-js@3`.');
  }
  const result = [];
  for (const version of Object.keys(modulesByVersions)) {
    if (compare(version, '<=', corejs)) {
      result.push(...modulesByVersions[version]);
    }
  }
  return intersection(result, modules);
};

}, function(modId) { var map = {"./helpers":1589772950973}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950975, function(require, module, exports) {

const browserslist = require('browserslist');
const { compare, has } = require('./helpers');
const external = require('./external');

const aliases = new Map([
  ['and_chr', 'chrome'],
  ['and_ff', 'firefox'],
  ['ie_mob', 'ie'],
  ['ios_saf', 'ios'],
  ['op_mob', 'opera_mobile'],
]);

const validTargets = new Set([
  'android',
  'chrome',
  'edge',
  'electron',
  'firefox',
  'ie',
  'ios',
  'node',
  'opera',
  'opera_mobile',
  'phantom',
  'safari',
  'samsung',
]);

module.exports = function (targets) {
  if (typeof targets !== 'object' || Array.isArray(targets)) {
    targets = { browsers: targets };
  }

  const { browsers, esmodules, node, ...rest } = targets;
  const list = Object.entries(rest);

  if (browsers) {
    list.push(...browserslist(browsers).map(it => it.split(' ')));
  }
  if (esmodules) {
    list.push(...Object.entries(external.modules));
  }
  if (node) {
    list.push(['node', node === 'current' ? process.versions.node : node]);
  }

  const normalized = list.map(([engine, version]) => {
    if (has(browserslist.aliases, engine)) {
      engine = browserslist.aliases[engine];
    }
    if (aliases.has(engine)) {
      engine = aliases.get(engine);
    } else if (engine === 'android' && compare(version, '>', '4.4.4')) {
      engine = 'chrome';
    }
    return [engine, String(version)];
  }).filter(([engine]) => {
    return validTargets.has(engine);
  }).sort(([a], [b]) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });

  const reducedByMinVersion = new Map();
  for (const [engine, version] of normalized) {
    if (!reducedByMinVersion.has(engine) || compare(version, '<=', reducedByMinVersion.get(engine))) {
      reducedByMinVersion.set(engine, version);
    }
  }

  return reducedByMinVersion;
};

}, function(modId) { var map = {"./helpers":1589772950973}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950971);
})()
//# sourceMappingURL=index.js.map