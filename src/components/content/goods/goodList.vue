<template>
  <div class="goodList">
    <good-list-item v-for="item in goods" :key="item" :good-item = 'item'></good-list-item>
  </div>
</template>
<script>
import goodListItem from './goodListItem'
export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    goodListItem
  }
}
</script>
<style scoped>
  .goodList{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
