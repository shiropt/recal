<template>
  <table border="1" class="store-info">
        <thead>
          <th class="store-name">{{name}}</th>
        </thead>
        <div class="wrapper">
    <div class="top-menu">
      <img :src="shop_image1" class="img" alt="NoImage">
      <p>ご予約はこちら</p>
        <a :href="url_mobile" class="link">スマホから</a>
        <a :href="url" class="link">パソコンから</a>
    </div>
      <div class="right-info">
          <tr class="address"><th>住所</th><td>{{address}}</td></tr>
          <tr class="holiday"><th>定休日</th><td>{{holiday}}</td></tr>
          <tr class="time"><th>営業時間</th><td>{{opentime}}</td></tr>
          <tr><th>TEL</th><td>{{tel}}</td></tr>
        <tr><th>最寄駅</th><td>{{station}}から{{walk}}分</td></tr>
      </div>

           </div>
  </table>
</template>

<script>
export default {
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
    }
  }

}
</script>

<style>
.store-info{
  width: 650px;
  height: 250px;
}
.wrapper{
  display: flex;
}
.store-name{
  font-size: 24px;
}
th{
  width: 40px;
}
.img{
  min-width: 200px;
  min-height: 150px;
  background: rgb(235, 232, 229);
  font-size: 32px;
}
.address{
  height: 50px;
}
.holiday{
  height: 80px;
}
.time{
  height: 140px;
}
.right-info{
  min-width: 440px;
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