<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
  </div>
</template>
<script>
import detailNavbar from './childrenDetail/detailNavbar'
export default {
  name: 'Detail',
  data () {
    return {
      id: null
    }
  },
  components: {
    detailNavbar
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>
<style >

</style>
