(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/techarts/demo/src/components/EChart/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/techarts/demo/src/components/EChart?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wxCanvas = __webpack_require__(/*! ./wx-canvas */ "./node_modules/techarts/demo/src/components/EChart/wx-canvas.js");

var _wxCanvas2 = _interopRequireDefault(_wxCanvas);

__webpack_require__(/*! ./index.less */ "./node_modules/techarts/demo/src/components/EChart/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INSTANCE_COUNTER = 0;

var EChart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(EChart, _BaseComponent);

  function EChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EChart.__proto__ || Object.getPrototypeOf(EChart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "canvasId", "isUseNewCanvas", "option", "lazyLoad", "disableTouch", "style", "forceUseOldCanvas"], _this.init = function (callback) {
      if (!_this.echarts) {
        console.error('[EChart]\uFF1A\u7EC4\u4EF6\u9700\u8981echarts\u5BF9\u8C61\u624D\u80FD\u7ED8\u56FE\uFF0C\u5EFA\u8BAE\u53BB\u5B98\u7F51\u81EA\u5B9A\u4E49\u6784\u5EFA\u3002\u6CE8\u610F\u4E0D\u8981\u52FE\u9009\u201C\u4EE3\u7801\u538B\u7F29\u201D\uFF0C\u53EF\u4E0B\u8F7D\u540E\u81EA\u884C\u538B\u7F29\u3002https://www.echartsjs.com/zh/builder.html');
        return;
      }

      {
        var version = _taroWeapp2.default.getSystemInfoSync().SDKVersion;
        var canUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
        var forceUseOldCanvas = _this.props.forceUseOldCanvas;
        var isUseNewCanvas = canUseNewCanvas && !forceUseOldCanvas;
        _this.setState({ isUseNewCanvas: isUseNewCanvas });

        if (forceUseOldCanvas && canUseNewCanvas) {
          console.warn('开发者强制使用旧canvas,建议关闭');
        }

        if (isUseNewCanvas) {
          // console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>');
          // 2.9.0 可以使用 <canvas type="2d"></canvas>
          _this._initByNewWay(callback);
        } else {
          var isValid = compareVersion(version, '1.9.91') >= 0;
          if (!isValid) {
            console.error('\u5FAE\u4FE1\u57FA\u7840\u5E93\u7248\u672C\u8FC7\u4F4E\uFF0C\u9700\u5927\u4E8E\u7B49\u4E8E 1.9.91\u3002\u53C2\u89C1\uFF1Ahttps://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
          } else {
            console.warn('建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能');
            _this._initByOldWay(callback);
          }
        }
      }
    }, _this._touchStart = function (e) {
      if (_this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = _this.chart.getZr().handler;
        handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'start');
      }
    }, _this._touchMove = function (e) {
      if (_this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = _this.chart.getZr().handler;
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'change');
      }
    }, _this._touchEnd = function (e) {
      if (_this.chart) {
        var touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = _this.chart.getZr().handler;
        handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('click', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'end');
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EChart, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(EChart.prototype.__proto__ || Object.getPrototypeOf(EChart.prototype), '_constructor', this).call(this, props);
      this.echarts = props.echarts;
      this.chart = null; // echarts instance
      this.canvasId = '__techarts__' + INSTANCE_COUNTER++;
      this.state = {
        isUseNewCanvas: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.option !== prevProps.option) {
        this.setOption(this.props.option);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var lazyLoad = this.props.lazyLoad;

      if (!lazyLoad) {
        this.init();
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          disableTouch = _props.disableTouch,
          style = _props.style;

      var canvasId = this.getCanvasId();
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style);
      this.anonymousFunc0 = disableTouch ? '' : this._touchStart;
      this.anonymousFunc1 = disableTouch ? '' : this._touchMove;
      this.anonymousFunc2 = disableTouch ? '' : this._touchEnd;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        canvasId: canvasId
      });
      return this.__state;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      if (this.chart && option) {
        this.chart.setOption(option);
      }
    }
  }, {
    key: 'getCanvasId',
    value: function getCanvasId() {
      return this.props.canvasId || this.canvasId;
    }
  }, {
    key: '_invokeCallback',
    value: function _invokeCallback(callback, canvas, canvasWidth, canvasHeight, canvasDpr) {
      if (typeof callback === 'function') {
        this.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
      } else {
        this.chart = this._initChart(canvas, canvasWidth, canvasHeight, canvasDpr);
      }
    }
  }, {
    key: '_initByOldWay',
    value: function _initByOldWay(callback) {
      var _this2 = this;

      // 1.9.91 <= version < 2.9.0：原来的方式初始化
      var canvasId = this.getCanvasId();
      var ctx = _taroWeapp2.default.createCanvasContext(canvasId, this.$scope);
      this.ctx = ctx;
      var canvas = new _wxCanvas2.default(ctx, canvasId, false);

      this.echarts.setCanvasCreator(function () {
        return canvas;
      });
      // const canvasDpr = Taro.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr
      var canvasDpr = 1;
      var query = _taroWeapp2.default.createSelectorQuery().in(this.$scope);
      query.select('.techarts-canvas').boundingClientRect(function (res) {
        _this2._invokeCallback(callback, canvas, res.width, res.height, canvasDpr);
      }).exec();
    }
  }, {
    key: '_initByNewWay',
    value: function _initByNewWay(callback) {
      var _this3 = this;

      // version >= 2.9.0：使用新的方式初始化
      var canvasId = this.getCanvasId();
      var query = _taroWeapp2.default.createSelectorQuery().in(this.$scope);
      query.select('.techarts-canvas').fields({ node: true, size: true }).exec(function (res) {
        var canvasNode = res[0].node;
        _this3.canvasNode = canvasNode;

        var canvasDpr = _taroWeapp2.default.getSystemInfoSync().pixelRatio;
        var canvasWidth = res[0].width;
        var canvasHeight = res[0].height;

        var ctx = canvasNode.getContext('2d');

        var canvas = new _wxCanvas2.default(ctx, canvasId, true, canvasNode);
        _this3.echarts.setCanvasCreator(function () {
          return canvas;
        });
        _this3._invokeCallback(callback, canvas, canvasWidth, canvasHeight, canvasDpr);
      });
    }
  }, {
    key: 'canvasToTempFilePath',
    value: function canvasToTempFilePath(opt) {
      var _this4 = this;

      opt = opt || {};
      if (!opt.canvasId) {
        opt.canvasId = this.getCanvasId();
      }
      {
        if (this.state.isUseNewCanvas) {
          // 新版
          var query = _taroWeapp2.default.createSelectorQuery().in(this.$scope);
          query.select('.techarts-canvas').fields({ node: true, size: true }).exec(function (res) {
            var canvasNode = res[0].node;
            opt.canvas = canvasNode;
            _taroWeapp2.default.canvasToTempFilePath(opt, _this4.$scope);
          });
        } else {
          // 旧的
          this.ctx.draw(true, function () {
            _taroWeapp2.default.canvasToTempFilePath(opt, _this4.$scope);
          });
        }
      }
    }
  }, {
    key: '_initChart',
    value: function _initChart(canvas, width, height, dpr) {
      var onInit = this.props.onInit;

      if (!canvas.setChart) {
        canvas.setChart = function () {};
      }
      if (typeof onInit === 'function') {
        this.chart = this.props.onInit(canvas, width, height, dpr);
      } else {
        var chart = this.echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        if (this.props.option) {
          chart.setOption(this.props.option);
        }
        this.chart = chart;
      }
      return this.chart;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return EChart;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "node_modules/techarts/demo/src/components/EChart/index", _temp2);


function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

function wrapTouch(event) {
  for (var i = 0; i < event.touches.length; ++i) {
    var touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}

function canvasToTempFilePath(_ref2, componentInstance) {
  var canvasId = _ref2.canvasId,
      fileType = _ref2.fileType,
      quality = _ref2.quality,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  try {
    var canvas = componentInstance.vnode.dom.querySelector('canvas');
    var dataURL = canvas.toDataURL("image/" + (fileType || 'png'), quality);
    var res = {
      tempFilePath: dataURL,
      res: 'canvasToTempFilePath:ok'
    };
    success && success(res);
    complete && complete();
    return Promise.resolve(res);
  } catch (e) {
    var _res = {
      errMsg: e.message
    };
    fail && fail(_res);
    complete && complete();
    return Promise.reject(_res);
  }
}
exports.default = EChart;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(EChart));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/techarts/demo/src/components/EChart?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/techarts/demo/src/components/EChart/index.wxml";

/***/ }),

