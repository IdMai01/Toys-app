
<template>
    <section class="toy-filter-cmp">
        <input @input="setFilterBy" v-model="filterBy.searchedTerm" type="text" placeholder="search for a specific toy">
        <select @change="setFilterBy" v-model="filterBy.label" name="filter" id="" val>
            <option disabled value="">labels</option>
            <option value="">All</option>
            <option value="Toy">Toy</option>
            <option value="Battery">Battery</option>
            <option value="Baby">Baby</option>
            <option value="Dragon">Dragon</option>
        </select>
        available toys only<input @click="toggleAvaillablityFilter" class="filter-checkbox" @change="setFilterBy"
            type="checkbox" name="isInStock" id="isStock-checkbox">
    </section>
</template>
<script>
export default {
    data() {
        return {
            filterBy: {
                searchedTerm: '',
                availability: false,
                label: '',
            }
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
<style>
.toy-filter-cmp input:not(.filter-checkbox),
select {
    border-radius: 5px;
    margin: 0 1px;
    border: 0px solid black;
    background-color: #c8f6e676;
}

.toy-filter-cmp ::placeholder {
    color: rgb(38, 28, 28);
}

.filter-checkbox {
    height: 10px;
    margin: 7px;
    margin-right: 0;
    cursor: pointer;
}
</style>