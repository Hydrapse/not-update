import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

import { AtAvatar, AtList, AtListItem, AtSlider, AtRange, AtToast } from 'taro-ui'

import {ClTitleBar} from "mp-colorui";

import { TaroTitle, SubTitle } from '../../components'
import './user.scss'

export default class User extends Component {

  constructor (props){
    super(props)
    this.state = {
      avatar: '',
      nickName: '',
      t1: '25~35',
      t2: '40~80',
      toastBoolean: false
    }
  }


  //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作
  componentDidMount () {
    let _this = this
    async function getStorage() {
      try {
        const { data } = await Taro.getStorage({ key: 'userInfo' })
        const { nickName, avatar } = data
        _this.setState({
          avatar: avatar,
          nickName: nickName
        })
      } catch (err) {
        console.log('getStorage ERR: ', err)
      }
    }

    getStorage()
  }  

  handleChange1 (value) {
    this.setState({
      t1: `${value[0]}~${value[1]}`
    })
  }
  handleChange2 (value) {
    this.setState({
      t2: `${value[0]}~${value[1]}`
    })
  }
  
  render () {
    return (
      <View className='user'>
          <ClTitleBar title='我的信息' type='border-title' textColor='grey' borderColor='light-blue' bgColor='none' />
          <View className='portrait' onClick={()=>{
            Taro.navigateTo({
              url: '/pages/mine/mine'
            });
          }}
          >
            <AtAvatar circle size='large' image={this.state.avatar}></AtAvatar>
            <View className='nickName'>
              {this.state.nickName}
              <Text className='domitory'>11舍 414</Text>
            </View>
          </View>
          <View style='padding-bottom: 0px;'>
          <AtList>
            <AtListItem
              title='门未关提醒'
              isSwitch
              onSwitchChange={this.handleChange}
            />
            <AtListItem
              title='短信提醒'
              isSwitch
              onSwitchChange={(value)=>{
                console.log(value)
                if(value.detail.value){
                  this.setState({
                    toastBoolean: true
                  })
                  setTimeout(()=>{
                    this.setState({
                      toastBoolean: false
                    })
                  }, 800)
                }
              }}
            />
            <AtToast duration={800} isOpened={this.state.toastBoolean} text='开启短信提醒' icon='bell'></AtToast>
            <AtListItem
              title='早课提醒'
              isSwitch
              onSwitchChange={this.handleChange}
            />
          </AtList>
          </View>
          <SubTitle name={'温度安全范围:  ' + this.state.t1}></SubTitle>
          <AtRange
            value={[25, 35]}
            min={0}
            max={50}
            onChange={this.handleChange1.bind(this)}
          />
          <SubTitle name={'湿度度安全范围:  ' + this.state.t2}></SubTitle>
          <AtRange
            value={[40, 80]}
            min={0}
            max={100}
            onChange={this.handleChange2.bind(this)}
          />
          
          {/* <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <AtList>
                  <AtListItem
                    title='国家地区'
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <AtList>
                  <AtListItem title='请选择时间' extraText={this.state.timeSel} />
                </AtList>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <AtList>
                  <AtListItem title='请选择日期' extraText={this.state.dateSel} />
                </AtList>
              </Picker>
            </View>
          </View>
        </View> */}
      </View>
    )
  }
}