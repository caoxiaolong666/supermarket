<template>
  <div class="good-item">
    <img :src="goodItem.show.img" alt="" @load="imgLoad">
    <div class="good-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="cfav">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imgLoad () {
      this.$bus.emit('itemImg')
    }
  }
}
</script>
<style scoped>
  .good-item {
    position: relative;
    padding-bottom: 40px;
  }
  .good-item img{
    width: 100%;
    border-radius: 5px;
  }
  .good-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
    text-align: center;
    font-size: 12px;

  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .good-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .good-info .cfav{
    position: relative;
  }
  .good-info .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    /* background: url('~asset/img/common/collect.svg') 0 0/14px 14px; */
  }
</style>
