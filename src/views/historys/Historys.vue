<!--  -->
<template>
 <div class="historys">
      <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">历史浏览</div>
     </div>
     <ul>
       <li class="mycollection">历史浏览</li>
       <li >完成</li>
     </ul>
     <div class="myShop-bj" >
        <div class="card">
           <div class="card-time">今天</div>
           <div class="card-contant">
                <div class="card-select">
                   <div class="select" v-if="true">
                   </div>
                   <img src="@/assets/img/collection/gx@2x.png" alt="" v-else>
               </div>
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                       </div>
                   </div>
               </div>
           </div>
             <div class="card-contant">
                <div class="card-select">
                   <div class="select" v-if="false">
                   </div>
                   <img src="@/assets/img/collection/gx@2x.png" alt="" v-else>
               </div>
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
          <div class="card">
           <div class="card-time">8:24</div>
           <div class="card-contant">
                <div class="card-select">
                   <div class="select" v-if="false">
                   </div>
                   <img src="@/assets/img/collection/gx@2x.png" alt="" v-else>
               </div>
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                       </div>
                   </div>
               </div>
           </div>
            <div class="card-contant">
                <div class="card-select">
                   <div class="select" v-if="true">
                   </div>
                   <img src="@/assets/img/collection/gx@2x.png" alt="" v-else>
               </div>
               <div class="card-img">
                   <img src="@/assets/img/home/APP.png" alt="">
                    <div class="card-text">
                       <p>荣耀最强王者段位全英雄皮肤王者荣耀最强王者段位全英</p>
                       <div class="card-text-bt">
                           <span>¥18.5/小时</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     </div>
 </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
    }
  }
}
</script>

<style scoped >
.historys{
    height: 100%;
}
    .header {
  display: flex;
  align-items: center;
  height: 12vw;
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
.historys ul {
  display: flex;
  align-items: center;
  padding: 4vw 4vw;
  justify-content: space-between;
  color: #9CA1B1;
}
.historys ul li{
  font-size: 3.467vw;
}
.historys ul .mycollection{
  font-size: 4.267vw;
  color: #000;

}
.myShop-bj{
  height: 100%;
  /* background-color: #F6F7FA; */
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
  box-sizing: border-box;
}
.card-contant{
    display: flex;
    align-items: center;
    margin-bottom: 2.667vw;
}

.card-img{
    display: flex;
    align-items: center;

}
.card-text{
     margin-left: 4.533vw;
}
.card-img img{
    width: 17.067vw;
    height: 17.067vw;
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
.card-time{
    font-size: 3.467vw;
    color: #9CA1B1;
    margin:0 0 4.267vw ;
}
.card-select{
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
}
</style>
