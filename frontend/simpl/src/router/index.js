import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homepage/Home.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Society from '../components/socpage/Society.vue'
import Societies from '../components/societies/Societies.vue'

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
  },
  {
    path: '/society',
    name: 'Society',
    component: Society
  },
  {
    path: '/societies',
    name: 'Societies',
    component: Societies
  },
  {
    path: '/societies/:id',
    name: 'Society',
    component: Society
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "router-class"
})


window.vrouter = router

export default router
