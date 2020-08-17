<template>
<div>
  <template v-for="(data,index) in morning">
  <li
  :key="index">
   <p>日付:{{data.date.toDate().toLocaleString()}}</p>
   <p>朝食:{{data.morning}}</p>
   <p>昼食:{{data.lunch}}</p>
   <p>夕食:{{data.dinner}}</p>
  </li>
  </template>
</div>
  
</template>

<script>
import {dbMenus} from "@/db"
export default {
  data(){
    return {
      morning:null
  }
  },

  async created(){
     const snapShot =  await dbMenus.get()
      // snapShot.forEach((doc)=>{
      //   console.log(doc.data());
      //   this.morning=doc.data()
      // })
      const array = snapShot.docs.map((doc)=>{
        return doc.data();
      })
        this.morning=array;
      console.log(array);
  }

}
</script>

<style>

</style>