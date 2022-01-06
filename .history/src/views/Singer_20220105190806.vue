<template>
  <div class="singer" v-loading="!singers.length">
      <index-list :data="singers"/>
</div>
</template>

<script>
import { getSingerList } from '../services/singer'
import IndexList from '@/components/index-list'
export default {
  name: 'singer',
  data () {
    return {
      singers: []
    }
  },
  components: {
    IndexList
  },
  async created () {
    const result = await getSingerList()
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
