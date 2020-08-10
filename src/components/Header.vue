<template>
<v-app-bar color="#fd9535" dark>
  <header>
   <v-toolbar-title>
      <router-link to="/" tag="h1" class="title">Recal</router-link>
   </v-toolbar-title>


   <nav class="pc-nav">
      <ul class="header-ul">
      <router-link to="/search" tag="li">メニューを考える</router-link>
      <router-link to="/store" tag="li">外食する</router-link>
      <router-link to="/kal" tag="li">ログイン</router-link>
      </ul>
   </nav>
</header>
</v-app-bar>
</template>

<script>

export default {
 
}
</script>

<style scoped>
header {
   position: fixed;
   top: 0;
   width: 100%;
   height: 60px;
   display: flex;
   align-items: center;
}

/* nav {
   margin: 0 auto;
   height: 100%;

} */
.header-ul {
   list-style: none;
   margin: 0;
   display: flex;
   height: 90%;
}
.header-ul >li {
   line-height: 60px;
   margin: 0 0 0 60px;
   font-size: 16px;
   cursor: pointer;
}
li:hover{
  background: white;
  color: black;
  transition: 0.6s;
}
.title:hover{
  background: white;
  color: black;
  transition: 0.6s;
}

</style>