<template>
    <v-card
        elevation="6"
        max-width="200"
        class="rounded-card"
        :to="{ name: 'ExerciseDetail', params: {
          id: 0
        }}"
    >
      <v-img
          :src="exercise.metadata.img_src"
          height="114px"
      ></v-img>  <!-- Make it variable so that it does not break in small screens. -->
      <v-card-title class="justify-center" max-width="200">
        {{ exercise.name }}
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: {
    exercise: Object,
  },
  data: () => ({
  }),
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>