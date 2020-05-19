(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/mp-colorui/dist/weapp/components/searchBar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************/
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

var _model = __webpack_require__(/*! ../../lib/model */ "./node_modules/mp-colorui/dist/weapp/lib/model.ts");

var _index = __webpack_require__(/*! ../../lib/index */ "./node_modules/mp-colorui/dist/weapp/lib/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClSearchBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ClSearchBar, _BaseComponent);

  function ClSearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClSearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClSearchBar.__proto__ || Object.getPrototypeOf(ClSearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "loopArray5", "$compid__98", "$compid__99", "$compid__100", "leftIcons", "shape", "placeholder", "showSearch", "value", "clear", "buttonColorClassName", "textColorClassName", "showResult", "result", "showLoading", "searchType", "bgColor", "rightButtonColor", "rightTextColor", "fix", "className", "style", "autoFocus", "onClear", "onScrollToLower", "onScrollToUpper", "onTouchResult"], _this.customComponents = ["ClIcon", "ClCard", "ClSearchResult"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClSearchBar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ClSearchBar.prototype.__proto__ || Object.getPrototypeOf(ClSearchBar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        showSearch: false,
        value: ""
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "onIconClick",
    value: function onIconClick(index) {
      this.props.onIconClick && this.props.onIconClick(index);
    }
  }, {
    key: "onSearch",
    value: function onSearch(e) {
      e.stopPropagation();
      this.props.onSearch && this.props.onSearch(this.state.value || "");
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      this.props.onFocus && this.props.onFocus(this.state.value || "");
      this.setState({
        showSearch: true,
        value: e.detail.value
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.props.onBlur && this.props.onBlur(this.state.value || "");
      this.setState({
        showSearch: false,
        value: e.detail.value
      });
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.setState({
        value: e.detail.value
      });
      this.props.onInput && this.props.onInput(e.detail.value);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__98"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__98 = _genCompid2[0],
          $compid__98 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__99"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__99 = _genCompid4[0],
          $compid__99 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__100"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__100 = _genCompid6[0],
          $compid__100 = _genCompid6[1];

      var _props = this.__props,
          bgColor = _props.bgColor,
          rightButtonColor = _props.rightButtonColor,
          rightTextColor = _props.rightTextColor,
          leftIcons = _props.leftIcons,
          shape = _props.shape,
          placeholder = _props.placeholder,
          clear = _props.clear,
          fix = _props.fix,
          className = _props.className,
          style = _props.style,
          searchType = _props.searchType,
          showResult = _props.showResult,
          result = _props.result,
          showLoading = _props.showLoading,
          onScrollToLower = _props.onScrollToLower,
          onScrollToUpper = _props.onScrollToUpper,
          onTouchResult = _props.onTouchResult;
      var _state = this.__state,
          showSearch = _state.showSearch,
          value = _state.value;

      var bgColorClassName = bgColor ? _model.BG_COLOR_LIST[bgColor] : "";
      var buttonColorClassName = rightButtonColor ? _model.BG_COLOR_LIST[rightButtonColor] : "";
      var textColorClassName = rightTextColor ? _model.TEXT_COLOR_LIST[rightTextColor] : "";

      this.anonymousFunc0 = function (e) {
        var onClear = _this2.__props.onClear;

        e.stopPropagation();
        _this2.setState({
          value: ""
        });
        onClear && _this2.__props.onClear();
      };

      var anonymousState__temp3 = clear && value ? {
        display: "flex",
        alignItems: "center"
      } : null;
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(fix ? { position: "fixed", top: "0", width: "100vw", zIndex: 10 } : "");
      var anonymousState__temp5 = (0, _index.classNames)("cu-bar " + bgColorClassName, className);
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)(Object.assign({ position: "relative" }, style));
      var anonymousState__temp7 = showResult ? (0, _taroWeapp.internal_inline_style)({
        position: "absolute",
        width: "100%",
        zIndex: 11,
        top: (0, _taroWeapp.pxTransform)(100)
      }) : null;
      var anonymousState__temp8 = result && result.length || showLoading ? (0, _taroWeapp.internal_inline_style)({ maxHeight: "300px" }) : null;

      this.anonymousFunc1 = function () {
        onScrollToLower && _this2.__props.onScrollToLower();
      };

      this.anonymousFunc2 = function () {
        onScrollToUpper && _this2.__props.onScrollToUpper();
      };

      this.anonymousFunc3 = function (index) {
        onTouchResult && _this2.__props.onTouchResult(index);
      };

      var loopArray5 = leftIcons ? leftIcons.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = leftIcons ? "key-" + index : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      }) : [];
      clear && value && _taroWeapp.propsManager.set({
        "iconName": "close",
        "size": 32,
        "style": anonymousState__temp3
      }, $compid__98, $prevCompid__98);
      showResult && (result && result.length || showLoading) && _taroWeapp.propsManager.set({
        "shadow": false,
        "bgColor": bgColor
      }, $compid__99, $prevCompid__99);
      showResult && (result && result.length || showLoading) && _taroWeapp.propsManager.set({
        "result": result,
        "showLoading": showLoading,
        "onTouchResult": this.anonymousFunc3
      }, $compid__100, $prevCompid__100);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        loopArray5: loopArray5,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        leftIcons: leftIcons,
        shape: shape,
        placeholder: placeholder,
        clear: clear,
        buttonColorClassName: buttonColorClassName,
        textColorClassName: textColorClassName,
        showResult: showResult,
        result: result,
        showLoading: showLoading,
        searchType: searchType
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }], [{
    key: "onPreventProp",
    value: function onPreventProp(e) {
      e.stopPropagation();
    }
  }]);

  return ClSearchBar;
}(_taroWeapp.Component), _class.$$events = ["onIconClick", "onFocus", "onBlur", "onSearch", "onInput", "anonymousFunc0", "onPreventProp", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "node_modules/mp-colorui/dist/weapp/components/searchBar/index", _temp2);


ClSearchBar.options = {
  addGlobalClass: true
};
ClSearchBar.defaultProps = {
  shape: "radius",
  fix: false,
  searchType: "button",
  leftIcons: [],
  bgColor: undefined,
  rightButtonColor: "white",
  rightTextColor: "black",
  placeholder: "请搜索",
  showLoading: false,
  showResult: false,
  result: [],
  autoFocus: false,
  clear: false,
  onClear: function onClear() {},
  onTouchResult: function onTouchResult() {},
  onScrollToUpper: function onScrollToUpper() {},
  onScrollToLower: function onScrollToLower() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};
exports.default = ClSearchBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ClSearchBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/mp-colorui/dist/weapp/components/searchBar/index.wxml";

/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx":
/*!***************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/mp-colorui/dist/weapp/components/searchBar/index.tsx","runtime","taro","vendors"]]]);