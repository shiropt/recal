<template>
  <div class="profile">
    <h1>外食先を選ぶ</h1>
    <StoreForm
    :inClick="searchStore" />
    <ul class="store-lists">
    <template v-for="(store,index) in storeInfo">
    <li class="store-list"
    :key="index">
     
       <StoreInfo
       :shop_image1= store.image_url.shop_image1
       :name= store.name
       :address= store.address
       :holiday= store.holiday
       :opentime= store.opentime
       :tel= store.tel
       :station= store.access.station
       :walk= store.access.walk
       :url= store.url
       :url_mobile= store.url_mobile
       
       
       
       
        />
      </li>
    </template>

    </ul>
    
  

  </div>
</template>

<script>
const axios = require('axios').default;
import "axios"
import StoreForm from "@/components/StoreForm.vue"
import StoreInfo from "@/components/StoreInfo.vue"

export default {
  components:{
    StoreForm,
    StoreInfo
  },
  data(){
    return{
      storeInfo:null,
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
.store-lists{
  display: flex;
  flex-wrap: wrap;
}
.store-list{
  margin: 15px;
}
</style>

