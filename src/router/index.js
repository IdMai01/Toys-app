import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.cmp.vue'
import dashboard from '../views/dashboard-page.cmp.vue'
import toysApp from '../views/toy-app.cmp.vue'
import about from '../views/AboutView.vue'
import logIn from '../views/log-in.vue'
import edit from '../components/toy-edit.cmp.vue'
import details from '../components/toy-details.cmp.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/toys-app',
      name: 'home',
      component: homePage
    },
    {
      path: '/toys',
      name: 'toysApp',
      component: toysApp
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/log-in',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/edit/:toyId?',
      name: 'edit',
      component: edit
    },
    {
      path: '/details/:toyId',
      name: 'details',
      component: details
    }
  ]
})

export default router
