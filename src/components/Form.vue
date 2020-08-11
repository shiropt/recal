<template>
  <v-form class="form">
   <v-text-field 
   @input="incliment(input)" 
   type="text" 
   label="今日はなにをつくる？"
   v-model="input"></v-text-field>
  
  
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      input:"",
    }
  },
  props:{
    incliment:{
    type:Function,
    required:false
    }
  },
 
  

}
</script>

<style scoped>
input{
  border: 1px solid black;
}

p{
  color: red;
}


</style>