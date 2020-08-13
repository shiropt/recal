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
      beforeEnter: (to, from, next) => {
        console.log('route(root):⊂(´ーωー｀)⊃r');
        next();
      }
      },
  {
    path: '/',
    name: 'Search',
    component: Search,
    beforeEnter: (to, from, next) => {
      console.log('route(Search):(´・ω・｀)ショボーン');
      next();
    },
    children: [
      {
        path: 'store',
        name: 'Store',
        component: Store,
        beforeEnter: (to, from, next) => {
          console.log('route(Store)');
          next();
        },
      },
      {
        path: 'recipe',
        name: 'Recipe',
        component: Recipe,
        beforeEnter: (to, from, next) => {
          console.log('route(Recipe)');
          next();
        },
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
