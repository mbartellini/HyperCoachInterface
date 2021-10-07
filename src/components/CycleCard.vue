<template>
  <v-card
      v-on:click="apiCall()"
      elevation="6"
      max-width="300"
      class="rounded-card"
  >
    <v-img
        :src="img_src"
        height="170px"
    ></v-img>  <!-- Make it variable so that it does not break in small screens. -->
    <v-card-title class = "justify-center">
      <slot>None</slot>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "CycleCard",
  props: ['img_src', 'apiCall'],
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>