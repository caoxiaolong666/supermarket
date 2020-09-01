<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
    width: 100%;
  }
  ul,li{
    list-style: none;
  }
</style>
