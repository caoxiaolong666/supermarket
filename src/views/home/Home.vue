<template>
 <div id="home">
    <nav-bar class="home-center">
      <div slot="center">购物街</div>
    </nav-bar>
    <tabControl :title="title" @tabClick="tabClick" class="tab-control" v-show="isTab"></tabControl>

    <scroll class="contents" ref="scroll" :probe-type = '3' @scroll="backScorll" :pull-up-load="true" @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImg="swiperImg"></home-swiper>
      <homeView :recommends="recommends"></homeView>
      <homeFerture></homeFerture>
      <tabControl :title="title" @tabClick="tabClick" class="tab-control" ref="tabControl"></tabControl>
      <goodList :goods= 'showGoods'></goodList>
      <ul @click="detailClick">
      <li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li><li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li><li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li><li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li><li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li><li>22</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
     </ul>
    </scroll>
    <backTop @click.native="backTop" v-show="isShow"></backTop>
 </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'
import goodList from '../../components/content/goods/goodList'
import Scroll from '../../components/common/scroll/Scroll'
import backTop from '../../components/content/backTop/backTop'

import homeSwiper from './childrens/homeSwiper'
import homeView from './childrens/homeView'
import homeFerture from './childrens/homeFeature'

import { getHomeList, getHomeGoods } from '../../network/home'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      title: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false,
      isTab: false,
      taboffsetTop: 0,
      setY: 0
    }
  },
  components: {
    NavBar,
    tabControl,
    homeSwiper,
    homeView,
    homeFerture,
    goodList,
    Scroll,
    backTop
  },
  created () {
    // 请求数据
    this.getHomeMuList()
    // 请求商品数据
    this.getHomeMuGoods('pop')
    // this.getHomeMuGoods('news')
    // this.getHomeMuGoods('sell')
  },
  mounted () {
    const refresh = this.debounce(this.$refs.scroll.refresh())
    this.$bus.$on('itemImg', () => {
      refresh()
    })
  },
  methods: {
    //
    detailClick () {
      this.$router.push('/detail/' + '1jw0sr2')
    },
    //
    getHomeMuList () {
      getHomeList().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeMuGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res, 123)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      // this.goods[type] = [...this.goods[type], ...res.data.list]
      })
    },

    tabClick (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'news'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTop () {
      // console.log(123)
      this.$refs.scroll.scrollTo(0, 0, 600)
    },
    backScorll (position) {
      this.isShow = -(position.y) > 1000

      this.isTab = -(position.y) > this.taboffsetTop
    },
    // 上拉加载更多
    pullingUp () {
      this.getHomeGoods(this.currentType)
    },
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
    swiperImg () {
      // 吸顶的取值
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
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
  /* position:fixed; */
  /* margin-top: 44px; */
}
.home-center{
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 999; */
}
.tab-control{
 /* position: sticky; */
 /* top: 44px; */
 position: relative;
 z-index: 3;
}
/* .contents{
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
} */
.contents{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
