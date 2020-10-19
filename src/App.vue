<template>
<v-app >
  <div class="wrapper">
   <Header class="header"
   @showList="showList"
   
   /> 

   <div class="menu">
     <Loading v-if="this.$store.state.loading"  class="loading"/>
     <transition appear>
       
   <router-view> </router-view>
     </transition>
     </div>   
  </div>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        right
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>
                <v-btn color="success" class="mr-4">
   <router-link :to="{name: 'Recipe', params:{id:$route.params.id} }" tag="a">レシピを見る</router-link>
  </v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                 <v-btn color="error" class="mr-4">
   <router-link :to="{name: 'Store', params:{id:$route.params.id}}" tag="a">外食する</router-link>
  </v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                 <v-btn color="orange" class="mr-4">
   <router-link :to="{name: 'Search', params:{id:$route.params.id}}" tag="a">ピックアップメニュー</router-link>
  </v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <Dialog
                  btnTitle="記録する"
                  :saveData ="saveMenu"
                  color="#0055f4"
                  class="post-btn"
                  />
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <LogoutButton class="logout"/>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Footer />
</v-app>
</template>
<script>
import firebase from 'firebase'
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Loading from "@/components/Loading.vue"
  import Dialog from "@/components/Dialog.vue"
  import LogoutButton from "@/components/LogoutButton.vue"
  import "normalize.css"
export default {
  data(){
    return{
      loading:true,
      drawer:false

      
    }
  },
  components:{
    Header,
    Loading,
    LogoutButton,
    Dialog,
    Footer
  },
  methods:{
    showList(){
      this.drawer=true
    },
     getToday(){
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()
    const today = `${y}/${m+1}/${d}`
    this.today = today

  },
   async saveMenu(inputedMenus){
      try{
         inputedMenus.date = firebase.firestore.FieldValue.serverTimestamp()
         const menus = this.$store.state.dbMenu
         this.$store.commit("loading");
         this.getToday()
         const day = this.$store.state.everydayMenu
         const date = day.filter(d => {
         return d.date ===this.today
        });
      if(date.length===1){
        this.$store.commit("loaded");
        alert("今日は投稿済です。追加をする場合は編集をしてください")
        return
       }
     await menus.add(inputedMenus);
     this.drawer=false
       this.$store.dispatch("fetchMenu")
   }catch(error){
     alert(error.message)
   }
 },
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
}
.wrapper{
  height:100%;
}

.menu{
  padding-top: 60px;
  width: 100vw;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 1;
}
a{
  line-height: 32px;
  width: 100%;
  display: block;
  height: 32px;
  text-decoration: none;
}
.post-btn{
  width: 100%;
  display: inline-block;
  margin-left: 0px;
}
.v-application a{
  display: block;
  color: white;

}
.v-btn{
  width: 100%;
}

</style>
 