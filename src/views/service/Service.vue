<!--  -->
<template>
 <div class="service">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">官方客服</div>
     </div>
     <div class="contant">
         <div class="service-bj">
              <div class="contant-top">常见问题</div>
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
                     <li>
                        <p>买的游戏点卡用不了怎么回事?</p>
                        <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                    </li> <li>
                        <p>买的游戏点卡用不了怎么回事?</p>
                        <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                    </li> <li>
                        <p>买的游戏点卡用不了怎么回事?</p>
                        <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                    </li> <li>
                        <p>买的游戏点卡用不了怎么回事?</p>
                        <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                    </li> <li>
                        <p>买的游戏点卡用不了怎么回事?</p>
                        <!-- <img src="@/assets/img/center/sz-gd@3x.png" alt=""> -->
                    </li>
                </ul>
                 <div class="service-btn">客服</div>
         </div>

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
.service{
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
.contant{
    height: 100%;
    padding: 2.667vw 4vw;
    background-color: #F6F7FA;
}
.service-bj{
    height: 100%;
    background-color: #fff;
     padding: 8vw 4vw 0;
     border-radius: 3.2vw;
     position: relative;
}
.contant-top{
    font-size: 4.533vw;
    color: #000;
    line-height: 8vw;
    /* margin-top: 6.667vw; */
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
    margin: 9.6vw 0;
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
.service-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16vw;
    height: 16vw;
    background-color: #3D7EFF;
    border-radius: 50%;
    font-size: 4vw;
    text-align: center;
    line-height: 16vw;
    color: #fff;
}
</style>
