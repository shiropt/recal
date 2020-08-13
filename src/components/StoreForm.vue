<template>
  <div class="store-form">
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

</style>