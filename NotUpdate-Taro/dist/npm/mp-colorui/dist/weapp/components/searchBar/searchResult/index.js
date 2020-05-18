(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/mp-colorui/dist/weapp/components/searchBar/searchResult/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************************************/
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

var _index = __webpack_require__(/*! ../../../lib/index */ "./node_modules/mp-colorui/dist/weapp/lib/index.ts");

__webpack_require__(/*! ./index.scss */ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClSearchResult = (_temp2 = _class = function (_Taro$Component) {
  _inherits(ClSearchResult, _Taro$Component);

  function ClSearchResult() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClSearchResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClSearchResult.__proto__ || Object.getPrototypeOf(ClSearchResult)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "loopArray6", "$compid__85", "$compid__86", "$compid__87", "result", "showLoading"], _this.anonymousFunc0Map = {}, _this.customComponents = ["ClLayout", "ClText", "ClIcon", "ClFlex"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClSearchResult, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ClSearchResult.prototype.__proto__ || Object.getPrototypeOf(ClSearchResult.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__85"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__85 = _genCompid2[0],
          $compid__85 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__86"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__86 = _genCompid4[0],
          $compid__86 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__87"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__87 = _genCompid6[0],
          $compid__87 = _genCompid6[1];

      var props = this.__props;

      var _useState = (0, _taroWeapp.useState)(props.result || []),
          _useState2 = _slicedToArray(_useState, 2),
          resultState = _useState2[0],
          setResultState = _useState2[1];

      (0, _taroWeapp.useEffect)(function () {
        var list = props.result || [];
        setResultState(list.map(function (item) {
          item.cu_search_bar_result_id = (0, _index.generateId)();
          return item;
        }));
      }, [props.result]);
      var result = resultState || [];
      var showLoading = props.showLoading;
      var onTouchResult = props.onTouchResult;
      var anonymousState__temp3 = (0, _index.classNames)(props.className);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(Object.assign({ width: "100%" }, props.style));
      var loopArray6 = result.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = "key-" + index;

        var _$indexKey = "hzzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          onTouchResult(index);
        };

        var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "izzzzzzzzz" + index, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__82 = _genCompid8[0],
            $compid__82 = _genCompid8[1];

        _taroWeapp.propsManager.set({
          "padding": "small",
          "paddingDirection": "vertical"
        }, $compid__82, $prevCompid__82);

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "jzzzzzzzzz" + index, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__83 = _genCompid10[0],
            $compid__83 = _genCompid10[1];

        _taroWeapp.propsManager.set({
          "text": item.$original.title,
          "size": "large"
        }, $compid__83, $prevCompid__83);

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "bazzzzzzzz" + index, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__84 = _genCompid12[0],
            $compid__84 = _genCompid12[1];

        _taroWeapp.propsManager.set({
          "text": item.$original.desc,
          "size": "xsmall",
          "cut": true
        }, $compid__84, $prevCompid__84);
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $compid__82: $compid__82,
          $compid__83: $compid__83,
          $compid__84: $compid__84,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "padding": "normal",
        "paddingDirection": "vertical"
      }, $compid__85, $prevCompid__85);
      _taroWeapp.propsManager.set({
        "iconName": "loading2"
      }, $compid__86, $prevCompid__86);
      _taroWeapp.propsManager.set({
        "direction": "column",
        "align": "center",
        "justify": "center"
      }, $compid__87, $prevCompid__87);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray6: loopArray6,
        $compid__85: $compid__85,
        $compid__86: $compid__86,
        $compid__87: $compid__87,
        result: result,
        showLoading: showLoading
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return ClSearchResult;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index", _temp2);


ClSearchResult.options = {
  addGlobalClass: true
};
exports.default = ClSearchResult;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ClSearchResult));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/mp-colorui/dist/weapp/components/searchBar/searchResult/index.wxml";

/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!../../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/mp-colorui/dist/weapp/components/searchBar/searchResult/index.tsx","runtime","taro","vendors"]]]);