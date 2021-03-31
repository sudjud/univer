<template>
  <div>
    <div class="container">
      <h1>{{ pageTitle }}</h1>

      <ul>
        <li v-for="user of users" :key="user.id">
          <a href="#" @click.prevent="goTo(user)">{{ user.name }} | ({{user.email}})</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      pageTitle: 'Пользователи'
    }
  },

  computed: {
    users(){
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>