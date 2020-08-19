<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="setAlreadyMenu"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Menu</span>
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
          <v-btn color="blue darken-1" text @click="upDate(); dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props:{
      setData:{
        type:Object
      },
      
    },
    data: () => ({
      dialog: false,
      morning:null,
      lunch:null,
      dinner:null
    }),
    methods:{
       setAlreadyMenu(){
        this.morning=this.setData.morning
        this.lunch=this.setData.lunch
        this.dinner=this.setData.dinner
      },
      upDate(){
        const payload = 
           { morning: this.morning ,
           lunch: this.lunch ,
            dinner: this.dinner };
        this.$store.commit("holdMenu",payload);
        this.$emit("updated")
        this.morning=null,
        this.lunch=null,
        this.dinner=null
      }
    }
   
  }
</script>
