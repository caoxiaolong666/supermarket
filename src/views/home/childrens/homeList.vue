<!--  -->
<template>
 <div class="homeList">
     <div class="title">
         <div class="phone clickActive">热门手游</div>
         <div class="pc">热门端游</div>
         <div class="img">
             <img src="@/assets/img/home/gd@2x.png" alt="">
         </div>
     </div>
     <ul>
         <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
           <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <span>王者荣耀</span>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
  name: 'homeList',
  data () {
    return {
    }
  }
}
</script>

<style  scoped >
    .title{
        display: flex;
        font-size:3.733vw ;
        color: #9BA0B0;
        align-items: center;
        position: relative;
        margin-bottom: 6.667vw;
    }
    .phone{
        margin-right: 7.2vw;
    }
    .clickActive{
        font-size: 4.533vw;
        color: #000;
        font-weight: 700;
    }
    .clickActive::before{
         content: "";
         position: absolute;
         bottom:-2.667vw;
         left: 8vw;
         display: inline-block;
         width: 3.467vw;
         height: 1.333vw;
         border-radius: 0.8vw;
         background-color: #8F48F3;
    }
    .img{
        position: absolute;
        right:4vw;
    }
    .img> img{
        width: 3.333vw;
        height: 3.333vw;
    }
    .homeList ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .homeList ul >li{
        list-style: none;
        width:24% ;
        margin-bottom: 6.4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .homeList ul >li img{
        width: 17.333vw;
        height: 17.333vw;
        margin-bottom: 3.733vw;
    }
     .homeList ul >li span{
         font-size:3.467vw ;
         color: #000;
     }
</style>
