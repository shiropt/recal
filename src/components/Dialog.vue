<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="onClick"
        >
        {{btnTitle}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{btnTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="morning*" v-model="morning"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="lunch*" v-model="lunch"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="dinner*" v-model="dinner" ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="clickSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props:{
      btnTitle:{
        type:String,
        required:true
      },
      saveData:{
        type:Function

      },
      setData:{
      type:Object
      }
    },
    data() {
      return{
        morning:null,
        lunch:null,
        dinner:null,
        dialog: false,
      }
    },
    methods:{
      onClick(){
        if(this.setData !==undefined){
          this.setAlreadyMenu()
        }
      },
      setAlreadyMenu(){
        const editMenu = this.setData
        this.morning=editMenu.morning
        this.lunch=editMenu.lunch
        this.dinner=editMenu.dinner
      
      },
     clickSave(){
         const payload = {
           morning: this.morning ,
           lunch: this.lunch ,
           dinner: this.dinner 
           };
        this.$store.commit("holdMenu",payload);
        this.saveData(payload)
        this.dialog = false
        this.morning=null,
        this.lunch=null,
        this.dinner=null
      },

    }
   
  }
</script>
