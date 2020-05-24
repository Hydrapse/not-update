import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker} from '@tarojs/components'
import { AtNavBar, AtList, AtListItem, AtInputNumber } from "taro-ui"

import "./devices.scss"
import { SubTitle } from '../../components'

export default class Ac extends Component{
    constructor (props){
    super(props)
    this.state = {
      actemp: 24,
      selector: ['自动', '一档', '二档', '三挡'],
      selectorChecked: '自动',
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

  handleTemperature(value){
    this.setState({
      actemp: value
    })
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
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
            <View style='display: flex; justify-content: space-between; padding:24px 12px 12px'>
              <Text style='font-size: 17px'>空调温度</Text>
              <AtInputNumber
                min={16}
                max={32}
                step={1}
                value={this.state.actemp}
                onChange={this.handleTemperature.bind(this)}
              />
            </View>
            
            <AtList> 
              
              <AtListItem
                isSwitch
                title='空调开关'
                hasBorder={false}
                switchIsCheck
                // iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
              />
              <AtListItem
                isSwitch
                title='冷气/暖气'
                hasBorder={false}
                // iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
              />
            </AtList>

            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <AtList>
                <AtListItem
                  hasBorder={false}
                  title='风量调节'
                  extraText={this.state.selectorChecked}
                />
              </AtList>
            </Picker>
            
          </View>
      )
  }
}
