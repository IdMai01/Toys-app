
<template>
    <section class="toy-filter-cmp">
        <input v-model="filterBy.searchedTerm" type="text" placeholder="search for a specific toy">
        <select v-model="filterBy.label" name="filter" id="" val>
            <option disabled value="">labels</option>
            <option value="Toy">toy</option>
            <option value="Battery">battery</option>
            <option value="Baby">baby</option>
        </select>
        available toys only<input @click="toggleAvaillablityFilter" type="checkbox" name="isInStock"
            id="isStock-checkbox">
    </section>
</template>
<script>
export default {
    data() {
        return {
            filterBy: {
                searchedTerm: 's',
                availability: false,
                label: '',
            }
        }
    },
    methods: {
        toggleAvaillablityFilter(){
            this.filterBy.availability = !this.filterBy.availability
        },
        setFilterBy(){
            
        }
    },
    watch: {
    filterBy(newVal) {
      this.setFilterBy()
      }
    }
}
</script>
<style>
.toy-filter-cmp input,
select {
    border-radius: 5px;
    margin: 0 1px;
    border: 0px solid black;
    background-color: #c8f6e676;
}

.toy-filter-cmp ::placeholder {
    color: rgb(38, 28, 28);
}
</style>