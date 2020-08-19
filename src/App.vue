<template>
<v-app>
  <div id="app">
      <Header class="header"/>
      <v-container fluid class="container">
        <v-row>
          <v-col cols="8">    
          <router-view class="menu"></router-view >
          </v-col>
          <v-col cols="4">
          <List class="list"/>
          </v-col>
        </v-row>
      </v-container>
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

.menu{
  padding-top: 60px;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 1;
}
.list{
  /* position: fixed; */
  position: absolute; 
   top:60px
}
.container{
  margin: 0 auto;
}


</style>
 