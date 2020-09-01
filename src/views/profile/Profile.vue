<template>
  <div class="profile">
    <div class="profile-bj">
      <div class="profile-contant">
         <div class="right-img">
           <img src="@/assets/img/home/APP.png" alt />
             <div class="right-m">
               爱玩租号1214
               <span>已实名</span>
             </div>
         </div>
         <div class="account">
           <div class="account-top">
            <div class="tit-l">我的账户</div>
             <div class="tit-r">
              <img src="@/assets/img/profile/gd@3x.png" alt />
             </div>
          </div>
           <div class="account-bottom">
             <div class="num">
               <p>100.0</p>
               <span>可用余额</span>
             </div>
             <div class="line"></div>
              <div class="num">
               <p>100.0</p>
               <span>冻结资金</span>
             </div>
           </div>
         </div>
        <div class="account">
          <div class="account-top">
            <div class="tit-l">我的租号账单</div>
             <div class="tit-r">
              <img src="@/assets/img/profile/gd@3x.png" alt />
           </div>
          </div>
          <ul>
            <li>
              <img src="@/assets/img/profile/dfk@2x.png" alt />
              <div>代付款</div>
            </li>
            <li>
              <img src="@/assets/img/profile/zlz@2x.png" alt />
              <div>租聘中</div>
            </li>
            <li>
              <img src="@/assets/img/profile/ywc@2x.png" alt />
              <div>已完成</div>
            </li>
            <li>
              <img src="@/assets/img/profile/sh@2x.png" alt />
              <div>售后</div>
            </li>
          </ul>
        </div>
        <div class="account">
        <div class="account-top">
          <div class="tit-l">常用工具</div>
        </div>
        <ul>
          <li>
            <img src="@/assets/img/profile/kf@2x.png" alt />
            <div>官方客服</div>
          </li>
          <li>
            <img src="@/assets/img/profile/bz@2x.png" alt />
            <div>帮助中心</div>
          </li>
          <li>
            <img src="@/assets/img/profile/sz@2x.png" alt />
            <div>设置</div>
          </li>
          <li>
            <img src="@/assets/img/profile/sc@2x.png" alt />
            <div>收藏</div>
          </li>
          <li>
            <img src="@/assets/img/profile/ls@2x.png" alt />
            <div>历史浏览</div>
          </li>
          <li>
            <img src="@/assets/img/profile/xy@2x.png" alt />
            <div>用户协议</div>
          </li>
          <li>
            <img src="@/assets/img/profile/sm@2x.png" alt />
            <div>实名认证</div>
          </li>
          <li>
            <img src="@/assets/img/profile/xx@2x.png" alt />
            <div>我的消息</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <main-tab-bar></main-tab-bar>
  </div>

</template>

<script>
// @ is an alias to /src
import MainTabBar from '@/components/content/mainTabbar/MainTabbar'

export default {
  name: 'Profile',
  components: {
    MainTabBar
  }
}
</script>
<style scoped>
  .profile{
    width: 100%;
    /* height: 100vh; */
    background-color:#ebeef7;
  }
  .profile-bj{
    height: 100%;
    background: url(../../assets/img/profile/bj@2x.png) no-repeat top center;
    background-size: 100%;
    padding: 18.667vw 5.333vw 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-contant{
    width: 100%;
    height: 100%;
  }
.right-img {
  display: flex;
  align-items: center;
  width: 100%;
}
.right-img img {
  width: 18.667vw;
  height: 18.667vw;
  border-radius: 50%;
  border: 0.267vw solid #ffffff;
}
.right-img .right-m {
  font-size: 4.8vw;
  color: #ffffff;
  margin-left: 3.467vw;
  display: flex;
  flex-direction: column;
  font-weight: normal;
}
.right-img .right-m span {
  font-size: 2.933vw;
  color: #ffffff;
  margin-top: 1.867vw;
}
.account {
  width: 100%;
  background-color: #fff;
  border-radius: 2.133vw;
  padding: 4vw 4vw 0;
  box-sizing: border-box;
  margin-top: 6vw;
  margin-bottom:2.667vw;
}
.account-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 9.867vw;
}
.tit-r img {
  width: 3.333vw;
  height: 5.333vw;
}
.tit-l {
  font-size: 4.267vw;
  color: #000;
}
.tit-r {
  width: 5.333vw;
  height: 5.333vw;
}
.account-bottom {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vw;
}
.line {
  width: 0.4vw;
  height: 8.533vw;
  background-color: rgb(238, 238, 238);
}
.num {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.num p {
  font-size: 5.6vw;
  color: #000;
}
.num span {
  font-size: 3.2vw;
  color: #b2b5c1;
  margin: 3.2vw 0 6.933vw;
}
.account ul {
  height: 100%;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.account ul li {
  text-align: center;
  width: 24%;
}
.account ul li img{
  width: 10.667vw;
  height: 10.667vw;
}
.account ul li > div {
  font-size: 3.2vw;
  color: #000;
  margin: 3.2vw 0 7.2vw;
}
</style>
