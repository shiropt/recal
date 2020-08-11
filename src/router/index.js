import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Store from '../views/Store.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
    },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import('../views/Login.vue')
    },
    {
      path: "*",
      redirect:"/"
    }
]

const router = new VueRouter({
  routes
})

export default router
