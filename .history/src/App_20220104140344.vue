<template>
  <div>
      <m-header/>
      <tab/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Tab from '@/components/tab'
export default {
  name: 'app',
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
