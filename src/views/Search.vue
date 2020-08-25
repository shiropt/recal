<template>
<div class="wrapper">
  <div class="left">
  <div class="btn-wrapper">
  <v-btn color="orange" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="button">レシピを見る</router-link>
  </v-btn>
  <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="button">外食する</router-link>
  </v-btn>
  <Dialog
  btnTitle="記録する"
   :saveData ="saveMenu"
   class="post-btn"
  />

  </div>
   <router-view></router-view>
   <Rank />
  </div>
  <div class="right">
   <List class="list"/>
  </div>
</div>
  
</template>

<script>

import Rank from "@/components/Rank.vue"
import Dialog from "@/components/Dialog.vue"
import List from "@/components/List.vue"
import {dbUsers} from "@/db"
import firebase from "firebase"
export default {

components:{
  Dialog,
  List,
  Rank
  },
data(){
  return{
    user: firebase.auth().currentUser,
    today:null
  }
},
methods:{
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
     const searchCurrentUser = await dbUsers.where("userId","==",this.user.uid).get()
     const currentUserId = searchCurrentUser.docs[0].id
     const menus = await dbUsers.doc(currentUserId).collection("menus")
     this.getToday()

     const day = this.$store.state.everydayMenu
      const date = day.filter(d => {
        return d.date ===this.today
      });
      if(date.length===1){
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
created(){
  this.$store.dispatch("fetchMenu")
},

}
</script>

<style>
a{
  text-decoration: none;
}
.post-btn{
  display: inline-block;
  margin-left: 8px;
}
.left{
  width: 50%;
  margin-left: 80px;
}
.right{
  width: 50%;
  height: 100%;
  position: absolute;
  top: 20px;
  right: -150px;
}
.wrapper{
  position: relative;
  margin: 0 auto; 
  padding-top: 20px;
  display: flex;
  width: 100%;
  height: 100%;
}
.btn-wrapper{
  text-align: center;
  margin-top: 30px;
  text-align-last: left;

}

</style>