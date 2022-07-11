<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

a,
.green {
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.99);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover:not(.add-toy-btn:hover) {
    border-radius: 10px;
    background-color: hsla(161, 30%, 82%, 0.779);
  }
}

nav {
  text-align: center;
  background-color: rgb(33, 35, 44);
  padding: 30px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
