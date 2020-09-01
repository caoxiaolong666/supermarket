<!--  -->
<template>
 <div class="goods">
      <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">确认订单</div>
      </div>
      <div class="contant">
        <div class="goodsList">
          <div class="goodsListImg">
             <img src="@/assets/img/goods/qdyx@3x.png" alt="">
          </div>
          <div class="goodsListRight">
            <p>者荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英雄皮肤</p>
            <div class="goodsListTitle">
              <span>王者荣耀/QQ安卓</span>
              <div class="goodsListTitle-right">
                <img src="@/assets/img/goods/hot@3x.png" alt="">
                <span>250</span>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-title">
          <div calss="title-l">租送活动</div>
          <div calss="title-r">暂无</div>
        </div>
        <div class="goods-btn">
          <div class="btn-title">租聘时长</div>
          <div class="btn">
            <div class="btn-sub">-</div>
            <div class="btn-num">1</div>
            <div class="btn-add">+</div>
          </div>
        </div>
        <div class="goods-p">下单后,以当前时间开始计算</div>
        <div class="goods-time">
          <div class="time-title">
            <span>可租时间</span>
            <span>0:00-24:00</span>
          </div>
          <div class="time-title">
            <span>租金(元)</span>
            <span>18.0</span>
          </div>
          <div class="time-title">
            <span>租金(元)</span>
            <span>0.0</span>
          </div>
        </div>
        <div class="goods-p">押金在订单完成后24小时内退还到你的账户</div>
      </div>
      <div class="footer">
        <div class="footer-title">
          <img src="@/assets/img/goods/gx@3x.png" alt="">
          <p>我已阅读并同意<span>《爱租号协议》</span></p>
        </div>
      </div>
    <goods-tab></goods-tab>
    <div class="tips" v-if="isShow" >
      <div class="tips-contant">
        <div class="top">
          <div class="top-txt">余额不足</div>
          <img src="@/assets/img/goods/qx@3x.png" alt="">
        </div>
        <div class="txt">本次需要充值金额18.8元</div>
        <div class="wx">
          <div class="wx-left">
            <img src="@/assets/img/goods/wx@3x.png" alt="">
          </div>
          <div class="wx-center">
            微信支付
          </div>
          <div class="wx-right">
            <img src="@/assets/img/goods/zf-gx@3x.png" alt="">
          </div>
        </div>
        <div class="wx">
          <div class="wx-left">
             <img src="@/assets/img/goods/zfb@3x.png" alt="">
          </div>
          <div class="wx-center">
            支付宝支付
          </div>
          <div class="wx-right">
            <img src="@/assets/img/goods/zf-wgx@3x.png" alt="">
          </div>
        </div>
        <div class="btns" @click="clickPath">充值</div>
        <div class="bottom">如果未下单成功,充值金额将会全部转入余额</div>
      </div>
    </div>
 </div>
</template>

<script>
import goodsTab from './childrens/goodsTab'
export default {
  name: 'goods',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    goodsTab
  },
  methods: {
    clickPath () {
      this.isShow = false
      this.$router.push('/chrage')
    }
  }
}
</script>

<style scoped >
.header {
  display: flex;
  align-items: center;
  height: 12vw;
  border-bottom: 0.133vw solid #e9e5e5;
  position: relative;
}
.header img {
  width: 3.333vw;
  height: 4.667vw;
  background-size: 100%;
  margin-left: 4vw;
}
.header-title {
  font-size: 4.8vw;
  color: #000;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.goodsList{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 4vw 6.4vw;
  border-bottom: 0.133vw solid #e9e5e5;
}
.goodsListImg{
  margin-right: 4.8vw;
}
.goodsList img{
  width: 21.333vw;
  height: 21.333vw;
}
.goodsListRight p{
  font-size: 4vw;
  color:#000;
  line-height: 5.333vw;
}
.goodsListTitle{
  display: flex;
  justify-content: space-between;
 margin-top: 7.733vw;
  font-size: 3.2vw;
  color: #C3C6CF;
}

.goodsListTitle-right img{
  width: 3.333vw;
  height: 3.333vw;
  margin-right: 1.867vw;
}
.goods-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:14.667vw ;
  padding: 0 4vw;
  font-size: 3.467vw;
}
.goods-title >.title-l{
  color: #000;
}
.goods-title >.title-r{
  color: #9DA2B1;
}
.goods-btn{
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
}
.btn-title{
  font-size: 3.467vw;
  color: #000;
}
.btn{
  display: flex;
  width: 28vw;
  height: 8vw;
  border: 0.267vw solid #EFF2F8;
  border-radius: 2.133vw;
  align-items: center;
  justify-content: center;
}
.btn-sub,.btn-add{
  flex: 1;
  background-color: #EFF2F8;
  height: 100%;
  display: flex;
justify-content: center;
align-items: center;
font-size: 3.467vw;
color: #000;
}
.btn-sub{
  border-radius: 2.133vw 0 0 2.133vw;

}
.btn-num{
width: 13.333vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 3.467vw;
color: #000;
}
.btn-add{
border-radius:0 2.133vw 2.133vw 0;
}
.goods-p{
  font-size: 3.2vw;
  color:#5E94FF ;
  text-align: right;
  padding:3.733vw 4vw 0;
}
.goods-time{
  margin-top: 7.467vw;
  padding: 0 4vw;
}
.time-title{
  display: flex;
  justify-content: space-between;
  font-size: 3.467vw;
  color: #000;
  height: 9.333vw;
  line-height: 9.333vw;
}
.footer{
  position: fixed;
  bottom: 17.333vw;
  left: 4vw;
}
.footer-title{
  display: flex;
  font-size: 2.933vw;
}
.footer-title{
  color: #DBDDE2;
}
.footer-title img{
  width: 2.667vw;
  height: 2.667vw;
  margin-right: 1.867vw;
}
.footer-title span{
  color: #FE8B8B;
}
.tips{
  position: fixed;
  background-color: rgba(0,0,0,.3);
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tips .tips-contant{
  width: 78.133vw;
  height: 82.667vw;
  background-color: #ffffff;
  border-radius: 2.667vw;
}
.top{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5.867vw 0 9.333vw;
}
.top img{
  margin-right: 4.267vw;
  width: 4.267vw;
  height: 4.267vw;
}
.top-txt{
  flex: 1;
  text-align: center;
  font-size:4.8vw ;
  color: #000;
  font-weight: 700;
}
.txt{
  font-size: 3.733vw;
  color: #000;
  margin: 0 0 9.6vw 5.6vw;
}
.wx{
  display: flex;
  padding: 0 5.6vw 7.2vw;
  align-items: center;
}
.wx-center{
  flex: 1;
  font-size: 3.733vw;
  color: #000;
  margin-left:5.067vw ;
}
.wx-left img{
  width: 5.333vw;
  height: 5.333vw;
}
.wx-right img{
  width: 5.333vw;
  height: 5.333vw;
}
.btns{
  width: 42.667vw;
  height: 10.667vw;
  line-height: 10.667vw;
  text-align: center;
  color: #ffffff;
  font-size: 4vw;
  border-radius: 2.667vw;
  background-color:#3D7EFF ;
  margin:0 auto;
}
.bottom{
  text-align: center;
  font-size:2.933vw ;
  margin-top: 2.933vw;
  color: #C3C6CF;
}
</style>
