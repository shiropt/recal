<template>
  <div class="menu-list">
    <h2>飲食店を探す</h2>
    
</div>
</template>

<script>
// const axios = require('axios').default;
// import "axios"
export default {

  data(){
    return{
      rankInfo:null
    }

  },
  // async mounted(){
  //   try{
  //     const rankRes = await axios.get('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1019675112210690221')
  //     console.log(rankRes.data.result)
  //     this.rankInfo= rankRes.data.result;
  //   }catch(error){
  //     alert(error.message)
  //   }
  // }
}
</script>

<style>


</style>
