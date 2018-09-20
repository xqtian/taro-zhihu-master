import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './answer.scss'

export default class Answer extends Component {

  config = {
    navigationBarTitleText: '答案'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='answer'>
        <Text>答案</Text>
      </View>
    )
  }
}
