<template>
<!-- <v-app> -->
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      hide-default-footer
    >

      <template v-slot:default="props">
        <v-form>
          <v-text-field 
          label="morning"
          v-model="morning"
          ></v-text-field>
          <v-text-field 
          label="lunch"
          v-model="lunch"
          ></v-text-field>
          <v-text-field 
          label="dinner"
          v-model="dinner"
          ></v-text-field>
        <div class="form_wrapper">
          <v-btn
            @click="saveMenu({morning,lunch,dinner})"
          >送信
          </v-btn>
         <transition>
          <p v-if="formValidate" class="alart">入力してください</p>
        </transition>
        </div>
        </v-form>

        <v-row class="card-list">
          <v-col
            class="card"
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{item.date}}
                <v-spacer></v-spacer>
                <Dialog 
                @updated="update(item.date)"
                :setData="(item)"
                />
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
    <!-- </v-app> -->
</template>
<script>
import Dialog from "@/components/Dialog.vue"
  import {dbMenus} from "@/db"
   import firebase from "firebase"
  export default {
    components:{
      Dialog
    },
    data () {
      return {
        today:new Date(),
        formValidate:false,
        morning:null,
        lunch:null,
        dinner:null,
        itemsPerPageArray: [7, 14, 31],
        search: '',
        page: 1,
        itemsPerPage: 7,
        sortBy: 'name',
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
      async saveMenu({morning,lunch,dinner}){
        if((morning||lunch||dinner)===null){
          this.formValidate=true;
          setTimeout(()=>{
            this.formValidate=false;
          },3000)
          return
          }
        try{
      const postData = {
       morning,
      lunch,
      dinner,
      date:firebase.firestore.FieldValue.serverTimestamp()
    }
      await dbMenus.add(postData);
      this.fetchMenu();
      this.morning=null
      this.lunch=null
      this.dinner=null
        }catch(error){
          alert(error.messege);
        }
      },
      async update(updateDate){
        const stateMenus = this.fetchHoldMenu
        const snapShot =  await dbMenus.orderBy('date').get()
         const getMenuArray =  snapShot.docs.map((doc)=>{
           return doc.data();
         });
         const findDate = getMenuArray.find(arr =>{
           return arr.date.toDate().toLocaleDateString()===updateDate
         })

        const updateDay = await dbMenus.where('date','==',findDate.date).get()
        const id = updateDay.docs[0].id

        await dbMenus.doc(id).update(
          {morning:stateMenus.morning,
          lunch:stateMenus.lunch,
          dinner:stateMenus.dinner});

        this.fetchMenu()
        this.$store.commit("initialMenu");

      },
      async fetchMenu(){
        const snapShot =  await dbMenus.orderBy('date').get()
         const getMenuArray =  snapShot.docs.map((doc)=>{
           return doc.data();
         });
         getMenuArray.forEach(arr =>{
           return arr.date = arr.date.toDate().toLocaleDateString()
         })
         this.items=getMenuArray.reverse();

      }
    },
   created(){
      this.fetchMenu();
  }
  };
</script>

<style scoped>
.form_wrapper{
  display: flex;
}
.card-list{
  display: flex;
  flex-direction: column;
}
.card{
  width: 100%;
}
.v-input{
  width: 200px;
}
.alart{
  color: red;
  margin-left: 20px;
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-out;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}
</style>