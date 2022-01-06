<template>
<div>
  唱歌
</div>
</template>

<script>
export default {
  name: 'singer',
  data () {
    return {
      singer: []
    }
  },
  async created () {
    const result = await getSingerList()
    this.singers = result.singers
  }
}
</script>

<style>

</style>
