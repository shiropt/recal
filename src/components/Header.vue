<template v-slot:header>
        <v-toolbar
          dark
          color="orange"
        >
        <v-toolbar-title>
      <router-link to="/" class="title" tag="h1" >Recal</router-link>
   </v-toolbar-title>
     
   <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            flat
            solo-inverted
            hide-details
            label="Search"
          ></v-text-field>
         
   <v-spacer></v-spacer>
      <router-link to="/login" >Logout</router-link>
   <v-spacer></v-spacer>
      

        </v-toolbar>
      </template>
      
      
      <script>
      export default {
         data(){
            return {
               search:""
         }
      
      }
      }
      </script>
      
      <style>
      
      </style>