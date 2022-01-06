<template>
  <div class="singer" v-loading="!singers.length">

</div>
</template>

<script>import { getSingerList } from '../services/singer'

export default {
  name: 'singer',
  data () {
    return {
      singers: []
    }
  },
  async created () {
    const result = await getSingerList()
    console.log('result: ' + result)
    this.singers = result.singers
  }
}
</script>

<style lang="scss" scoped>

  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
