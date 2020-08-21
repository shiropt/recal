<template>
 <div class="container">
       <div class="side-bar">
        <h1>Recalへようこそ</h1>
        <h4>あなたの食事をRecalで管理しませんか？</h4>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn 
        color="success"
        class="mr-4"
        >
           <router-link :to="{name: 'Signup', params:{id:$route.params.id} }" tag="button">新規登録</router-link>
        </v-btn><br>
        <v-btn
        color="warning"
        >
          <router-link :to="{name: 'Signin', params:{id:$route.params.id} }" tag="button">ログイン</router-link>
          </v-btn>
       </div>

    
       <div class="main">
         <router-view></router-view>
           <div v-if="initialAccess" class="test">
             <h1>test</h1>
           </div>
        
       </div>
 </div>
</template>

<script>
  export default {
    data: () => ({
    initialAccess:true
    }),
    methods:{
      createTopPage(){
        if(this.$route.path==="/"){
          this.initialAccess=true;
        }else{
          this.initialAccess=false;
        }
      }
    },
    watch:{
      '$route': 'createTopPage'
    }
  }
</script>
<style scoped>
.container{
  display: flex;
  width: 100%;
  height: 100vh;
}
.side-bar{
  height: 100%;
  width: 40%;
}
.v-btn{
  margin-top: 38px;
}
.main{
  width: 100%;
  height: 100%;
}
.test{
  background: rgb(241, 203, 31);
  height: 100%;
}

</style>