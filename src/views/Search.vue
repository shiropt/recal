<template>
  <div class="profile">
    <Form 
    :incliment="inclimental"
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
    <ul>

    <template  v-for="(incl,index) in incling" >
      <li :key="index"
      :v-if="incling!==null">
       <a :href="incl.categoryUrl">
      {{incl.categoryName}}
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
      selectInfo:null,
      incling:null

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
     this.menuInfo=allCategories;
   },
   selectedCategory(input,checked){

     const selectedCategory = this.menuInfo.filter(category => {
       return category.categoryName.includes(input||checked)
     });
     this.selectInfo=selectedCategory
   },
   inclimental(input){
     const inclu = this.menuInfo.filter(inp =>{
       if(input===""){
         return
       }
       return inp.categoryName.includes(input)
     })
     this.incling= inclu;

       console.log(this.incling);
      
   }
  }

}
</script>

<style>
ul{
  display: flex;
  flex-wrap: wrap;
}
li{
  list-style: none;
  margin: 5px;
}

</style>