<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text
          v-bind="attrs"
          v-on="on"
        > 記録する</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{btnTitle}}</span>
          <Datepicker
          v-if="this.selectDay"
          :format="DatePickerFormat"
           v-model="date"
           placeholder= "日付を選択"
           class="datepicker"
           ></Datepicker>
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
              <div class="validMessage">
                <p>1つ以上の入力が必要です</p>
                <p v-if="formCheck" class="alartMessage">入力してください</p>
              </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="close-btn" @click="closeForm">Close</button>
          <button class="save-btn"  @click="clickSave">Save</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
  export default {
    components:{
      Datepicker
    },
    props:{
      color:{
        type:String,
        default:"success"
      },
      btnTitle:{
        type:String,
        required:true
      },
      saveData:{
        type:Function

      },
      setData:{
      type:Object
      },
      selectDay:{
        type:Boolean,
        default:false
      },
      editDay:{
        type:Date
      }
    
    },
    data() {
      return{
        morning:null,
        lunch:null,
        dinner:null,
        dialog: false,
        formCheck:false,
        DatePickerFormat: 'yyyy-MM-dd',
      }
    },
    computed:{
      date:{
        get(){
          return this.$props.editDay
        },
        set(value){
          this.$emit("editDate",value)
        }
      }

    },
    methods:{
     
     clickSave(){
      //  入力された情報をオブジェクトに格納
         const payload = {
           morning: this.morning ,
           lunch: this.lunch ,
           dinner: this.dinner,
           date:this.editDay
           };
      //  フォームが全て未入力の場合formValidationメソッドを実行して処理を終了
           if(Object.values(payload).every(value => value ===null)){
             this.formValidation()
             return
           }
        this.$store.commit("holdMenu",payload);
      // propsのsaveDataメソッドを実行
        this.saveData(payload)
        this.dialog = false
        this.morning=null,
        this.lunch=null,
        this.dinner=null
        this.formCheck=false
      },
      formValidation(){
        // エラーメッセージの表示
        this.formCheck=true
      },
      closeForm(){
        // ダイアログを閉じる
        this.dialog=false
        // エラーメッセージを消す
        this.formCheck=false
      },
    },
  }
</script>
<style scoped>
.validMessage{
  display: flex;
}
.v-btn.v-size--default {
  font-size: 1rem;
  width: 100%;
  height: 60px;
}
.alartMessage{
  color: red;
  margin-left: 40px;
}
.close-btn,.save-btn{
  margin: 10px;
  font-size: 20px;
  color:#0055f4;
}
.datepicker{
  margin-left: 30px;
  cursor: pointer;
}
</style>