
<template>
  <div class="home-tabs">
    <a href>
      <img src="@/assets/img/home/czzx@2x.png" alt />
      <div class="title">充值中心</div>
    </a>
    <a href>
      <img src="@/assets/img/home/xsrm@2x.png" alt />
      <div class="title">新手入门</div>
    </a>
    <a href>
      <img src="@/assets/img/home/syzq@2x.png" alt />
      <div class="title">手游专区</div>
    </a>
    <a href>
      <img src="@/assets/img/home/dyzq@2x.png" alt />
      <div class="title">端游专区</div>
    </a>
    <a href>
      <img src="@/assets/img/home/wdsc@2x.png" alt />
      <div class="title">我的收藏</div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'homeTabs',
  data () {
    return {}
  }
}
</script>

<style scoped >
.home-tabs {
  display: flex;
  justify-content: space-between;
  margin: 6vw 0;
}
.home-tabs a {
  text-align: center;
}
.home-tabs img {
  width: 10.667vw;
  height: 10.667vw;
}
.home-tabs a .title {
  font-size: 3.2vw;
  color: rgb(51, 51, 51);
  margin-top: 4vw;
  font-weight: 700;
}
</style>
