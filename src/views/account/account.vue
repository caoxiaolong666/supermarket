<template>
  <div class="account">
      <div class="bj">
          <p class="flilt">可用余额 <span>资金明细</span></p>
          <p>2005.00</p>
          <p>冻结金额：0</p>
      </div>
      <div class="chz">
          <div>
              <img src="@/assets/img/home/APP.png" alt="">
              <span>余额充值</span>
          </div>
          <img src="@/assets/img/home/gd@2x.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .account{
        background-color: #f6f7fa;
        height: 100vh;
    }
    .bj{
        width: 100%;
        height: 50.667vw;
        background-color: #3d7eff;
    }
    .bj{
        text-align: center;
        color: #fff;
    }
    .bj .flilt{
        position: relative;
        width: 100%;
        height: 4vw;
        padding-top: 9.333vw;
        font-size: 4vw;
    }
    .bj p:nth-child(1) span{
        position: absolute;
        display: block;
        top: 9.333vw;
        right: 0;
        margin-right:4vw ;
    }
    .bj p:nth-child(2){
        padding-top: 9.333vw;
        font-size: 9.6vw;
    }
    .bj p:nth-child(3){
        padding-top: 10.667vw;
        font-size: 3.467vw;
    }
    .chz{
        width: 92vw;
        height: 18.667vw;
        background-color: #fff;
        margin-left:4vw ;
        padding: 0 4vw;
        box-sizing: border-box;
        margin-top: 2.667vw;
        border-radius: 2.133vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chz>div{
        display: flex;
        align-items: center;
    }
    .chz>div img{
        width: 10.667vw;
        height: 10.667vw;
        margin-right: 4.533vw;
    }
    .chz>img{
        width: 2vw;
        height: 3.733vw;
    }
</style>
