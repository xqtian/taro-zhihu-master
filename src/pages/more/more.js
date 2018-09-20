import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './more.scss'

import livePng from '../../asset/images/live.png'
import zhiPng from '../../asset/images/zhi.png'

export default class More extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='more'>
        <View className='user flex-wrap'>
          <View className='avatar flex-item'>
            <Image className='userinfo-avatar' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536927744108&di=78c48d96604beedf46cff29c628da730&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1312%2F28%2F4079536_18-023955_792_thumb.jpg'
            backgroundSize='cover' />
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>情儿</Text>
            <Text className='edit'>查看或编辑个人主页</Text>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Text className='iconfont icon-ai-eye'></Text>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的关注</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Text className='iconfont icon-xingxing'></Text>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的收藏</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Text className='iconfont icon-icon--'></Text>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Text className='iconfont icon-biao'></Text>
            </View>
            < View className='myitem-name flex-item'>
              <Text>最近浏览</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Text className='iconfont icon-ai-book'></Text>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的书架</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={livePng}></Image>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的 Live</Text>
            </View>
          </View>
          <View className='my-item flex-wrap'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={zhiPng}></Image>
            </View>
            < View className='myitem-name flex-item'>
              <Text>我的值乎</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
