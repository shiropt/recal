<template>
  <header>
      <router-link to="/" tag="h1" class="title">Recal</router-link>
   <nav class="pc-nav">
      <ul class="header-ul">
      <router-link to="/search" tag="li">メニューを考える</router-link>
      <router-link to="/store" tag="li">外食する</router-link>
      <router-link to="/kal" tag="li">ログイン</router-link>
      </ul>
   </nav>
</header>
</template>

<script>

export default {
 
}
</script>

<style scoped>
header {
  cursor: pointer;
   position: fixed;
   top: 0;
   width: 100%;
   height: 60px;
   background-color: rgb(192, 188, 188,0.5);
   display: flex;
   align-items: center;
   color: white;
}
.title {
  height: 100%;
  line-height: 60px;
   margin-left:24px;
   padding:0 16px 0px;
   font-size: 20px;
   list-style: none;
}
nav {
   margin: 0 auto;
   height: 100%;

}
.header-ul {
   list-style: none;
   margin: 0;
   display: flex;
   height: 100%;
}
.header-ul >li {
   line-height: 60px;
  height: 100%;
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