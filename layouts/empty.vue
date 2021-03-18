<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<script>
import messages from '@/utils/errMessages.js'
export default {
  computed: {
    error(){
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError){
      console.log(fbError);
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    display: flex
    flex-direction: column
    align-items: center
    padding-top: 5rem
</style>