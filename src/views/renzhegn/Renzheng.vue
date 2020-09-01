<!--  -->
<template>
 <div class="review">
      <div class="review">
      <div class="header">
        <img src="@/assets/img/login/back@3x.png" alt />
        <div class="header-title">实名认证</div>
      </div>
      <div class="contiar" v-if="isShow">
          <div class="contant">
        <div class="login-input">
          <input type="text" placeholder="请输入真实姓名" />
        </div>
        <div class="login-input">
          <input type="password" placeholder="请输入身份证号码" />
        </div>
        </div>
        <div class="footr">
        <div class="footr-title">注意事项</div>
        <div class="footr-img">
            <ul>
                <li>1.身份证信息只能提交一次，不能随意修改，请慎重填写。</li>
                <li>2.照片,文字清晰可辨。</li>
                <li>3.证件持有人必须年满十八周岁。</li>
            </ul>
        </div>
        </div>
       <div class="btn">提交</div>
      </div>
      <div class="success" v-if="!isShow">
          <img src="@/assets/img/renzheng/tjcg@3x.png" alt="">
          <div class="title">提交成功 </div>
          <p>正在审核中,请稍后...</p>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'review',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style  scoped >
.review{
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
.footr{
padding: 0 8.8vw;
}
.footr-title{
    font-size: 4.8vw;
    color: #000;
    margin-bottom: 6.133vw;
    font-weight: 700;
}
.footr-img ul {
  margin-bottom: 16.8vw;
}
.footr-img ul li{
    font-size: 3.467vw;
    color: #000;
    height: 10vw;
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
.success{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
}
.success img{
    width: 20.267vw;
    height: 20.267vw;
    margin: 20.267vw 0 6.933vw;
}
.title{
    font-size: 5.6vw;
    color: #000;
    margin-bottom: 3.733vw;
}
.success p{
    font-size: 4vw;
    color: #000;
}
</style>
