<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const rootRef = ref(null)
    // const scroll = useScroll(rootRef, props)
    return {
      rootRef
    }
  }
}
</script>

<style>

</style>
