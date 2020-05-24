import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'

import LoggedMine from '../loggedmine'
import LoginButton from '../login_button'
import WeappLoginButton from '../weapplogin_button'

import './index.scss'

export default function Header(props) {
  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP

  return (
    <View className='user-box'>
      <AtMessage />
      <LoggedMine userInfo={props.userInfo} />
      {!props.isLogged && (
        <View className='login-button-box'>
          <LoginButton handleClick={props.handleClick} />
          {isWeapp && <WeappLoginButton setLoginInfo={props.setLoginInfo} />}
        </View>
      )}
    </View>
  )
}