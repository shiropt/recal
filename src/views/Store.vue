<template>
  <div class="profile">
    <h1>外食先を選ぶ</h1>
    <!-- <Form
    menu="外食先"/> -->

  </div>
</template>

<script>
const axios = require('axios').default;
import "axios"
// import Form from "@/components/Form.vue"

export default {
  // components:{
  //   Form
  // },
  data(){
    return{
      storeInfo:null
    }

  },
  async mounted(){
    try{
      const storeRes = await axios
      .get("https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=720039c5c559d5c97319281d7cc3e669", {
          params: {
            freeword:"SAMA"

          }})
     await  console.log(storeRes)
      // this.rankInfo= rankRes.data.result;
    }catch(error){
      alert(error.message)
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

