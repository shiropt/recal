<template>
  <div class="profile">
    <Form 
    :onclick="selectedCategory"/>
    <ul>
  <template v-for="(select,index) in selectInfo"
  >
  <li :key="index">
    <a :href="select.categoryUrl">
    {{select.categoryName}}
    </a>
    </li>
  </template>
    </ul>
  </div>
</template>
<script>
const axios = require('axios').default;
import "axios"
import Form from "@/components/Form.vue"
export default {
  components:{
    Form
  },
    data(){
     return {
      menuInfo: null,
      selectInfo:null

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
     const  allCategories = [...large,...medium,...small];
    //  console.log(allCategories);
     this.menuInfo=allCategories;
   },
   selectedCategory(input,checked){
     const selectedCategory = this.menuInfo.filter(category => {
       return category.categoryName.includes(input||checked)
     });
     this.selectInfo=selectedCategory
   }
  }

}
</script>

<style>

</style>