<!--  -->
<template>
 <div class="messageDeilter">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">消息详情</div>
     </div>
     <div class="contant">
         <div class="contant-top">新服上线, 《凡人修仙》新服即将震撼开启,百万奖金等你来拿!</div>
         <div class="contant-center">2020.8.24 周五 08:30</div>
         <div class="contant-bottom">尊敬的会员,您好! 你关注的游戏凡人修仙》新服即将开启,如果您有任何疑问,请与我们联系,在个人中心联系客服咨询。祝您游戏愉快!</div>
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
}
.contant-center{
     font-size: 3.2vw;
    color: #A1A6B7;
    margin: 5.6vw 0 5.333vw;
}
.contant-bottom{
     font-size: 3.467vw;
    color: #83899D;
    line-height: 5.333vw;

}
</style>
