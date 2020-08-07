<template>
  <div class="store-form">
    <h2>お店を探す</h2>
    <label for="free-word">フリーワード検索：</label>
   <input type="text" v-model="input"><br>
    <label for="area">エリア：</label>
   <input type="text" v-model="address"><br>
   <button @click="inClick(input,address,buffet)">検索</button>
   <br>
   <input type="checkbox"  v-model="buffet">食べ放題あり
   

  </div>
</template>

<script>
export default {
  data(){
    
    return {
      input:"",
      address:"",
      buffet:""
    }
  },
  props:{
    inClick:{
    type:Function,
    required:true
    }
  }

}
</script>

<style>
.form{
background: wheat;
}
h2{
color: white;
}


</style>