<template>
  <div>
      <m-header/>
      <tab/>
      <router-view/>
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
