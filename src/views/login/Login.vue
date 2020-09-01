<!--  -->
<template>
  <div>
    <div class="login" v-if="isShow">
      <div class="header">
        <img src="@/assets/img/login/back@3x.png" alt />
        <div class="header-title">登录</div>
      </div>
      <div class="contant">
        <div class="tips">账号或者密码错误</div>
        <div class="login-input">
          <input type="text" placeholder="请输入账号" />
          <img src="@/assets/img/login/x@3x.png" alt />
        </div>
        <div class="login-input">
          <input type="password" placeholder="请输入密码" />
          <div>忘记密码?</div>
        </div>
        <div class="change">
          <div @click="registerClick">注册新账号</div>
          <div class="code" @click="codeClick">
            验证码登录
            <img src="@/assets/img/login/gd@3x.png" alt />
          </div>
        </div>
        <div class="btn">登录</div>
      </div>
      <div class="footr">
        <div class="footr-title">第三方账号登录</div>
        <div class="footr-img">
          <img src="@/assets/img/login/QQ@3x.png" alt />
          <img src="@/assets/img/login/wx@3x.png" alt />
        </div>
      </div>
    </div>
    <div class="code" v-else>
      <div class="header">
        <img src="@/assets/img/login/back@3x.png" alt />
        <div class="header-title">验证码登录</div>
      </div>
      <div class="contant">
        <div class="tips">账号或者密码错误</div>
        <div class="login-input">
          <input type="text" placeholder="请输入手机号" />
          <!-- <img src="@/assets/img/login/x@3x.png" alt /> -->
        </div>
        <div class="login-input">
          <input type="text" placeholder="请输入验证码" />
          <div>获取验证码</div>
        </div>
        <div class="btn" style="marginTop:1rem;">确定登录</div>
      </div>
      <div class="footr">
        <div class="footr-title">第三方账号登录</div>
        <div class="footr-img">
          <img src="@/assets/img/login/QQ@3x.png" alt />
          <img src="@/assets/img/login/wx@3x.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    registerClick () {
      this.$router.push('/register')
    },
    codeClick () {
      this.isShow = false
    }
  }
}
</script>

<style scoped >
.login {
  height: 100%;
  /* position: relative; */
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
.contant {
  display: flex;
  flex-direction: column;
  padding: 0 8.533vw;
}
.tips {
  margin: 8.533vw 0 4.533vw;
  font-size: 3.2vw;
  color: #fe6767;
}
.login-input {
  width: 82.667vw;
  height: 12vw;
  border-radius: 2.133vw;
  background-color: #f1f4fa;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 3.467vw;
}
.login-input input {
  width: 75%;
  height: 100%;
  border: none;
  background-color: #f1f4fa;
  text-indent: 1em;
  border-radius: 2.133vw;
  color: #000;
  font-size: 4.8vw;
  outline: none; /*清除选中效果的默认蓝色边框 */
  -webkit-appearance: none; /*清除浏览器默认的样式 */
}
.login-input img {
  width: 5.333vw;
  height: 5.333vw;
  margin: 0 auto;
}
.login-input div {
  font-size: 3.467vw;
  color: rgb(131, 137, 159);
}
.change {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.733vw;
  color: #000;
  margin: 4.533vw 0 13.333vw;
}
.change .code {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.change .code img {
  margin-left: 4vw;
  height: 4vw;
}
.btn {
  width: 56vw;
  height: 12vw;
  border-radius: 2.133vw;
  background-color: #3d7eff;
  text-align: center;
  line-height: 12vw;
  margin: 0 auto;
  font-size: 4.267vw;
  color: #fff;
}
.footr {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.footr-title {
  font-size: 3.2vw;
  position: relative;
  margin: 34.4vw 0 7.733vw;
  color: #aaaebb;
}
.footr-title::after {
  content: "";
  position: absolute;
  bottom: 1.333vw;
  left: 27.467vw;
  display: inline-block;
  width: 11.333vw;
  height: 0.4vw;
  background-color: #aaaebb;
}
.footr-title::before {
  content: "";
  position: absolute;
  bottom: 1.333vw;
  right: 27.467vw;
  display: inline-block;
  width: 11.333vw;
  height: 0.4vw;
  background-color: #aaaebb;
}
.footr-img img {
  width: 12vw;
  height: 12vw;
  margin: 0 4.667vw;
}
.chenckbox {
  display: flex;
  font-size: 2.933vw;
  align-items: center;
  margin: 5.867vw auto;
}
.chenckbox input {
  width: 4vw;
  height: 4vw;
  margin-right: 1.867vw;
  color: #3d7eff;
}
.chenckbox > p {
  color: #aaaebb;
}
.chenckbox > p span {
  color: #000;
}
</style>
