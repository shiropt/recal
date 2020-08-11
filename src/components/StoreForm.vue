<template>
  <div class="store-form">
    <label for="free-word">フリーワード検索：</label>
   <input @input="clearForm" type="text" v-model="freeword"><br>
    <label for="area">エリア検索：</label>
   <input @input="clearForm" type="text" v-model="address"><br>
   <button @click="inClick(freeword,address); clear()">検索</button>
    <p v-if="formCheck">入力してください</p>

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
    },
    formCheck:{
      type:Boolean,
      required:false
    },
    clearForm:{
      type:Function,
      required:false
    }
  },
  methods:{
    clear(){
      this.freeword=""
      this.address=""

    }
  }

}
</script>

<style scoped>
.pref-list{
  display: flex;
    flex-wrap: wrap;

}
.form{
background: wheat;
}
h2{
color: white;
}


</style>