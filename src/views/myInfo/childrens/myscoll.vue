<!--  -->
<template>
  <div class="goods">
     <div class="goods-title">热门</div>
     <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :key="index">
          <span class="text border-0.133vw">
            {{item}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
        <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
          <li  class="list">
          <div class="list-img">
                <img src="@/assets/img/home/logo@2x.png" width="82" height="82">
                <div class="title">王者荣耀</div>
          </div>
          <div class="list-icon">
                <img src="@/assets/img/profile/gd@3x.png" width="15" height="20">
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll' // 引进这个实现上下滑动的插件

export default {
  // props: {
  //   seller: {
  //     type: Object
  //   }
  // },
  components: {
    // Scroll
  },
  data () {
    return {
      goods: ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'N', 'J', 'K', 't', 'v'],
      menuScroll: null,
      foodsScroll: null
    }
  },
  created () { // 在这个时刻向后台请求数据
    // this.$http.get('/api/goods').then((res) => {
    //   res = res.body
    //   if (res.errno === ERR_OK) {
    //     this.goods = res.data

    //     })
    //   }
    // })
    // this._initScroll()
    // DOM未更新完成
    // this.$nextTick(() => { // better-scroll的实例初始化要放在vm.$nextTick()里面才生效
    //   // DOM已经更新完成

    // })
    // 定义一个变量
    // this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    _initScroll () {
      // 初始化需要滚动的对象
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
      })
    }
  }
}

</script>

<style  scoped >
ul{
  list-style: none;
}
.goods{
    display:flex;    /*设置弹性布局*/
    position:absolute; /*设定absolute+top+bottom那么该元素就是一个固定高度的容器了*/
    top:46vw;  /*这个是header+tab组件的高度*/
    width:100%;
    overflow:hidden;
    bottom:12vw;
}
.menu-wrapper{
      flex:0 0 18.667vw;  /* 设置左边的元素的宽度为固定值 */
      width:18.667vw;
      padding-left: 4vw;
      /* background: #f3f5f7; */
}
.goods-title{
  font-size:3.467vw ;
  color: #000;
  width: 19.467vw;
  height: 7.467vw;
  line-height: 7.467vw;
  border-radius:1.6vw ;
  background-color: rgb(235,238,248);
  text-align: center;
  position: absolute;
  top:0;
  left: 2.667vw;
  z-index: 3;
}
.menu-item{
  margin-top: 6.933vw;
  font-size:3.467vw ;
  color: #000;
}
.menu-wrapper ul {
  text-align: center;
  padding-top: 2vw;

}
.foods-wrapper{
  flex:1 ;
}
.foods-wrapper ul{
  padding:0 4vw ;
}
.list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.8vw;
}
.list-img{
  display: flex;
  align-items: center;
}
.list-img .title{
   font-size:3.467vw ;
  color: #000;
  margin-left: 4.8vw;
}
</style>
