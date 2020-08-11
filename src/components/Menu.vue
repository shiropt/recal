<template>
  <div class="day-menu">
    <div class="date">
    <p>{{date}}</p>
    </div>
    <ul class="right-contents">
      <li class="morning">
        <p>朝</p> <br>
        <p>{{morningMenu}}</p>
      </li>
      <li class="morning">
        <p>昼</p> <br>
        <p>{{lunchMenu}}</p>
      </li>
      <li class="morning">
        <p>夜</p> <br>
        <p>{{dinnerMenu}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    morningMenu:{
      type:String,
      required:true
    },
    lunchMenu:{
      type:String,
      required:true
    },
    dinnerMenu:{
      type:String,
      required:true
    },
    date:{
      type:String,
      required:true
    }
  }

}
</script>

<style scoped>
.day-menu{
  height: 50px;
  display: flex;
  width: 70%;
   padding: 0.5em 1em;
    margin: 2em 0;
    color: #4a5e61;
    background: 			#EAE0E0;/*背景色*/
    border-top: solid 6px 	#3D2828;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32)
}
.day-menu:hover{
  box-shadow: none;
  border-bottom-color: transparent;
  transform: translateY(0.1875em);
  transition: 0.4s;
}
.date{
  line-height: 50px;
  width: 30%;

}
.day-menu p {
    margin: 0; 
    padding: 0;
}
.right-contents{
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 40px;
  margin-top: 0px;
  width: 70%;
}
.morning{
  width: 50%;
  list-style: none;
  margin: 0;
}
</style>