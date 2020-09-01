<!--  -->
<template>
  <div class="detail">
    <detail-swiper></detail-swiper>
    <div class="detail-text">
      <div class="detail-money">
        <div class="money-top">
          <span>18.3</span>/小时
        </div>
        <div class="money-bottom">
          <img src="@/assets/img/detail/hot@3x.png" alt />
          <span>256</span>
        </div>
      </div>
      <p>王者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</p>
      <div class="detail-btn">
        <div class="btn-l">英雄45</div>
        <div class="btn-r">皮肤25</div>
      </div>
    </div>
    <div class="detail-ul">
      <ul>
        <li>
          <div class="detail-l">活动</div>
          <div class="detail-r">免押金</div>
        </li>
        <li>
          <div class="detail-l">游戏区服</div>
          <div class="detail-r">苹果-王者荣耀-微信-1区</div>
        </li>
        <li>
          <div class="detail-l">上号方式</div>
          <div class="detail-r">快速上号</div>
        </li>
      </ul>
    </div>
    <div class="detail-bj">
      <p>温馨提示: 禁止使用外挂, 否则将扣除全部押金和租金</p>
    </div>
    <div class="detail-word detail-text">
      <p>商品信息</p>
      <ul>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
        <li>
          <div class="detail-word-l">商品</div>
          <div class="detail-word-r">131434</div>
        </li>
      </ul>
    </div>
    <div class="detail-word detail-text">
      <p>账号描述</p>
      <div class="word-txt-top">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
    </div>
    <div class="detail-word detail-text">
      <p>租号帮助</p>
      <div class="detail-word-txt">
        <div class="word-txt-top">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
        <div class="word-txt-bottom">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
      </div>
      <div class="detail-word-txt">
        <div class="word-txt-top">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
        <div class="word-txt-bottom">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
      </div>
      <div class="detail-word-txt">
        <div class="word-txt-top">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
        <div class="word-txt-bottom">者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</div>
      </div>
    </div>
    <detail-bar></detail-bar>
  </div>
</template>

<script>
import detailSwiper from './childrens/detailSwiper'
import detailBar from './childrens/detailbar'
export default {
  name: 'detail',
  components: {
    detailSwiper,
    detailBar
  },
  data () {
    return {
      banners: []
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped >
.detail {
  height: 100vh;
}
.detailSwiper {
  width: 100%;
  height: 13.333vw;
}
.detail-text {
  width: 100%;
  padding: 0 4vw;
}
.detail-text p {
  font-size: 4.8vw;
  color: #000;
  line-height: 8vw;
  font-weight: 700;
}
.detail-money {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vw;
}
.money-top {
  color: #000;
  font-size: 3.467vw;
}
.money-top span {
  color: #ff3413;
  font-size: 4.8vw;
}
.money-bottom img {
  width: 3.333vw;
  height: 3.333vw;
  background-size: 100%;
  /* vertical-align :bottom; */
  margin: 0;
}
.money-bottom span {
  color: #b4b7c3;
  font-size: 3.2vw;
  margin-left: 1.867vw;
}
.detail-btn {
  display: flex;
  margin: 5.333vw 0 7.2vw;
}
.detail-btn .btn-l {
  border: 0.267vw solid #ffc237;
  border-radius: 0.533vw;
  color: #ffc237;
  margin-right: 1.867vw;
  text-align: center;
  line-height: 6.4vw;
  width: 16vw;
  height: 6.4vw;
}
.detail-btn .btn-r {
  border: 0.267vw solid #f58314;
  border-radius: 0.533vw;
  color: #f58314;
  text-align: center;
  line-height: 6.4vw;
  width: 16vw;
  height: 6.4vw;
}
.detail-ul {
  padding: 0 4vw;
}
.detail-ul ul li {
  font-size: 3.733vw;
  display: flex;
  align-items: center;
  margin-bottom: 4vw;
}
.detail-l {
  color: #d9dbe2;
}
.detail-r {
  color: #000;
  margin-left: 13.333vw;
}
.detail-bj {
  margin: 0 auto;
  width: 92vw;
  height: 7.733vw;
  background-color: #fff5ec;
  text-align: center;
  line-height: 7.733vw;
}
.detail-bj p {
  font-size: 3.467vw;
  color: #ff3d1e;
}
.detail-word {
  margin: 10.667vw 0 12vw;
}
.detail-word ul {
  margin: 6.933vw 0 0;
}
.detail-word ul li {
  font-size: 3.733vw;
  display: flex;
  justify-content: space-between;
  height: 8.667vw;
}
.detail-word-l {
  color: #d9dbe2;
}
.detail-word-r {
  color: #000;
}
.word-txt-top {
  font-size: 3.467vw;
  color: #000;
  margin-top: 8vw;
}
.word-txt-bottom {
  font-size: 3.467vw;
  color: #d9dbe2;
}
</style>
