<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <router-link to="/search" class="title" tag="h1" >Recal</router-link>
   </v-toolbar-title>
   <div class="flex-grow-1"></div>
   <v-btn outlined v-if="this.$store.state.user.authState" class="login" @click="logout">Logout</v-btn>
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
<style scoped>
.title{
margin-left: 100px;
}
.login{
   margin-right: 70px;
}
</style>