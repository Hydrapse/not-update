import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar, AtList, AtListItem} from "taro-ui"
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
          </View>
      )
  }
}
