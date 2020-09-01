<!--  -->
<template>
 <div class="collection">
      <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">我的收藏</div>
     </div>
     <ul>
       <li class="mycollection">全部收藏</li>
       <li >管理</li>
     </ul>
     <div class="myShop-bj" >
       <div class="card">
            <div class="card-top" v-if= true>
                    <div>下架商品</div>
                    <div class="card-top-text">全部删除</div>
           </div>
           <div class="card-contant">
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                           <div v-if="false">租赁中</div>
                       </div>
                   </div>
               </div>
           </div>
            <div class="card-contant">
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                   <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                           <div>租赁中</div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
        <div class="card">
            <div class="card-top" v-if= false>
                    <div>下架商品</div>
                    <div class="card-top-text">全部删除</div>
           </div>
           <div class="card-contant">
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                           <div v-if="false">租赁中</div>
                       </div>
                   </div>
               </div>
           </div>
            <div class="card-contant">
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                   <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                           <div>租赁中</div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     </div>
     <!-- <div class="footer">
         <div class="card-select">
             <div class="card-select">
                   <div class="select" v-if="true">
                   </div>
                   <img src="@/assets/img/collection/gx@2x.png" alt="" v-else>
                   <span>全选</span>
               </div>
         </div>
         <div class="footer-btn">删除</div>
     </div> -->
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
.collection{
    height: 100vh;
}
    .header {
  display: flex;
  align-items: center;
  height: 12vw;
  /* border-bottom: 0.133vw solid #e9e5e5; */
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
.collection ul {
  display: flex;
  align-items: center;
  padding: 4vw 4vw;
  justify-content: space-between;
  color: #9CA1B1;
}
.collection ul li{
  font-size: 3.467vw;
}
.collection ul .mycollection{
  font-size: 4.267vw;
  color: #000;

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
  padding: 4vw  4vw;
  box-sizing: border-box;
}
.card-contant{
    display: flex;
    align-items: center;
    margin-bottom: 2.667vw;
}
/* .card-select{
    flex: 1;
    display: flex;
    align-items: center;
     margin: 0 2.667vw 0;
    font-size: 4vw;
    color: #000;
}
.card-select img{
     width: 4vw;
    height: 4vw;
}
.card-select span{
    margin-left: 1.867vw;
}
.select{
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    background-color: #E5EEFF;
} */
.card-img{
    display: flex;
    align-items: center;

}
.card-text{
     margin-left: 4.533vw;
}
.card-img img{
    width: 20vw;
    height: 20vw;
     display: block;
}
.card-text p{
    font-size: 4vw;
    color: #000;
    margin-bottom: 1.867vw;

}
.card-text-bt{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-text-bt span{
    font-size: 3.733vw;
  color: #9CA1B1;
}
.card-text-bt div{
    width: 17.333vw;
    height: 6.667vw;
    border-radius: 2.133vw;
    text-align: center;
    line-height: 6.667vw;
    font-size: 3.467vw;
    color: #FA816F;
    background-color: #FFF5EC;
}
.card-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.667vw;
}
.card-top:nth-child(1){
    font-size: 4vw;
    color: #000;
}
.card-top-text{
    font-size: 4vw;
    color: #9CA1B1;
}
/* .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.333vw;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:4vw ;
}
.footer-btn{
    width: 42.667vw;
    height: 11.733vw;
    border-radius: 3.2vw;
    background-color: #3C7EFE;
    font-size: 4.8vw;
    color: #fff;
    text-align: center;
    line-height: 11.733vw;
} */
</style>
