<template>
  <div class="singer" v-loading="!singers.length">
      <index-list :data="singers"
        @select="selectSinger"
        />

        <router-view></router-view>
</div>
</template>

<script>
import { getSingerList } from '../services/singer'
import IndexList from '@/components/index-list'
export default {
  name: 'singer',
  data () {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  components: {
    IndexList
  },
  async created () {
    const result = await getSingerList()
    this.singers = result.singers
  },
  methods: {
    selectSinger (item) {
      this.selectedSinger = item
      this.cacheSinger(item)
      this.$router.push({ path: `/singer/${item.mid}` })
    },
    cacheSinger (singer) {
      storage.session.set(SINGER_KEY, singer)
    }
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
