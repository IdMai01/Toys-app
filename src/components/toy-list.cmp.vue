
<template>
  <section class="toy-list-container">
    <toy-Preview v-for="(toy,idx) in toys"
     :toy="toy" :key="idx" />
  </section>
</template>

<script>
import toyPreview from './toy-preview.cmp.vue'

export default {
  components: {
    toyPreview,
  },
  methods: {},
  computed: {
        toys() {
            return this.$store.getters.getToys

        }
    },
}
</script>

<style>
.toy-list-container {
  width: 80vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6vh;

}
</style>