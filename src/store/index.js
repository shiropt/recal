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
      dinner: null,
      date:null
    },
    user: {
      authState: false,
      currentUserId: null,
      dbUserId: null,
      crd:null
      
    },
    everydayMenu: [
      {
        morning: null,
        lunch:null,
        dinner: null,
        date:null
      }
    ],
    dbMenu:null
  },
  mutations: {
    setCrd(state,crd) {
      state.user.crd = crd
    },
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

      const userId = firebase.auth().currentUser
      state.user.currentUserId = userId
      state.user.dbUserId=null
      state.user.authState = true
    },
    authState(state) {
      state.user.authState = false
    },
    fetchEverydayMenu(state, payload) {
      // 読み込みが終わったらローディングアイコンを消す
      state.loading = false
      // sateにfirebaseから取得したログインユーザーのメニュー情報を日付順に格納
      state.everydayMenu = payload.myMenu.reverse()
      // stateにログインユーザーのidを保管
      state.user.dbUserId = payload.currentUserId
      // stateにログインユーザーの持つmenus情報を保管
      state.dbMenu = payload.dbUserMenus
    }
  },
  actions: {
    async fetchMenu(context) {
      // ログインユーザーとfirestoreのuserIdが一致したユーザー情報を取得
      const searchCurrentUser = await dbUsers.where("userId", "==", firebase.auth().currentUser.uid).get()
      // 取得したユーザー情報のidを取得
      const currentUserId = searchCurrentUser.docs[0].id
      // ユーザーidと一致したfirestoreのmenusのcollectionを日付順に取得
      const menus = await dbUsers.doc(currentUserId).collection("menus").orderBy('date').get()
      // menusのドキュメントを配列で取得
      const myMenu = menus.docs.map(doc => doc.data())
      // dateのタイムスタンプ型を変換
      myMenu.forEach(todayMenu => {
        return todayMenu.date = todayMenu.date.toDate().toLocaleDateString()
      })
      // ログインユーザーの持つmenus情報を変数に格納
      const dbUserMenus = dbUsers.doc(currentUserId).collection("menus")
      const payload = {myMenu,currentUserId,dbUserMenus}
      context.commit("fetchEverydayMenu",payload)
    }
  },
  modules: {
  }
})
