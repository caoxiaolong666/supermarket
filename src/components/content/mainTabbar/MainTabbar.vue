<template>
  <tab-bar>
   <tab-bar-item path="/home">
      <img slot="icon" src="@/assets/img/tabbar/sy-wxz@2x.png" alt="">
      <img slot="active-icon" src="@/assets/img/tabbar/sy-xz@2x.png" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/myInfo">
       <div slot="text" class="tabbar-img">
         <img class="imgs" src="@/assets/img/tabbar/wyz@2x.png" alt="">
       </div>

    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon" src="@/assets/img/tabbar/wd-wxz@2x.png" alt="">
      <img slot="active-icon" src="@/assets/img/tabbar/wd-xz@2x.png" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped >
  .tabbar-img{
    width:22.133vw;
    height: 9.6vw;
    margin: 0 auto;
  }
  .imgs{
      width:17.333vw;
      height: 10vw;
    }
</style>
