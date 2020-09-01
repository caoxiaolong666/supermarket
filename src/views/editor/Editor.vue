<!--  -->
<template>
  <div class="install">
    <div class="header">
      <img src="@/assets/img/goods/back@3x.png" alt />
      <div class="header-title">设置</div>
    </div>
    <div class="myShop-bj">
      <div class="card">
        <div class="card-edit">
          <img src="@/assets/img/home/APP.png" alt />
          <div class="card-btn">更换头像</div>
        </div>
      </div>
      <div class="card">
        <ul>
          <li>
            <p>昵称</p>
            <div class="li-medlie" @click="$router.push('/nickname')">
              <span>小仙女</span>
              <img src="@/assets/img/center/sz-gd@3x.png" alt />
            </div>
          </li>
          <li>
            <p>性别</p>
            <div class="li-medlie" @click="isShow = true">
              <span>女</span>
              <img src="@/assets/img/center/sz-gd@3x.png" alt />
            </div>
          </li>
          <li>
            <p>手机号</p>
            <div class="li-medlie">
              <span>未绑定</span>
              <img src="@/assets/img/center/sz-gd@3x.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="tips" v-if="isShow">
      <div class="tips-contant">
        <div class="tips-top">
          <div class="sxe">男</div>
          <div>女</div>
        </div>
        <div class="tips-center">
          <div class="tips-btn">取消</div>
          <div class="tips-btn editorActive" @click=" isShow = false">保存</div>
        </div>
      </div>
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
.install {
  height: 100vh;
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
.install ul {
  margin-top: 9.6vw;
}
.install ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9.6vw;
}
.install ul li p {
  color: #000;
  font-size: 4vw;
}
.install ul li img {
  width: 2.667vw;
  height: 4vw;
}
.myShop-bj {
  height: 100%;
  background-color: #f6f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.667vw;
}
.card {
  width: 92vw;
  background-color: #fff;
  border-radius: 3.2vw;
  margin-top: 2.133vw;
  padding: 0 4vw;
}
.card-edit {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12vw 0 4vw;
}
.card-edit img {
  width: 20.267vw;
  height: 20.267vw;
  border-radius: 50%;
}
.card-btn {
  width: 22.4vw;
  height: 7.733vw;
  border-radius: 3.467vw;
  background-color: #ebeef6;
  color: #000;
  margin-top: 3.2vw;
  font-size: 3.467vw;
  text-align: center;
  line-height: 7.733vw;
}
.install ul li span {
  color: #d1d3db;
  font-size: 4vw;
  margin-right: 3.467vw;
}
.li-medlie {
  display: flex;
  align-items: center;
}
/*  */
.tips {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tips .tips-contant {
  width: 78.133vw;
  height: 56vw;
  background-color: #ffffff;
  border-radius: 2.667vw;
}
 .tips-top{
    text-align: center;
    margin: 11.467vw 0 9.333vw ;
    font-size: 4.8vw;
    color: #000;
}

 .tips .tips-center{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.tips-btn{
    width: 32vw;
    height: 10.667vw;
    border-radius: 2.667vw;
    border: 0.133vw solid #A1A6B7;
    font-size: 4.267vw;
    color: #A1A6B7;
    text-align: center;
    line-height: 10.667vw;
}
.sxe{
    margin-bottom: 6.933vw;
}
.editorActive{
    background-color: #3D7EFF;
    color: #fff;
}
</style>
