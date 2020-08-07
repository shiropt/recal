<template>
  <div class="store-form">
    <h2>お店を探す</h2>
    <label for="free-word">フリーワード検索：</label>
   <input type="text" v-model="freeword"><br>
    <label for="area">エリア：</label>
   <input type="text" v-model="address"><br>
   <button @click="inClick(freeword,address)">検索</button>
   <br>
  

  </div>
</template>

<script>
export default {
  data(){
    
    return {
      freeword:"",
      address:"",
     
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