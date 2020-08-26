<template>
<v-app >
  <div >
   <Header class="header"/> 
   <div class="menu">
     <Loading v-if="this.$store.state.loading"  class="loading"/>
     <transition appear>
   <router-view> </router-view>
     </transition>
     </div>   
  </div>
</v-app>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Loading from "@/components/Loading.vue"
  import "normalize.css"
export default {
  data(){
    return{
      loading:true
    }

  },

  components:{
    Header,
    Loading
  }
  }
</script>

<style scoped>
.v-enter-active {
    transition: opacity 1s;
}
.v-enter {
    opacity: 0;
}
 
.v-leave {
    opacity: 0;
}
.loading{
  z-index: 999;
 position: absolute;
	top: 300px;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 25px 50px;
	color: #fff;
	text-align: center;
	/* width: 100%; */
}
.menu{
  padding-top: 60px;
  width: 100%;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 1;
}

</style>
 