<script>
import appHeader from '@/components/app-header.vue'
import toyList from '../components/toy-list.cmp.vue'

export default {
  components: {
    appHeader,
    toyList,
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  }
}
</script>

<template>
  <main>
    <app-header />
    <toy-list />
  </main>
</template>
