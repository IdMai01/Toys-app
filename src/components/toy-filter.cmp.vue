
<template>
    <section class="toy-filter-cmp">
        <el-input @input="setFilterBy" placeholder="search for a specific toy" v-model="filterBy.searchedTerm" clearable
            class="search-bar" />

        <el-select @change="setFilterBy" v-model="filterBy.label" multiple collapse-tags collapse-tags-tooltip
            placeholder="Select label" class="labels-filter">
            <el-option v-for="(label, idx) in labels" :value="label" :key="idx" :label="label" />
        </el-select>
        <div class="checkbox-container">
            available toys only<input @click="toggleAvaillablityFilter" class="filter-checkbox" @change="setFilterBy"
                type="checkbox" name="isInStock" id="isStock-checkbox">
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            filterBy: {
                searchedTerm: '',
                availability: false,
                label: [],
            },
            labels: ['Baby', 'Cool', 'Batery', 'Dragon', 'Toy', 'Monster'],
        }
    },
    methods: {
        toggleAvaillablityFilter() {
            this.filterBy.availability = !this.filterBy.availability
        },
        setFilterBy() {
            const filter = JSON.parse(JSON.stringify(this.filterBy))
            this.$store.commit({
                type: 'setFilterBy',
                filterBy: filter
            })
        }
    },
}
</script>
