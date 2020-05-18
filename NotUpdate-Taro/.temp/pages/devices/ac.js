import Nerv from "nervjs";
import Taro, { getMenuButtonBoundingClientRect as _getMenuButtonBoundingClientRect } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import { AtNavBar } from "taro-ui";

export default class Ac extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //当组件在进行挂载操作前，执行的函数
  componentWillMount() {}

  //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作
  componentDidMount() {}

  //当组件准备销毁时执行。在这里一般可以执行一些回收的工作
  //例如 clearInterval(this.timer) 这种对定时器的回收操作
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '空调设置'
  };

  navHome() {
    Taro.navigateTo({
      url: '/pages/index/index'
    });
  }

  render() {
    let navBarMarginTop = _getMenuButtonBoundingClientRect().top + _getMenuButtonBoundingClientRect().height - 20;
    const style = {
      paddingTop: navBarMarginTop + 'px'
    };
    return <View className="devices" style={style}>
            <AtNavBar onClickLeftIcon={this.navHome} color="#000" title="空调设置" />
          </View>;
  }
}