<!--  -->
<template>
  <div class="search">
    <nav-bar class="home-bar">
      <div slot="center" class="home-center">
        <span>
          <img class="home-imgs" src="@/assets/img/home/ss@2x.png" alt />
        </span>
        <input type="text" placeholder="搜游戏或礼包" />
      </div>
      <div slot="right" class="search-right">取消</div>
    </nav-bar>
    <div class="contant">
      <div class="title">热门搜索</div>
      <div class="btn">王车荣耀</div>
      <div class="btn">王车荣</div>
    </div>
    <div class="libroy">
      <div class="libroy-title">
        <div class="title">历史搜索</div>
        <div class="libroy-btn">清除全部</div>
      </div>
      <ul>
        <li>
          <div>哈哈哈哈</div>
          <div>
            <img src="@/assets/img/search/sc@3x.png" alt width="16" height="16" />
          </div>
        </li>
        <li>
          <div>诸天支行</div>
          <div>
            <img src="@/assets/img/search/sc@3x.png" alt width="16" height="16" />
          </div>
        </li>
        <li>
          <div>王者荣耀</div>
          <div>
            <img src="@/assets/img/search/sc@3x.png" alt width="16" height="16" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'search',
  components: {
    NavBar
  },
  data () {
    return {}
  }
}
</script>

<style  scoped >
.search {
  /* padding: 4vw; */
  box-sizing: border-box;
}
.home-bar {
  width: 100%;
  height: 11.733vw;
}
.home-center {
  width: 80vw;
  height: 9.067vw;
  background-color: #ebeef7;
  border-radius: 5.333vw;
  border: 1px solid #ebeef7;
  margin-top: 0.8vw;
  display: flex;
}
.home-center span {
  width: 10.667vw;
  height: 100%;
}
.home-center input {
  flex: 1;
  background-color: #ebeef7;
  border: none;
  border-radius: 5.333vw;
  color: #b3bcd9;
  font-size: 3.467vw;
  text-indent: 0.5em;
  /* resize:none; */
  outline: none; /*清除选中效果的默认蓝色边框 */
  -webkit-appearance: none; /*清除浏览器默认的样式 */
  line-height: normal;
}
.search-right {
  width: 9.2vw;
  font-size: 4vw;
  color: #000;
  margin-left: 3.733vw;
  line-height: 10vw;
}
.contant {
  margin: 7.733vw 4vw 11.467vw;
}
.title {
  font-size: 4vw;
  color: #000;
  font-weight: 700;
  margin-bottom: 4vw;
}
.btn {
  display: inline-block;
  font-size: 3.733vw;
  color: #9da1b0;
  border: 0.4vw solid #c9cbd3;
  padding: 0.933vw 1.6vw;
  border-radius: 3.733vw;
  margin-right: 2.133vw;
}
.libroy{
  margin: 0 4vw;
}
.libroy-title {
  display: flex;
  justify-content: space-between;
}
.libroy-btn {
  font-size: 3.2vw;
  color: #9da1b0;
}
.libroy ul > li {
  display: flex;
  justify-content: space-between;
  height: 12vw;
  align-items: center;
  font-size: 3.2vw;
  color: #9da1b0;
  border-bottom: 0.133vw solid #f3f6fb;
  /* font-family: "PingFang-SC-Medium"; */
}
</style>
