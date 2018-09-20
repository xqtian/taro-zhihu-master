
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Feed from '../../components/feed/feed'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      loading: true,
      list: []
    }
  }
  // 获取远程数据
  componentDidMount () {
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url:'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if(res.data.success) {
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
   }
  // 更新数据
  updateList = () => {
    if(this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url:'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if(res.data.success) {
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
  }
  // 加载下一页数据
  appendNextPageList = () => {
    if(this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url:'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if(res.data.success) {
        this.setState({
          list: this.state.list.concat(res.data.data),
          loading: false
        })
      }
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='search flex-wrap'>
          <View className='search-left flex-item'>
            <View className='flex-wrap'>
              <View className='flex1'><Text className='iconfont icon-sousuo'></Text></View>
              <View className='flex6'><Input type='text' placeholder={'搜索话题，问题或人'} placeholderClass='search-placeholder'/></View>
            </View>
          </View>
          <View className='search-right flex-item'><Text className='iconfont icon-lightningshandian' onClick={this.updateList} ></Text></View>
        </View>
        <ScrollView className='container'
          scrollY
          scrollWithAnimation
          scrollTop='90'
          lowerThreshold='10'
          upperThreshold='10'
          style='height: 300px'
          onScrolltoupper={this.updateList}
          onScrolltolower={this.appendNextPageList}
        >
        {
          this.state.loading ? <View className='txcenter'>加载中</View> :
          this.state.list.map(item => {
            return <Feed
              key={item}
              feed_source_img={item.feed_source_img}
              feed_source_name={item.feed_source_name}
              feed_source_txt={item.feed_source_txt}
              question={item.question}
              answer_ctnt={item.answer_ctnt}
              good_num={item.good_num}
              comment_num={item.comment_num}
            />
          })
        }
        </ScrollView>
      </View>
    )
  }
}

