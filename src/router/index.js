import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Store from '@/views/Select/Store.vue'
import Recipe from '@/views/Select/Recipe.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      },
  {
    path: '/',
    name: 'Search',
    component: Search,
    children: [
      {
        path: 'store',
        name: 'Store',
        component: Store,
      },
      {
        path: 'recipe',
        name: 'Recipe',
        component: Recipe,
      }
    ]
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
