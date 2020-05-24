import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//techart+自定义echart
import EChart from 'techarts';
import * as echarts from '../../echarts';

import './index.scss'

export default class TemperatureChart extends Component {
  render () {
    
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
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
            top: '10%',
        },
        xAxis: [{
            // show: false,
            type: 'category',
            color: '#59588D',
            data: ['04-22', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03', '05-04', '05-05','05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21'],
            axisLabel: {
                margin: 20,
                color: '#999',
                textStyle: {
                    fontSize: 12
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#d2d2d2',
                }
            },
            axisTick: {
                show: false
            },
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
            },
            {
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
            }
        ],
        dataZoom: [{
            type: 'inside',
            startValue: 26,
            endValue: 30,
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
                data: [70, 90, 80, 60, 70, 90, 80, 60, 56, 40, 50, 70, 60, 56, 40, 50, 70, 45, 56, 56, 40, 50, 70, 60, 56, 40, 50, 70, 45, 56],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(215,230,207)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgb(225,240,217)' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [30, 30, 0, 0],
                    }
                },
                label: {
                    show: true,
                    // formatter: '{c}%',
                    // fontSize: 14,
                    fontWeight: 'bold',
                    position: 'top',
                    color: 'rgb(157,165,176)',
                }
            },
            {
                type: 'bar',
                name: '温度°C',
                data: [32, 29, 20, 16, 32, 29, 20, 16, 24, 22, 26, 20, 18, 24, 27, 29, 26, 28, 24, 24, 22, 26, 20, 18, 24, 27, 29, 26, 28, 24],
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
                        barBorderRadius: [30, 30, 0, 0],
                    }
                },
                label: {
                    show: true,
                    // fontSize: 14,
                    fontWeight: 'bold',
                    position: 'top',
                    color: 'rgb(157,165,176)',
                }
            },
            {
                type: 'line',
                name: '平均温度',
                data: [20, 20, 20, 17, 17, 17, 20, 20, 20, 17, 17, 17, 23, 23, 23, 24, 24, 24, 27, 27, 27, 25, 25, 25, 23, 23, 23, 24, 24, 24, 27, 27, 27, 25, 25, 25],
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
                    shadowOffsetY: 20,
                }
            }
        ]
    };


    return (
      <View className='temperature-chart'> 
        <EChart echarts={echarts} option={option}></EChart>
      </View>
    )
  }
}