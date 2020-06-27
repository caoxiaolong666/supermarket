<template>
   <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImg">
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'

export default {
  name: 'homeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    swiperImg () {
      if (!this.isLoad) {
        this.$emit('swiperImg')
        this.isLoad = true
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  }
}
</script>
<style>

</style>
