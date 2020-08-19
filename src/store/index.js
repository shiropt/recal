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
       dinner: null },
      
    
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
    }
  },
  actions: {
  },
  modules: {
  }
})
