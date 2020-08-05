<template>
  <div class="profile">
    <Form 
    :onclick="serchFood"/>
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
      menuInfo: null
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
    serchFood(input,checked){
      alert([input,...checked])
    },
    bindingCategory(result){
     const large = result.large;
     const medium = result.medium;
     const small = result.small;
     const  allCategories = [...large,...medium,...small];
    //  console.log(allCategories);
     this.selectedCategory(allCategories)
   },
   selectedCategory(allCategories){
     const selectedCategory = allCategories.filter(category => {
       return category.categoryName.includes('味噌')
     });
     this.info= selectedCategory;
       console.log(selectedCategory);
   }
  }

}
</script>

<style>

</style>