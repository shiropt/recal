<template>
  <v-row justify="center">
    <v-btn
      color="error"
      dark
      @click.stop="dialog = true"
    > 削除</v-btn>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">削除しますか?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false; deleteMenu()"
          > 削除</v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          > 中止</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
 import {dbUsers} from "@/db"
 import firebase from "firebase"
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props:{
      deleteDay:{
        type:Object

      },
    },
    methods:{
     async deleteMenu(){
       this.$store.commit("loading");
       const user = firebase.auth().currentUser
        const searchCurrentUser = await dbUsers.where("userId","==",user.uid).get()
        const currentUserId = searchCurrentUser.docs[0].id
        const menus = await dbUsers.doc(currentUserId).collection("menus").orderBy('date').get()
        const getMenuArray = menus.docs.map(doc => doc.data())
         const findDate = getMenuArray.find(arr =>{
           return arr.date.toDate().toLocaleDateString()===this.deleteDay.date
         })
       const updateDay = await dbUsers.doc(currentUserId).collection("menus").where('date','==',findDate.date).get()
       const id = updateDay.docs[0].id
       await dbUsers.doc(currentUserId).collection("menus").doc(id).delete()
         this.$emit("fetchDelete")
         this.$store.dispatch("fetchMenu")

      }
    }
  }
</script>