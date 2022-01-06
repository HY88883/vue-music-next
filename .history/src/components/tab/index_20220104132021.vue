<template>
     <div class="tab">
    <router-link
      <!-- class="tab-item" -->
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
    >
      <span class="tab-link">
        {{tab.name}}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab'

}
</script>

<style>

</style>
