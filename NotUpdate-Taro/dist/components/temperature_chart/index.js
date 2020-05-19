(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/temperature_chart/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************/
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

//techart+自定义echart

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _echarts = __webpack_require__(/*! ../../echarts */ "./src/echarts.js");

var echarts = _interopRequireWildcard(_echarts);

__webpack_require__(/*! ./index.scss */ "./src/components/temperature_chart/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemperatureChart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(TemperatureChart, _BaseComponent);

  function TemperatureChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TemperatureChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TemperatureChart.__proto__ || Object.getPrototypeOf(TemperatureChart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__97"], _this.customComponents = ["EChart"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TemperatureChart, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(TemperatureChart.prototype.__proto__ || Object.getPrototypeOf(TemperatureChart.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__97"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__97 = _genCompid2[0],
          $compid__97 = _genCompid2[1];

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        grid: {
          // height: '50%'
          //     top: '15%',
          //     right: '10%',
          //     left: '10%',
          bottom: '27%'
        },
        legend: {
          data: ['湿度%', '温度°C', '平均温度'],
          top: '13%'
        },
        xAxis: [{
          // show: false,
          type: 'category',
          color: '#59588D',
          data: ['05-14', '05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21', '05-22', '05-23', '05-24', '05-25', '05-26', '05-27', '05-28'],
          axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: '#d2d2d2'
            }
          },
          axisTick: {
            show: false
          }
        }],
        yAxis: [{
          show: false,
          name: '湿度',
          boundaryGap: [0, '100%']
          // nameTextStyle: {
          //     color: '#777',
          //     fontWeight: 600,
          //     fontSize: 14
          // },
          // axisLabel: {
          //     formatter: '{value}%',
          //     color: '#999',
          //     textStyle: {
          //         fontSize: 18
          //     },
          // },
          // axisLine: {
          //     lineStyle: {
          //         color: 'rgba(107,107,107,0.37)',
          //     }
          // },
          // axisTick: {
          //     show: false
          // },
          // splitLine: {
          //     lineStyle: {
          //         color: 'rgba(131,101,101,0.2)',
          //         type: 'dashed',
          //     }
          // }
        }, {
          show: false,
          type: 'value',
          name: '温度',
          boundaryGap: [0, '100%']
          // nameTextStyle: {
          //     color: '#777',
          //     fontWeight: 600,
          //     fontSize: 14
          // },
          // axisLabel: {
          //     formatter: '{value}°C',
          //     color: '#999',
          //     textStyle: {
          //         fontSize: 18
          //     },
          // },
          // axisLine: {
          //     show: false,
          // },
          // axisTick: {
          //     show: false
          // },
          // splitLine: {
          //     lineStyle: {
          //         color: 'rgba(131,101,101,0.2)',
          //         type: 'dashed',
          //     }
          // }
        }],
        dataZoom: [{
          type: 'inside',
          startValue: 5,
          endValue: 9,
          filterMode: 'filter'
        }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }],
        series: [{
          type: 'bar',
          name: '湿度%',
          data: [70, 90, 80, 60, 56, 40, 50, 70, 60, 56, 40, 50, 70, 45, 56],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(215,230,207)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgb(225,240,217)' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0]
            }
          },
          label: {
            show: true,
            // formatter: '{c}%',
            // fontSize: 14,
            fontWeight: 'bold',
            position: 'top',
            color: 'rgb(157,165,176)'
          }
        }, {
          type: 'bar',
          name: '温度°C',
          data: [32, 29, 20, 16, 24, 22, 26, 20, 18, 24, 27, 29, 26, 28, 24],
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(220,227,238)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgb(231,238,245)' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0]
            }
          },
          label: {
            show: true,
            // fontSize: 14,
            fontWeight: 'bold',
            position: 'top',
            color: 'rgb(157,165,176)'
          }
        }, {
          type: 'line',
          name: '平均温度',
          data: [20, 20, 20, 17, 17, 17, 23, 23, 23, 24, 24, 24, 27, 27, 27, 25, 25, 25],
          smooth: true,
          symbol: 'none',
          yAxisIndex: 1,
          color: 'rgb(177,188,244)',
          areaStyle: {
            color: 'rgb(252,252,255)'
          },
          lineStyle: {
            color: 'rgb(177,188,244)',
            width: 4,
            shadowColor: 'rgba(0, 0, 0, 0.2)', //设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20
          }
        }]
      };

      _taroWeapp.propsManager.set({
        "echarts": echarts,
        "option": option
      }, $compid__97, $prevCompid__97);
      Object.assign(this.__state, {
        $compid__97: $compid__97
      });
      return this.__state;
    }
  }]);

  return TemperatureChart;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "components/temperature_chart/index", _temp2);
exports.default = TemperatureChart;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(TemperatureChart));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/temperature_chart/index.wxml";

/***/ }),

/***/ "./src/components/temperature_chart/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/temperature_chart/index.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************!*\
  !*** ./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/temperature_chart/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************!*\
  !*** ./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/temperature_chart/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/temperature_chart/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/temperature_chart/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/temperature_chart/index.jsx","runtime","taro","vendors","common"]]]);