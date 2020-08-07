import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    
    component: () => import('../views/Search.vue')
    },
  {
    path: '/store',
    name: 'Store',
    
    component: () => import('../views/Store.vue')
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
