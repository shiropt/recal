import Vue from 'vue'
import Vuex from 'vuex'
import"@/components/Dialog.vue"
import"@/components/List.vue"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: {
       morning: null ,
       lunch: null ,
      dinner: null
    },
    user: {
      authState:false
    }
      
    
  },
  mutations: {
    holdMenu(state, payload) {
      state.menus = payload
    },
    initialMenu(state) {
      state.menus={
        morning: null ,
        lunch: null ,
        dinner: null }
    },
    authStateChanged(state) {
      state.user.authState = true
    },
    authState(state) {
      state.user.authState = false
    }
  },
  actions: {
  },
  modules: {
  }
})
