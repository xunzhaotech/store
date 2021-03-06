import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopcar from '../components/shopcar/Shopcar.vue'

// 引入主页
import Home from '../components/home.vue'
// 引入图片展示组件
import ShareImg from '../components/showimg/share_img.vue'
// 引入vip
import Vip from '../components/vip/Vip.vue'
// 引入图片展示详情页
import Img from '../components/showimg/imgxiangqing.vue'
// 引入添加商品模块
import AddStore from '../components/addStore/AddStore.vue'
// 引入新闻阅读模块
import ShowNews from '../components/news/showNews.vue'
// 引入新闻详情
import NewsInfo from '../components/news/newsInfo.vue'
// 引入商品列表模块
import GoodsList from '../components/goods/List.vue'
// 引入商品详情模块
import GoodsDetail from '../components/goods/GoodsDetail.vue'
// 引入商品图文信息
import Goodsdesc from '../components/goodside/Goodsdesc.vue'
// 引入搜索模块
import Search from '../components/search/Search.vue'
// 引入视频专区
import Video from '../components/video/Video.vue'
// 引入商品讨论
import GoodsSpeak from '../components/goodside/GoodsSpeak.vue'
// 引入留言反馈
import Message from '../components/message/Message.vue'
// 引入联系我们
import Contact from '../components/contact/Contact.vue'
Vue.use(VueRouter)

Vue.use(VueRouter)
const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/vip',
  component: Vip
},
{
  path: '/shareimg',
  component: ShareImg
},
{
  path: '/addStore',
  component: AddStore
},
{
  path: '/imgxiangqing',
  component: Img
},
{
  path: '/news/showNews',
  component: ShowNews
},
{
  path: '/news/newsInfo/:id',
  component: NewsInfo
},
{
  path: '/goods/list',
  component: GoodsList
},
{
  path: '/goods/detail/:id',
  component: GoodsDetail
},
{
  path: '/search',
  component: Search
},
{
  path: '/video',
  component: Video
},
{
  path: '/goodsdesc/:id',
  component: Goodsdesc
},
{
  path: '/goodscomments/:id',
  component: GoodsSpeak
},
{
  path: '/shopcar',
  component: Shopcar
},
{
  path: '/message',
  component: Message
},
{
  path: '/contact',
  component: Contact
}
]

const router = new VueRouter({
  routes
})

export default router
