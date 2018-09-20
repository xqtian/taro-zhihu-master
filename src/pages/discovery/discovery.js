import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './discovery.scss'
import Feed from '../../components/feed/feed.js'

import img1 from '../../asset/images/24213.jpg'
import img2 from '../../asset/images/24280.jpg'
import img3 from '../../asset/images/slide.jpg'

export default class Discovery extends Component {

  config = {
    navigationBarTitleText: '发现'
  }

  constructor() {
    super(...arguments)
    this.state = {
      imgUrls: [img1, img2, img3],
      currentNavtab: 0,
      navTab: ['推荐', '关注', '热门', '收藏'],
      feed: []
    }
  }
  componentWillMount () { }

  componentDidMount () {
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url:'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if(res.data.success) {
        this.setState({
          feed: res.data.data
        })
      }
    })
  }
  switchTab(index, e) {
    this.setState({
      currentNavtab: index
    })
  }
  render () {
    return (
      <View className='discovery'>
        <View className='top-tab flex-wrap flex-tab'>
          {
            this.state.navTab.map((item, index) => {
              return (<View className={this.state.currentNavtab === index ? 'toptab flex-item active': 'toptab flex-item'} key={index}
              onClick={this.switchTab.bind(this, index)}>{item}</View>)
            })
          }
        </View>
        <ScrollView scroll-y className='container discovery withtab'>
          <View className='ctnt0' hidden={this.state.currentNavtab==0 ? false : true}>
            <Swiper
            className='activity'
            indicatorDots='true'
            autoplay='true'
            interval='5000'
            duration='500' >
              {
                this.state.imgUrls.map((item,index) => {
                  return (<SwiperItem key={index}>
                      <Image src={item} className='slide-image' width='355' height='375'/>
                    </SwiperItem>)
                })
              }
            </Swiper>
            {
              this.state.feed.map((item, index) => {
                return (
                  <Feed
                    key={`dis_${index}`}
                    feed_source_img={item.feed_source_img}
                    feed_source_name={item.feed_source_name}
                    feed_source_txt={item.feed_source_txt}
                    question={item.question}
                    good_num={item.good_num}
                    comment_num={item.comment_num}
                    answer_ctnt={item.answer_ctnt} />
                )
              })
            }
          </View>
          <View className='txcenter' hidden={this.state.currentNavtab == 1 ? false : true}>
            <Text>关注</Text>
          </View>
          <View className='txcenter' hidden={this.state.currentNavtab == 2 ? false : true}>
            <Text>热门</Text>
          </View>
          <View className='txcenter' hidden={this.state.currentNavtab == 3 ? false : true}>
            <Text>收藏</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
