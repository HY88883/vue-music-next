<template>
    <div>
      推荐
    </div>
</template>

<script>import { getRecommend } from '../services/recommend'

export default {
  name: 'recommend',
  async  mounted () {
    const result = await getRecommend()
  }
}
</script>

<style>

</style>
