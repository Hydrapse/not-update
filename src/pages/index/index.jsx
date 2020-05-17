import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtTabBar } from 'taro-ui'

import Main from '../main/main'
import User from '../user/user'

import './index.scss'

export default class Index extends Component {

  constructor (props){
    super(props)
    this.state = {
      current: 0
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
    navigationBarTitleText: ''
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    let {current} = this.state
    let navBarMarginTop = Taro.getMenuButtonBoundingClientRect().top + Taro.getMenuButtonBoundingClientRect().height - 20
    const style = {
      paddingTop: navBarMarginTop + 'px'
    }
    return (
      <View className={current=='0' ? 'index' : 'white-index'}>
        <View className='navbar' style={style}></View>
        {current == '0' ? <Main /> : <User />} 
        <AtTabBar
          fixed
          tabList={[
            { title: '主页', iconType: 'home'},
            { title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={current}
        />
      </View>
    )
  }
}
