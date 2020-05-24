(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/range/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtRange = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtRange, _AtComponent);

  function AtRange() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtRange);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtRange.__proto__ || Object.getPrototypeOf(AtRange)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "rootCls", "aX", "bX", "disabled", "min", "value", "className", "customStyle", "sliderStyle", "railStyle", "trackStyle", "blockSize"], _this.handleClick = function (event) {
      if (_this.currentSlider && !_this.props.disabled) {
        var sliderValue = 0;
        var detail = (0, _utils.getEventDetail)(event);
        sliderValue = detail.x - _this.left;
        _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtRange, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtRange.prototype.__proto__ || Object.getPrototypeOf(AtRange.prototype), '_constructor', this).call(this, props);

      var _props$min = props.min,
          min = _props$min === undefined ? 0 : _props$min,
          _props$max = props.max,
          max = _props$max === undefined ? 100 : _props$max;
      // range 宽度

      this.width = 0;
      // range 到屏幕左边的距离
      this.left = 0;
      this.deltaValue = max - min;
      this.currentSlider = '';
      this.state = {
        aX: 0,
        bX: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(sliderName, event) {
      if (this.props.disabled) {
        return;
      }event.stopPropagation();
      var clientX = event.touches[0].clientX;
      this.setSliderValue(sliderName, clientX - this.left, 'onChange');
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(sliderName) {
      if (this.props.disabled) {
        return;
      }this.currentSlider = sliderName;
      this.triggerEvent('onAfterChange');
    }
  }, {
    key: 'setSliderValue',
    value: function setSliderValue(sliderName, targetValue, funcName) {
      var _this2 = this;

      var distance = Math.min(Math.max(targetValue, 0), this.width);
      var sliderValue = Math.floor(distance / this.width * 100);
      if (funcName) {
        this.setState(_defineProperty({}, sliderName, sliderValue), function () {
          return _this2.triggerEvent(funcName);
        });
      } else {
        this.setState(_defineProperty({}, sliderName, sliderValue));
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var aX = Math.round((value[0] - this.props.min) / this.deltaValue * 100); // fix issue #670
      var bX = Math.round((value[1] - this.props.min) / this.deltaValue * 100); // fix issue #670
      this.setState({ aX: aX, bX: bX });
    }
  }, {
    key: 'triggerEvent',
    value: function triggerEvent(funcName) {
      var _state = this.state,
          aX = _state.aX,
          bX = _state.bX;

      var a = Math.round(aX / 100 * this.deltaValue) + this.props.min; // fix issue #670
      var b = Math.round(bX / 100 * this.deltaValue) + this.props.min; // fix issue #670
      var result = [a, b].sort(function (x, y) {
        return x - y;
      });
      if (funcName === 'onChange') {
        this.props.onChange && this.props.onChange(result);
      } else if (funcName === 'onAfterChange') {
        this.props.onAfterChange && this.props.onAfterChange(result);
      }
    }
  }, {
    key: 'updatePos',
    value: function updatePos() {
      var _this3 = this;

      (0, _utils.delayQuerySelector)(this, '.at-range__container', 0).then(function (rect) {
        _this3.width = Math.round(rect[0].width);
        _this3.left = Math.round(rect[0].left);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      this.updatePos();
      if (this.props.value[0] !== value[0] || this.props.value[1] !== value[1]) {
        this.setValue(value);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.props.value;

      this.updatePos();
      this.setValue(value);
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
          className = _props.className,
          customStyle = _props.customStyle,
          sliderStyle = _props.sliderStyle,
          railStyle = _props.railStyle,
          trackStyle = _props.trackStyle,
          blockSize = _props.blockSize,
          disabled = _props.disabled;

      var rootCls = (0, _classnames2.default)('at-range', {
        'at-range--disabled': disabled
      }, className);
      var _state2 = this.__state,
          aX = _state2.aX,
          bX = _state2.bX;

      var sliderCommonStyle = {
        width: blockSize ? blockSize + "PX" : '',
        height: blockSize ? blockSize + "PX" : '',
        marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
      };
      var sliderAStyle = _extends({}, sliderCommonStyle, {
        left: aX + "%"
      });
      var sliderBStyle = _extends({}, sliderCommonStyle, {
        left: bX + "%"
      });
      var containerStyle = {
        height: blockSize ? blockSize + "PX" : ''
      };
      var smallerX = Math.min(aX, bX);
      var deltaX = Math.abs(aX - bX);
      var atTrackStyle = {
        left: smallerX + "%",
        width: deltaX + "%"
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(containerStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(railStyle);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(atTrackStyle, trackStyle));
      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(sliderAStyle, sliderStyle));
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(sliderBStyle, sliderStyle));
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        rootCls: rootCls
      });
      return this.__state;
    }
  }]);

  return AtRange;
}(_component2.default), _class.$$events = ["handleClick", "handleTouchMove", "handleTouchEnd"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/range/index", _temp2);


AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0,
  onChange: function onChange() {},
  onAfterChange: function onAfterChange() {}
};
AtRange.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  sliderStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  railStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  trackStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  value: _propTypes2.default.array,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  blockSize: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  onAfterChange: _propTypes2.default.func
};
exports.default = AtRange;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtRange));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/range/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/range/index.tsx":
/*!********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/range/index.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/range/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/range/index.tsx","runtime","taro","vendors"]]]);