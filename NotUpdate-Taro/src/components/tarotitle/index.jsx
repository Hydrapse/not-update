import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Tarotitle extends Component {
  render () {
    return (
      <View className='tarotitle'>
        <View className='bar'></View>
        <View>{this.props.name}</View>
          
      </View>
    )
  }
}