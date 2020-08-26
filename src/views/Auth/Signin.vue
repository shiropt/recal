<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h1>ログイン</h1>
   <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="warning"
      class="mr-4"
      @click="validate; signIn()"
    >
      ログイン
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
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
      reset () {
        this.$refs.form.reset()
      },
      async signIn(){
        this.$store.commit("loading");
        try{
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          this.$store.commit("authStateChanged")
         this.$router.push('/search')
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