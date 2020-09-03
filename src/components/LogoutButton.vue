<template>
  <v-btn outlined class="logout" @click="logout">ログアウト</v-btn>
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
  }

}
</script>

<style>

</style>