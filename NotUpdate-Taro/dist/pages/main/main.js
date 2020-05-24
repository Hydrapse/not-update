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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__98", "$compid__99", "$compid__100", "$compid__101", "$compid__102", "$compid__103", "$compid__104", "$compid__105", "$compid__106", "$compid__107", "$compid__108", "$compid__109", "$compid__110", "$compid__111", "$compid__112", "$compid__113", "$compid__114", "$compid__115", "$compid__116", "$compid__117", "$compid__118", "$compid__119", "$compid__120", "$compid__121", "$compid__122", "$compid__123", "$compid__124", "$compid__125", "pannelCurrent", "showSearchResult", "monitorSwitch", "logSwitch", "deviceSwitch", "messageSwitch", "actemp", "doorWarning"], _this.config = {}, _this.customComponents = ["ClTitleBar", "ClSearchBar", "AtTabs", "AtTabsPane", "ElectricFee", "AtGrid", "SubTitle", "ClIcon", "ClSwitch", "AtProgress", "AtModal", "AtModalHeader", "AtModalContent", "AtModalAction"], _temp), _possibleConstructorReturn(_this, _ret);
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
        messageSwitch: false,
        actemp: 24,
        doorWarning: false
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


    //搜索栏输入处理
    value: function handleInput(value) {

      console.log('搜索栏正在输入' + value);
      if (value == '') {
        this.setState({
          showSearchResult: false
        });
      } else {
        if (value == '监控') {
          this.setState({
            showSearchResult: true
          });
        } else if (value == '自') {
          this.setState({
            showSearchResult: true
          });
        }
      }
    }

    //面板切换

  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        pannelCurrent: value
      });
    }

    //对应功能卡片点击

  }, {
    key: "FuncCardClick",
    value: function FuncCardClick(index) {
      switch (index) {
        case 1:
          _taroWeapp2.default.navigateTo({
            url: '/pages/devices/ac'
          });
          console.log('调整空调');

          //作弊
          // setTimeout(()=>{
          //   this.setState({
          //   actemp: 16
          // })
          // }, 5000)

          break;
        case 2:
          _taroWeapp2.default.navigateTo({
            url: '/pages/devices/hygrothermograph'
          });
          console.log('查看温度');
          break;
        case 3:
          _taroWeapp2.default.navigateTo({
            url: '/pages/devices/hygrothermograph'
          });
          console.log('查看湿度');
      }
    }

    //关于功能区域的switch组件选择 

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

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__101"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__101 = _genCompid8[0],
          $compid__101 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__102"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__102 = _genCompid10[0],
          $compid__102 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__103"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__103 = _genCompid12[0],
          $compid__103 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__104"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__104 = _genCompid14[0],
          $compid__104 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__105"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__105 = _genCompid16[0],
          $compid__105 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__106"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__106 = _genCompid18[0],
          $compid__106 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__107"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__107 = _genCompid20[0],
          $compid__107 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__108"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__108 = _genCompid22[0],
          $compid__108 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__109"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__109 = _genCompid24[0],
          $compid__109 = _genCompid24[1];

      var _genCompid25 = (0, _taroWeapp.genCompid)(__prefix + "$compid__110"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__110 = _genCompid26[0],
          $compid__110 = _genCompid26[1];

      var _genCompid27 = (0, _taroWeapp.genCompid)(__prefix + "$compid__111"),
          _genCompid28 = _slicedToArray(_genCompid27, 2),
          $prevCompid__111 = _genCompid28[0],
          $compid__111 = _genCompid28[1];

      var _genCompid29 = (0, _taroWeapp.genCompid)(__prefix + "$compid__112"),
          _genCompid30 = _slicedToArray(_genCompid29, 2),
          $prevCompid__112 = _genCompid30[0],
          $compid__112 = _genCompid30[1];

      var _genCompid31 = (0, _taroWeapp.genCompid)(__prefix + "$compid__113"),
          _genCompid32 = _slicedToArray(_genCompid31, 2),
          $prevCompid__113 = _genCompid32[0],
          $compid__113 = _genCompid32[1];

      var _genCompid33 = (0, _taroWeapp.genCompid)(__prefix + "$compid__114"),
          _genCompid34 = _slicedToArray(_genCompid33, 2),
          $prevCompid__114 = _genCompid34[0],
          $compid__114 = _genCompid34[1];

      var _genCompid35 = (0, _taroWeapp.genCompid)(__prefix + "$compid__115"),
          _genCompid36 = _slicedToArray(_genCompid35, 2),
          $prevCompid__115 = _genCompid36[0],
          $compid__115 = _genCompid36[1];

      var _genCompid37 = (0, _taroWeapp.genCompid)(__prefix + "$compid__116"),
          _genCompid38 = _slicedToArray(_genCompid37, 2),
          $prevCompid__116 = _genCompid38[0],
          $compid__116 = _genCompid38[1];

      var _genCompid39 = (0, _taroWeapp.genCompid)(__prefix + "$compid__117"),
          _genCompid40 = _slicedToArray(_genCompid39, 2),
          $prevCompid__117 = _genCompid40[0],
          $compid__117 = _genCompid40[1];

      var _genCompid41 = (0, _taroWeapp.genCompid)(__prefix + "$compid__118"),
          _genCompid42 = _slicedToArray(_genCompid41, 2),
          $prevCompid__118 = _genCompid42[0],
          $compid__118 = _genCompid42[1];

      var _genCompid43 = (0, _taroWeapp.genCompid)(__prefix + "$compid__119"),
          _genCompid44 = _slicedToArray(_genCompid43, 2),
          $prevCompid__119 = _genCompid44[0],
          $compid__119 = _genCompid44[1];

      var _genCompid45 = (0, _taroWeapp.genCompid)(__prefix + "$compid__120"),
          _genCompid46 = _slicedToArray(_genCompid45, 2),
          $prevCompid__120 = _genCompid46[0],
          $compid__120 = _genCompid46[1];

      var _genCompid47 = (0, _taroWeapp.genCompid)(__prefix + "$compid__121"),
          _genCompid48 = _slicedToArray(_genCompid47, 2),
          $prevCompid__121 = _genCompid48[0],
          $compid__121 = _genCompid48[1];

      var _genCompid49 = (0, _taroWeapp.genCompid)(__prefix + "$compid__122"),
          _genCompid50 = _slicedToArray(_genCompid49, 2),
          $prevCompid__122 = _genCompid50[0],
          $compid__122 = _genCompid50[1];

      var _genCompid51 = (0, _taroWeapp.genCompid)(__prefix + "$compid__123"),
          _genCompid52 = _slicedToArray(_genCompid51, 2),
          $prevCompid__123 = _genCompid52[0],
          $compid__123 = _genCompid52[1];

      var _genCompid53 = (0, _taroWeapp.genCompid)(__prefix + "$compid__124"),
          _genCompid54 = _slicedToArray(_genCompid53, 2),
          $prevCompid__124 = _genCompid54[0],
          $compid__124 = _genCompid54[1];

      var _genCompid55 = (0, _taroWeapp.genCompid)(__prefix + "$compid__125"),
          _genCompid56 = _slicedToArray(_genCompid55, 2),
          $prevCompid__125 = _genCompid56[0],
          $compid__125 = _genCompid56[1];

      var routes = ['monitor', 'ac', 'h'];
      var _state = this.__state,
          monitorSwitch = _state.monitorSwitch,
          logSwitch = _state.logSwitch,
          deviceSwitch = _state.deviceSwitch,
          messageSwitch = _state.messageSwitch;

      var anonymousState__temp = [
      // {title: '监控录像', desc: '近期记录'}, 
      // {title: '监控直播', desc: '实时直播'},
      { title: '新自动化', desc: '条件执行' }];

      this.anonymousFunc0 = function (index) {
        //TODO:应当用index去找列表里的地址
        _taroWeapp2.default.navigateTo({
          // url:'/pages/devices/'
          url: '/pages/autocontrol/autocontrol'
          // url: '/pages/monitor/monitor'
        });
      };

      this.anonymousFunc1 = function () {
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

      this.anonymousFunc2 = function (e) {
        console.log(e);
      };

      this.anonymousFunc3 = function (e) {
        console.log(e);
      };

      this.anonymousFunc4 = function (e) {
        console.log(e);
      };

      this.anonymousFunc5 = function () {
        _this2.setState({ doorWarning: false });
      };

      _taroWeapp.propsManager.set({
        "title": "NotU \u5BBF\u820D\u7BA1\u7406\u7CFB\u7EDF",
        "type": "border-title",
        "textColor": "grey",
        "borderColor": "light-blue",
        "bgColor": "none"
      }, $compid__98, $prevCompid__98);
      _taroWeapp.propsManager.set({
        "shape": "round",
        "placeholder": "\u5FEB\u6377\u68C0\u7D22",
        "searchType": "none",
        "bgColor": "gray",
        "onInput": this.handleInput.bind(this),
        "showResult": this.__state.showSearchResult,
        "result": anonymousState__temp,
        "onTouchResult": this.anonymousFunc0,
        "onBlur": this.anonymousFunc1
      }, $compid__99, $prevCompid__99);
      _taroWeapp.propsManager.set({
        "animated": false,
        "current": this.__state.pannelCurrent,
        "tabList": anonymousState__temp2,
        "onClick": this.handleClick.bind(this)
      }, $compid__100, $prevCompid__100);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 0
      }, $compid__101, $prevCompid__101);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 1
      }, $compid__102, $prevCompid__102);
      _taroWeapp.propsManager.set({
        "percent": 75,
        "money": "80.00"
      }, $compid__103, $prevCompid__103);
      _taroWeapp.propsManager.set({
        "current": this.__state.pannelCurrent,
        "index": 2
      }, $compid__104, $prevCompid__104);
      _taroWeapp.propsManager.set({
        "columnNum": 2,
        "data": anonymousState__temp3
      }, $compid__105, $prevCompid__105);
      _taroWeapp.propsManager.set({
        "name": "\u529F\u80FD\u5165\u53E3"
      }, $compid__106, $prevCompid__106);
      _taroWeapp.propsManager.set({
        "iconName": "recordfill",
        "size": "xsmall"
      }, $compid__107, $prevCompid__107);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__108, $prevCompid__108);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "color": "olive",
        "checked": monitorSwitch,
        "onChange": this.handleChange.bind(this, 1)
      }, $compid__109, $prevCompid__109);
      _taroWeapp.propsManager.set({
        "iconName": "rankfill",
        "size": "xsmall"
      }, $compid__110, $prevCompid__110);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__111, $prevCompid__111);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "checked": logSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc2
      }, $compid__112, $prevCompid__112);
      _taroWeapp.propsManager.set({
        "iconName": "settingsfill",
        "size": "xsmall"
      }, $compid__113, $prevCompid__113);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__114, $prevCompid__114);
      _taroWeapp.propsManager.set({
        "disabled": true,
        "type": "normal",
        "checked": deviceSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc3
      }, $compid__115, $prevCompid__115);
      _taroWeapp.propsManager.set({
        "iconName": "lightfill",
        "size": "xsmall"
      }, $compid__116, $prevCompid__116);
      _taroWeapp.propsManager.set({
        "iconName": "moreandroid",
        "size": "xsmall"
      }, $compid__117, $prevCompid__117);
      _taroWeapp.propsManager.set({
        "type": "normal",
        "checked": messageSwitch,
        "color": "olive",
        "onChange": this.anonymousFunc4
      }, $compid__118, $prevCompid__118);
      _taroWeapp.propsManager.set({
        "name": "\u6BCF\u65E5\u6B65\u6570"
      }, $compid__119, $prevCompid__119);
      _taroWeapp.propsManager.set({
        "percent": 50,
        "isHidePercent": true
      }, $compid__120, $prevCompid__120);
      _taroWeapp.propsManager.set({
        "color": "hsl(43, 100%, 66%)",
        "percent": 80,
        "isHidePercent": true
      }, $compid__121, $prevCompid__121);
      _taroWeapp.propsManager.set({
        "percent": 50,
        "isHidePercent": true
      }, $compid__122, $prevCompid__122);
      _taroWeapp.propsManager.set({
        "percent": 70,
        "isHidePercent": true
      }, $compid__123, $prevCompid__123);
      _taroWeapp.propsManager.set({
        "percent": 30,
        "isHidePercent": true
      }, $compid__124, $prevCompid__124);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.doorWarning
      }, $compid__125, $prevCompid__125);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        $compid__101: $compid__101,
        $compid__102: $compid__102,
        $compid__103: $compid__103,
        $compid__104: $compid__104,
        $compid__105: $compid__105,
        $compid__106: $compid__106,
        $compid__107: $compid__107,
        $compid__108: $compid__108,
        $compid__109: $compid__109,
        $compid__110: $compid__110,
        $compid__111: $compid__111,
        $compid__112: $compid__112,
        $compid__113: $compid__113,
        $compid__114: $compid__114,
        $compid__115: $compid__115,
        $compid__116: $compid__116,
        $compid__117: $compid__117,
        $compid__118: $compid__118,
        $compid__119: $compid__119,
        $compid__120: $compid__120,
        $compid__121: $compid__121,
        $compid__122: $compid__122,
        $compid__123: $compid__123,
        $compid__124: $compid__124,
        $compid__125: $compid__125
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
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Main;
}(_taroWeapp.Component), _class.$$events = ["FuncCardClick", "anonymousFunc5"], _class.$$componentPath = "pages/main/main", _temp2);
exports.default = Main;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Main));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./main.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/main/main.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_main_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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