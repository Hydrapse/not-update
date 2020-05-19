(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/nav-bar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************/
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

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();

var AtNavBar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtNavBar, _AtComponent);

  function AtNavBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtNavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtNavBar.__proto__ || Object.getPrototypeOf(AtNavBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "leftIconType", "leftIconClass", "title", "rightSecondIconType", "rightSecondIconClass", "rightFirstIconType", "rightFirstIconClass", "leftText", "customStyle", "className", "color", "fixed", "border", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtNavBar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtNavBar.prototype.__proto__ || Object.getPrototypeOf(AtNavBar.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleClickLeftView',
    value: function handleClickLeftView(event) {
      this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
    }
  }, {
    key: 'handleClickSt',
    value: function handleClickSt(event) {
      this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
    }
  }, {
    key: 'handleClickNd',
    value: function handleClickNd(event) {
      this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
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
          customStyle = _props.customStyle,
          className = _props.className,
          color = _props.color,
          fixed = _props.fixed,
          border = _props.border,
          leftIconType = _props.leftIconType,
          leftText = _props.leftText,
          title = _props.title,
          rightFirstIconType = _props.rightFirstIconType,
          rightSecondIconType = _props.rightSecondIconType;

      var linkStyle = { color: color };
      var defaultIconInfo = {
        customStyle: '',
        className: '',
        prefixClass: 'at-icon',
        value: '',
        color: '',
        size: 24
      };
      var leftIconInfo = leftIconType instanceof Object ? _extends({}, defaultIconInfo, leftIconType) : _extends({}, defaultIconInfo, { value: leftIconType });
      var leftIconClass = (0, _classnames2.default)(leftIconInfo.prefixClass, _defineProperty({}, leftIconInfo.prefixClass + "-" + leftIconInfo.value, leftIconInfo.value), leftIconInfo.className);
      var rightFirstIconInfo = rightFirstIconType instanceof Object ? _extends({}, defaultIconInfo, rightFirstIconType) : _extends({}, defaultIconInfo, { value: rightFirstIconType });
      var rightFirstIconClass = (0, _classnames2.default)(rightFirstIconInfo.prefixClass, _defineProperty({}, rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value, rightFirstIconInfo.value), rightFirstIconInfo.className);
      var rightSecondIconInfo = rightSecondIconType instanceof Object ? _extends({}, defaultIconInfo, rightSecondIconType) : _extends({}, defaultIconInfo, { value: rightSecondIconType });
      var rightSecondIconClass = (0, _classnames2.default)(rightSecondIconInfo.prefixClass, _defineProperty({}, rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value, rightSecondIconInfo.value), rightSecondIconInfo.className);
      var anonymousState__temp = (0, _classnames2.default)({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(linkStyle);
      var anonymousState__temp4 = leftIconType ? (0, _taroWeapp.internal_inline_style)(this.mergeStyle({
        color: leftIconInfo.color,
        fontSize: "" + _taroWeapp2.default.pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
      }, leftIconInfo.customStyle)) : null;
      var anonymousState__temp5 = (0, _classnames2.default)({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      });
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)(linkStyle);
      var anonymousState__temp7 = rightSecondIconType ? (0, _taroWeapp.internal_inline_style)(this.mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "" + _taroWeapp2.default.pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
      }, rightSecondIconInfo.customStyle)) : null;
      var anonymousState__temp8 = (0, _classnames2.default)({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      });
      var anonymousState__temp9 = (0, _taroWeapp.internal_inline_style)(linkStyle);
      var anonymousState__temp10 = rightFirstIconType ? (0, _taroWeapp.internal_inline_style)(this.mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "" + _taroWeapp2.default.pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
      }, rightFirstIconInfo.customStyle)) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        leftIconType: leftIconType,
        leftIconClass: leftIconClass,
        title: title,
        rightSecondIconType: rightSecondIconType,
        rightSecondIconClass: rightSecondIconClass,
        rightFirstIconType: rightFirstIconType,
        rightFirstIconClass: rightFirstIconClass,
        leftText: leftText
      });
      return this.__state;
    }
  }]);

  return AtNavBar;
}(_component2.default), _class.$$events = ["handleClickLeftView", "handleClickNd", "handleClickSt"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/nav-bar/index", _temp2);


AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: function onClickLeftIcon() {},
  onClickRgIconSt: function onClickRgIconSt() {},
  onClickRgIconNd: function onClickRgIconNd() {}
};
AtNavBar.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  fixed: _propTypes2.default.bool,
  border: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  leftIconType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  leftText: _propTypes2.default.string,
  title: _propTypes2.default.string,
  rightFirstIconType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  rightSecondIconType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  onClickLeftIcon: _propTypes2.default.func,
  onClickRgIconSt: _propTypes2.default.func,
  onClickRgIconNd: _propTypes2.default.func
};
exports.default = AtNavBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtNavBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/nav-bar/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/nav-bar/index.tsx","runtime","taro","vendors"]]]);