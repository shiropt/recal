<template>
  <div class="store-form">
    <div class="title">
   <h2>飲食店を検索</h2>
  </div>
   <v-text-field 
   @input="clearForm" 
   type="text" 
   v-model="freeword"
   label="フリーワード検索"
   ></v-text-field>
   <v-text-field 
   @input="clearForm"
    type="text"
    v-model="address"
    label="エリア検索"
     ></v-text-field>

   <v-btn
   class="ma-2" outlined color="orange"
    @click="inClick(freeword,address);
     clear()">検索</v-btn>
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
p{
  color: red;
}
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