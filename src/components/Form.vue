<template>
  <div class="form">
    <h2>食材から選ぶ</h2>
   <input @input="incliment(input)" type="text" v-model="input">
   <button @click="onclick(input)" >検索</button>
   <p v-if="message">入力してください</p>
  
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
    },
    message:{
      type:Boolean,
      default:false
    }
  }
  

}
</script>

<style>

p{
  color: red;
}


</style>