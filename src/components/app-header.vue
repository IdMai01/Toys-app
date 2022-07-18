<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
  RouterLink
  },
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/toys-app">Home</RouterLink>
      <RouterLink to="/toys">Toys</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink class="login-btn" to="/log-in">Log in</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

</template>
