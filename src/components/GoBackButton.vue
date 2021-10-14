<template>
  <span class="go-back">
    <v-btn
        tile
        class="rounded-lg"
        color=primary
        @click="goBack"
    >
      <v-icon color="white" left>
        mdi-arrow-left
      </v-icon>
      <div class="text-decoration-underline">
      Volver
      </div>
    </v-btn>
  </span>
</template>

<script>
export default {
  name: "GoBackButton",
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  },
}
</script>

<style scoped>
</style>