<!--  -->
<template>
 <div class="bind">
       <div class="header">
        <img src="@/assets/img/login/back@3x.png" alt />
        <div class="header-title">手机绑定</div>
      </div>
      <div class="contant">
            <div class="login-input">
            <input type="text" placeholder="请输入手机号" />
            </div>
            <div class="login-input">
            <input type="password" placeholder="请输入短信验证码" />
            <div class="login-input-code">获取验证码</div>
            </div>
       </div>
        <div class="btn">提交</div>
 </div>
</template>

<script>
export default {
  name: 'bind',
  data () {
    return {
    }
  }
}
</script>

<style  scoped >
.bind{
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
.contant {
  display: flex;
  flex-direction: column;
  padding: 0 8.533vw;
  margin: 8.533vw 0 13.333vw;
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
.btn{
    width: 56vw;
    height: 12vw;
    border-radius: 3.2vw;
    background-color: #3D7EFF;
    font-size: 4.267vw;
    color: #fff;
    text-align: center;
    line-height: 12vw;
    margin: 0 auto;
}
.login-input-code{
    font-size: 3.467vw;
    color:#588FFE ;
}
</style>
