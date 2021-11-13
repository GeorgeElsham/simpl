import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homepage/Home.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
