import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton } from 'taro-ui'

import {ClTitleBar} from "mp-colorui";

import './user.scss'

export default class User extends Component {

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
  }


  render () {
    return (
      <View className='user'>
          <ClTitleBar title='我的信息' type='border-title' textColor='grey' borderColor='light-blue' bgColor='none' />
      </View>
    )
  }
}