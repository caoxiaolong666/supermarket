<template>
 <div id="home">
    <nav-bar class="home-bar">
      <div slot="left" >
        <img class="home-left" src="@/assets/img/home/logo@2x.png" alt="">
      </div>
      <div slot="center" class="home-center" @click="searchPath">
        <span>
          <img class="home-imgs" src="@/assets/img/home/ss@2x.png" alt="">
        </span>
        <input type="text" placeholder="搜游戏或礼包"/>
      </div>
      <div slot="right">
        <img class="right-image" src="@/assets/img/home/logo@2x.png" alt="">
      </div>
    </nav-bar>
    <scroll class="contents" ref="scroll" :probe-type = '3' :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners = banners ></home-swiper>
      <home-tabs></home-tabs>
      <div class="home-img">
        <img src="@/assets/img/home/xdd@2x.png" alt="">
        <div class="uesrInfo">
          <img src="@/assets/img/home/logo@2x.png" alt="">
          <div>小灰灰: 成功租用账号 <span>一小时</span></div>
        </div>
      </div>
      <home-list></home-list>
      <home-root>
        <div class="title">
         <div class="phone clickActive">热租账号</div>
         <div class="img">
             <img src="@/assets/img/home/gd@2x.png" alt="">
         </div>
     </div>
      </home-root>
    </scroll>
    <main-tab-bar></main-tab-bar>
 </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import homeSwiper from './childrens/homeSwiper'
import homeTabs from './childrens/homeTabs'
import homeList from './childrens/homeList'
import homeRoot from './childrens/homeRoot'
import MainTabBar from '@/components/content/mainTabbar/MainTabbar'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      isShow: false,
      isTab: false,
      taboffsetTop: 0,
      setY: 0
    }
  },
  components: {
    NavBar,
    homeSwiper,
    homeTabs,
    homeList,
    homeRoot,
    Scroll,
    MainTabBar
  },
  created () {
    this.getHomeSwiper()
    // 请求数据
  },
  mounted () {

  },
  methods: {
    // async getHomeSwiper () {
    //   const { res } = await this.$get('/home/multidata')
    //   console.log(res, 'hahh')
    getHomeSwiper () {
      this.$get('/home/multidata').then(res => {
        console.log(res, 'hahh')
        this.banners = res.banner.list
      })
    },
    // backTop () {
    // console.log(123)
    // this.$refs.scroll.scrollTo(0, 0, 600)
    // },
    // backScorll (position) {
    //   this.isShow = -(position.y) > 1000

    //   this.isTab = -(position.y) > this.taboffsetTop
    // },
    loadMore () {
      console.log('hhh')
    },
    // 上拉加载更多
    // pullingUp () {
    // this.getHomeGoods(this.currentType)
    // },
    // 防抖函数
    debounce (fuc, delay) {
      let times = null
      return function (...args) {
        if (times) clearTimeout(times)
        times = setTimeout(() => {
          fuc.apply(this, args)
        }, delay)
      }
    },
    searchPath () {
      this.$router.push('/search')
    }
  },
  computed: {
    // showGoods () {
    //   return this.goods[this.currentType].list
    // }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.setY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.setY = this.$refs.scroll.getSetY()
  }
}
</script>
<style>
#home {
  height: 100vh;
}
.home-bar{
  width: 100%;
  height: 11.733vw;
}
.home-left{
  width: 9.067vw;
  height: 9.067vw;
  margin-left: 6.667vw;
}
.home-center{
  width: 61.067vw;
  height: 9.067vw;
  background-color: #EBEEF7;
  border-radius: 5.333vw;
  border: 0.133vw solid #EBEEF7;
  margin-top: 0.8vw;
  display: flex;
}
.home-center span{
  width:10.667vw ;
  /* height: 100%; */
  margin-top: 2vw;
}
.home-center input{
  flex: 1;
  background-color: #EBEEF7;
  border: none;
  border-radius: 5.333vw;
  color: #B3BCD9;
  font-size: 3.467vw;
  text-indent: .5em;
    /* background: transparent; */

    /* resize:none; */
    outline:none;  /*清除选中效果的默认蓝色边框 */
    -webkit-appearance:none;  /*清除浏览器默认的样式 */
    /* line-height: normal; */
}
.home-center .home-imgs{
  width: 4.8vw;
  height: 4.8vw;
}
.home-img{
  width: 100%;
  height: 10.667vw;
  background-color: #EFF2F9;
  border-radius: 0 6.667vw 0 6.667vw;
  display: flex;
  align-items: center;
  margin-bottom: 8.267vw;
}
.home-img img{
  height: 5.333vw;
  margin: 0 2.933vw ;
}
.uesrInfo{
  display: flex;
  align-items: center;
}
.uesrInfo> div{
  font-size: 2.933vw;
  color: #000;
}
.uesrInfo> div span{
  color:#F67578 ;
}
.tab-control{
 position: relative;
 z-index: 3;
}
.contents{
  position: absolute;
  top: 14.133vw;
  bottom: 12vw;
  left: 0;
  overflow: hidden;
  padding:0 3.333vw;
}
.right-image{
  margin-left: 3.733vw;
  width: 9.333vw;
  height: 9.333vw;
}
</style>
