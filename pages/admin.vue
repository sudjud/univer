<template>
  <div class="main">
    <div class="container">
      <h1>ADMIN PAGE</h1>
      <h3>{{ reqInfo }}</h3>
    </div>
  </div>
</template>


<script>
export default {
  computed:{
    reqInfo(){
      return this.$store.getters['request/reqInfo']
    },
    sdsd(){
      console.log(reqInfo());
    }
  }
}
</script>