<template>
  <div class="header">
    <span></span>
    <h1>Chicken Music</h1>
    <router-link to="/">
      <i class="icon-mine"></i>
    </router-link> |
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="scss" scoped>
   .header {
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
   }
</style>
