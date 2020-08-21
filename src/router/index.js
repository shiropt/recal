import Vue from 'vue'
import VueRouter from 'vue-router'
import Authentication from '../views/Authentication.vue'
import Search from '../views/Search.vue'
import Store from '@/views/Select/Store.vue'
import Recipe from '@/views/Select/Recipe.vue'
import Signup from '@/views/Auth/Signup.vue'
import Signin from '@/views/Auth/Signin.vue'
// import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Authentication',
      component: Authentication,
      // beforeEnter(to, from, next) {
      //   const user = firebase.auth().currentUser;
      //   if (user) {
      //     next('/search');
      //   } else {
      //     next("/");
      //   }
      // },
      children: [
        {
          path: 'signup',
          name: 'Signup',
          component: Signup,
        },
        {
          path: 'signin',
          name: 'Signin',
          component: Signin,
        }
      ]
      },
  {
    path: '/search',
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
