<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h1>新規登録</h1>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="6"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate; signUp()"
    >
      新規登録
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
   
 
  </v-form>

</template>
<script>
import firebase from 'firebase'

  export default {
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) 
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },

      async signUp() {
        try{
          await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          this.$store.commit("authStateChanged")
          this.$router.push('/search')
          alert("登録ありがとうございます！")
        }catch(error){
          alert(error.message)
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
</style>