<template>
  <div class="store">
    <StoreForm
    :inClick="searchStore"
    :formCheck="check"
    :clearForm="clearForm" />
    <div class="loading-message" v-if="initialSearch">
     <transition name="list-fade">
      <h3 v-if="loading">近くのお店</h3>
     </transition>
    </div>
    <transition-group tag="ul" name="list-fade" class="store-lists" v-if="initialSearch">
    <template v-for="(store,index) in nearStore">
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
       :budget= store.budget
       :pr = store.pr.pr_short
        />
      </li>
    </template>
    </transition-group>
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
       :budget= store.budget
       :pr = store.pr.pr_short
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
      nearStore:null,
      storeInfo:null,
      check:false,
      addStore:[],
      initialSearch:true,
      loading:false
      
    }

  },
  methods:{
    async fetchNearStore(latitude,longitude){
      const nearStore = await axios.get(
        "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=720039c5c559d5c97319281d7cc3e669", {
          params:{
            latitude,longitude
          }
        }
      )
      for(let i=0;i<10;i++){
        const storeImage = nearStore.data.rest
        if(storeImage[i].image_url.shop_image1===""){
          storeImage[i].image_url.shop_image1 = "https://corp.zaif.jp/wp-content/uploads/2017/01/noimage.png"

        }
      }
     
      // console.log(nearStore.data.rest[0].image_url.shop_image1==="");
      this.nearStore = nearStore.data.rest
      this.loading = true
    },
    async searchStore(freeword,address){
      this.initialSearch=false
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
  },
  created(){
    const crd = this.$store.state.user.crd
    this.fetchNearStore(crd.latitude,crd.longitude)
  }
}
</script>

<style scoped>
.loading-message{
  margin-bottom: 20px;
}
.list-fade-enter-active{
  transition: all .9s;

}
.list-fade-enter{
  transform: translateY(10px);
  opacity: 0;
}
.list-fade-leave-active{
  transition: all 2.9s;

}
.list-fade-leave{
  transform: translateY(10px);
  opacity: 0;
}
h3{
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: #fffaf4;/*背景色*/
  border-left: solid 5px #ffaf58;/*左線（実線 太さ 色）*/
}
.store{
  width: 90%;
}
.menu-list{
  width: 700px;
  margin: 0 auto;
}
li{
  list-style: none;
  margin-bottom: 15px;
}
</style>