/***/ "./node_modules/techarts/demo/src/components/EChart/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/techarts/demo/src/components/EChart/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************!*\
  !*** ./node_modules/techarts/demo/src/components/EChart?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/techarts/demo/src/components/EChart?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/techarts/demo/src/components/EChart/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/techarts/demo/src/components/EChart/index.less":
/*!*********************************************************************!*\
  !*** ./node_modules/techarts/demo/src/components/EChart/index.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/techarts/demo/src/components/EChart/wx-canvas.js":
/*!***********************************************************************!*\
  !*** ./node_modules/techarts/demo/src/components/EChart/wx-canvas.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxCanvas = function () {
  function WxCanvas(ctx, canvasId, isNew, canvasNode) {
    _classCallCheck(this, WxCanvas);

    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this._initStyle(ctx);
    }

    // this._initCanvas(zrender, ctx);

    this._initEvent();
  }

  _createClass(WxCanvas, [{
    key: 'getContext',
    value: function getContext(contextType) {
      if (contextType === '2d') {
        return this.ctx;
      }
    }

    // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }
    //   return wx.canvasToTempFilePath(opt, this);
    // }

  }, {
    key: 'setChart',
    value: function setChart(chart) {
      this.chart = chart;
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      // noop
    }
  }, {
    key: 'detachEvent',
    value: function detachEvent() {
      // noop
    }
  }, {
    key: '_initCanvas',
    value: function _initCanvas(zrender, ctx) {
      zrender.util.getContext = function () {
        return ctx;
      };

      zrender.util.$override('measureText', function (text, font) {
        ctx.font = font || '12px sans-serif';
        return ctx.measureText(text);
      });
    }
  }, {
    key: '_initStyle',
    value: function _initStyle(ctx) {
      var _arguments = arguments;

      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];

      styles.forEach(function (style) {
        Object.defineProperty(ctx, style, {
          set: function set(value) {
            if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {
              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
            }
          }
        });
      });

      ctx.createRadialGradient = function () {
        return ctx.createCircularGradient(_arguments);
      };
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this = this;

      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown'
      }, {
        wxName: 'touchMove',
        ecName: 'mousemove'
      }, {
        wxName: 'touchEnd',
        ecName: 'mouseup'
      }, {
        wxName: 'touchEnd',
        ecName: 'click'
      }];

      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.touches[0];
          _this.chart.getZr().handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y
          });
        };
      });
    }
  }, {
    key: 'width',
    set: function set(w) {
      if (this.canvasNode) this.canvasNode.width = w;
    },
    get: function get() {
      if (this.canvasNode) return this.canvasNode.width;
      return 0;
    }
  }, {
    key: 'height',
    set: function set(h) {
      if (this.canvasNode) this.canvasNode.height = h;
    },
    get: function get() {
      if (this.canvasNode) return this.canvasNode.height;
      return 0;
    }
  }]);

  return WxCanvas;
}();

exports.default = WxCanvas;

/***/ })

},[["./node_modules/techarts/demo/src/components/EChart/index.js","runtime","taro","vendors"]]]);