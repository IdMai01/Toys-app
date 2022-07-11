
<template>
    <section class="toy-preview-container">
        <div class="toy-name">
            {{toy.name}}
        </div>
        <section class="toy-labels">
            <div :key="idx" v-for="(label, idx) in toy.labels" 
            class="toy-label">{{toy.labels[idx]}}</div>
        </section>
        <div class="toy-price">
            price: {{toy.price}}$
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
    created(){
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

.toy-name {
    font-size: 1.2rem;
    font-weight: 650;
    align-self: center;
    grid-column: 1/4;
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
    grid-column: 2/4;
    align-self: center;
}
</style>