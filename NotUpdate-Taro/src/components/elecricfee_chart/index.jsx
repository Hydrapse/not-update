import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//techart+自定义echart
import EChart from 'techarts';
import * as echarts from '../../echarts';

import './index.scss'

export default class ElectricFee extends Component {
  render () {
    let {percent, money} = this.props 
    
    var itemStyle = {
        normal: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(
                1, 0, 0, 1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                [{
                        offset: 0,
                        color: 'rgb(20,90,247)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgb(83,140,244)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(170,203,250)'
                    }
                ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
            )
        }
    };
    let option = {
        tooltip: {
            formatter(params) {
                return `剩余电费${params.value}%`;
            }
        },
        title: {
            text: this.props.percent + '%',
            textStyle: {
                fontSize: '18',
                color: '#346FC2'
            },
            x: '50%',
            y: 'center',
            textAlign: 'center'
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        polar: {
            radius: 95,
            center: ['50%', '50%'],
        },
        series: [{
            type: 'bar',
            roundCap: true,
            barWidth: 16,
            showBackground: true,
            backgroundStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [{
                            offset: 0,
                            color: 'rgb(240,240,250)'
                        },
                        // {offset: 0.5, color: 'rgb(83,140,244)'},
                        {
                            offset: 1,
                            color: 'rgb(170,200,245)'
                        }
                    ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
            data: [percent],
            coordinateSystem: 'polar',
            name: '电费',
            label: {
                show: true,
            },
            itemStyle: itemStyle,
        }],
    };


    return (
      <View className='electricfee'> 
          <View className='electricfee-chart'>
            <EChart echarts={echarts} option={option}></EChart>
          </View>
          <View className='money'>
            <View className='sub-title'>剩余电费</View>
            <View className='number'>￥{money}</View>
          </View>
      </View>
      
    )
  }
}