import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

import { AtButton, AtInput, AtList, AtListItem } from 'taro-ui';
import { ClButton } from "mp-colorui";

import './index.scss';

export default class Index extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['监控', '温度', '湿度', '电费'],
      inputVal: ''
    };
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
    navigationBarTitleText: '首页'
  };

  addItem() {
    let { list, inputVal } = this.state;
    if (!inputVal || inputVal == '') return;else {
      list.push(inputVal);
    }

    //重新设置属性, 需要重新渲染
    this.setState({
      list,
      inputVal: ''
    });
  }

  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  inputHandler(e) {
    this.setState({
      inputVal: e
    });
  }

  render() {
    let { list, inputVal } = this.state; //这个inputvalue是state里面的

    return <View className="index">
        <AtInput title="功能" name="inputVal" type="text" placeholder="标准五个字" value={inputVal} onChange={this.inputHandler.bind(this)} />
        <AtButton type="primary" onClick={this.addItem.bind(this)}>添加</AtButton>

        <Text>功能列表</Text>
        <AtList>
        {list.map((item, index) => {
          let title = index + '. ' + item;
          return <AtListItem title={title} key={index} onClick={this.delItem.bind(this, index)} />;
        })}
        </AtList>

        <ClButton shape="round">按钮文案3</ClButton>
      </View>;
  }
}