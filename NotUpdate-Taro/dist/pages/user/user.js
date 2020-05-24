(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user/user"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./user.scss */ "./src/pages/user/user.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_temp2 = _class = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__126", "$compid__127", "$compid__128", "$compid__129", "$compid__130", "$compid__131", "$compid__132", "$compid__133", "$compid__134", "$compid__135", "avatar", "nickName", "t1", "t2", "toastBoolean"], _this2.customComponents = ["ClTitleBar", "AtAvatar", "AtList", "AtListItem", "AtToast", "SubTitle", "AtRange"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);
      this.state = {
        avatar: '',
        nickName: '',
        t1: '25~35',
        t2: '40~80',
        toastBoolean: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var getStorage = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref3, data, nickName, avatar;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _taroWeapp2.default.getStorage({ key: 'userInfo' });

                case 3:
                  _ref3 = _context.sent;
                  data = _ref3.data;
                  nickName = data.nickName, avatar = data.avatar;

                  _this.setState({
                    avatar: avatar,
                    nickName: nickName
                  });
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);

                  console.log('getStorage ERR: ', _context.t0);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 9]]);
        }));

        return function getStorage() {
          return _ref2.apply(this, arguments);
        };
      }();

      var _this = this;


      getStorage();
    }
  }, {
    key: "handleChange1",
    value: function handleChange1(value) {
      this.setState({
        t1: value[0] + "~" + value[1]
      });
    }
  }, {
    key: "handleChange2",
    value: function handleChange2(value) {
      this.setState({
        t2: value[0] + "~" + value[1]
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__126"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__126 = _genCompid2[0],
          $compid__126 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__127"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__127 = _genCompid4[0],
          $compid__127 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__128"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__128 = _genCompid6[0],
          $compid__128 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__129"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__129 = _genCompid8[0],
          $compid__129 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__130"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__130 = _genCompid10[0],
          $compid__130 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__131"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__131 = _genCompid12[0],
          $compid__131 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__132"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__132 = _genCompid14[0],
          $compid__132 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__133"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__133 = _genCompid16[0],
          $compid__133 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__134"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__134 = _genCompid18[0],
          $compid__134 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__135"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__135 = _genCompid20[0],
          $compid__135 = _genCompid20[1];

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.navigateTo({
          url: '/pages/mine/mine'
        });
      };

      this.anonymousFunc1 = function (value) {
        console.log(value);
        if (value.detail.value) {
          _this3.setState({
            toastBoolean: true
          });
          setTimeout(function () {
            _this3.setState({
              toastBoolean: false
            });
          }, 800);
        }
      };

      var anonymousState__temp = '温度安全范围:  ' + this.__state.t1;
      var anonymousState__temp2 = [25, 35];
      var anonymousState__temp3 = '湿度度安全范围:  ' + this.__state.t2;
      var anonymousState__temp4 = [40, 80];
      _taroWeapp.propsManager.set({
        "title": "\u6211\u7684\u4FE1\u606F",
        "type": "border-title",
        "textColor": "grey",
        "borderColor": "light-blue",
        "bgColor": "none"
      }, $compid__126, $prevCompid__126);
      _taroWeapp.propsManager.set({
        "circle": true,
        "size": "large",
        "image": this.__state.avatar
      }, $compid__127, $prevCompid__127);
      _taroWeapp.propsManager.set({
        "title": "\u95E8\u672A\u5173\u63D0\u9192",
        "isSwitch": true,
        "onSwitchChange": this.handleChange
      }, $compid__128, $prevCompid__128);
      _taroWeapp.propsManager.set({
        "title": "\u77ED\u4FE1\u63D0\u9192",
        "isSwitch": true,
        "onSwitchChange": this.anonymousFunc1
      }, $compid__129, $prevCompid__129);
      _taroWeapp.propsManager.set({
        "duration": 800,
        "isOpened": this.__state.toastBoolean,
        "text": "\u5F00\u542F\u77ED\u4FE1\u63D0\u9192",
        "icon": "bell"
      }, $compid__130, $prevCompid__130);
      _taroWeapp.propsManager.set({
        "title": "\u65E9\u8BFE\u63D0\u9192",
        "isSwitch": true,
        "onSwitchChange": this.handleChange
      }, $compid__131, $prevCompid__131);
      _taroWeapp.propsManager.set({
        "name": anonymousState__temp
      }, $compid__132, $prevCompid__132);
      _taroWeapp.propsManager.set({
        "value": anonymousState__temp2,
        "min": 0,
        "max": 50,
        "onChange": this.handleChange1.bind(this)
      }, $compid__133, $prevCompid__133);
      _taroWeapp.propsManager.set({
        "name": anonymousState__temp3
      }, $compid__134, $prevCompid__134);
      _taroWeapp.propsManager.set({
        "value": anonymousState__temp4,
        "min": 0,
        "max": 100,
        "onChange": this.handleChange2.bind(this)
      }, $compid__135, $prevCompid__135);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__126: $compid__126,
        $compid__127: $compid__127,
        $compid__128: $compid__128,
        $compid__129: $compid__129,
        $compid__130: $compid__130,
        $compid__131: $compid__131,
        $compid__132: $compid__132,
        $compid__133: $compid__133,
        $compid__134: $compid__134,
        $compid__135: $compid__135
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return User;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/user/user", _temp2);
exports.default = User;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(User));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/user/user.wxml";

/***/ }),

/***/ "./src/pages/user/user.jsx":
/*!*********************************!*\
  !*** ./src/pages/user/user.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************!*\
  !*** ./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./user.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/user/user.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT&":
/*!*********************************************************************!*\
  !*** ./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./user.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/user/user.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_user_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/user/user.scss":
/*!**********************************!*\
  !*** ./src/pages/user/user.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/user/user.jsx","runtime","taro","vendors"]]]);