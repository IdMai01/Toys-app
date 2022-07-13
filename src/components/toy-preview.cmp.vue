
<template>
    <section @mouseout="this.isHover = false" @mouseover="this.isHover = true" class="toy-preview-container">
        <section class="tools-and-toy-name">
            <img @click="removeToy(toy)" :class="{ noOpacity: !isHover }" src="../img/trash.svg" alt="DELETE">
            <div class="toy-name">
                {{ toy.name }}
            </div>
            <img @click='editToy(toy)' :class="{ noOpacity: !isHover }" src="../img/edit.svg" alt="EDIT">
        </section>
        <section class="toy-labels">
            <div :key="idx" v-for="(label, idx) in toy.labels" class="toy-label">{{ toy.labels[idx] }}</div>
        </section>
        <div class="toy-price">
            price: {{ toy.price }}$
        </div>
        <router-link class="details-btn" :to="'/details/' + toy._id">Details</router-link>
    </section>
</template>

<script>
export default {
    props: {
        toy: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isHover: false,
        };
    },
    methods: {
        removeToy(toy) {
            this.$store.dispatch({
                type: "removeToy",
                toy,
            })
        },
        editToy(toy) {
            this.$router.push('/edit/' + toy._id)
        }
    },
    created() {
    }
}



</script>
