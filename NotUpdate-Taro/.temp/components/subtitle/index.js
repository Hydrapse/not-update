import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

import './index.scss';

export default class Subtitle extends Taro.Component {
  render() {
    return <View className="subtitle">
        <Text>{this.props.name}</Text>
      </View>;
  }
}