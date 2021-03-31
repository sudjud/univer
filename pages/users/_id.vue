<template>
  <div class="container">
    <h1>{{user.name}}</h1>
    <hr/>
    <b>{{user.email}}</b>
    <nuxt-link class="goback_link" to="./">Назад</nuxt-link>
  </div>
</template>

<style lang="sass" scoped>
.goback_link
  display: block
  margin-top: 50px

</style>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({params, error, store}){
    try{
      const user = await store.dispatch('users/fetchUserById', params.id)
      return {user}
    } catch(e){
      error(e)
    }
  }
}
</script>