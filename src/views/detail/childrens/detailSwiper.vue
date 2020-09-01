<!--  -->
<template>
 <div class="datails">
     <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <!-- <a :href="item.link"> -->
          <img :src="item.image" alt="" >
        <!-- </a> -->
      </swiper-item>
    </swiper>
 </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'

export default {
  name: 'datails',
  components: {
    SwiperItem,
    Swiper
  },
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
    }
  }
}
</script>

<style scoped >
  .datails{
    width: 100%;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    margin-bottom: 7.467vw;
    overflow: hidden;
  }
  .datails img{
    width: 100%;
    height: 100%;
  }
 .datails #hy-swiper{
        /* height:30.133vw; */
        overflow: hidden;
    position: relative;
    width: 100%;
    /* height: 3.733333rem; */
    border-radius:0 0 0.266667rem 0.266667rem;
    margin-top: 0;
  }
</style>
