<!--  -->
<template>
 <div class="center">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">常见问题</div>
     </div>
     <div class="contant">
         <div class="contant-top">常见问题</div>
         <div class="contant-center">账号被找回会,怎么办?</div>
         <div class="contant-bottom">如果是上述情况,请立即截图并联系客服进行反馈,客服将24小时内为您处理.若核实,您将会得到相应的补偿。</div>
         <ul>
             <li>
                 <p>为什么提现没到账?</p>
                 <img src="@/assets/img/center/sz-gd@3x.png" alt="">
             </li>
             <li>
                 <p>如何申请提款?</p>
                 <img src="@/assets/img/center/sz-gd@3x.png" alt="">
             </li>
             <li>
                 <p>保证金可以退吗?</p>
                 <img src="@/assets/img/center/sz-gd@3x.png" alt="">
             </li>
             <li>
                 <p>可以和卖家进行沟通吗?</p>
                 <img src="@/assets/img/center/sz-gd@3x.png" alt="">
             </li>
             <li>
                 <p>买的游戏点卡用不了怎么回事?</p>
                 <img src="@/assets/img/center/sz-gd@3x.png" alt="">
             </li>
         </ul>
     </div>
 </div>
</template>

<script>

export default {
  name: 'charge',
  data () {
    return {
    }
  },
  components: {
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
.contant{
    padding: 0 4vw;
}
.contant-top{
    font-size: 4.533vw;
    color: #000;
    line-height: 8vw;
    margin-top: 6.667vw;
    font-weight: 700;
}
.contant-center{
     font-size: 4vw;
    color: #000;
    margin: 5.6vw 0 5.333vw;
}
.contant-bottom{
     font-size: 3.467vw;
    color: #83899D;
    line-height: 5.333vw;

}
.contant ul{
    margin-top: 9.6vw;
}
.contant ul li{
    display: flex;
  align-items: center;
  justify-content: space-between;
    margin-bottom: 9.6vw;
}
.contant ul li p{
    color: #000;
    font-size: 4vw;
}
.contant ul li img{
    width: 2.667vw;
    height: 4vw;
    background-size: 100%;
}
</style>
