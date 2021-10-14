<template>
    <v-card
        elevation="6"
        max-width="200"
        class="rounded-card"
        :to="{ name: 'RoutineDetail', params: {
          id: routine.id
        }}"
    >
      <v-img
          :src="routine.metadata.img_src"
          height="114px"
      ></v-img>  <!-- Make it variable so that it does not break in small screens. -->
      <v-card-title class="justify-center" max-width="200">
        {{ routine.name }}
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: {
    routine: Object,
  },
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>