<template>
  <span class="go-back">
    <v-btn
        fab
        color=primary
        @click="goBack"
    >
      <v-icon color="white">
        mdi-close
      </v-icon>
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