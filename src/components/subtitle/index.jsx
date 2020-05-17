import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class Subtitle extends Component {
  render () {
    return (
      <View className='subtitle'>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}