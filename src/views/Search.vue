<template>
 <div class="wrapper">
   
  <div class="left">
    <transition name="search">
     <router-view></router-view>
   <Rank v-if="searchTop"/>
    </transition>
  </div>
  <div class="right">
   <List class="list"/>
  </div>
</div>
</template>
<script>
import Rank from "@/components/Rank.vue"
import List from "@/components/List.vue"
export default {
components:{
  List,
  Rank
  },
data(){
  return{
    searchTop:true,
    drawer: false
  }
},
methods:{
 createSearchTop(){
  if(this.$route.path==="/search"){
     this.searchTop=true;
   }else{
     this.searchTop=false;
      }
  },
  
},
watch:{
  '$route': 'createSearchTop',
  }
}
</script>

<style scoped>
.search-enter-active {
  transition: opacity 1s;
}
.search-enter{
  opacity: 0;
}
.search-leave{
  opacity: 0;
}


.left{
  width: 50%;
  margin-left: 80px;
}
.right{
  width: 50%;
  height: 100%;
  position: absolute;
  top: 20px;
  right: -150px;
}
.wrapper{
  position: relative;
  margin: 0 auto; 
  padding-top: 20px;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>