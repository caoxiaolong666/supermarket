<!--  -->
<template>
 <div class="install">
      <div class="header">
        <img src="@/assets/img/goods/back@3x.png" alt />
        <div class="header-title">设置</div>
     </div>
       <div class="myShop-bj" >
       <div class="card">
           <ul>
                <li>
                    <p>个人资料</p>
                    <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                </li>
                 <li>
                    <p>手机号绑定</p>
                    <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                </li>
                 <li>
                    <p>修改密码</p>
                    <img src="@/assets/img/center/sz-gd@3x.png" alt="">
                </li>
            </ul>
       </div>
     </div>

 </div>
</template>

<script>
export default {
  name: 'myShop',
  data () {
    return {
    }
  }
}
</script>

<style scoped >
.install{
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
.install ul{
    margin-top: 9.6vw;
}
.install ul li{
    display: flex;
  align-items: center;
  justify-content: space-between;
    margin-bottom: 9.6vw;
}
.install ul li p{
    color: #000;
    font-size: 4vw;
}
.install ul li img{
    width: 2.667vw;
    height: 4vw;
    background-size: 100%;
}
.myShop-bj{
  height: 100%;
  background-color: #F6F7FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.667vw;
}
.card{
  width: 92vw;
  background-color: #fff;
  border-radius: 3.2vw;
  margin-top: 2.133vw;
  padding: 0 4vw;
}
</style>
