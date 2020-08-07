<template>
  <div class="store-form">
    <h2>お店を探す</h2>
    <label for="free-word">フリーワード検索：</label>
   <input type="text" v-model="freeword"><br>
    <label for="area">エリア検索：</label>
   <input type="text" v-model="address"><br>
   <input type="text" v-model="list">


    <template>
      <ul  class="pref-list">
      <li v-for="(pref,index) in prefInfo" :key="index">
        <input
        :id="'pref'+index"
        type="checkbox"
        :value="pref.pref_name"
        v-model="selectedPref"
        >
        <label :for="'pref' + index">{{pref.pref_name}}</label>
      </li>
      </ul>
    </template>


        <p>{{list}}</p>
        

   <button @click="inClick(freeword,address)">検索</button>
   <br>
  

  </div>
</template>

<script>
const axios = require('axios').default;
import "axios"
export default {
  data(){
    
    return {
      freeword:"",
      address:"",
      prefInfo:null,
      selectedPref:[],
      list:""
     
    }
  },
  props:{
    inClick:{
    type:Function,
    required:true
    }
  },
  async mounted(){
    try{
      const prefRes = await axios.get('https://api.gnavi.co.jp/master/PrefSearchAPI/v3/?keyid=720039c5c559d5c97319281d7cc3e669')
      this.prefInfo=prefRes.data.pref;
      console.log(prefRes.data.pref)

    }catch(error){
      alert(error.message)
    }

  }

}
</script>

<style>
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