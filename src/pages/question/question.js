import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './question.scss'

export default class Question extends Component {

  config = {
    navigationBarTitleText: '问题'
  }
  constructor() {
    super(...arguments)
  }
  navigateTo(url) {
    Taro.navigateTo({url: url})
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='question'>
        <View className='question-wrap'>
          <View className='question-item'>
            <View className='que-tag'>
              <Text className='tag'>阅读</Text>
              <Text className='tag'>电子书</Text>
              <Text className='tag'>kindle</Text>
              <Text className='tag'>书籍</Text>
              <Text className='tag'>文学</Text>
            </View>
            <View className='que-title'>
              选择 Kindle 而不是纸质书的原因是什么？
            </View>
            <View className='que-content'>
              WEB前端*不靠谱天气预报员*想做代码小仙女
            </View>
            <View className='que-follow'>
              <View className='left'>
                <View className='watch'>
                  <Text className='iconfont icon-ai-eye'></Text>
                  <Text>3316</Text>
                </View>
                <View className='comment'>
                  <Text className='iconfont icon-message'></Text>
                  <Text>21</Text>
                </View>
              </View>
              <View className='right'>
                关注
              </View>
            </View>
          </View>
          <View className='que-operate flex-wrap'>
            <View className='invite flex-item'>
              <Text className='iconfont icon-yaoqing'></Text>
              <Text>邀请回答</Text>
            </View>
            <View className='write flex-item'>
              <Text className='iconfont icon-xiazai43'></Text>
              <Text>写回答</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
