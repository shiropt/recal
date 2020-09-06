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
.left{
  width: 50%;
  margin-left: 80px;
}
.right{
  width: 50%;
  height: 100%;
  margin: 0;
}
@media (max-width: 750px){
  .wrapper{
    display: flex;
    flex-direction:column;
  
  }
  .left{
    width: 90%;
    margin-left: 10px;
  }
  .right{
    width: 100%;
  }
 
}
.search-enter-active {
  transition: opacity 1s;
}
.search-enter{
  opacity: 0;
}
.search-leave{
  opacity: 0;
}


.wrapper{
  position: relative;
  margin: 0 auto; 
  padding-top: 20px;
  display: flex;
  width: 100vw;
  height: 100%;
}
</style>