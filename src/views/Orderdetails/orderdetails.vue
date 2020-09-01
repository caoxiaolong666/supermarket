<template>
  <div class="order">
        <div class="ts">
            如出现被挤号、顶号、账号描述不符、信誉积分不足的情况，请及时截图保存，投诉时则需要此截图作为凭证上传
        </div>
        <div class="bj">
            <h5>订单进行中...</h5>
            <p>剩余时间3小时4分钟</p>
            <div class="yxsj">
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
                <div>安卓/快速上号</div><div>上号教程</div>
            </div>
            <div class="ddxq">
                <div class="xq_top">
                    <div>订单详情</div><img src="" alt="">
                </div>
                <div class="dd_sj">
                    <img src="@/assets/img/home/APP.png" alt="">
                    <div>
                        <p>雷锋禁言：快速上号 五天包天V4至我们是一家人</p>
                        <p>QQ安卓/QQ账号</p>
                        <p><span>角色名：野区霸主</span><span>X3小时</span></p>
                    </div>
                </div>
                <div class="dd_yj">
                    <div><span>无押金</span><span>3小时起租</span></div>
                    <div>投诉退款</div>
                </div>
                <div class="dd_list">
                    <div class="list_top lists">
                        <div>租金(元)</div><div>¥18.8</div>
                    </div>
                    <div class="list_zj lists">
                        <div><span>押金(元)</span><span class="th">订单结束后退还</span></div><div>¥18.8</div>
                    </div>
                    <div class="list_btm">
                        <span>实付总额含压金)</span><span class="sfje">¥18.8</span>
                    </div>
                </div>
            </div>
            <div class="fkxx">
                <div class="jsm">
                    <div>解锁码</div>
                    <div>520dvgdsfdsfsfasf</div>
                    <div class="dd_fx">
                        <button>分享</button>
                        <button>复制</button>
                    </div>
                </div>
                <div>
                    <div>订单编号</div>
                    <div>339257953</div>
                </div>
                <div>
                    <div>开始时间</div>
                    <div>2020-08-23 23:52:58</div>
                </div>
                <div>
                    <div>结束时间</div>
                    <div>2020-08-23 23:52:58</div>
                </div>
                <div>
                    <div>商品ID</div>
                    <div>7335456</div>
                </div>
                <div>
                    <div>付款时间</div>
                    <div>2020-08-23 23:52:58</div>
                </div>
            </div>
        </div>
    <div class="footer">
         <div class="card-select">
             我要续租
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
        height: 32vw;
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
        padding: 25.333vw 4vw 14.667vw;
        box-sizing: border-box;

    }
    .ys_bttom .sh{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4vw;
        box-sizing: border-box;
        height: 810px;
        width: 100%;
        font-size: 4vw;
        background-color: #fff;
        border-radius: 2.133vw;
    }
    .ys_bttom .sh div:nth-child(2){
        width: 18.4vw;
        height: 7.733vw;
        border-radius: 3.867vw;
        background-color: rgb(255, 245, 236);
        color: rgb(249, 79, 56);
        line-height: 7.733vw;
        text-align: center;
    }
    .ddxq{
        width: 100%;
        height: 82.667vw;
        background-color: #fff;
        padding: 5.333vw 4vw 0;
        box-sizing: border-box;
        border-radius: 2.133vw;
        margin-top: 2.667vw;
        margin-bottom:2.667vw ;
    }
    .xq_top{
        font-size: 4.267vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        font-size: 3.467vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .dd_sj div p:nth-child(2){
        font-size: 3.2vw;
        color: rgb(131, 137, 157);
    }
    .dd_sj div p:nth-child(3){
        font-size: 3.2vw;
        display: flex;
        justify-content: space-between;
        color: rgb(131, 137, 157);
    }
    .dd_yj{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.667vw;
    }
    .dd_yj div:nth-child(1) span{

        border-radius: 2.667vw;
        background-color: rgb(235, 238, 246);
        font-size: 2.933vw;
        padding:0.8vw 2.667vw;
        margin-right: 2.133vw;
    }
    .dd_yj div:nth-child(2){
        height: 8vw;
        width: 20vw;
        border-radius: 2.133vw;
        border:0.267vw solid rgb(161, 166, 183);
        font-size: 3.733vw;
        color: rgb(131, 137, 157);
        text-align: center;
        line-height: 8vw;
    }
    .dd_list{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-top:6.667vw ;
        width: 100%;
        height: 22.667vw;
    }
    .dd_list>div{
        font-size: 3.467vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dd_list .th{
        font-size: 3.2vw;
        margin-left:4.267vw ;
    }
    .lists div:nth-child(1){
        color: rgb(131, 137, 157);
    }
    .sfje{
        color: rgb(249, 79, 56);
        font-size: 4.8vw;
    }
    .fkxx{
        width: 100%;
        height: 77.333vw;
        padding:7.2vw 4vw 9.067vw;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 2.133vw;
        font-size: 3.467vw;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .fkxx>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fkxx>div div:nth-child(1){
        color: rgb(131, 137, 157);
    }
    .jsm{
        position: relative;
        width: 100%;
        padding-bottom: 10vw;
    }
    .dd_fx{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 37.333vw;
        height: 6.667vw;

    }
    .dd_fx button{
        width: 15.733vw;
        height: 6.133vw;
        border-radius: 1.067vw;
        border:0.267vw solid rgb(61, 166, 255);
        outline-style: none;
        font-size: 2.933vw;
        background-color: #fff;
        color: rgb(61, 166, 255);
        float:right;
    }
    .dd_fx button:nth-child(2){
        margin-right: 2.133vw;
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
