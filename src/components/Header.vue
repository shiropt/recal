<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <v-btn text x-large width="100px" height="100px"  @click="logoClick">Recal</v-btn>
   </v-toolbar-title>
   <div class="flex-grow-1"></div>
   <v-btn outlined v-if="this.$store.state.user.authState" class="logout" @click="logout">Logout</v-btn>
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
   }
   },
}
</script>
<style scoped>

.logout{
   margin-right: 70px;
}
</style>