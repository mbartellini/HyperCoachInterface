<template>
  <v-card
      v-on:click="apiCall()"
      elevation="6"
      max-width="300"
      class="rounded-card"
  >
    <v-card-title class = "justify-center">
      <slot>None</slot>
    </v-card-title>

  </v-card>
</template>

<script>
export default {
  name: "CycleCard",
  props: ['cycle'],
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>