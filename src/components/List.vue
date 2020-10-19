<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
      <template v-slot:header>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">表示件数</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
          text
          @click="formerPage"
          >
          &lt;次の週
          </v-btn>
          <v-btn
           text
           @click="nextPage">
          前の週&gt;
          </v-btn>
        </v-row>
      </template>
      <template v-slot:default="props">
        <v-row class="card-list">
          <transition-group name="list">
          <v-col
            class="card"
            v-for="(item,index) in props.items"
            :key="index"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{item.date}}
                <v-spacer></v-spacer>
                <div class="edit-wrap">
                <Dialog
                :setData="item"
                :saveData ="getUpdateIndex(index)"
                btnTitle="編集"
                class="edit-btn"
                />
                </div>
                <DeleteButton
                :deleteDay="(item)"
                @fetchDelete="fetchMenu" />
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content>{{ key }}:</v-list-item-content>
                  <v-list-item-content>{{ item[key] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
      </transition-group>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import Dialog from "@/components/Dialog.vue"
import DeleteButton from "@/components/DeleteButton.vue"
import firebase from "firebase"

export default {
    components:{
      Dialog,
      DeleteButton
    },
    data () {
      return {
        user: firebase.auth().currentUser,
        morning:null,
        lunch:null,
        dinner:null,
        itemsPerPageArray: [7, 14, 31],
        page: 1,
        itemsPerPage: 7,
        keys: [     
          'morning',
          'lunch',
          'dinner',
        ],
        items: [
          {
            morning: null,
            lunch:null,
            dinner: null,
          },
        ],
        everydayMenu:this.$store.state.everydayMenu
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },

      async fetchMenu(){
        this.items= this.$store.state.everydayMenu  
      },

      getUpdateIndex(index){
        // 編集する投稿のインデックス番号をクロージャを使って取得
        return ()=>{
          const updateDay = this.items[index].date
          this.saveUpdateMenu(updateDay)
        }
     },
     async saveUpdateMenu(updateDay){
        this.$store.commit("loading");
        const stateMenus = this.$store.state.menus
        // ログインユーザーのmenus collectionをstateから取得
        const dbUserMenus = this.$store.state.dbMenu
        const menus = await dbUserMenus.get()
        // firestoreからmenusのドキュメントを取得
        const myMenu = menus.docs.map(doc => doc.data())
        // 選択した日付と同じdateを持つドキュメントを変数に格納
        const findUpdateDate = myMenu.find(arr =>{
         return arr.date.toDate().toLocaleDateString()===updateDay
         })
        //  firestoreから更新する日付と一致したドキュメントを取得
        const upday = await dbUserMenus.where('date','==',findUpdateDate.date).get()
        // 取得したドキュメントのidを変数に格納
        const id = upday.docs[0].id
        // menus collectionの取得したidと一致するドキュメントを更新
        await dbUserMenus.doc(id).update(
          {
           morning:stateMenus.morning,
           lunch:stateMenus.lunch,
           dinner:stateMenus.dinner
           });
        //再読み込み 
        this.$store.dispatch("fetchMenu")
        //stateのmenusを空にする
        this.$store.commit("initialMenu");
     }
    },
   created(){
      this.$store.dispatch("fetchMenu")
  },
   updated(){
    this.$store.commit("loaded");
  },
  watch:{
      '$store.state.everydayMenu': 'fetchMenu'
    }
  };
</script>
<style scoped>
.card{
  width: 80%;
  margin-left: 40px;
}
@media (max-width: 750px){
  .card{
  width: 100%;
  margin: 0;
}
  
}
.list-move{
  transition: 1s;
}
.list-enter-active {
  transition: opacity 1s;
}
.list-enter{
  opacity: 0;
}
.list-leave{
  opacity: 0;
}
.form_wrapper{
  display: flex;
}
.card-list{
  display: flex;
  flex-direction: column;
}
.v-input{
  width: 200px;
}
.alart{
  color: red;
  margin-left: 20px;
}
.edit-btn{
  width: 0%;
  display: block;
}
.v-btn{
  color: gray;
}
</style>