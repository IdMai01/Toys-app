
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
            this.$store.commit({
                type: "setCurrEdited",
                toy,
            })
            this.$router.push('/edit')
        }
    },
    created() {
    }
}



</script>

<style>
.toy-preview-container {
    padding: 8px;
    box-shadow:
        0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(166, 173, 201, 0.2);
    max-width: 160px;
    max-height: 160px;
    height: 20vw;
    width: 20vw;
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    border-radius: 2.4vw;
    transition: 600ms;
}

.tools-and-toy-name {
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}

.tools-and-toy-name>* {
    width: 20px;
    align-self: center;
    text-align: center;
}

.tools-and-toy-name img {
    margin: auto;
    padding: 3px;
    border-radius: 5px;
    transition: 0.4s;
    transition: opacity 600ms;
}

.tools-and-toy-name img:hover {
    background-color: rgb(232, 230, 230);
    cursor: pointer;
}

.toy-name {
    width: fit-content;
    justify-self: center;
    grid-column: 2/3;
    font-size: 1rem;
    font-weight: 650;
}

.toy-labels {
    align-self: center;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3%;
}

.toy-label {
    background-color: rgb(240, 241, 242);
    height: fit-content;
    width: 100%;
    border-radius: 5px;
    margin: auto;
    margin-top: 0;
    font-size: 0.8rem;
}

.toy-price {
    grid-column: 1/4;
    align-self: center;
}

.noOpacity {
    opacity: 0;
    transition: opacity 600ms;
}
</style>