<!--  -->
<template>
 <div class="charge">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">我的消息</div>
     </div>
     <div class="contant">
         <ul>
             <li>
                 <div class="li-top">
                    <div class="li-left">
                        <img src="@/assets/img/message/xtxx@3x.png" alt="">
                        <span>系统消息</span>
                    </div>
                     <div class="li-btn">未读</div>
                 </div>
                 <p>你的VIP即将过期,请将续费保证游戏的正常</p>
             </li>
               <li>
                 <div class="li-top">
                    <div class="li-left">
                        <img src="@/assets/img/message/hdtz@3x.png" alt="">
                        <span>活动通知</span>
                    </div>
                     <div class="li-btn">未读</div>
                 </div>
                 <p>你的VIP即将过期,请将续费保证游戏的正常</p>
             </li>
               <li>
                 <div class="li-top">
                    <div class="li-left">
                        <img src="@/assets/img/message/wdxx@3x.png" alt="">
                        <span>我的消息</span>
                    </div>
                     <div class="li-btn">未读</div>
                 </div>
                 <p>你的VIP即将过期,请将续费保证游戏的正常</p>
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
      isShow: true
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
.contant ul{
    padding: 0 4vw;
}
.contant ul li{
    /* height: 26.667vw; */
    border-bottom: 0.133vw solid #e9e5e5;

}
.contant ul li p{
    font-size:3.467vw;
    color: #D1D3DB;
    margin-bottom: 5.333vw;
}
.li-top{
    display: flex;
    justify-content: space-between;
    margin: 5.6vw 0 5.333vw;
}
.li-btn{
    width: 18.667vw;
    height: 8vw;
    border-radius: 3.2vw;
    font-size: 2.933vw;
    color: #FA6E5C;
    line-height: 8vw;
    text-align: center;
    background-color: #FFF5EC;
}
.li-left {
    display: flex;
    align-items: center;

}
.li-left img{
    width: 5.333vw;
    height: 5.333vw;
}
.li-left span{
    font-size:4.267vw;
    color: #000;
    margin-left: 3.2vw;
}
</style>
