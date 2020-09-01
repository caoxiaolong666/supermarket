<!--  -->
<template>
 <div class="myInfo">
    <div class="title">我要租</div>
     <nav-bar class="home-bar">
        <div slot="center" class="home-center">
            <span>
            <img class="home-imgs" src="@/assets/img/home/ss@2x.png" alt="">
            </span>
            <input type="text" placeholder="输入游戏名称"/>
        </div>
    </nav-bar>
    <div class="myInfo-tabs">
     <router-link to="/infoList">
         <div class="myInfo-title active">热门</div>
     </router-link>
      <a href="">
         <div class="myInfo-title">手游</div>
     </a>
      <a href="">
         <div class="myInfo-title">端游</div>
     </a>
      <a href="">
         <div class="myInfo-title">其它</div>
     </a>
 </div>
 <myscoll></myscoll>
    <main-tab-bar></main-tab-bar>

 </div>

</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import myscoll from './childrens/myscoll'
import MainTabBar from '@/components/content/mainTabbar/MainTabbar'

export default {
  name: 'myInfo',
  components: {
    NavBar,
    myscoll,
    MainTabBar
  },
  data () {
    return {
    }
  }
}
</script>

<style  scoped >
    .myInfo{
          position: relative;
          height: 100vh;
        }
    .title{
        font-size: 4.8vw;
        color: #000;
        text-align: center;
        height: 12vw;
        line-height: 12vw;
        font-weight: 700;
    }
    .home-bar{
        height: 11.733vw;
        margin:0 auto;
    }
   .home-center{
  width: 92vw;
  height: 9.067vw;
  background-color: #EBEEF7;
  border-radius: 5.333vw;
  border: 0.133vw solid #EBEEF7;
  margin-top: 0.8vw;
  display: flex;
}
.home-center span{
  width:10.667vw ;
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
.myInfo-tabs{
    display: flex;
    align-items: center;
    font-size:3.733vw ;
    color: #A3A7B6;
    height: 20vw;
    line-height: 20vw;
    border-bottom: 0.133vw solid #A3A7B6;
    margin-bottom: 1.333vw;
    /* position: relative; */
}
.myInfo-title{
    margin-left: 3.733vw;
    position: relative;
}
.active{
    font-size: 4.533vw;
    color: #000;
    font-weight: 700;
}
.active::before{
         content: "";
         position: absolute;
         bottom:4vw;
         left: 50%;
         transform: translateX(-50%);
         display: inline-block;
         width: 3.467vw;
         height: 1.333vw;
         border-radius: 0.8vw;
         background-color: #8F48F3;
    }
</style>
