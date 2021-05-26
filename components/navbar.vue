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
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/requests" v-if="!status & isAuth">Оставить заявку</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about" v-if="isAuth">О нас</nuxt-link>
          </li>
          <li class="nav-item" v-if="isNotAuth">
            <nuxt-link active-class="active" class="nav-link" to="/login">Войти</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" @click.prevent="logout" href="#">Выйти</a>
          </li>
        </ul>
        <div v-if="name">Мир вам, {{ name }}!</div>
        <div class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/admin" v-if="status">Панель администратора</nuxt-link>
        </div>
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
    },
    name(){
      try {
        return this.$store.getters['info/info'].name
      } catch (e) {}
    },
    status(){
      try {
        const st = this.$store.getters['info/info'].status
        if(st == "admin"){
          return true
        } else{ return false }
      } catch (e) {}
    }
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },

  },

}
</script>

<style lang="sass" scoped>

  nav
    width: 100%

</style>