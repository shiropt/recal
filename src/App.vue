<template>
<v-app >
  <div >
   <Header class="header"/> 
   <div class="menu">
   <router-view> </router-view>
     </div>   
  </div>
</v-app>
</template>
<script>
  import Header from "@/components/Header.vue"
  import "normalize.css"
export default {

  components:{
    Header,
  }
}
</script>

<style scoped>

.menu{
  padding-top: 60px;
  width: 100%;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 1;
}

</style>
 