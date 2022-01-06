<template>
  <div class="header">
    <span class="icon"></span>
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
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      @include bg-image('logo');
      background-size: 30px 32px;
    }
   }
</style>
