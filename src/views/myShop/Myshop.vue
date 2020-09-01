<!--  -->
<template>
 <div class="myShop">
      <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">我的订单</div>
     </div>
     <ul>
       <li class="myShopActive">全部</li>
       <li >待付中</li>
       <li>租赁中</li>
       <li>已完成</li>
       <li>售后</li>
     </ul>
     <div class="myShop-bj" >
       <div class="card">
         <div class="card-top">
           <div class="card-top-l">订单号: 131441</div>
           <div class="card-top-r">待付款</div>
         </div>
         <div class="card-center">
           <div class="card-img">
             <img src="@/assets/img/home/APP.png" alt="">
             <div class="card-img-text">
               <p>满英雄10个英雄熟练度大部分皮肤武则天韩信</p>
               <div>商品ID: 34141</div>
               <div>2020-08-20 14:20:20 <span>X10小时</span></div>
             </div>
           </div>
           <div class="card-text">
             <div class="card-text-l">账号/王者荣耀</div>
              <div class="card-text-r">实付: ¥12</div>
           </div>
         </div>
         <div class="card-bottom">
           <div class="card-btn">取消订单</div>
           <div class="card-btn">去支付</div>
         </div>
       </div>
        <div class="card">
         <div class="card-top">
           <div class="card-top-l">订单号: 131441</div>
           <div class="card-top-r">待付款</div>
         </div>
         <div class="card-center">
           <div class="card-img">
             <img src="@/assets/img/home/APP.png" alt="">
             <div class="card-img-text">
               <p>满英雄10个英雄熟练度大部分皮肤武则天韩信</p>
               <div>商品ID: 34141</div>
               <div>2020-08-20 14:20:20 <span>X10小时</span></div>
             </div>
           </div>
           <div class="card-text">
             <div class="card-text-l">账号/王者荣耀</div>
              <div class="card-text-r">实付: ¥12</div>
           </div>
         </div>
         <div class="card-bottom">
           <div class="card-btn">取消订单</div>
           <div class="card-btn">去支付</div>
         </div>
       </div>
        <div class="card">
         <div class="card-top">
           <div class="card-top-l">订单号: 131441</div>
           <div class="card-top-r">待付款</div>
         </div>
         <div class="card-center">
           <div class="card-img">
             <img src="@/assets/img/home/APP.png" alt="">
             <div class="card-img-text">
               <p>满英雄10个英雄熟练度大部分皮肤武则天韩信</p>
               <div>商品ID: 34141</div>
               <div>2020-08-20 14:20:20 <span>X10小时</span></div>
             </div>
           </div>
           <div class="card-text">
             <div class="card-text-l">账号/王者荣耀</div>
              <div class="card-text-r">实付: ¥12</div>
           </div>
         </div>
         <div class="card-bottom">
           <div class="card-btn">取消订单</div>
           <div class="card-btn">去支付</div>
         </div>
       </div>
     </div>
 </div>
</template>

<script>
export default {
  name: 'myShop',
  data () {
    return {
    }
  }
}
</script>

<style scoped >
.myShop{
  /* height: 100%; */
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
.myShop ul {
  display: flex;
  align-items: center;
  padding: 4vw 4vw;
  justify-content: space-between;
  color: #000;
}
.myShop ul li{
  font-size: 4vw;
  position: relative;
}
.myShopActive{
  color: #3D7EFF;
}
.myShopActive::before{
   content: "";
         position: absolute;
         bottom:-2.667vw;
         left: 50%;
         transform: translateX(-50%);
         display: inline-block;
         width: 3.467vw;
         height: 1.333vw;
         border-radius: 0.8vw;
         background-color: #3D7EFF;
}
.myShop-bj{
  height: 100%;
  background-color: #F6F7FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.667vw;
}
.card{
  width: 92vw;
  background-color: #fff;
  border-radius: 3.2vw;
  margin-top: 2.133vw;
  padding: 0 4vw;
}
.card-top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.467vw;
  margin: 4.533vw 0 6.4vw;
}
.card-top-l{
  color: #000;
}
.card-top-r{
  color: #FE6161;
}
.card-img{
display: flex;
  align-items: center;
}
.card-img img{
  width: 26.667vw;
  height: 26.667vw;
}
.card-img-text{
  margin-left: 3.2vw;
}
.card-img-text p{
  font-size: 4vw;
  color: #000;
}
.card-img-text div{
   font-size: 3.2vw;
  color: #B1B3C0;
  margin-top: 3.467vw;
}
.card-img-text span{
  margin-left: 12vw;
}
.card-text{
   display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6.4vw 0 5.067vw;
}
.card-text-l{
font-size: 3.2vw;
  color: #B1B3C0;
}
.card-text-r{
  font-size: 4vw;
  color: #000;
}
.card-bottom{
  display: flex;
  align-items: center;
  margin-bottom: 5.067vw;
  justify-content: flex-end;
}
.card-btn{
  width: 20vw;
  height: 8vw;
  border-radius: 2.667vw;
  text-align: center;
  line-height: 8vw;
  font-size:3.733vw;
  color: #B1B3C0;
  border: 0.267vw solid #B1B3C0 ;
  margin-left: 3.2vw;
}
</style>
