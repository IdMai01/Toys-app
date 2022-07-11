import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
import edit from '../components/toy-edit.cmp.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    }
  ]
})

export default router
