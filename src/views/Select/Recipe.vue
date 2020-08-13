<template>
  <div class="profile">
    <RecipeForm 
    :typing="SeachRecipe"
    />
    <ul class="incliment-list">
  <template v-for="(select,index) in selectInfo"
  >
  <li :key="index">
    <a :href="select.categoryUrl">
    {{select.categoryName}}
    </a>
    </li>
  </template>

    <template   v-for="(recipe,index) in recipeLists" >
      <li :key="index"
      :v-if="recipeLists!==null">
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
      menuInfo: null,
      selectInfo:null,
      recipeLists:null,
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
   SeachRecipe(input){
     const hitRecipe = this.menuInfo.filter(menuList =>{
       if(input===""){
         return
       }
       return menuList.categoryName.includes(input)
     })
     this.recipeLists= hitRecipe;
     this.selectInfo=""
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
    height: 600px;
    width: 700px;
        display: flex;
        flex-direction: column;
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