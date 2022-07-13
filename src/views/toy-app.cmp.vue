<script>
import toyList from '../components/toy-list.cmp.vue'
import toolsBar from '../components/tools-bar.cmp.vue'

export default {
  components: {
    toyList,
    toolsBar,
  },
  
}
</script>

<template>
  <main>
    <tools-bar/>
    <toy-list />
  </main>
</template>
