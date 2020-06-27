<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      <div class="title" slot="center">
        <div class="title-item" v-for="(item, index) in this.title" :key="index" @click="titleClick(index)" :class="{active:index === currentIndex }">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar'

import { getDetail } from '../../../network/detail'
export default {
  name: 'detailNavbar',
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  created () {
    // 保存传入的id
    this.id = this.$route.params.id
    getDetail(this.id).then(res => {
      console.log(res, 'hahah')
    })
  },
  components: {
    NavBar
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
    },
    backClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .title{
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 12px;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .back img{
    margin-top: 12px;

  }
</style>
