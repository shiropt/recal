<template>
   <v-text-field 
   @input="typing(input)" 
   type="text" 
   label="今日はなにをつくる？"
   v-model="input"></v-text-field>
</template>

<script>
export default {
  data(){
    return {
      input:"",
    }
  },
  props:{
    typing:{
    type:Function,
    required:true
    }
  },
}
</script>

<style scoped>

</style>