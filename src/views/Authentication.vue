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
        >
           <router-link :to="{name: 'Signup', params:{id:$route.params.id} }" tag="a">新規登録</router-link>
        </v-btn><br>
        <v-btn
        color="warning"
        >
          <router-link :to="{name: 'Signin', params:{id:$route.params.id} }" tag="a">ログイン</router-link>
          </v-btn>
       </div>

    
       <div class="main">
         <transition name="auth">
         <router-view></router-view>
         </transition>
       <transition name="fade">
           <div v-if="initialAccess">
             <div class="title">
             <h1>Recalで出来る事</h1>
             </div>
             <ul>
               <li>
                 <h2>日々の食事の管理</h2>
                 <p>毎日の食事を記録して栄養のバランスを考えよう！</p>
               </li>
               <li>
                 <h2>献立を考える手助けをします</h2>
                 <p>毎日献立を考えるのは大変...</p>
                 <p>ピックアップメニューやレシピ検索を参考にしよう！</p>
               </li>
               <li>
                 <h2>外食もありかな？</h2>
                 <p>外食先もRecalで検索して探そう！</p>
               </li>
             </ul>
             <h2>是非Recalを活用して毎日の食事を楽しんでください！</h2>
           </div>
         </transition>
        
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
@media (max-width: 750px){
  .container{
    display: flex;
    flex-direction:column;
    text-align: center;
    }
  h1{
    font-size: 30px;
  }
}
@media (min-width: 751px){
  .side-bar{

    width: 700px;
  }
  .main{
    width: 100%;
  }
}
.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 0;
}

.auth-enter-active {
  transition: opacity 1s;
}
.auth-enter {
  opacity: 0;
}

 .title {
  position: relative;
  padding: 0.25em 0;
  text-shadow: 1px 1px 0 rgba(0,0,0,.5);
}
.title:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
  background: linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
}
.container{
  display: flex;
  margin: 2%;
}
.side-bar{
  height: 100%;
text-align: center;
}

.v-btn{
  margin-top: 38px;
  padding: 0px;
  
}


a {
  line-height: 32px;
  display: block;
  width: 100px;
  height: 32px;
  text-decoration: none;

}
.v-application a{
  color: white;

}

.main{
  height: 100%;
}

li{

list-style: none;
}
</style>