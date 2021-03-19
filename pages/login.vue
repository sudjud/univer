<template>
  <el-container>
      <el-form :model="loginForm">
      <el-form-item prop="text">
        <h1>Login</h1>
        <el-input
          type="email"
          v-model="loginForm.email"
          autocomplete="off"
          placeholder="Email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          placeholder="Password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">Login</el-button>
        <nuxt-link to='/'>Go to home</nuxt-link>
      </el-form-item>
    </el-form>
    
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        pass: ""
      }
    }
  },
  layout: 'empty',
  methods: {
    async onSubmit(){
      const formData = {
        email: this.loginForm.email,
        pass: this.loginForm.pass
      }
      try {
        await this.$store.dispatch('login', formData)
      } catch (e) {}
      
    }
  }
}
</script>

<style lang="sass" scoped>
  form
    width: 600px
  .el-container
    margin-top: 100px

</style>

