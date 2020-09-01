<template>
 <div class="goodsTab">
   <tab-bar>
   <tab-bar-item>
      <div slot="text">
           <div class="text-txt">实付 <span>¥{{num}}</span></div>
       </div>
    </tab-bar-item>
    <tab-bar-item>
       <div slot="text">
           <div class="btn" @click="clickTop">支付</div>
       </div>
    </tab-bar-item>
  </tab-bar>
 </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'goodsTab',
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
      num: '12'
    }
  },
  methods: {
    clickTop () {
      this.$emit('pathClick', this.num)
      this.$router.push({ path: '/goods' })
    }
  }
}
</script>

<style scoped >
    .btn{
        width: 42.667vw;
        height: 10.667vw;
        line-height: 10.667vw;
        text-align: center;
        font-size: 4.267vw;
        color: #ffffff;
        background-color: #3D7EFF;
        border-radius: 2.133vw;
        margin: 0 4vw 0 0;
    }
    .text-txt{
      font-size:4.8vw;
      color: #000;
       text-align: right;
       margin-top: 3vw;
    }
    .text-txt span{
      color:#FE9696 ;

      margin-right: 3.467vw;
    }
</style>
