(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/tab-bar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtTabBar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTabBar, _AtComponent);

  function AtTabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTabBar.__proto__ || Object.getPrototypeOf(AtTabBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray9", "tabList", "customStyle", "className", "fixed", "backgroundColor", "current", "color", "iconSize", "fontSize", "selectedColor"], _this.customComponents = ["AtBadge"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTabBar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtTabBar.prototype.__proto__ || Object.getPrototypeOf(AtTabBar.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // constructor () {
    //   super(...arguments)
    //   this.state = {
    //     isIPhoneX: false
    //   }
    // }
    // componentDidMount () {
    //   const curEnv = Taro.getEnv()
    //   if (
    //     curEnv === Taro.ENV_TYPE.WEAPP &&
    //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
    //   ) {
    //     this.setState({ isIPhoneX: true })
    //   }
    // }

  }, {
    key: 'handleClick',
    value: function handleClick(index, event) {
      this.props.onClick(index, event);
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
          fixed = _props.fixed,
          backgroundColor = _props.backgroundColor,
          tabList = _props.tabList,
          current = _props.current,
          color = _props.color,
          iconSize = _props.iconSize,
          fontSize = _props.fontSize,
          selectedColor = _props.selectedColor;
      // const { isIPhoneX } = this.state

      var defaultStyle = {
        color: color || ''
      };
      var selectedStyle = {
        color: selectedColor || ''
      };
      var titleStyle = {
        fontSize: fontSize ? fontSize + "px" : ''
      };
      var rootStyle = {
        backgroundColor: backgroundColor || ''
      };
      var imgStyle = {
        width: iconSize + "px",
        height: iconSize + "px"
      };
      var anonymousState__temp = (0, _classnames2.default)({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed
        // 'at-tab-bar--ipx': isIPhoneX
      }, className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      var loopArray9 = tabList.map(function (item, i) {
        var _classNames;

        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = (0, _classnames2.default)('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        });
        var $loopState__temp6 = (0, _taroWeapp.internal_inline_style)(current === i ? selectedStyle : defaultStyle);
        var $loopState__temp8 = item.$original.iconType ? !!item.$original.dot : null;
        var $loopState__temp10 = item.$original.iconType ? Number(item.$original.max) : null;
        var $loopState__temp12 = item.$original.iconType ? (0, _classnames2.default)("" + (item.$original.iconPrefixClass || 'at-icon'), (_classNames = {}, _defineProperty(_classNames, (item.$original.iconPrefixClass || 'at-icon') + "-" + item.$original.selectedIconType, current === i && item.$original.selectedIconType), _defineProperty(_classNames, (item.$original.iconPrefixClass || 'at-icon') + "-" + item.$original.iconType, !(current === i && item.$original.selectedIconType)), _classNames)) : null;
        var $loopState__temp14 = item.$original.iconType ? (0, _taroWeapp.internal_inline_style)({
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? iconSize + "px" : ''
        }) : null;
        var $loopState__temp16 = item.$original.image ? !!item.$original.dot : null;
        var $loopState__temp18 = item.$original.image ? Number(item.$original.max) : null;
        var $loopState__temp20 = item.$original.image ? (0, _classnames2.default)('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }) : null;
        var $loopState__temp22 = item.$original.image ? (0, _taroWeapp.internal_inline_style)(imgStyle) : null;
        var $loopState__temp24 = item.$original.image ? (0, _classnames2.default)('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }) : null;
        var $loopState__temp26 = item.$original.image ? (0, _taroWeapp.internal_inline_style)(imgStyle) : null;
        var $loopState__temp28 = item.$original.iconType || item.$original.image ? 0 : Number(item.$original.max);
        var $loopState__temp30 = (0, _taroWeapp.internal_inline_style)(titleStyle);

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + 'bbzzzzzzzz' + i, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__89 = _genCompid2[0],
            $compid__89 = _genCompid2[1];

        item.$original.iconType && _taroWeapp.propsManager.set({
          "dot": $loopState__temp8,
          "value": item.$original.text,
          "maxValue": $loopState__temp10
        }, $compid__89, $prevCompid__89);

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + 'bczzzzzzzz' + i, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__90 = _genCompid4[0],
            $compid__90 = _genCompid4[1];

        item.$original.image && _taroWeapp.propsManager.set({
          "dot": $loopState__temp16,
          "value": item.$original.text,
          "maxValue": $loopState__temp18
        }, $compid__90, $prevCompid__90);

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + 'bdzzzzzzzz' + i, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__91 = _genCompid6[0],
            $compid__91 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "dot": item.$original.iconType || item.$original.image ? false : !!item.$original.dot,
          "value": item.$original.iconType || item.$original.image ? '' : item.$original.text,
          "maxValue": $loopState__temp28
        }, $compid__91, $prevCompid__91);
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $loopState__temp10: $loopState__temp10,
          $loopState__temp12: $loopState__temp12,
          $loopState__temp14: $loopState__temp14,
          $loopState__temp16: $loopState__temp16,
          $loopState__temp18: $loopState__temp18,
          $loopState__temp20: $loopState__temp20,
          $loopState__temp22: $loopState__temp22,
          $loopState__temp24: $loopState__temp24,
          $loopState__temp26: $loopState__temp26,
          $loopState__temp28: $loopState__temp28,
          $loopState__temp30: $loopState__temp30,
          $compid__89: $compid__89,
          $compid__90: $compid__90,
          $compid__91: $compid__91,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray9: loopArray9,
        tabList: tabList
      });
      return this.__state;
    }
  }]);

  return AtTabBar;
}(_component2.default), _class.$$events = ["handleClick"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/tab-bar/index", _temp2);


AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  tabList: [],
  onClick: function onClick() {}
};
AtTabBar.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  fixed: _propTypes2.default.bool,
  backgroundColor: _propTypes2.default.string,
  current: _propTypes2.default.number,
  iconSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  color: _propTypes2.default.string,
  selectedColor: _propTypes2.default.string,
  tabList: _propTypes2.default.array,
  onClick: _propTypes2.default.func
};
exports.default = AtTabBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtTabBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/tab-bar/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/tab-bar/index.tsx","runtime","taro","vendors"]]]);