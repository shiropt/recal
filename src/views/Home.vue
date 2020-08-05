<template>
  <div class="menu-list">
    <h2>最近のレシピ一覧</h2>
    <MenuList
    class="menu-list" />
  </div>
</template>

<script>
const axios = require('axios').default;
import "axios"
import MenuList from "@/components/MenuList.vue"
export default {
  components:{
    MenuList

  },
  async mounted(){
    try{
      const rankRes = await axios.get('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1019675112210690221')
      console.log(rankRes.data)
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
