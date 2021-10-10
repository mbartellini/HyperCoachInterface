<template>
    <v-card
        elevation="6"
        max-width="200"
        class="rounded-card"
    >
      <v-img
          :src="img_src"
          height="114px"
      ></v-img>  <!-- Make it variable so that it does not break in small screens. -->
      <v-card-title class = "justify-center">
        <slot>None</slot>
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: ['img_src'],
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>