import Vue from 'vue'
import Vuex from 'vuex'
import"@/components/Dialog.vue"
import "@/components/List.vue"
import {dbUsers} from "@/db"
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    menus: {
       morning: null ,
       lunch: null ,
      dinner: null
    },
    user: {
      authState: false,
      
    },
    everydayMenu: [
      {
        morning: null,
        lunch:null,
        dinner: null,
        date:null
      }
    ]
    
  },
  mutations: {
    loading(state) {
      state.loading=true
    },
    loaded(state) {
      state.loading=false
    },
  
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
    },
    fetchEverydayMenu(state, myMenu) {
      state.loading=false
      state.everydayMenu=myMenu      
    }
  },
  actions: {
   async fetchMenu(context) {
      const searchCurrentUser = await dbUsers.where("userId","==",firebase.auth().currentUser.uid).get()
      const currentUserId = searchCurrentUser.docs[0].id
      const menus = await dbUsers.doc(currentUserId).collection("menus").orderBy('date').get()
      const myMenu = menus.docs.map(doc => doc.data())
      myMenu.forEach(todayMenu => {
        return todayMenu.date = todayMenu.date.toDate().toLocaleDateString()
      })
      context.commit("fetchEverydayMenu",myMenu)
  
    }
  },
  modules: {
  }
})
