<!--  -->
<template>
  <div class="nickname">
    <div class="header">
      <img src="@/assets/img/goods/back@3x.png" alt />
      <div class="header-title">昵称</div>
      <div class="header-btn">保存</div>
    </div>
   <div class="nickname-contant">
        <div class="nickname-input">
        <input type="text" placeholder="请输入名称">
    </div>
    <p>设置后,其他人将看到你的昵称</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'myShop',
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped >
.nickname {
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
.header-btn{
   position: absolute;
   right: 4vw;
   top: 50%;
   transform: translateY(-50%);
   font-size: 3.733vw;
   color: #000;
}
.nickname-contant{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nickname-contant input{
  background-color: #F1F4FA;
  border: none;
  border-radius: 3.2vw;
  color: #000;
  font-size: 3.467vw;
  text-indent: 2em;
    outline:none;  /*清除选中效果的默认蓝色边框 */
    -webkit-appearance:none;  /*清除浏览器默认的样式 */
    width: 100%;
    height: 100%;
}
.nickname-input{
    width: 82.667vw;
    height: 12vw;
    border-radius: 3.2vw;
    background-color: #F1F4FA;
    margin: 6.667vw  4.8vw;
}
.nickname p {
  color: #000;
  font-size: 3.2vw;
}
</style>
