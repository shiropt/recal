<template>
  <div>
    <RecipeForm 
    :typing="seachRecipe"
    />
    <ul class="incliment-list">
    <!-- <v-btn @click="post" v-if="recipeLists!==null">登録</v-btn> -->
    <template   v-for="(recipe,index) in recipeLists" >
      <li :key="index"
      :v-if="recipeLists!==null">
      <!-- <input type="checkbox"
      :value="recipe.categoryName" 
      v-model="addMenu"> -->
       <a :href="recipe.categoryUrl">
      {{recipe.categoryName}}
      </a>
      
      </li>
    </template>
    </ul>
  </div>
</template>
<script>
const axios = require('axios').default;
import "axios"
import RecipeForm from "@/components/RecipeForm.vue"
export default {
  components:{
    RecipeForm
      },
    data(){
     return {
      addMenu:[],
      menuInfo: null,
      recipeLists:null,
      choised:[]
      }
  },
  async mounted () {
    try{
      const menuRes = await axios.get('https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&formatVersion=1&applicationId=1019675112210690221')

      this.bindingCategory(menuRes.data.result)
    }catch(error){
      alert(error.message)
    }
  },
  methods:{
    bindingCategory(result){
     const large = result.large;
     const medium = result.medium;
     const small = result.small;
     const allCategories = [...large,...medium,...small];
     this.menuInfo=allCategories;
   },
   seachRecipe(input){
     const hitRecipe = this.menuInfo.filter(menuList =>{
       if(input===""){
         return
       }
       return menuList.categoryName.includes(input)
     })
     this.recipeLists= hitRecipe;
   },
   post(){
     this.choised.push(this.addMenu)
     for(let i=0;i<this.choised.length;i++){
       console.log(this.choised[i]);
     }
      }
  }

}
</script>

<style scoped>
li{
  list-style: none;
  margin: 5px;
  max-width: 300px;
}
.incliment-list{
    width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
  margin: 0px;
  
}
a{
  text-decoration: none;
  color: black;
  padding: 5px;
}
a:hover{
  background:#fd9535;
  transition: 0.2s;
  color: white;
}
</style>