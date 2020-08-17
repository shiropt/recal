<template>
<v-app>
  <div id="app">
      <Header />
    <router-view class="menu"></router-view >
    <List />
    
  </div>
</v-app>
</template>
<script>

  import Header from "@/components/Header.vue"
  import List from "@/components/List.vue"
  import "normalize.css"
export default {
  components:{
    Header,
    List
  },
  
}
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;;
}
.menu{
  padding-top: 60px;
}

</style>
