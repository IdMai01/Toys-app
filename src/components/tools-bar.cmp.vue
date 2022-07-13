
<template>
    <section class="tools-bar">
        <toy-filter></toy-filter>
        <router-link to="/edit" class="add-toy-btn">
            Add New toy
        </router-link>
    </section>
</template>

<script>
import toyFilter from './toy-filter.cmp.vue'
export default {
    components: {
        toyFilter
    }
}
</script>