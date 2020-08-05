<template>
  <div id="app">
      <Header />
       <div class="bg-mask">
    <router-view class="menu"/>
      </div>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
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
