(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/main/main"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable no-unused-vars */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./main.scss */ "./src/pages/main/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Main, _BaseComponent);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__538", "$compid__539", "$compid__540", "$compid__541", "$compid__542", "$compid__543", "$compid__544", "$compid__545", "$compid__546", "$compid__547", "$compid__548", "$compid__549", "$compid__550", "$compid__551", "$compid__552", "$compid__553", "$compid__554", "$compid__555", "$compid__556", "$compid__557", "$compid__558", "$compid__559", "$compid__560", "$compid__561", "$compid__562", "$compid__563", "pannelCurrent", "showSearchResult", "monitorSwitch", "logSwitch", "deviceSwitch", "messageSwitch"], _this.config = {}, _this.customComponents = ["ClTitleBar", "ClSearchBar", "AtTabs", "AtTabsPane", "AtGrid", "SubTitle", "ClIcon", "ClSwitch", "AtProgress"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Main, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Main.prototype.__proto__ || Object.getPrototypeOf(Main.prototype), "_constructor", this).call(this, props);
      this.state = {
        pannelCurrent: 0,
        showSearchResult: false,
        monitorSwitch: true,
        logSwitch: false,
        deviceSwitch: true,
        messageSwitch: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    //当组件在进行挂载操作前，执行的函数

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}

    //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}

    //当组件准备销毁时执行。在这里一般可以执行一些回收的工作
    //例如 clearInterval(this.timer) 这种对定时器的回收操作

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleInput",
    value: function handleInput(value) {
      console.log('搜索栏正在输入' + value);
      if (value == '') {
        this.setState({
          showSearchResult: false
        });
      } else {
        this.setState({
          showSearchResult: true
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        pannelCurrent: value
      });
    }
  }, {
    key: "FuncCardClick",
    value: function FuncCardClick(index) {
      switch (index) {
        case 1:
          _taroWeapp2.default.navigateTo({
            url: '/pages/devices/ac'
          });
          console.log('调整空调');
          break;
        case 2:
          console.log('查看温度');
          break;
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(index, e) {
      switch (index) {
        case 1:
          this.setState({
            monitorSwitch: e
          });
          if (e) {
            console.log('开启监控');
          } else {
            console.log('关闭监控');
          }
          break;
        case 2:
          console.log('调整空调');
          break;
      }
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__538"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__538 = _genCompid2[0],
          $compid__538 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__539"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__539 = _genCompid4[0],
          $compid__539 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__540"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__540 = _genCompid6[0],
          $compid__540 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__541"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__541 = _genCompid8[0],
          $compid__541 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__542"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__542 = _genCompid10[0],
          $compid__542 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__543"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__543 = _genCompid12[0],
          $compid__543 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__544"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__544 = _genCompid14[0],
          $compid__544 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__545"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__545 = _genCompid16[0],
          $compid__545 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__546"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__546 = _genCompid18[0],
          $compid__546 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__547"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__547 = _genCompid20[0],
          $compid__547 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__548"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__548 = _genCompid22[0],
          $compid__548 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__549"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__549 = _genCompid24[0],
          $compid__549 = _genCompid24[1];

      var _genCompid25 = (0, _taroWeapp.genCompid)(__prefix + "$compid__550"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__550 = _genCompid26[0],
          $compid__550 = _genCompid26[1];

      var _genCompid27 = (0, _taroWeapp.genCompid)(__prefix + "$compid__551"),
          _genCompid28 = _slicedToArray(_genCompid27, 2),
          $prevCompid__551 = _genCompid28[0],
          $compid__551 = _genCompid28[1];

      var _genCompid29 = (0, _taroWeapp.genCompid)(__prefix + "$compid__552"),
          _genCompid30 = _slicedToArray(_genCompid29, 2),
          $prevCompid__552 = _genCompid30[0],
          $compid__552 = _genCompid30[1];

      var _genCompid31 = (0, _taroWeapp.genCompid)(__prefix + "$compid__553"),
          _genCompid32 = _slicedToArray(_genCompid31, 2),
          $prevCompid__553 = _genCompid32[0],
          $compid__553 = _genCompid32[1];

      var _genCompid33 = (0, _taroWeapp.genCompid)(__prefix + "$compid__554"),
          _genCompid34 = _slicedToArray(_genCompid33, 2),
          $prevCompid__554 = _genCompid34[0],
          $compid__554 = _genCompid34[1];

      var _genCompid35 = (0, _taroWeapp.genCompid)(__prefix + "$compid__555"),
          _genCompid36 = _slicedToArray(_genCompid35, 2),
          $prevCompid__555 = _genCompid36[0],
          $compid__555 = _genCompid36[1];

      var _genCompid37 = (0, _taroWeapp.genCompid)(__prefix + "$compid__556"),
          _genCompid38 = _slicedToArray(_genCompid37, 2),
          $prevCompid__556 = _genCompid38[0],
          $compid__556 = _genCompid38[1];

      var _genCompid39 = (0, _taroWeapp.genCompid)(__prefix + "$compid__557"),
          _genCompid40 = _slicedToArray(_genCompid39, 2),
          $prevCompid__557 = _genCompid40[0],
          $compid__557 = _genCompid40[1];

      var _genCompid41 = (0, _taroWeapp.genCompid)(__prefix + "$compid__558"),
          _genCompid42 = _slicedToArray(_genCompid41, 2),
          $prevCompid__558 = _genCompid42[0],
          $compid__558 = _genCompid42[1];

      var _genCompid43 = (0, _taroWeapp.genCompid)(__prefix + "$compid__559"),
          _genCompid44 = _slicedToArray(_genCompid43, 2),
          $prevCompid__559 = _genCompid44[0],
          $compid__559 = _genCompid44[1];

      var _genCompid45 = (0, _taroWeapp.genCompid)(__prefix + "$compid__560"),
          _genCompid46 = _slicedToArray(_genCompid45, 2),
          $prevCompid__560 = _genCompid46[0],
          $compid__560 = _genCompid46[1];

      var _genCompid47 = (0, _taroWeapp.genCompid)(__prefix + "$compid__561"),
          _genCompid48 = _slicedToArray(_genCompid47, 2),
          $prevCompid__561 = _genCompid48[0],
          $compid__561 = _genCompid48[1];

      var _genCompid49 = (0, _taroWeapp.genCompid)(__prefix + "$compid__562"),
          _genCompid50 = _slicedToArray(_genCompid49, 2),
          $prevCompid__562 = _genCompid50[0],
          $compid__562 = _genCompid50[1];

      var _genCompid51 = (0, _taroWeapp.genCompid)(__prefix + "$compid__563"),
          _genCompid52 = _slicedToArray(_genCompid51, 2),
          $prevCompid__563 = _genCompid52[0],
          $compid__563 = _genCompid52[1];

      var _state = this.__state,
          monitorSwitch = _state.monitorSwitch,
          logSwitch = _state.logSwitch,
          deviceSwitch = _state.deviceSwitch,
          messageSwitch = _state.messageSwitch;


      var anonymousState__temp = [{ title: '监控查询', desc: '近期记录' }, { title: '门窗状态', desc: '是否长时间未关闭' }];

      this.anonymousFunc0 = function () {
        _this2.setState({ showSearchResult: false });
      };

      var anonymousState__temp2 = [{ title: '基本数据' }, { title: '状态报告' }, { title: '代办列表' }];
      var anonymousState__temp3 = [{
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      }, {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '日程标记'
      }, {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      }, {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '新品首发'
      }, {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '领京豆'
      }, {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '资料备份'
      }];

      this.anonymousFunc1 = function (e) {
        console.log(e);
      };

      this.anonymousFunc2 = function (e) {
        console.log(e);
      };

      this.anonymousFunc3 = function (e) {
        console.log(e);
      };

      _taroWeapp.propsManager.set({
        "title": "NotU \u5BBF\u820D\u7BA1\u7406\u7CFB\u7EDF",
        "type": "border-title",
        "textColor": "grey",
        "borderColor": "light-blue",
        "bgColor": "none"
      }, $compid__538, $prevCompid__538);
      _taroWeapp.propsManager.set({
        "shape": "round",
        "placeholder": "\u5FEB\u6377\u68C0\u7D22",
        "searchType": "none",
        "bgColor": "gray",
        "onInput": this.handleInput.bind(this),
        "showResult": this.__state.showSearchResult,
        "result": anonymousState__temp,
        "onBlur": this.anonymousFunc0
      }, $compid__539, $prevCompid__539);
      _taroWeapp.propsManager.set({
        "animated": false,
        "current": this.__state.pannelCurrent,
        "tabList": anonymousState__temp2,
        "onClick": this.handleClick.bind(this)
      }, $compid__540, $prevCompid__540);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 0
      }, $compid__541, $prevCompid__541);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 1
      }, $compid__542, $prevCompid__542);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 2
      }, $compid__543, $prevCompid__543);
      _taroWeapp.propsManager.set({
        "columnNum": 2,
        "data": anonymousState__temp3
      }, $compid__544, $prevCompid__544);
      _taroWeapp.propsManager.set({
        "name": "\u529F\u80FD\u5165\u53E3"
      }, $compid__545, $prevCompid__545);
      _taroWeapp.propsManager.set({
        "iconName": "recordfill",
        "size": "xsmall"
      }, $compid__546, $prevCompid__546);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__547, $prevCompid__547);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "color": "olive",
        "checked": monitorSwitch,
        "onChange": this.handleChange.bind(this, 1)
      }, $compid__548, $prevCompid__548);
      _taroWeapp.propsManager.set({
        "iconName": "rankfill",
        "size": "xsmall"
      }, $compid__549, $prevCompid__549);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__550, $prevCompid__550);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "checked": logSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc1
      }, $compid__551, $prevCompid__551);
      _taroWeapp.propsManager.set({
        "iconName": "settingsfill",
        "size": "xsmall"
      }, $compid__552, $prevCompid__552);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__553, $prevCompid__553);
      _taroWeapp.propsManager.set({
        "disabled": true,
        "type": "normal",
        "checked": deviceSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc2
      }, $compid__554, $prevCompid__554);
      _taroWeapp.propsManager.set({
        "iconName": "newsfill",
        "size": "xsmall"
      }, $compid__555, $prevCompid__555);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__556, $prevCompid__556);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "checked": messageSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc3
      }, $compid__557, $prevCompid__557);
      _taroWeapp.propsManager.set({
        "name": "\u6210\u5458\u6570\u636E"
      }, $compid__558, $prevCompid__558);
      _taroWeapp.propsManager.set({
        "percent": 50,
        "isHidePercent": true
      }, $compid__559, $prevCompid__559);
      _taroWeapp.propsManager.set({
        "color": "hsl(43, 100%, 66%)",
        "percent": 80,
        "isHidePercent": true
      }, $compid__560, $prevCompid__560);
      _taroWeapp.propsManager.set({
        "percent": 50,
        "isHidePercent": true
      }, $compid__561, $prevCompid__561);
      _taroWeapp.propsManager.set({
        "percent": 70,
        "isHidePercent": true
      }, $compid__562, $prevCompid__562);
      _taroWeapp.propsManager.set({
        "percent": 30,
        "isHidePercent": true
      }, $compid__563, $prevCompid__563);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__538: $compid__538,
        $compid__539: $compid__539,
        $compid__540: $compid__540,
        $compid__541: $compid__541,
        $compid__542: $compid__542,
        $compid__543: $compid__543,
        $compid__544: $compid__544,
        $compid__545: $compid__545,
        $compid__546: $compid__546,
        $compid__547: $compid__547,
        $compid__548: $compid__548,
        $compid__549: $compid__549,
        $compid__550: $compid__550,
        $compid__551: $compid__551,
        $compid__552: $compid__552,
        $compid__553: $compid__553,
        $compid__554: $compid__554,
        $compid__555: $compid__555,
        $compid__556: $compid__556,
        $compid__557: $compid__557,
        $compid__558: $compid__558,
        $compid__559: $compid__559,
        $compid__560: $compid__560,
        $compid__561: $compid__561,
        $compid__562: $compid__562,
        $compid__563: $compid__563
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
  }]);

  return Main;
}(_taroWeapp.Component), _class.$$events = ["FuncCardClick"], _class.$$componentPath = "pages/main/main", _temp2);
exports.default = Main;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Main));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/main/main.wxml";

/***/ }),

/***/ "./src/pages/main/main.jsx":
/*!*********************************!*\
  !*** ./src/pages/main/main.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************!*\
  !*** ./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./main.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&":
/*!*********************************************************************!*\
  !*** ./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./main.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/main/main.scss":
/*!**********************************!*\
  !*** ./src/pages/main/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/main/main.jsx","runtime","taro","vendors"]]]);