<template>
  <div class="form">
    <h2>食材から選ぶ</h2>
   <input @input="incliment(input)" type="text" v-model="input">
   <button @click="onclick(input)" >検索</button>
  
  </div>
</template>

<script>
export default {
  data(){
    return {
      input:"",
    }
  },
  props:{
    onclick:{
    type:Function,
    required:false
    },
    incliment:{
    type:Function,
    required:false
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