<template>
  <el-container>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Меню</a>
       <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/">Главная</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Пользователи</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about" v-if="isAuth">О нас</nuxt-link>
          </li>
          <li class="nav-item" v-if="isNotAuth">
            <nuxt-link active-class="active" class="nav-link" to="/login">Войти</nuxt-link>
          </li>
           <li class="nav-item" v-if="isNotAuth">
            <nuxt-link active-class="active" class="nav-link" to="/signup">Зарегестрироваться</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" @click.prevent="logout" href="#">Выйти</a>
          </li>
        </ul>
        <div class="">Здравствуйте</div>
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