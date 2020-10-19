<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <div class="logo"  @click="logoClick">Recal</div>
   </v-toolbar-title>
   <div class="flex-grow-1"></div>
    <div class="btn-list">
    <v-app-bar-nav-icon v-if="this.$store.state.user.authState" @click="clickList"></v-app-bar-nav-icon>
    </div>
    <div v-if="!this.$store.state.user.authState" class="first-btn-wrapper">
           <router-link :to="{name: 'Signup', params:{id:$route.params.id} }" tag="a" class="first-link">新規登録</router-link>
           
          <router-link :to="{name: 'Signin', params:{id:$route.params.id} }" tag="a" class="first-link">ログイン</router-link>
    </div>
<div 
 v-if="this.$store.state.user.authState"
  class="btn-wrapper">
  <v-btn text class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="a">レシピを見る</router-link>
  </v-btn>
  <v-btn text class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="a">外食する</router-link>
  </v-btn>
  <v-btn text class="mr-4">
   <router-link :to="{name: 'Search', params:{id:$route.params.id}}" tag="a">ピックアップ</router-link>
  </v-btn>
  <RecordButton
  btnTitle="記録する"
   :saveData ="saveMenu"
   color= text
   class="post-btn"
   :selectDay="true"
   @editDate="editDate"
   :editDay= editDay
  />
   <LogoutButton />
</div>
  </v-toolbar>
</template>
<script>
import moment from "moment";
import firebase from 'firebase'
import RecordButton from "@/components/RecordButton.vue"
import LogoutButton from "@/components/LogoutButton.vue"
export default {
 data(){
  return{
   user: firebase.auth().currentUser,
   editDay:null,

}
 },
 components:{
  RecordButton,
  LogoutButton
   },
 methods:{
   editDate(value){
     this.editDay=value

   },
   clickList(){
    this.$emit('showList')
   },
  async logout(){
    try{
      await firebase.auth().signOut()
      this.$store.commit("authState")
      this.$router.push('/')
   }catch(error){
      alert(error.message);
      }
    },
   async logoClick(){
      const user = await firebase.auth().currentUser;
      if(!user){
         this.$router.push('/')
         }else{
         this.$router.push('/search/recipe')
      }
   },
   async saveMenu(inputedMenus){
      try{
        //  ローディングアイコンを表示
         this.$store.commit("loading");
        // dateに指定がなければ当日の日付をfirebaseから取得して追加
        if(inputedMenus.date === null){
          inputedMenus.date = moment(new Date)._d
        }
        //  stateからmenuscollectionを取得
         const menus = this.$store.state.dbMenu
        //  stateから投稿済メニューを取得
         const postDays = this.$store.state.everydayMenu
        //  投稿をする日付のタイムスタンプ型を変換
           const time = moment(inputedMenus.date).format("YYYY/M/D");
        //  投稿する日付と過去の投稿で同じ日があるか検索
         const date = postDays.filter(postDay => {
         return postDay.date === time
        });
        this.editDay=null
        // 同じ日付で投稿がある場合、エラーメッセージ を表示し、処理を終了
      if(date.length>0){
        this.$store.commit("loaded");
        alert("この日は投稿済です。追加をする場合は編集をしてください")
        return
       }
      //  入力された情報をfirestoreに保存
     await menus.add(inputedMenus);
    // storeのfetchMenuを実行し、stateにfirebaseの情報を格納し、v-forでレンダリングする
       this.$store.dispatch("fetchMenu")
   }catch(error){
     alert(error.message)
   }
 },
}
}
</script>
<style scoped>
.v-btn.v-size--default {
    font-size: 1rem;
    height: 60px;
}
.logo{
    width: 100px;
    margin-left: 40px;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
    font-size: 1.8rem;

}
.first-btn-wrapper{
  width: 30%;
  display: flex;
}
.first-link{
  opacity: 0.8;
  height: 60px;
  line-height: 60px;
  font-size: 1.4rem;
  margin-left: 20px;
}
.btn-list{
    display: none;
  }
@media (max-width: 750px){
  .logo{
    margin-left: 10px;
  }
  .first-btn-wrapper{
    width: 50%;
  }
  .first-link{
font-size: 1rem;
  }
  .btn-wrapper{
    display: none;
  }
  .btn-list{
    display: block;
  }
}
.logout{
   margin-left: 30px;
}
a{
  line-height: 60px;
  display: block;
  height: 60px;
  text-decoration: none;
}
.post-btn{
  display: inline-block;
  margin-left: 8px;
  height: 60px;
}
.btn-wrapper{
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-align-last: left;
}
.v-application a{
  display: block;
  color: white;

}
.first-link:hover{
  opacity: 1;
}
</style>