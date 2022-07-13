
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
            <section class="toy-availabillity-and-save-btn">

                <div class="checkbox">
                    <input v-model="this.newToy.inStock" type="checkbox" name="" id="inStock">
                    <label for="inStock">Available in stock</label>
                </div>
                <button @click="save()" class="add-btn">
                    Add
                </button>
            </section>
        </section>
    </section>
</template>
<script>

import { toyService } from '../services/toy-service.js'
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
                inStock: false
            }
        };
    },
    created() {
        const { toyId } = this.$route.params
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => this.newToy = toy)
        }
    },
    methods: {
        save() {
            if (!this.newToy.name || !this.newToy.price) {
                alert('you must give the toy both a price and a name')
                return
            }
            this.$store.dispatch({
                type: 'saveToy',
                toy: this.newToy
            })
            this.$router.push('/')
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
    border: 0;
    transition: 0.6s;
}

.add-btn:hover {
    background-color: rgba(127, 255, 212, 0.225);
    cursor: pointer;
}

.toy-availabillity-and-save-btn {
    display: grid;
    height: fit-content;
}

.toy-availabillity-and-save-btn button {
    grid-row: 2;
}

.toy-availabillity-and-save-btn .checkbox {
    grid-row: 1;
    height: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbox input {
    margin: 0;
    margin-right: 10px;
    width: fit-content;
}
</style>