<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app-header.vue'
export default {
  components: {
    RouterLink, RouterView, appHeader
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  }
}
</script>

<template>
  <appHeader />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
