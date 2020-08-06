<template>
  <div class="profile">
    <h1>外食先を選ぶ</h1>
    <StoreForm
    :inClick="searchStore" />
    <ul>
    <template v-for="(store,index) in storeInfo">
    <li :key="index">{{store.name}}</li>
    </template>

    </ul>

  </div>
</template>

<script>
const axios = require('axios').default;
import "axios"
import StoreForm from "@/components/StoreForm.vue"

export default {
  components:{
    StoreForm
  },
  data(){
    return{
      storeInfo:null
    }

  },
  methods:{
    async searchStore(input,address,buffet){
      try{
        if(buffet){
      buffet=1
    }
        const storeRes = await axios
        .get("https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=720039c5c559d5c97319281d7cc3e669", {
            params: {
              freeword:input,
              address:address,
              buffet:buffet
            }})
       await  console.log(storeRes.data.rest)
        this.storeInfo= storeRes.data.rest;
      }catch(error){
        alert(error.message)
      }

    }
  }
}
</script>

<style>
.menu-list{
  width: 700px;
  margin: 0 auto;
}

</style>

