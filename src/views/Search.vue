<template>
<div>
  記録一覧<br>
  <v-btn color="orange" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="button">レシピを見る</router-link>
  </v-btn>
  <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="button">外食する</router-link>
  </v-btn>
   <hr>

   <router-view></router-view>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
a{
  text-decoration: none;
}

</style>