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
