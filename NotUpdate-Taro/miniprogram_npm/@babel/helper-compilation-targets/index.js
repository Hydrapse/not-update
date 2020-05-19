module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950036, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBrowsersQueryValid = isBrowsersQueryValid;
exports.default = getTargets;
Object.defineProperty(exports, "unreleasedLabels", {
  enumerable: true,
  get: function () {
    return _targets.unreleasedLabels;
  }
});
Object.defineProperty(exports, "prettifyTargets", {
  enumerable: true,
  get: function () {
    return _pretty.prettifyTargets;
  }
});
Object.defineProperty(exports, "getInclusionReasons", {
  enumerable: true,
  get: function () {
    return _debug.getInclusionReasons;
  }
});
Object.defineProperty(exports, "filterItems", {
  enumerable: true,
  get: function () {
    return _filterItems.default;
  }
});
Object.defineProperty(exports, "isRequired", {
  enumerable: true,
  get: function () {
    return _filterItems.isRequired;
  }
});

var _browserslist = _interopRequireDefault(require("browserslist"));

var _levenary = _interopRequireDefault(require("levenary"));

var _invariant = _interopRequireDefault(require("invariant"));

var _nativeModules = _interopRequireDefault(require("@babel/compat-data/native-modules"));

var _utils = require("./utils");

var _targets = require("./targets");

var _options = require("./options");

var _pretty = require("./pretty");

var _debug = require("./debug");

