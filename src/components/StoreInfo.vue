<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      img :src="shop_image1"
    >
      <v-card-title><strong class="store-title">{{name}}</strong></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">住所</v-card-subtitle>
    <v-card-text class="text--primary">{{address}}</v-card-text>
    <div class="info-wrapper">
        <div>
          <v-card-subtitle class="pb-0">定休日</v-card-subtitle>
          <v-card-text class="text--primary">{{holiday}}</v-card-text>
      </div>
      <div>
          <v-card-subtitle class="pb-0">TEL</v-card-subtitle>
          <v-card-text class="text--primary">{{tel}}</v-card-text>
      </div>
    </div>

    <v-card-subtitle class="pb-0">最寄駅</v-card-subtitle>
    <v-card-text class="text--primary">{{station}}から{{walk}}分</v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
    <v-card-subtitle class="pb-0">ご予約はこちら</v-card-subtitle>
        <a :href="url_mobile" class="link">スマホから</a>
      </v-btn>

      <v-btn
        color="orange"
        text
      >
       <a :href="url" class="link">パソコンから</a>
      </v-btn>
       <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

    <v-card-subtitle class="pb-0">営業時間</v-card-subtitle>
        <v-card-text>{{opentime}}</v-card-text>
    <v-card-subtitle class="pb-0">予算</v-card-subtitle>
        <v-card-text>{{budget}}</v-card-text>
    <v-card-subtitle class="pb-0">お店の特徴</v-card-subtitle>
        <v-card-text>{{pr}}</v-card-text>
      </div>
    </v-expand-transition>
    
    
  </v-card>
</template>


<script>
export default {
  data(){
    return{
      show:false
    }
  },
  props:{
    shop_image1:{
      type:String,
      required:false
    },
    name:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    holiday:{
      type:String,
      required:true
    },
    opentime:{
      type:String,
      required:true
    },
    tel:{
      type:String,
      required:true
    },
    station:{
      type:String,
      required:true
    },
    walk:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    },
    url_mobile:{
      type:String,
      required:true
    },
    budget:{
      type:Number,
      required:true
    },
    pr:{
      type:String,
      required:true
    }
  }

}
</script>

<style scoped>
.store-title{
  text-shadow: 1px 1px 0 rgba(0,0,0,.5);

}
.v-image{
  background: gray;
}
.v-card__title{
  font-size: 24px;
}
.v-card__subtitle{
  padding: 0px;
}
.info-wrapper{
display: flex;
}

.link{
    position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #fd9535;/*背景色*/
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
margin-left: 3px;
}
.link:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
ul{
  list-style: none;
}


</style>