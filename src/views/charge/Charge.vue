<!--  -->
<template>
 <div class="charge">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">余额充值</div>
      </div>
      <div class="contant">
          <div class="contant-top">
              <div class="contant-top-r">可用余额(元)</div>
              <div class="contant-top-l">充值记录</div>
          </div>
          <p>20.0</p>
          <div class="contant-top-m">
              <div class="contant-top-m-txt">冻结资金: 0</div>
              <img src="@/assets/img/goods/gx@3x.png" alt="">
          </div>
           <div class="txt">余额充值</div>
          <div class="contant-top-input">
              <input type="text" placeholder="自定义充值金额">
          </div>
          <div class="contant-top-sclect">
              <ul>
                  <li>¥120</li>
                  <li>¥120</li>
                  <li>¥120</li>
                  <li>¥120</li>
                  <li>¥120</li>
                  <li>¥120</li>
              </ul>
          </div>
        <div class="txt">充值方式</div>
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
      </div>
     <charge-tab></charge-tab>
    <div class="tips" v-if="isShow" >
      <div class="tips-contant">
        <div class="top">
          <div class="top-txt">冻结资金</div>
        </div>
        <div class="center">什么是资金冻结,有以下几种情况:</div>
        <div class="bottom">
            <ul>
                <li>1.你有正在租用的账号</li>
                <li>2.之前租用的订单设置有押金 (押金24小时系统自动返还)</li>
                <li>3.你的账号有违反平台规定行为</li>
            </ul>
        </div>
        <div class="tips-btn" @click="isShow = false">我知道了</div>
      </div>
    </div>
 </div>
</template>

<script>
import ChargeTab from './childrens/ChargeTab'

export default {
  name: 'charge',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    ChargeTab
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
.contant-top{
    display: flex;
    justify-content: space-between;
    margin:6.4vw 4vw 5.333vw;
}
.contant-top-r{
    font-size: 4vw;
    color: #000;
}
.contant-top-l{
     font-size: 4vw;
    color: #D0D2DA;
}
.contant > p{
    font-size: 9.6vw;
    color: #000;
    margin: 0 0 10.133vw 4vw;
}
.contant-top-m{
      display: flex;
    margin: 0 4vw 9.333vw;
    font-size: 3.467vw;
    color: #D0D2DA;
}
.contant-top-m img{
    width: 4vw;
    height: 4vw;
    margin-left: 2.933vw;
}

.contant-top-input{
    width: 92vw;
    height: 10.667vw;
    margin:0 auto;
    background-color:#F3F5FA ;
    border-radius: 3.2vw;
    box-sizing: border-box;
}
.contant-top-input input{
   width:690;
    height: 100%;
    border: none;
  border-radius: 3.2vw;
  /* color: #B3BCD9; */
  font-size: 3.733vw;
  text-indent: 2em;
   background-color:#F3F5FA ;

    /* resize:none; */
    outline:none;  /*清除选中效果的默认蓝色边框 */
    -webkit-appearance:none;  /*清除浏览器默认的样式 */
}
.contant-top-sclect{
    margin: 4vw 4vw 6.4vw;
}
.contant-top-sclect ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
}
.contant-top-sclect ul li{
    width: 26.667vw;
    height: 12.133vw;
    border-radius: 3.2vw;
    border: 0.133vw solid #cccccc;
    text-align: center;
    font-size: 3.733vw;
    line-height: 12.133vw;
    color: #000;
    margin-bottom: 2.667vw;
}
/*  */

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
  padding: 0 5.333vw;
}
.top{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5.867vw 0 9.333vw;
  font-size: 4.8vw;
  color: #000;
}
.center {
    font-size: 3.467vw;
    color:#000;
    margin-bottom:4vw ;
}
.bottom ul{
    margin-bottom: 7.333vw;
}
.bottom ul >li{
    font-size: 3.467vw;
    color:#000;
    /* margin-bottom:4.267vw ; */
    line-height: 8vw;
}
.tips-btn{
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
</style>
