<template>
  <div >
    <StoreForm
    :inClick="searchStore"
    :formCheck="check"
    :clearForm="clearForm" />
    <ul class="store-lists">
    <template v-for="(store,index) in storeInfo">
    <li class="store-list"
    :key="index">

     <input type="checkbox"
      :value="store.name" 
      v-model="addStore">
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
      check:false,
      addStore:[]
    }

  },
  methods:{
    async searchStore(freeword,address){
      try{
        const storeRes = await axios
        .get("https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=720039c5c559d5c97319281d7cc3e669", {
            params: {
              freeword,
              address,
              
            }})
        if((freeword||address)===""){
          this.check=true;
          return
        }
        this.storeInfo= storeRes.data.rest;
      }catch(error){
        alert(error.message)
      }

    },
  clearForm(){
    this.check=false;
  }
  }
}
</script>

<style scoped>
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

