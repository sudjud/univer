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
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  }
};
</script>