import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'

import { AtNavBar, AtList, AtListItem } from 'taro-ui'

import { ClIcon, ClSwitch } from "mp-colorui";

import { SubTitle, TaroTitle } from '../../components'
import './autocontrol.scss'

export default class AutoControl extends Component {

  constructor (props){
    super(props)
    this.state = {
      factor_selector:[
        ['空调', '温湿度计', '门感应器', '监控器', '红外感应器'],
        ['打开', '关闭', '报警'],
       ],
      factor_icon_list:['btn', 'hotfill', 'cardboardfill', 'recordfill', 'attentionfill'],
      factor_icon: 'questionfill',
      factor_obj: '无',
      factor_action: '无',
    }
  }

  navHome() {
    Taro.navigateBack()
  }
  
  onFactorChange(e) {
    console.log(e)
    let{factor_selector, factor_icon_list} = this.state
    let icon = factor_icon_list[e.detail.value[0]]
    let obj = factor_selector[0][e.detail.value[0]]
    let action = factor_selector[1][e.detail.value[1]]
    this.setState({
      factor_icon: icon,
      factor_obj: obj,
      factor_action: action
    })
  }

  render () {
    let navBarMarginTop = Taro.getMenuButtonBoundingClientRect().top
      const style = {
        paddingTop: navBarMarginTop + 'px',
        background: 'white'
      }
      return(
        <View >
          <View style={style}></View>
          <AtNavBar 
            onClickLeftIcon={this.navHome}
            color='#000'
            title='新自动化'
            leftIconType='chevron-left'
          />
        <View className='auto-control' >
          <SubTitle name='当'></SubTitle>
          <View className='factor-area'>
            <Picker mode='multiSelector' range={this.state.factor_selector} onChange={this.onFactorChange.bind(this)}>
                {/* <AtList>
                  <AtListItem title='请选择日期' extraText={this.state.factor_obj + ' ' + this.state.factor_action} />
                </AtList> */}
                <View className='at-row'>
                  <View className='at-col'>
                    <ClIcon iconName={this.state.factor_icon} size='small' color='blue' />
                  </View>
                  <View className='at-col at-col__offset-2' style='padding-top:2px'>
                    {this.state.factor_obj}
                  </View>
                  <View className='at-col at-col__offset-0' style='padding-top:2px'>
                    {this.state.factor_action.length>1 ? this.state.factor_action+'时' : '无'}
                  </View>
                </View>
              </Picker>
          </View>
          <SubTitle name='执行'></SubTitle>
          <View className='factor-area' style='padding: 0 32rpx;'>
            <AtList>
              <AtListItem
                title='日志记录'
                note='上传云端'
                hasBorder={false}
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
            </AtList>
          </View>
          <View className='factor-area' style='padding: 12rpx 32rpx; margin-top:0'>
            <View className='at-row'>
                  <View className='at-col' style='padding-top:2px'>
                    运行前询问
                  </View>
                  <View className='at-col at-col__offset-12' >
                    <ClSwitch type='normal' color='green' checked />
                  </View>
                </View>
          </View>
        </View>
      </View> 
    )
  }
}