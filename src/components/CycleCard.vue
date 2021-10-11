<template>
  <v-card
      elevation="6"
      max-width="500"
      class="rounded-card pb-3"
  >
    <v-card-title class = "secondary mb-3 white--text">{{info.title}}</v-card-title>
    <v-row
        v-for="exercise in info.exercises"
        :key="exercise.position"
    >
      <v-divider class="mx-5"></v-divider>
      <v-card-text class="mx-auto py-0" dense>
        <v-row class="pa-0">
          <v-col><v-card-text class="textSize">{{exercise.title}}</v-card-text></v-col>
          <div>
            <v-col v-if="exercise.duration"><v-card-text class="textSize">{{exercise.duration}} segundos.</v-card-text></v-col>
            <v-col v-else><v-card-text class="textSize">{{exercise.repetitions}} repeticiones.</v-card-text></v-col>
          </div>
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
.textSize{
  align-content: end;
  font-size: medium;
}
</style>