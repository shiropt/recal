<template>
 <div class="container">
   <div class="top-image">
        <img :src="imgPath" alt="TOPIMAGE" width="100%" height="100%">
        <div class="top-message">
          
          <h2 class="message">日々の食事を管理</h2>
          <h3 class="message">今日の献立はどうしよう、外食にする？</h3>
          <h3 class="message">
          迷った時にはRecalで検索！
          </h3>
        </div>

   </div>
       <div class="main">
         <transition name="auth">
         <router-view></router-view>
         </transition>
       <transition name="fade">
           <div v-if="initialAccess">
             <div class="description">
             <h2>Recalとは</h2>
             <p>あなたの食事内容を記録して管理します<br>
               また、食事を考える時にレシピや飲食店の検索ができるサイトです</p>
             </div>
             <div class="benefit">
               <h2>Recalで できること</h2>
               <div class="function-list">
                 <div class="function">
                   <p class="function-title">食事内容を記録</p>
                   <div class="function-description">
                     <p>朝食、昼食、夕食の内容を記録できます。是非毎日の食事内容を記録して栄養のバランスを考えるキッカケにしてみてください。</p>
                   </div>
                 </div>
                 <div class="function">
                   <p class="function-title">レシピを検索</p>
                   <div class="function-description">
                     <p>レシピの検索ができます。何を作ろうか迷った時にはピックアップメニューをチェック！</p>
                   </div>
                 </div>
                 <div class="function">
                   <p class="function-title">飲食店を検索</p>
                   <div class="function-description">
                     <p>外食をしようと思った時には飲食店を検索！目的の地域とフリーワードを入力して行きたいお店を探してみてください。
                     </p>
                   </div>
                 </div>

               </div>
             </div>

             
           </div>
         </transition>
        
       </div>
 </div>
</template>

<script>
  export default {
    data(){
      return{
        initialAccess:true,
        imgPath: require('@/assets/top.png')


      }
    },
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
.description {
  width: 100%;
  height: 200px;
  line-height: 50px;
  text-align: center;
  background: white;
  font-size: 1.2rem;
  font-weight:bold;
}
.top-message{
  width: 80%;
  height: 60%;
  padding-top: 20px;
  text-align: center;
  position:absolute;
  top: 25%;
  left:10%;
background-color: rgba(219, 197, 152, 0.5)
}
.message{
  color: #ffff;
    font-size: 1.8rem;
    font-family: sans-serif;
      text-shadow: 2px 2px 4px black;
      box-shadow: 1 1 1re
}
.function-list{
  display: flex;
  margin-top: 50px;
}
.function{
  width: 30%;
  margin: 0 30px;
}
.function-title{
  border: solid 3px orange;
  padding: 0.5em;
  border-radius: 0.5em;

}
.benefit{
  width: 100%;
  height: 350px;
  padding: 48px 0px;
  text-align: center;
  background-color: #edf2f5;

}
@media (max-width: 650px){
  .benefit{
    height: 550px;

  }
.function-list{
    flex-direction:column;
}
.function{
  width: 90%;
}
  .description{
    height: 100px;
    line-height: 30px;
    font-size: 16px;
  }
  .container{
    display: flex;
    flex-direction:column;
    text-align: center;
    }
  .top-message{
  width: 90%;
  height: 80%;
  top: 5%;
  left:5%;
}
  .message{
    font-size: 1.5rem;

}
}
@media (max-width: 480px){
  .message{
        font-size: 1rem;
  }
   .description{
    font-size: 12px;
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

.title:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
  background: linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
}
.container{
  max-width: 100%;
  padding: 0;
  margin: 0;
 
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

.top-image{
  opacity: 0.8;
    position: relative;

}
li{

list-style: none;
}
</style>