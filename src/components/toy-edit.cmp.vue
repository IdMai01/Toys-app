
<template>
    <app-header />
    <section class="edit-page-layout">
        <section class="edit-toy">
            <div class="add-toy-heading">
                Add toy
            </div>
            <section class="edit-page-inputs">
                <input v-model="this.newToy.name" placeholder="Choose a toy name" type="text">
                <input v-model="this.newToy.price" placeholder="Enter a price" type="number">
                <input v-model="this.newToy.labels" placeholder="Add comma seperated labels" type="text">
            </section>
            <router-link @click="save()" class="add-btn" to="/">
                Add
            </router-link>
        </section>
    </section>
</template>
<script>

import appHeader from './app-header.vue'

export default {

    data() {
        return {
            newToy: {
                _id: '',
                name: '',
                price: '',
                labels: '',
                createdAt: '',
                inStock: true
            }
        };
    },
    created() {
        console.log('this.$', this.$store.getters.getCurrEdited)
        if (this.$store.getters.getCurrEdited) {
            var temp = this.$store.getters.getCurrEdited
            this.newToy._id = temp._id
            this.newToy.name = temp.name
            this.newToy.price = temp.price
            this.newToy.labels = temp.labels
            this.newToy.createdAt = temp.createdAt
        }
    },
    methods: {
        save() {
            this.$store.dispatch({
                type: 'saveToy',
                toy: this.newToy
            })
        }
    },
    computed: {},
    components: {
        appHeader,
    },
    unmounted() { },
};
</script>

<style>
.edit-page-layout {
    background-color: rgb(229, 239, 255);
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10vh;
}

.edit-toy {
    display: grid;
    background-color: white;
    height: 60vh;
    width: 40vh;
    border-radius: 10vh;
    border: 2px solid black;
}

.add-toy-heading {
    text-align: center;
    font-size: 2rem;
    align-self: center;
}

.edit-page-inputs {
    display: flex;
    flex-direction: column;
}

.edit-toy input {
    background-color: rgb(229, 239, 255);
    margin: auto;
    height: fit-content;
    border: 0;
    font-size: 1.1rem;
    width: 82%;
    border-radius: 5px;
}

.add-btn {
    margin-top: 5%;
    justify-self: center;
    height: fit-content;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(229, 239, 255);
    color: black;
}
</style>