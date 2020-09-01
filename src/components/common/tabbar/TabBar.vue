<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style scoped>
    #tab-bar {
        /* 本身样式 */
        background-color: #f6f6f6;
        height: 12vw;
        border-top: 0.133vw solid #eee;
        box-shadow: 0 -0.133vw 0.133vw rgba(150 150 150 .08);

    /* 定位 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 利用flex布局 */
    display: flex;
    text-align: center;
    }
</style>
