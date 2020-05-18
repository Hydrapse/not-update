import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar, AtList, AtListItem} from "taro-ui"

import { F2Canvas } from "taro-f2";
import { fixF2 } from "taro-f2/dist/weapp/common/f2-tool.ts";
import F2 from "@antv/f2"

import "./devices.scss"

export default class Ac extends Component{
    constructor (props){
    super(props)
    this.state = {
    }
  }

  //当组件在进行挂载操作前，执行的函数
  componentWillMount () {}

  //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作
  componentDidMount () {}

  //当组件准备销毁时执行。在这里一般可以执行一些回收的工作
  //例如 clearInterval(this.timer) 这种对定时器的回收操作
  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  config = {
    navigationBarTitleText: '空调设置'
  }

  navHome() {
    Taro.navigateBack()
  }


  drawRadar(canvas, width, height){
    
    // ⚠️ 别忘了这行
    // 为了兼容微信与支付宝的小程序，你需要通过这个命令为F2打补丁
    fixF2(F2);

    const data = [
      { name: '超大盘能力', value: 6.5 },
      { name: '抗跌能力', value: 9.5 },
      { name: '稳定能力', value: 9 },
      { name: '绝对收益能力', value: 6 },
      { name: '选证择时能力', value: 6 },
      { name: '风险回报能力', value: 8 }
    ];
    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });
    chart.source(data, {
      value: {
        min: 0,
        max: 10
      }
    });
    chart.coord('polar');
    chart.axis('value', {
      grid: {
        lineDash: null
      },
      label: null,
      line: null
    });
    chart.axis('name', {
      grid: {
        lineDash: null
      }
    });
    chart.area()
      .position('name*value')
      .color('#FE5C5B')
      .style({
        fillOpacity: 0.2
      })
      .animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
    chart.line()
      .position('name*value')
      .color('#FE5C5B')
      .size(1)
      .animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
    chart.point().position('name*value').color('#FE5C5B').animate({
      appear: {
        delay: 300
      }
    });
    chart.guide().text({
      position: ['50%', '50%'],
      content: '73',
      style: {
        fontSize: 32,
        fontWeight: 'bold',
        fill: '#FE5C5B'
      }
    });
    chart.render();
  }

  render(){
      let navBarMarginTop = Taro.getMenuButtonBoundingClientRect().top
      const style = {
        paddingTop: navBarMarginTop + 'px'
      }
      return(
          <View className='devices' style={style}>
            <AtNavBar 
              onClickLeftIcon={this.navHome}
              color='#000'
              title='空调设置'
              leftIconType='chevron-left'
            />
            <AtList> 
              <AtListItem
                isSwitch
                title='冷气开关'
                hasBorder={false}
                // iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
              />
              <AtListItem
                isSwitch
                title='暖气开关'
                hasBorder={false}
                // iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
              />
            </AtList>
            <View style='width:100%;height:500px'><F2Canvas onCanvasInit={this.drawRadar.bind(this)}></F2Canvas></View>
          </View>
      )
  }
}
