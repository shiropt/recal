<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <v-btn text x-large width="100px" height="100px"  @click="logoClick">Recal</v-btn>
   </v-toolbar-title>
   <div class="flex-grow-1"></div>
<div  v-if="this.$store.state.user.authState" class="btn-wrapper">
  <v-btn color="success" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="a">レシピを見る</router-link>
  </v-btn>
  <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="a">外食する</router-link>
  </v-btn>
  <Dialog
  btnTitle="記録する"
   :saveData ="saveMenu"
   color="#0055f4"
   class="post-btn"
  />


   <v-btn outlined class="logout" @click="logout">Logout</v-btn>
</div>
  </v-toolbar>
</template>
<script>
import {dbUsers} from "@/db"
import firebase from 'firebase'
import Dialog from "@/components/Dialog.vue"
export default {
 data(){
  return{
   user: firebase.auth().currentUser,
   today:null,
  }
 },
 components:{
  Dialog,
   },
 methods:{
  async logout(){
    try{
      await firebase.auth().signOut()
      this.$store.commit("authState")
      this.$router.push('/')
   }catch(error){
      alert(error.message);
      }
    },
   async logoClick(){
      const user = await firebase.auth().currentUser;
      if(!user){
         this.$router.push('/')
         }else{
         this.$router.push('/search')
      }
   },
   getToday(){
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()
    const today = `${y}/${m+1}/${d}`
    this.today = today

  },
   async saveMenu(inputedMenus){
      try{
         inputedMenus.date = firebase.firestore.FieldValue.serverTimestamp()
     const searchCurrentUser = await dbUsers.where("userId","==",this.$store.state.user.currentUserId.uid).get()
     const currentUserId = searchCurrentUser.docs[0].id
     const menus = await dbUsers.doc(currentUserId).collection("menus")
     this.$store.commit("loading");
     this.getToday()

     const day = this.$store.state.everydayMenu
      const date = day.filter(d => {
        return d.date ===this.today
      });
      if(date.length===1){
        this.$store.commit("loaded");
        alert("今日は投稿済です。追加をする場合は編集をしてください")
           return
      }
     await menus.add(inputedMenus);
     this.$store.dispatch("fetchMenu")
   }catch(error){
     alert(error.message)
   }
},
   },
   reated(){
  this.$store.dispatch("fetchMenu")
},

}
</script>
<style scoped>
.logout{
   margin-left: 30px;
   margin-right: 70px;
}
a{
  line-height: 32px;
  display: block;
  height: 32px;
  text-decoration: none;
}
.post-btn{
  display: inline-block;
  margin-left: 8px;
}
.btn-wrapper{
  text-align: center;
  text-align-last: left;
}
.v-application a{
  display: block;
  color: white;

}

</style>