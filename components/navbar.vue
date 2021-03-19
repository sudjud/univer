<template>
  <el-container>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Test</a>
       <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about" v-if="isAuth">About</nuxt-link>
          </li>
          <li class="nav-item" v-if="isNotAuth">
            <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
          </li>
           <li class="nav-item" v-if="isNotAuth">
            <nuxt-link active-class="active" class="nav-link" to="/signup">Signup</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" @click.prevent="logout" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </el-container>
</template>

<script>
export default {
  computed: {
    isAuth(){
      return this.$store.getters.isAuth
    },
    isNotAuth(){
      return this.$store.getters.isNotAuth
    }
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },

}
</script>

<style lang="sass" scoped>

  nav
    width: 100%

</style>