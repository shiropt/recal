<template>
  <div class="menu-list">
    <h2>最近のレシピ一覧</h2>
    <MenuList
    class="menu-list" />
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue"
export default {
  components:{
    MenuList

  }
}
</script>

<style>
.menu-list{
  width: 700px;
  margin: 0 auto;
}

</style>
