<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <router-link to="/search" class="title" tag="h1" >Recal</router-link>
   </v-toolbar-title>
   <v-spacer></v-spacer>
   <v-btn v-if="this.$store.state.user.authState" @click="logout">Logout</v-btn>
   <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
import firebase from 'firebase'
export default {
   methods:{
   async logout(){
      try{
         await firebase.auth().signOut()
          this.$store.commit("authState")
         this.$router.push('/')
         alert("ログアウトしました")
      }catch(error){
         alert(error.message);
      }
      
    }
   }
}
</script>