<template>
  <div class="form">
    <h2>食材から選ぶ</h2>
   <input @input="incliment(input)" type="text" v-model="input">
   <button @click="onclick(input,checkedFood)" >検索</button>
   <br>
   <input type="checkbox" value="豚肉" v-model="checkedFood">豚肉
   <input type="checkbox" value="鶏肉" v-model="checkedFood">鶏肉
   <input type="checkbox" value="牛肉" v-model="checkedFood">牛肉
   <input type="checkbox" value="ラム肉" v-model="checkedFood">ラム肉<br>
   <input type="checkbox" value="秋刀魚" v-model="checkedFood">秋刀魚
   <input type="checkbox" value="鮭" v-model="checkedFood">鮭
   <input type="checkbox" value="鯖" v-model="checkedFood">鯖

  </div>
</template>

<script>
export default {
  data(){
    return {
      input:"",
      checkedFood:[]
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