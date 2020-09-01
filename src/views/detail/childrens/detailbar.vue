<!--  -->
<template>
 <div class="detailbar">
   <tab-bar>
   <tab-bar-item>
      <img slot="icon" src="@/assets/img/detail/ysc@3x.png" alt="">
      <div slot="text">
           <div>收藏</div>
       </div>
    </tab-bar-item>
    <tab-bar-item>
       <div slot="text">
           <div class="btn" @click="clickTop">立即租用</div>
       </div>
    </tab-bar-item>
  </tab-bar>
 </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'detailbar',
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
    }
  },
  methods: {
    clickTop () {
      this.$router.push({ path: '/goods' })
    }
  }
}
</script>

<style scoped >
    .btn{
        width: 69.333vw;
        height: 10.667vw;
        line-height: 10.667vw;
        text-align: center;
        font-size: 4.267vw;
        color: #ffffff;
        background-color: #894CFF;
        border-radius: 2.133vw;
        margin: 0 4vw 0 0;
    }
</style>
