<template>
   <div class="loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      title: '正在载入...'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
