<template>
<div>
  <div class="title">
   <h2>レシピを検索</h2>
  </div>
   <v-text-field 
   @input="typing(input)" 
   type="text" 
   label="今日はなにをつくる？"
   v-model="input"></v-text-field>
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
    typing:{
    type:Function,
    required:true
    }
  },
}
</script>

<style scoped>
h2 {
  position: relative;
  padding: 0.25em 0;
  text-shadow: 1px 1px 0 rgba(0,0,0,.5);
}
h2:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
  background: linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
}
.title{
  margin-bottom: 30px;
  width: 80%;
  padding: 0px;
}

</style>