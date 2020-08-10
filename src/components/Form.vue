<template>
  <div class="form">
    <h2>食材から選ぶ</h2>
   <input @input="incliment(input)" type="text" v-model="input">
   <button @click="onclick(input); clear()" >検索</button>
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
  },
  methods:{
    clear(){
      this.input=""
    }

  }
  

}
</script>

<style>
input{
  border: 1px solid black;
}

p{
  color: red;
}


</style>