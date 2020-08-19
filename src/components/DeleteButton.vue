<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    > Delete</v-btn>
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
 import {dbMenus} from "@/db"
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props:{
      deleteDay:{
        type:Object

      }
    },
    methods:{
     async deleteMenu(){
        const snapShot =  await dbMenus.orderBy('date').get()
         const getMenuArray =  snapShot.docs.map((doc)=>{
           return doc.data();
         });
         const findDate = getMenuArray.find(arr =>{
           return arr.date.toDate().toLocaleDateString()===this.deleteDay.date
         })
        const updateDay = await dbMenus.where('date','==',findDate.date).get()
        const id = updateDay.docs[0].id
        await dbMenus.doc(id).delete()
        this.$emit("fetchDelete")

      }
    }
  }
</script>