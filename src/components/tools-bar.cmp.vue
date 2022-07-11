
<template>
    <section class="tools-bar">
        <router-link to="/edit" class="add-toy-btn">
            Add New toy
        </router-link>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.tools-bar {
    display: flex;
    height: 80px;
    align-items: center;
}

.add-toy-btn {
    font-weight: 600;
    color: black;
    background-color: rgb(235, 236, 237);
    border: 0px solid black;
    border-radius: 5px;
    padding: 4px;
    padding-bottom: 6px;
    right: 12vw;
    position: absolute;
    transition: 0.6s;
}

.add-toy-btn:hover {
    background-color: rgba(47, 47, 249, 0.933);
    color: white;
    cursor: pointer;
}
</style>