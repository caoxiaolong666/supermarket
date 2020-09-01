<template>
    <div id="tabs-item" @click="itemClick">

    <div class="item-icon" v-if="!isActive">
        <slot name="icon"></slot>
    </div>
    <div class="item-active-icon" v-else>
        <slot name="active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
        <slot name="text"></slot>
    </div>
    </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
    // link: {
    //   type: String,
    //   required: true
    // }
  },
  data () {
    return {

    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
      // return true
    },
    activeStyle () {
      return this.isActive ? { color: 'red' } : {}
    }

  },
  methods: {
    itemClick () {
      // console.log(this.link, 123)
      this.$router.replace(this.path)
    }
  }

}
</script>
<style scoped>
  #tabs-item{

    flex:1;
  }
  .item-icon img,
  .item-active-icon img{
    width: 6.2vw;
    height: 6.2vw;
    margin-top: 0.667vw;
    vertical-align: middle;
  }
  .item-text{
    font-size: 2.667vw;
    margin-top: 0.4vw;
    color: #333333;
  }
</style>
