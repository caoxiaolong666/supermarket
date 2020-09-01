<template>
  <div class="order">
        <div class="bj">
            <h5>下单成功</h5>
            <p>恭喜您下单成功请按照下面流程进行上号</p>
            <div class="yxsj">
                <div>
                    <div class="ksyx">开始游戏吧！</div>
                </div>
                <div class="zs_top">
                    <div>开始时间</div><div>结束时间</div>
                </div>
                <div class="zs_zj">
                    <div>23:52</div><img src="" alt=""><div class="cover">3小时</div><img src="" alt=""><div>23:52</div>
                </div>
                <div class="zs_bttom">
                    <div>2020.8.24</div><div>2020.8.27</div>
                </div>
            </div>
        </div>
        <div class="ys_bttom">
            <div class="sh">
                <div class="sh_top">
                    <div>上号步骤</div><div>上号教程</div>
                </div>
                <div class="sh_bom">
                    <div>
                        <img src="@/assets/img/order/ddxq@3x.png" alt="">
                        <p>进入<br>订单详情</p>
                    </div>
                    <div>
                        <img src="@/assets/img/order/qdyx@3x.png" alt="">
                        <p>点击<br>启动游戏</p>
                    </div>
                    <div>
                        <img src="@/assets/img/order/zddl@3x.png" alt="">
                        <p>启动游戏<br>自动登录</p>
                    </div>
                </div>
            </div>
            <div class="ddxq">
                <div class="xq_top">
                    <div>订单详情</div><img src="@/assets/img/order/gd@3x.png" alt="">
                </div>
                <div class="dd_sj">
                    <img src="@/assets/img/home/APP.png" alt="">
                    <div>
                        <p>王者荣耀</p>
                        <p>雷锋禁言：快速上号 五元包天 V4 至尊宝 教廷特使</p>
                    </div>
                </div>
                <div class="dd_yj">
                    <div><span>QQ安卓</span><span>QQ账号</span></div>
                </div>
                <div class="bzd">
                    <div><span>上号方式</span><span>快速上号</span></div>
                    <div><span>订单编号</span><span>339257953</span></div>
                </div>
            </div>

        </div>
    <div class="footer">
         <div class="card-select">
             订单详情
         </div>
         <div class="footer-btn">启动游戏</div>
     </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .ts{
        width: 100%;
        height: 13.333vw;
        background-color: rgb(255, 245, 236);
        font-size: 2.933vw;
        line-height: 5.6vw;
        color: rgb(249, 79, 56);
        padding:1.333vw 4vw 0;
        box-sizing: border-box;
    }
    .bj{
        position: relative;
        width: 100%;
        height: 34.667vw;
        color: #fff;
        background-color: #3d7eff;
        padding: 0 4vw;
        box-sizing: border-box;
    }
    .bj h5{
        padding-top: 6vw;
        font-size: 6.4vw;
        font-weight: 400;
    }
    .bj p{
        padding-top: 3.333vw;
        font-size: 3.467vw;
    }
    .bj .yxsj{
        position: absolute;
        top: 25.333vw;
        left: 50%;
        margin-left: -46vw;
        width: 92vw;
        height: 40vw;
        background-color: #fff;
        color:#000;
        border-radius: 2.133vw;
        padding: 5.867vw 4vw 5.6vw;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .bj .yxsj>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .zs_top{
        margin-top:2.667vw ;
    }
    .bj .yxsj .ksyx{
        position: absolute;
        top: 2.667vw;
        left: 4vw;
        width: 21.2vw;
        height: 6.667vw;
        background-color: #1bd989;
        border-top-right-radius:3.2vw ;
        border-bottom-left-radius:3.2vw ;
        text-align: center;
        line-height: 6.667vw;
        color: #fff;
        font-size: 3.467vw;
        text-align: center;
    }
    .zs_top{
        padding: 0 2.667vw;
    }
    .zs_top div{
        width: 14.4vw;
        height: 6.133vw;
        background-color: rgb(246, 247, 250);
        font-size: 2.933vw;
        border-radius: 1.067vw;
        text-align: center;
        line-height: 6.133vw;
    }
    .zs_zj div{
        font-size: 8vw;
    }
    .zs_zj img{
        width: 6.133vw;
        height: 1.467vw;
    }
    .zs_zj .cover{
        font-size: 3.467vw;
    }
    .zs_bttom {
        font-size: 3.2vw;
        color: rgb(131, 137, 157);
        padding: 0 2.667vw;
    }
    .ys_bttom{
        background-color: #f6f7fa;
        padding: 33.333vw 4vw 0.667vw;
        box-sizing: border-box;
    }
    .ys_bttom .sh{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        padding: 5.333vw 4vw 5.067vw;
        box-sizing: border-box;
        height: 42.667vw;
        width: 100%;
        font-size: 4vw;
        background-color: #fff;
        border-radius: 2.133vw;
    }
    .sh .sh_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sh .sh_bom{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .sh_bom>div{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .sh_top div:nth-child(1){
        font-size: 4.267vw;
    }
    .sh_top div:nth-child(2){
        font-size: 3.2vw;
        width: 18.4vw;
        height: 7.733vw;
        background-color: rgb(255, 245, 236);
        color: rgb(249, 79, 56);
       border-radius: 3.867vw;
       line-height: 7.733vw;
       text-align: center;
    }
    .sh_bom>div{
        width: 13.333vw;
        height: 17.333vw;
        font-size: 3.2vw;
    }
    .sh_bom>div img{
        width: 6.667vw;
        height: 6.667vw;
    }

    .ddxq{
        width: 100%;
        height: 71.333vw;
        background-color: #fff;
        padding: 5.333vw 4vw 0;
        box-sizing: border-box;
        border-radius: 2.133vw;
        margin-top: 2.667vw;
        margin-bottom:16vw ;
    }
    .xq_top{
        font-size: 4.267vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
    }
    .xq_top img{
        width: 1.6vw;
        height: 2.933vw;
    }
    .dd_sj{
        margin-top: 8vw;
        display: flex;
        justify-content: space-between;
    }
    .dd_sj img{
        width: 17.067vw;
        height: 17.067vw;
        border-radius: 2.667vw;
    }
    .dd_sj div{
        width: 62.667vw;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
    .dd_sj div p:nth-child(1){
        font-size: 4.267vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        font-weight: 600;
    }
    .dd_sj div p:nth-child(2){
        font-size: 3.467vw;
        color: rgb(131, 137, 157);
    }

    .dd_yj{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5.333vw;
    }
    .dd_yj div:nth-child(1) span{

        border-radius: 2.667vw;
        background-color: rgb(235, 238, 246);
        font-size: 2.933vw;
        padding:0.8vw 2.667vw;
        margin-right: 2.133vw;
        color:rgb(61, 166, 255);
    }

    .sfje{
        color: rgb(249, 79, 56);
        font-size: 4.8vw;
    }

   .bzd{
       width: 100%;
       height: 13.333vw;
       font-size: 3.467vw;
       margin-top: 6.667vw;
       display: flex;
       flex-flow: column;
       justify-content: space-between;
   }
   .bzd>div{
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
    .bzd>div span:nth-child(1){
        color:rgb(131, 137, 157);
    }
    .order{
        height: 100%;
        background-color: #f6f7fa;
    }
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.333vw;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
}
.card-select{
    width: 42.667vw;
    height: 10.667vw;
    border-radius: 3.2vw;
    background-color: #FF8F20;
    font-size: 4.8vw;
    color: #fff;
    text-align: center;
    line-height: 11.733vw;
}
</style>
