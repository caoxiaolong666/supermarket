<!--  -->
<template>
 <div class="homeList">
     <slot></slot>
     <ul>
          <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <p>王者荣耀最强王者段位全英雄皮肤</p>
             <div class="btn">
                 <div class="btn-l">英雄45</div>
                 <div class="btn-r">皮肤25</div>
             </div>
             <div class="money">
                 <div class="money-top">
                     <span>¥256</span>/小时
                </div>
                <div class="money-bottom">
                    <img src="@/assets/img/home/hot@2x.png" alt="">
                    <span>256</span>
                </div>
             </div>
             <div class="txt">王者荣耀/QQ安卓</div>
         </li>
             <li>
             <img src="@/assets/img/home/logo@2x.png" alt="" >
             <p>王者荣耀最强王者段位全英雄皮肤</p>
             <div class="btn">
                 <div class="btn-l">英雄45</div>
                 <div class="btn-r">皮肤25</div>
             </div>
             <div class="money">
                 <div class="money-top">
                     <span>¥256</span>/小时
                </div>
                <div class="money-bottom">
                    <img src="@/assets/img/home/hot@2x.png" alt="">
                    <span>256</span>
                </div>
             </div>
             <div class="txt">王者荣耀/QQ安卓</div>
         </li>
           <li>
             <img src="@/assets/img/home/logo@2x.png" alt="">
             <p>王者荣耀最强王者段位全英雄皮肤</p>
             <div class="btn">
                 <div class="btn-l">英雄45</div>
                 <div class="btn-r">皮肤25</div>
             </div>
             <div class="money">
                 <div class="money-top">
                     <span>¥256</span>/小时
                </div>
                <div class="money-bottom">
                    <img src="@/assets/img/home/hot@2x.png" alt="">
                    <span>256</span>
                </div>
             </div>
             <div class="txt">王者荣耀/QQ安卓</div>
         </li>
           <li>
             <img src="@/assets/img/home/logo@2x.png" alt="" >
             <p>王者荣耀最强王者段位全英雄皮肤</p>
             <div class="btn">
                 <div class="btn-l">英雄45</div>
                 <div class="btn-r">皮肤25</div>
             </div>
             <div class="money">
                 <div class="money-top">
                     <span>¥256</span>/小时
                </div>
                <div class="money-bottom">
                    <img src="@/assets/img/home/hot@2x.png" alt="">
                    <span>256</span>
                </div>
             </div>
             <div class="txt">王者荣耀/QQ安卓</div>
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
    .homeList{
        padding: 0 2.667vw;
    }
    .title{
        display: flex;
        font-size:3.733vw ;
        color: #9BA0B0;
        align-items: center;
        position: relative;
        margin-bottom: 6.667vw;
    }
     .img{
        position: absolute;
        right:4vw;
    }
    .img> img{
        width: 3.333vw;
        height: 3.333vw;
    }
    .clickActive{
        font-size: 4.533vw;
        color: #000;
        font-weight: 700;
    }
    .homeList ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .homeList ul >li{
        list-style: none;
        width:48% ;
        margin-bottom: 6.533vw;
        /* background-color: red; */
        border-radius: 2.667vw;
        box-shadow: 0.267vw 0.4vw 0.133vw 0.4vw #f6f6f6;
    }
    .homeList ul li > img{
        border-radius: 2.667vw;
        margin-bottom: 3.733vw;
        width: 100%;
        height: 40vw;
    }
     .homeList ul >li p{
         font-size: 4vw;
         color: #000;
     }
     .btn .btn-l,.btn-r{
         display:inline-block;
         width: 12vw;
         height: 5.333vw;
         text-align: center;
         line-height: 5.333vw;
         font-size: 2.667vw;
         margin: 3.2vw 0 3.467vw 2.667vw;
     }
     .btn .btn-l{
         border: 0.267vw solid #FFC237;
         border-radius: 0.533vw;
         color:#FFC237 ;
         margin-right: 1.867vw;
     }
     .btn .btn-r{
         border: 0.267vw solid #F58314;
         border-radius: 0.533vw;
         color:#F58314 ;
     }
     .money{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4.8vw;
           padding: 0 2.667vw;
     }
    .money .money-top{
         color: #000;
        font-size: 3.467vw;
    }
    .money .money-top span {
        color: #FF3413;
        font-size: 4.8vw;
    }
    .money .money-bottom img{
        width: 2.667vw;
        height: 2.667vw;
        background-size: 100%;
        vertical-align :bottom;
        margin: 0;
    }
    .money .money-bottom span{
        color: #B4B7C3;
        font-size: 2.667vw;
        margin-left: 1.333vw;
    }
    .txt{
        color: #B4B7C3;
        font-size: 2.667vw;
        margin:0 0 2.667vw 4vw;
    }

</style>
