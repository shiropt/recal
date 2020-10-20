<template>
<div class="pickup-menu">
  <div class="title">
   <h3>ピックアップメニューから探す</h3>
  </div>
  <ul>
  <template v-for="(rank,index) in pickupMenu">
  <li :key="index">
    <v-card
    class="mx-auto clearfix"
    max-width="700"
  >
    <v-img
    class="white--text align-end"
      img :src="rank.foodImageUrl"
      height="200px">
      <a :href="rank.recipeUrl" target="_blank">
    <v-card-title><strong class="recipe-title">{{rank.recipeTitle}}</strong></v-card-title>
    </a>
      </v-img>
    <v-card-text>{{rank.recipeDescription}}</v-card-text>
      <v-btn text class="recipe-url">
        <a :href="rank.recipeUrl" target="_blank" class="link">作り方を見る</a>
      </v-btn>
  </v-card>
  </li>
  </template>
  </ul>
</div>
</template>
<script>
const axios = require('axios').default;
import "axios"
export default {
  data(){
    return{
      pickupMenu:null,
    }
  },
async mounted () {
    try{
      const rankRes = await axios.get('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=10-276&applicationId=1081897308947815412')
      const rankArray = rankRes.data.result
      this.pickupMenu=rankArray
    }catch(error){
      alert(error.message)
    }
    }
}
</script>

<style scoped>
@media (max-width: 750px) {
  h2{
    font-size: 120%;
  }
  .recipe-title{

  font-size: 16px;
}
.v-card__text{
  padding: 4px;
  font-size: 0.8rem;
  line-height: 1rem;
}  
}
a{
  text-decoration: none;
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
h3{
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: #fffaf4;/*背景色*/
  border-left: solid 5px #ffaf58;/*左線（実線 太さ 色）*/
}
.title{
  margin-bottom: 30px;
  width: 80%;
  padding: 0px;
}
.recipe-title{
  text-decoration: none;
  color: #FFF;
  text-shadow: 1px 1px 0 rgba(0,0,0,.5);
}
ul{
  list-style: none;
  padding: 0px;
}
li{
  margin-bottom: 15px;
}
.recipe-url{
  float: right;
}
.v-btn:before{
  background: white;
}
.link{
    position: relative;
  display: inline-block;
  padding: 0.25em 1em;
  text-decoration: none;
  color: #FFF;
  background: #fd9535;
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  margin-top: 5px;
}
.link:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.pickup-menu{
  margin-top: 60px;
}
</style>