<script>
import appHeader from '@/components/app-header.vue'
import toyList from '../components/toy-list.cmp.vue'
import toolsBar from '../components/tools-bar.cmp.vue'

export default {
  components: {
    appHeader,
    toyList,
    toolsBar,
  },
  
}
</script>

<template>
  <main>
    <app-header />
    <tools-bar/>
    <toy-list />
  </main>
</template>
