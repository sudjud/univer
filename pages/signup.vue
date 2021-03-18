<template>
  <div class="container">
    <el-form :model="ruleForm" :rules="rules" status-icon label-width="120px">
      <el-form-item prop="login">
        <h1>Sign Up</h1>
        <el-input
          type="text"
          v-model="ruleForm.login"
          autocomplete="on"
          placeholder="Email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          placeholder="Password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          placeholder="Your name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signUpUser()">Submit</el-button>
        <nuxt-link to='/'>Go to home</nuxt-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      let re = /\S+@\S+\.\S+/;
      if(!re.test(value)){
        callback(new Error("Input correct email"))
      } else{
        callback()
      }
    }

    return {
      ruleForm: {
        login: "",
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        login: [{ validator: validateEmail, trigger: "blur" }]
      },
    };
  },
  methods: {
    async signUpUser(){
      const formData = {
        email: this.ruleForm.login,
        password: this.ruleForm.pass,
        name: this.ruleForm.name
      }
      try {
        await this.$store.dispatch('register/regUser', formData)
      } catch (e) {}
    }
  },
};
</script>

<style lang="sass" scoped>
form
  width: 600px
</style>