<template>
  <v-card
      elevation="6"
      max-width="300"
      class="rounded-card pb-3"
  >
    <v-card-title class = "secondary justify-center mb-3">{{info.title}}</v-card-title>
    <v-row
        v-for="exercise in info.exercises"
        :key="exercise.position"
    >
      <v-divider class="mx-5"></v-divider>
      <v-card-text class="mx-auto py-0" dense>
        <v-row class="pa-0">
          <v-col><v-card-text>{{exercise.title}}</v-card-text></v-col>
          <v-col v-if="exercise.duration"><v-card-text>{{exercise.duration}} segundos</v-card-text></v-col>
          <v-col v-else><v-card-text>{{exercise.repetitions}} repeticiones</v-card-text></v-col>
        </v-row>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CycleCard",
  props: ['info'],
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>