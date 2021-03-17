<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <h1>Login</h1>
        <div class="form-group">
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <input type="password" class="form-control">
        </div>
      <button class="btn btn-primary" type="submit">Login</button>
      </form>
      <nuxt-link to='/'>Go to home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit(){
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>

  

  form
    width: 600px

</style>

