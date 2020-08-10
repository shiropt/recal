<template>
<v-app>
  <div id="app">
      <Header />

    <router-view class="menu"/>
    
  </div>
</v-app>
</template>
<script>
  import Header from "@/components/Header.vue"
  import "normalize.css"
export default {
  components:{
    Header
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100vh;
  background: #f5f5f5;;
  /* background-image: url("~@/assets/back-img.png"); */
  /* background-size: cover; */
}
.menu{
  padding-top: 60px;
}
/* .bg-mask {
  height: 100%;
  background: rgba(255,255,255,0.1);
} */

</style>
