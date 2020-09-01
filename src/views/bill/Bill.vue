<!--  -->
<template>
  <div class="bill">
    <div class="header">
      <img src="@/assets/img/goods/back@3x.png" alt />
      <div class="header-title">充值记录</div>
    </div>
    <div class="head-top">
        <div class="head-top" @click="nav=true">
            <div>2020年8月</div>
            <img src="@/assets/img/bill/down@3x.png" alt="">
        </div>
    </div>
    <div class="contant">
        <ul>
            <li>
                <div class="contant-l" >
                    <img src="@/assets/img/bill/qdyx@3x.png" alt="">
                </div>
                <div class="contant-c" >
                    <div class="contant-c-top">余额充值</div>
                    <div class="contant-c-bottom">昨天 <span>50:00</span></div>
                </div>
                <div class="contant-r" >+50.00</div>
            </li>
             <li>
                <div class="contant-l" >
                    <img src="@/assets/img/bill/qdyx@3x.png" alt="">
                </div>
                <div class="contant-c" >
                    <div class="contant-c-top">余额充值</div>
                    <div class="contant-c-bottom">昨天 <span>50:00</span></div>
                </div>
                <div class="contant-r" >+50.00</div>
            </li>
             <li>
                <div class="contant-l" >
                    <img src="@/assets/img/bill/qdyx@3x.png" alt="">
                </div>
                <div class="contant-c" >
                    <div class="contant-c-top">余额充值</div>
                    <div class="contant-c-bottom">昨天 <span>50:00</span></div>
                </div>
                <div class="contant-r" >+50.00</div>
            </li>
             <li>
                <div class="contant-l" >
                    <img src="@/assets/img/bill/qdyx@3x.png" alt="">
                </div>
                <div class="contant-c" >
                    <div class="contant-c-top">余额充值</div>
                    <div class="contant-c-bottom">昨天 <span>50:00</span></div>
                </div>
                <div class="contant-r" >+50.00</div>
            </li>
             <li>
                <div class="contant-l" >
                    <img src="@/assets/img/bill/qdyx@3x.png" alt="">
                </div>
                <div class="contant-c" >
                    <div class="contant-c-top">余额充值</div>
                    <div class="contant-c-bottom">昨天 <span>50:00</span></div>
                </div>
                <div class="contant-r" >+50.00</div>
            </li>
        </ul>
    </div>

    <div class="m-navbar" v-if="nav"> </div>
     <transition name="nav">
      <div class="m-navba" v-if="nav">
          <div class="m-navba-top">
              <div @click="nav=false">取消</div>
              <div>确定</div>
          </div>
          <div class="m-navba-top-time">
              <div>2017</div>
              <div>3</div>
          </div>
          <div class="m-navba-top-time">
              <div>2018</div>
              <div>6</div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'bill',
  data () {
    return {
      nav: false
    }
  }
}
</script>

<style scoped >
.bill{
    position: relative;
    height: 100%;
}
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
 .head-top{
     display: flex;
     align-items: center;
     border-bottom: 0.133vw solid #e9e5e5;
     font-size: 3.733vw;
     color: #000;
     padding-left: 4vw;
     height: 13.333vw;
 }
 .head-top img{
     width: 4vw;
     height: 2.667vw;
     margin-left: 3.2vw;
 }
 .contant ul{
     padding: 0 4vw;
 }
 .contant ul li{
     width: 100%;
     height:18.667vw ;
     display: flex;
     align-items: center;
      border-bottom: 0.133vw solid #e9e5e5;
 }
 .contant ul li:nth-child(2n) >.contant-r{
     font-size: 5.067vw;
     color: red;
 }
 .contant-c{
     flex: 1;
     margin-left: 5.067vw;
 }
 .contant-c-top{
     font-size: 4.267vw;
     color: #000;
     margin-bottom: 2.4vw;
 }
 .contant-c-bottom{
      font-size: 3.2vw;
     color: #e9e5e5;
 }
 .contant-c-bottom span{
     margin-left: 1.6vw;
 }
 .contant-r{
     font-size: 5.067vw;
     color: yellow;
 }
 .contant-l img{
     width: 10.667vw;
     height: 10.667vw;
 }

   .m-navbar {
    position: absolute;
    left: 0;
     top: 0;
    bottom: 0;
    right: 0;
    background:rgba(0,0,0, .5);
    height: 100%;
    z-index: 2;
}
    .m-navba {
    position: absolute;
    right: 0;
    left: 0;
    top: 101.333vw;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    border-radius: 3.333vw 3.333vw 0 0;
    }
    .m-navba-top{
        font-size: 4.267vw;
        color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.4vw solid #e9e5e5;
        height: 12vw;
        padding: 0 4vw;
    }

.m-navba-top-time{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.8vw;
    color: #ccc;
    height: 10.667vw;

}
.m-navba-top-time > div{
     padding:0 6.667vw;
}
</style>
