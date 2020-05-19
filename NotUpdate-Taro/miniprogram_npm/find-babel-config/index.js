module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951392, function(require, module, exports) {


var path = require('path');
var fs = require('fs');
var JSON5 = require('json5');
var pathExists = require('path-exists');

var INFINITY = 1 / 0;
var BABELRC_FILENAME = '.babelrc';
var BABELRC_JS_FILENAME = '.babelrc.js';
var BABEL_CONFIG_JS_FILENAME = 'babel.config.js';
var PACKAGE_FILENAME = 'package.json';

var nullConf = { file: null, config: null };

function getBabelJsConfig(file) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    var configModule = require(file);

    if (typeof configModule === 'function') {
        return configModule();
    }

    // eslint-disable-next-line no-underscore-dangle
    return configModule && configModule.__esModule ? configModule.default : configModule;
}

function asyncFind(resolve, dir, depth) {
    if (depth < 0) {
        return resolve(nullConf);
    }

    var babelrc = path.join(dir, BABELRC_FILENAME);
    return pathExists(babelrc).then(function (exists) {
        if (exists) {
            fs.readFile(babelrc, 'utf8', function (err, data) {
                if (!err) {
                    resolve({
                        file: babelrc,
                        config: JSON5.parse(data)
                    });
                }
            });
        }
        return exists;
    }).then(function (exists) {
        if (!exists) {
            var babelJSrc = path.join(dir, BABELRC_JS_FILENAME);
            return pathExists(babelJSrc).then(function (ex) {
                if (ex) {
                    var config = getBabelJsConfig(babelJSrc);
                    resolve({
                        file: babelJSrc,
                        config
                    });
                }
            });
        }
        return exists;
    }).then(function (exists) {
        if (!exists) {
            var packageFile = path.join(dir, PACKAGE_FILENAME);
            return pathExists(packageFile).then(function (ex) {
                if (ex) {
                    fs.readFile(packageFile, 'utf8', function (err, data) {
                        var packageJson = JSON.parse(data);
                        if (packageJson.babel) {
                            resolve({
                                file: packageFile,
                                config: packageJson.babel
                            });
                        }
                    });
                }
            });
        }
        return exists;
    }).then(function (exists) {
        if (!exists) {
            var babelConfigJSrc = path.join(dir, BABEL_CONFIG_JS_FILENAME);
            return pathExists(babelConfigJSrc).then(function (ex) {
                if (ex) {
                    var config = getBabelJsConfig(babelConfigJSrc);
                    resolve({
                        file: babelConfigJSrc,
                        config
                    });
                }
            });
        }
        return exists;
    }).then(function (exists) {
        if (!exists) {
            var nextDir = path.dirname(dir);
            if (nextDir === dir) {
                resolve(nullConf);
            } else {
                asyncFind(resolve, nextDir, depth - 1);
            }
        }
    });
}

module.exports = function findBabelConfig(start) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INFINITY;

    if (!start) {
        return new Promise(function (resolve) {
            return resolve(nullConf);
        });
    }

    var dir = path.isAbsolute(start) ? start : path.join(process.cwd(), start);

    return new Promise(function (resolve) {
        asyncFind(resolve, dir, depth);
    });
};

module.exports.sync = function findBabelConfigSync(start) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INFINITY;

    if (!start) {
        return nullConf;
    }

    var dir = path.isAbsolute(start) ? start : path.join(process.cwd(), start);
    var loopLeft = depth;

    // eslint-disable-next-line no-cond-assign
    do {
        var babelrc = path.join(dir, BABELRC_FILENAME);
        if (pathExists.sync(babelrc)) {
            var babelrcContent = fs.readFileSync(babelrc, 'utf8');
            return {
                file: babelrc,
                config: JSON5.parse(babelrcContent)
            };
        }

        var babelJSrc = path.join(dir, BABELRC_JS_FILENAME);
        if (pathExists.sync(babelJSrc)) {
            var config = getBabelJsConfig(babelJSrc);
            return {
                file: babelJSrc,
                config
            };
        }

        var babelConfigJSrc = path.join(dir, BABEL_CONFIG_JS_FILENAME);
        if (pathExists.sync(babelConfigJSrc)) {
            var _config = getBabelJsConfig(babelConfigJSrc);
            return {
                file: babelConfigJSrc,
                config: _config
            };
        }

        var packageFile = path.join(dir, PACKAGE_FILENAME);
        if (pathExists.sync(packageFile)) {
            var packageContent = fs.readFileSync(packageFile, 'utf8');
            var packageJson = JSON.parse(packageContent);
            if (packageJson.babel) {
                return {
                    file: packageFile,
                    config: packageJson.babel
                };
            }
        }

        if (loopLeft === 0) {
            return nullConf;
        }

        loopLeft -= 1;
    } while (dir !== (dir = path.dirname(dir)));

    return nullConf;
};
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951392);
})()
//# sourceMappingURL=index.js.map