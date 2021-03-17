<template>
  <div>
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
  </div>
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
    logout(){
      this.$store.dispatch('logout')
    }
  },

}
</script>