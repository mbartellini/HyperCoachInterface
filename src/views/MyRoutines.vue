<template>
  <div>
    <h1>My Routines</h1>
    <button @click="routeNew">
      Press me
    </button>
  </div>
</template>



<script>
import router from "@/router";

export default {
  name: 'MyRoutines',

  components: {
  },

  data:() => ({
  }),

  methods: {
    async routeNew() {
      await router.push('/new_routine')
    }
  },
}
</script>

<style scoped>
</style>