<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"scroll",
  props:{
    click:{
      type:Boolean,
      default:true
    }
  },
  
}
</script>

<style>

</style>
