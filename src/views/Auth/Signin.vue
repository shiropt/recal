<template>
  <v-form
    v-model="valid"
    lazy-validation
  >
  <h1>ログイン</h1>
   <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      prepend-icon="mdi-email"
    ></v-text-field>

    <v-text-field
    type="password"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
      prepend-icon="mdi-lock"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="warning"
      class="mr-4"
      outlined
      @click="validate; signIn()"
    >
      ログイン
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      outlined
      @click="validate; gestSignIn()"
    >
      ゲストログイン
    </v-btn>
    <p>{{errorMessage}}</p>
  </v-form>

</template>
<script>
import firebase from 'firebase'
  export default {
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => /^[A-Za-z0-9]*$/.test(v),
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      errorMessage:null
    
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
  
      async signIn(){
        this.$store.commit("loading");
        try{
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          this.$store.commit("authStateChanged")
         this.$router.push('/search/recipe')
        }catch(error){
          this.errorMessage=error.message
          this.$store.commit("loaded");
        }
      },
      async gestSignIn(){
        this.$store.commit("loading");
        this.password="testpass"
        this.email="recal@test.ne.jp"
        try{
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          this.$store.commit("authStateChanged")
         this.$router.push('/search/recipe')
        }catch(error){
          this.errorMessage=error.message
          this.$store.commit("loaded");
        }
      }
    },
  }
</script>

<style scoped>
.v-form{
  width: 90%;
  margin: 0 auto;
  height: 300px;
}
h1 {
  position: relative;
  padding: 0.25em 0;
  text-shadow: 1px 1px 0 rgba(0,0,0,.5);
}
h1:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
  background: linear-gradient(to right, rgb(255, 186, 115), #ffb2b2);
}
p{
  color: red;
}
</style>