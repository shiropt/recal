<template v-slot:header>
  <v-toolbar  dark color="orange">
   <v-toolbar-title>
      <v-btn text x-large width="100px" height="100px"  @click="logoClick">Recal</v-btn>
   </v-toolbar-title>
   <div class="flex-grow-1"></div>
    <div class="btn-list">
    <v-app-bar-nav-icon v-if="this.$store.state.user.authState" @click="clickList"></v-app-bar-nav-icon>
    </div>
<div  v-if="this.$store.state.user.authState" class="btn-wrapper">
  <v-btn color="success" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="a">レシピを見る</router-link>
  </v-btn>
  <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="a">外食する</router-link>
  </v-btn>
  <v-btn color="#FF3D00" class="mr-4">
   <router-link :to="{name: 'Search', params:{id:$route.params.id}}" tag="a">ピックアップ</router-link>
  </v-btn>
  <Dialog
  btnTitle="記録する"
   :saveData ="saveMenu"
   color="#0055f4"
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
import Dialog from "@/components/Dialog.vue"
import LogoutButton from "@/components/LogoutButton.vue"
export default {
 data(){
  return{
   user: firebase.auth().currentUser,
   editDay:null,

}
 },
 components:{
  Dialog,
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
.btn-list{
    display: none;
  }
@media (max-width: 750px){
  .btn-wrapper{
    display: none;
  }
  .btn-list{
    display: block;
  }
}
.logout{
   margin-left: 30px;
   margin-right: 70px;
}
a{
  line-height: 32px;
  display: block;
  height: 32px;
  text-decoration: none;
}
.post-btn{
  display: inline-block;
  margin-left: 8px;
}
.btn-wrapper{
  text-align: center;
  text-align-last: left;
}
.v-application a{
  display: block;
  color: white;

}
</style>