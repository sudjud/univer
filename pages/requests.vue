<template>
  <div class="container">
    <!-- <div class="reqs">
      <ul class="reqs__ul">
        <li class="reqs__item" v-for="req in reqs" :key="req">

        </li>
      </ul>
    </div> -->
    <div v-if="isAuth" class="make-req">
      <el-form :model="reqForm">
        <el-form-item prop="text">
          <h1>Напишите ваше желание: </h1>
          <el-input
            type="text"
            v-model="reqForm.text"
            auto-complete="off"
            placeholder="Я хочу..."
          >
          </el-input>
          </el-form-item>
            <el-form-item prop="text">
          <h2>И расскажите пожалуйста, как дела?</h2>
          <el-input
            type="text"
            v-model="reqForm.question"
            auto-complete="off"
            placeholder="Пару слов туда-суда сделай тоже..."
          >
          </el-input>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">
              Отправить
            </el-button>
          </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <nuxt-link to="/login">Войдите в аккаунт</nuxt-link> или <nuxt-link to="/signup">зарегестрируйтесь</nuxt-link>, чтобы отправить заявку.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reqForm: {
        text: "",
        question: ""
      },
    };
  },
  methods:{
    onSubmit() {
      const reqData = {
        text: this.reqForm.text,
        question: this.reqForm.question
      };
      this.$store.dispatch('request/sendData', reqData)
    }
  },
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
    }
  },
};
</script>


<style lang="sass" scoped>

form
  width: 600px
  margin: 50px

</style>