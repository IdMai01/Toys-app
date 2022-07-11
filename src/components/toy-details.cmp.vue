<template>
    <section class="toy-details">
        <div class="details-heading">
            Details
        </div>
        <div class="details-name">Toy name: {{ toy.name }}</div>
        <div class="details-price">Toy price: {{ toy.price }}$</div>
        <section class="details-labels">Toy labels:</section>
        <div v-for="(label, idx) in toy.labels" class="details-label">{{ toy.labels[idx] }}</div>
    </section>
    <section class="toy-reviews">Costumers reviews:
        <section v-for="(review,idx) in toy.reviews"
         class="toy-review">"{{ toy.reviews[idx] }}"</section>
    </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
    data() {
        return {
            toy: {},
        }
    },
    methods: {
    },
    created() {
        const { toyId } = this.$route.params
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => this.toy = toy)
        } else {
            this.$router.push('/')
        }
    },
}
</script>

<style>
.toy-details {
    margin: auto;
    margin-top: 4vh;
    height: 50vh;
    width: 40vh;
    background-color: rgba(216, 235, 246, 0.514);
    border-radius: 5vh;
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.details-heading {
    font-weight: 600;
    font-size: 1.4rem;
}

.details-labels {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
.toy-reviews{
    background-color: rgba(0, 0, 0, 0.842);
    color: white;
    text-align: center;
    margin: auto;
    margin-top: 4vh;
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
}
</style>