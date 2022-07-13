
<template>
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
