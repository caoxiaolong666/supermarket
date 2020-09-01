<!--  -->
<template>
 <div class="infolist">
      <div class="infolist-title">
        <img src="@/assets/img/infoList/back@2x.png" alt="" width="15" height="25">
        <div class="infolist-txt">王者荣耀</div>
      </div>
     <div class="infolist-top">
         <ul>
             <li ><span class="activeInfo">默认</span></li>
             <li>新品</li>
             <li>
               <span @click.prevent="navTops">服务器</span>
               <img src= "@/assets/img/infoList/down@2x.png" alt="" v-if="isclick">
               <img src= "@/assets/img/infoList/up@2x.png" alt="" v-else>
             </li>
             <li >
               <span @click.prevent="navLi">价格</span>
               <img src= "@/assets/img/infoList/down@2x.png" alt="" v-if="isclick">
               <img src= "@/assets/img/infoList/up@2x.png" alt="" v-else>
             </li>
             <li >
               <span @click.prevent="navSpan">筛选</span>
              <img src= "@/assets/img/infoList/down@2x.png" alt="" v-if="isclick">
               <img src= "@/assets/img/infoList/up@2x.png" alt="" v-else>
            </li>
         </ul>
     </div>
     <div class="m-navbar" v-if="nav" @click="nav=false"> </div>
     <transition name="nav">
      <div class="m-navba" v-if="nav">
        <div class="m-title">
          <div class="m-txt">价格范围</div>
          <div class="m-bottom">
            <div class="m-btn">最低价</div>
            <div class="m-btn">最高价</div>
          </div>
        </div>
          <div class="m-title">
          <div class="m-txt">价格范围</div>
          <div class="m-bottom">
            <div class="m-btn">最低价</div>
            <div class="m-btn">最高价</div>
          </div>
        </div>
          <div class="m-title">
          <div class="m-txt">价格范围</div>
          <div class="m-bottom">
            <div class="m-btn">最低价</div>
            <div class="m-btn">最高价</div>
          </div>
        </div>
      </div>
    </transition>
    <div class="m-navbar" v-if="navTop" @click="navTop=false"></div>
      <!-- <transition name="navTop"> -->
      <div class="navTop" v-if="navTop">
        <div class="navList">
          <div class="navTop-a">安卓</div>
          <div class="navTop-i">苹果</div>
        </div>
        <div class="navTop-right">
          <ul>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
            <li>逆流之时</li>
          </ul>
        </div>
      </div>
    <!-- </transition> -->
    <div>
      <info-root></info-root>
    </div>
 </div>
</template>

<script>
import infoRoot from './childrens/infoRoot'

export default {
  name: 'infolist',
  components: {
    infoRoot
  },
  data () {
    return {
      isclick: true,
      nav: false,
      navTop: false
    }
  },
  methods: {
    navLi () {
      this.nav = !this.nav
      this.isclick = !this.isclick
    },
    navSpan () {
      this.nav = !this.nav
      this.isclick = !this.isclick
    },
    navTops () {
      this.navTop = !this.navTop
    }
  }
}
</script>

<style  scoped >
.infolist{
  height:100vh;
}
.infolist-title img{
  position: absolute;
  top: 50%;
  left: 4vw;
  transform: translate(0,-50%);
}
  .infolist-title{
    position: relative;
     display: flex;
    height: 9.333vw;
    line-height: 9.333vw;
    align-items: center;
  }
  .infolist-txt{
    margin:0 auto;
    font-size: 4.8vw;
    color: #000;
    font-weight: 700;
  }
  .infolist-top ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10.667vw;
    border-bottom: 0.267vw solid rgb(232, 232, 232);
    list-style: none;
    padding: 0 4vw;
  }
  ul:nth-child(5){
    padding-left:4vw ;
  }
  .infolist-top ul li{
    font-size: 3.467vw;
    color: #000;
  }
  .infolist-top ul li >img{
    margin-left:1.867vw;
  }
  .activeInfo{
       color: #6B9CFF;
    }
    .m-navbar {
    position: absolute;
    left: 0;
     top: 20vw;
    bottom: 0;
    right: 0;
    background:rgba(0,0,0, .5);
    height: 100%;
    z-index: 2;
}
    .m-navba {
    position: absolute;
    right: 0;
    left: 17.867vw;
    top: 20vw;
    bottom: 0;
    background-color: #fff;
    z-index: 1000;
    height: 100%;
    }
    .m-title .m-txt{
      margin: 6.4vw 6.133vw 5.067vw;
      color: #000;
      font-size: 4vw;
    }
    .m-bottom{
      display: flex;
    }
    .m-btn{
      width: 26.933vw;
      height: 9.067vw;
      border-radius: 1.6vw;
      text-align: center;
      line-height: 9.067vw;
      color: #B6BAC7;
      font-size: 3.733vw;
      background-color: #F3F5FA;
      margin-left: 6.133vw;
    }
.navTop{
   position: absolute;
    left: 0;
     top: 20vw;
    bottom: 100vw;
    right: 0;
    background-color: #fff;
    border-radius: 0  0 2.667vw 2.667vw;
    z-index: 6;
    display: flex;
}
.navList{
  display: flex;
  flex-direction: column;
  padding: 0 5.067vw;
}
.navTop-a, .navTop-i{
  width: 24vw;
  height: 9.067vw;
  border: 0.133vw /*px*/ solid #F3F5FA;
  background-color: #F3F5FA;
  text-align: center;
  line-height: 9.067vw;
  border-radius: 2.133vw;
  font-size: 4vw;
  color: #000;
}
.navTop-a{
  margin: 6.667vw 0 5.067vw;
}

.navTop-right{

}
.navTop-right ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

}
.navTop-right ul li{
  width: 26.933vw;
  height: 8vw;
  border: 0.4vw /*no*/ solid #9499AA;
  /* color: #83AAFF; */
  color: #9499AA;
  text-align: center;
  line-height: 8vw;
  border-radius: 3.2vw;
  font-size: 3.733vw;
  margin-top: 5.333vw;
}
.active{
  color: #83AAFF;
  border: 0.4vw /*no*/ solid #83AAFF;
}
/*  */
.nav-leave {
  /* 定义 出场动画的 起始状态 */
  /* 只停留一帧 */
  transform: translateX(0vw);
}
.nav-leave-active {
  /* 定义 出场动画 过程 */
  transition: all .4s ease;
}
.nav-leave-to {
  /* 定义 出场动画 结束状态（即：该动画要达到的目标状态） */
  transform: translateX(80vw);
}
/* 定义  入场动画 */
.nav-enter {
  /* 定义 入场动画 的起始状态 */
  transform: translateX(80vw);

}
.nav-enter-active {
  /* 定义 入场动画 过程 */
  transition: all .4s ease;
}
.nav-enter-to {
  /* 定义 入场动画 过程 */
  /* 只停留一帧 */
  transform: translateX(0vw);
}
/*  */

</style>
