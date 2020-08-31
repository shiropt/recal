<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
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
                <Dialog
                :setData="item"
                :saveData ="getUpdateIndex(index)"
                btnTitle="編集"
                />
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
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
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
          <v-spacer></v-spacer>
          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
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
      fetchHoldMenu(){
      return this.$store.state.menus
    },
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
        return ()=>{
          const updateDay = this.items[index].date
          this.saveUpdateMenu(updateDay)
        }
     },
     async saveUpdateMenu(updateDay){
        const stateMenus = this.fetchHoldMenu
        const dbUserMenus = this.$store.state.dbMenu
        const menus = await dbUserMenus.get()
        const myMenu = menus.docs.map(doc => doc.data())
        const findUpdateDate = myMenu.find(arr =>{
         return arr.date.toDate().toLocaleDateString()===updateDay
         })
        this.$store.commit("loading");
        const upday = await dbUserMenus.where('date','==',findUpdateDate.date).get()
        const id = upday.docs[0].id
        await dbUserMenus.doc(id).update(
          {
           morning:stateMenus.morning,
           lunch:stateMenus.lunch,
           dinner:stateMenus.dinner
           });
        this.$store.dispatch("fetchMenu")
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
.card{
  width: 70%;
}
.v-input{
  width: 200px;
}
.alart{
  color: red;
  margin-left: 20px;
}
.mt-2{
  width: 70%;
}
</style>