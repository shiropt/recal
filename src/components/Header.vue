<template>
<v-app-bar color="orange"  class="header">
         <v-tabs color="white">
         <v-tab>
   <v-toolbar-title>
      <router-link to="/" class="title" tag="h1" >Recal</router-link>
   </v-toolbar-title>
      </v-tab>
      <v-spacer></v-spacer>
      <ul class="nav">
         <v-tab>
      <router-link to="/search" tag="li">メニューを考える</router-link>
      </v-tab>
         <v-tab>
      <router-link to="/store" tag="li">外食する</router-link>
      </v-tab>
         <v-tab>
      <router-link to="/kal" tag="li">ログイン</router-link>
      </v-tab>
      </ul>
         </v-tabs>

</v-app-bar>
</template>

<script>

export default {
 
}
</script>

<style scoped>
a{
   text-decoration: none;
   color: white;
}
.nav{
   display: flex;
}
.title{
   color: white;
}
li{

   color: white;
   list-style: none;
}


</style>