<template>
<div class="wrapper">
  <div class="left">
  <v-btn color="orange" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="button">レシピを見る</router-link>
  </v-btn>
  <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="button">外食する</router-link>
  </v-btn>
  <Dialog
  btnTitle="記録する"
   :saveData ="saveMenu"
  />
   <hr>
   <router-view></router-view>
  </div>
  <div class="right">
   <List class="list"/>
  </div>
</div>
  
</template>

<script>
import Dialog from "@/components/Dialog.vue"
 import List from "@/components/List.vue"
export default {

components:{
  Dialog,
  List
},
methods:{
  saveMenu(){
    console.log("新しい投稿です");

}

}
}
</script>

<style>
a{
  text-decoration: none;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
}
.wrapper{
  margin: 0 auto; 
  padding-top: 20px;
  padding-left:40px;
  display: flex;
  width: 100%;
  height: 100vh;
}

</style>