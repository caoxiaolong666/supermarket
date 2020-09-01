<!--  -->
<template>
 <div class="frozen">
     <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">资金冻结明细</div>
     </div>
     <ul>
         <li>冻结原因</li>
         <li>冻结金额</li>
         <li>冻结时间</li>
         <li>操作</li>
     </ul>
     <div class="contant">
         <div class="contant-top">交易违规</div>
         <div class="contant-center">500</div>
         <div class="contant-top">7</div>
         <div class="contant-btn">申诉</div>
     </div>
      <div class="contant">
         <div class="contant-top">交易违规</div>
         <div class="contant-center">500</div>
         <div class="contant-top">7</div>
         <div class="contant-btn">申诉</div>
     </div>
      <div class="contant">
         <div class="contant-top">交易违规</div>
         <div class="contant-center">500</div>
         <div class="contant-top">7</div>
         <div class="contant-btn">申诉</div>
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
.frozen ul{
    display: flex;
    justify-content: space-between;
    padding: 0 4vw;
    align-items: center;
  border-bottom: 0.133vw solid #e9e5e5;

}
.frozen ul li{
    font-size: 3.733vw;
    color:#9298A9 ;
    padding: 5.333vw 0;
}
.contant{
     display: flex;
    justify-content: space-between;
    padding: 0 4vw;
    align-items: center;
    font-size: 3.733vw;
    height: 13.333vw;
}
.contant-top{
    color: #000;
}
.contant-center{
    color: #FB8C7D;
}
.contant-btn{
    border: 0.267vw solid #6C9DFF ;
    width: 15.733vw;
    height: 7.733vw;
    color: #6C9DFF;
    text-align: center;
    line-height: 7.733vw;
    border-radius: 2.133vw;
}
</style>