var _filterItems = _interopRequireWildcard(require("./filter-items"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const browserslistDefaults = _browserslist.default.defaults;
const validBrowserslistTargets = [...Object.keys(_browserslist.default.data), ...Object.keys(_browserslist.default.aliases)];

function objectToBrowserslist(object) {
  return Object.keys(object).reduce((list, targetName) => {
    if (validBrowserslistTargets.indexOf(targetName) >= 0) {
      const targetVersion = object[targetName];
      return list.concat(`${targetName} ${targetVersion}`);
    }

    return list;
  }, []);
}

function validateTargetNames(targets) {
  const validTargets = Object.keys(_options.TargetNames);

  for (const target in targets) {
    if (!_options.TargetNames[target]) {
      throw new Error(`Invalid Option: '${target}' is not a valid target
        Maybe you meant to use '${(0, _levenary.default)(target, validTargets)}'?`);
    }
  }
}

function isBrowsersQueryValid(browsers) {
  return typeof browsers === "string" || Array.isArray(browsers);
}

function validateBrowsers(browsers) {
  (0, _invariant.default)(typeof browsers === "undefined" || isBrowsersQueryValid(browsers), `Invalid Option: '${browsers}' is not a valid browserslist query`);
  return browsers;
}

function mergeBrowsers(fromQuery, fromTarget) {
  return Object.keys(fromTarget).reduce((queryObj, targKey) => {
    if (targKey !== _options.TargetNames.browsers) {
      queryObj[targKey] = fromTarget[targKey];
    }

    return queryObj;
  }, fromQuery);
}

function getLowestVersions(browsers) {
  return browsers.reduce((all, browser) => {
    const [browserName, browserVersion] = browser.split(" ");
    const normalizedBrowserName = _targets.browserNameMap[browserName];

    if (!normalizedBrowserName) {
      return all;
    }

    try {
      const splitVersion = browserVersion.split("-")[0].toLowerCase();
      const isSplitUnreleased = (0, _utils.isUnreleasedVersion)(splitVersion, browserName);

      if (!all[normalizedBrowserName]) {
        all[normalizedBrowserName] = isSplitUnreleased ? splitVersion : (0, _utils.semverify)(splitVersion);
        return all;
      }

      const version = all[normalizedBrowserName];
      const isUnreleased = (0, _utils.isUnreleasedVersion)(version, browserName);

      if (isUnreleased && isSplitUnreleased) {
        all[normalizedBrowserName] = (0, _utils.getLowestUnreleased)(version, splitVersion, browserName);
      } else if (isUnreleased) {
        all[normalizedBrowserName] = (0, _utils.semverify)(splitVersion);
      } else if (!isUnreleased && !isSplitUnreleased) {
        const parsedBrowserVersion = (0, _utils.semverify)(splitVersion);
        all[normalizedBrowserName] = (0, _utils.semverMin)(version, parsedBrowserVersion);
      }
    } catch (e) {}

    return all;
  }, {});
}

function outputDecimalWarning(decimalTargets) {
  if (!decimalTargets || !decimalTargets.length) {
    return;
  }

  console.log("Warning, the following targets are using a decimal version:");
  console.log("");
  decimalTargets.forEach(({
    target,
    value
  }) => console.log(`  ${target}: ${value}`));
  console.log("");
  console.log("We recommend using a string for minor/patch versions to avoid numbers like 6.10");
  console.log("getting parsed as 6.1, which can lead to unexpected behavior.");
  console.log("");
}

function semverifyTarget(target, value) {
  try {
    return (0, _utils.semverify)(value);
  } catch (error) {
    throw new Error(`Invalid Option: '${value}' is not a valid value for 'targets.${target}'.`);
  }
}

const targetParserMap = {
  __default(target, value) {
    const version = (0, _utils.isUnreleasedVersion)(value, target) ? value.toLowerCase() : semverifyTarget(target, value);
    return [target, version];
  },

  node(target, value) {
    const parsed = value === true || value === "current" ? process.versions.node : semverifyTarget(target, value);
    return [target, parsed];
  }

};

function getTargets(targets = {}, options = {}) {
  const targetOpts = {};
  validateTargetNames(targets);

  if (targets.esmodules) {
    const supportsESModules = _nativeModules.default["es6.module"];
    targets.browsers = Object.keys(supportsESModules).map(browser => `${browser} ${supportsESModules[browser]}`).join(", ");
  }

  delete targets.esmodules;
  const browsersquery = validateBrowsers(targets.browsers);
  const hasTargets = Object.keys(targets).length > 0;
  const shouldParseBrowsers = !!targets.browsers;
  const shouldSearchForConfig = !options.ignoreBrowserslistConfig && !hasTargets;

  if (shouldParseBrowsers || shouldSearchForConfig) {
    if (!hasTargets) {
      _browserslist.default.defaults = objectToBrowserslist(targets);
    }

    const browsers = (0, _browserslist.default)(browsersquery, {
      path: options.configPath,
      mobileToDesktop: true
    });
    const queryBrowsers = getLowestVersions(browsers);
    targets = mergeBrowsers(queryBrowsers, targets);
    _browserslist.default.defaults = browserslistDefaults;
  }

  const parsed = Object.keys(targets).filter(value => value !== _options.TargetNames.esmodules).sort().reduce((results, target) => {
    if (target !== _options.TargetNames.browsers) {
      const value = targets[target];

      if (typeof value === "number" && value % 1 !== 0) {
        results.decimalWarnings.push({
          target,
          value
        });
      }

      const parser = targetParserMap[target] || targetParserMap.__default;
      const [parsedTarget, parsedValue] = parser(target, value);

      if (parsedValue) {
        results.targets[parsedTarget] = parsedValue;
      }
    }

    return results;
  }, {
    targets: targetOpts,
    decimalWarnings: []
  });
  outputDecimalWarning(parsed.decimalWarnings);
  return parsed.targets;
}
}, function(modId) {var map = {"./utils":1589772950037,"./targets":1589772950038,"./options":1589772950039,"./pretty":1589772950040,"./debug":1589772950041,"./filter-items":1589772950042}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950037, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.semverMin = semverMin;
exports.semverify = semverify;
exports.isUnreleasedVersion = isUnreleasedVersion;
exports.getLowestUnreleased = getLowestUnreleased;
exports.getLowestImplementedVersion = getLowestImplementedVersion;

var _invariant = _interopRequireDefault(require("invariant"));

var _semver = _interopRequireDefault(require("semver"));

var _targets = require("./targets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const versionRegExp = /^(\d+|\d+.\d+)$/;

function semverMin(first, second) {
  return first && _semver.default.lt(first, second) ? first : second;
}

function semverify(version) {
  if (typeof version === "string" && _semver.default.valid(version)) {
    return version;
  }

  (0, _invariant.default)(typeof version === "number" || typeof version === "string" && versionRegExp.test(version), `'${version}' is not a valid version`);
  const split = version.toString().split(".");

  while (split.length < 3) {
    split.push("0");
  }

  return split.join(".");
}

function isUnreleasedVersion(version, env) {
  const unreleasedLabel = _targets.unreleasedLabels[env];
  return !!unreleasedLabel && unreleasedLabel === version.toString().toLowerCase();
}

function getLowestUnreleased(a, b, env) {
  const unreleasedLabel = _targets.unreleasedLabels[env];
  const hasUnreleased = [a, b].some(item => item === unreleasedLabel);

  if (hasUnreleased) {
    return a === hasUnreleased ? b : a || b;
  }

  return semverMin(a, b);
}

function getLowestImplementedVersion(plugin, environment) {
  const result = plugin[environment];

  if (!result && environment === "android") {
    return plugin.chrome;
  }

  return result;
}
}, function(modId) { var map = {"./targets":1589772950038}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950038, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserNameMap = exports.unreleasedLabels = void 0;
const unreleasedLabels = {
  safari: "tp"
};
exports.unreleasedLabels = unreleasedLabels;
const browserNameMap = {
  and_chr: "chrome",
  and_ff: "firefox",
  android: "android",
  chrome: "chrome",
  edge: "edge",
  firefox: "firefox",
  ie: "ie",
  ie_mob: "ie",
  ios_saf: "ios",
  node: "node",
  op_mob: "opera",
  opera: "opera",
  safari: "safari",
  samsung: "samsung"
};
exports.browserNameMap = browserNameMap;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950039, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetNames = void 0;
const TargetNames = {
  esmodules: "esmodules",
  node: "node",
  browsers: "browsers",
  chrome: "chrome",
  opera: "opera",
  edge: "edge",
  firefox: "firefox",
  safari: "safari",
  ie: "ie",
  ios: "ios",
  android: "android",
  electron: "electron",
  samsung: "samsung",
  uglify: "uglify"
};
exports.TargetNames = TargetNames;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950040, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettifyVersion = prettifyVersion;
exports.prettifyTargets = prettifyTargets;

var _semver = _interopRequireDefault(require("semver"));

var _targets = require("./targets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prettifyVersion(version) {
  if (typeof version !== "string") {
    return version;
  }

  const parts = [_semver.default.major(version)];

  const minor = _semver.default.minor(version);

  const patch = _semver.default.patch(version);

  if (minor || patch) {
    parts.push(minor);
  }

  if (patch) {
    parts.push(patch);
  }

  return parts.join(".");
}

function prettifyTargets(targets) {
  return Object.keys(targets).reduce((results, target) => {
    let value = targets[target];
    const unreleasedLabel = _targets.unreleasedLabels[target];

    if (typeof value === "string" && unreleasedLabel !== value) {
      value = prettifyVersion(value);
    }

    results[target] = value;
    return results;
  }, {});
}
}, function(modId) { var map = {"./targets":1589772950038}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950041, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInclusionReasons = getInclusionReasons;

var _semver = _interopRequireDefault(require("semver"));

var _pretty = require("./pretty");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInclusionReasons(item, targetVersions, list) {
  const minVersions = list[item] || {};
  return Object.keys(targetVersions).reduce((result, env) => {
    const minVersion = (0, _utils.getLowestImplementedVersion)(minVersions, env);
    const targetVersion = targetVersions[env];

    if (!minVersion) {
      result[env] = (0, _pretty.prettifyVersion)(targetVersion);
    } else {
      const minIsUnreleased = (0, _utils.isUnreleasedVersion)(minVersion, env);
      const targetIsUnreleased = (0, _utils.isUnreleasedVersion)(targetVersion, env);

      if (!targetIsUnreleased && (minIsUnreleased || _semver.default.lt(targetVersion.toString(), (0, _utils.semverify)(minVersion)))) {
        result[env] = (0, _pretty.prettifyVersion)(targetVersion);
      }
    }

    return result;
  }, {});
}
}, function(modId) { var map = {"./pretty":1589772950040,"./utils":1589772950037}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950042, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.targetsSupported = targetsSupported;
exports.isRequired = isRequired;
exports.default = filterItems;

var _semver = _interopRequireDefault(require("semver"));

var _plugins = _interopRequireDefault(require("@babel/compat-data/plugins"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function targetsSupported(target, support) {
  const targetEnvironments = Object.keys(target);

  if (targetEnvironments.length === 0) {
    return false;
  }

  const unsupportedEnvironments = targetEnvironments.filter(environment => {
    const lowestImplementedVersion = (0, _utils.getLowestImplementedVersion)(support, environment);

    if (!lowestImplementedVersion) {
      return true;
    }

    const lowestTargetedVersion = target[environment];

    if ((0, _utils.isUnreleasedVersion)(lowestTargetedVersion, environment)) {
      return false;
    }

    if ((0, _utils.isUnreleasedVersion)(lowestImplementedVersion, environment)) {
      return true;
    }

    if (!_semver.default.valid(lowestTargetedVersion.toString())) {
      throw new Error(`Invalid version passed for target "${environment}": "${lowestTargetedVersion}". ` + "Versions must be in semver format (major.minor.patch)");
    }

    return _semver.default.gt((0, _utils.semverify)(lowestImplementedVersion), lowestTargetedVersion.toString());
  });
  return unsupportedEnvironments.length === 0;
}

function isRequired(name, targets, {
  compatData = _plugins.default,
  includes,
  excludes
} = {}) {
  if (excludes && excludes.has(name)) return false;
  if (includes && includes.has(name)) return true;
  return !targetsSupported(targets, compatData[name]);
}

function filterItems(list, includes, excludes, targets, defaultIncludes, defaultExcludes, pluginSyntaxMap) {
  const result = new Set();
  const options = {
    compatData: list,
    includes,
    excludes
  };

  for (const item in list) {
    if (isRequired(item, targets, options)) {
      result.add(item);
    } else if (pluginSyntaxMap) {
      const shippedProposalsSyntax = pluginSyntaxMap.get(item);

      if (shippedProposalsSyntax) {
        result.add(shippedProposalsSyntax);
      }
    }
  }

  if (defaultIncludes) {
    defaultIncludes.forEach(item => !excludes.has(item) && result.add(item));
  }

  if (defaultExcludes) {
    defaultExcludes.forEach(item => !includes.has(item) && result.delete(item));
  }

  return result;
}
}, function(modId) { var map = {"./utils":1589772950037}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950036);
})()
//# sourceMappingURL=index.js.map