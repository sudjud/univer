<template>
  <div>
    <navbar />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<style>
</style>


<script>
import navbar from "@/components/navbar";

export default {
  components: {
    navbar,
  },
  async mounted(){
    await this.$store.dispatch('info/fetchInfo')
  },
  async isAdmin(){
    await this.$store.dispatch('fb/getEmail')
  }
};
</script>