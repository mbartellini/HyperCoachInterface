<template>
  <v-card
      elevation="6"
      max-width="500"
      class="rounded-card pb-3"
  >
    <v-card-title class = "d-flex justify-space-around flex-xs-column flex-sm-column flex-md-row secondary mb-3 white--text">
      <p class="my-0">{{cycle}}. {{cycle.name}}</p>
      <v-spacer/>
      <p class="my-0">Repeticiones: {{cycle.repetitions}}</p>
    </v-card-title>

    <v-row
        v-for="(exercise, i) in cycle.exercises"
        :key="i"
    >
      <v-divider class="mx-5"></v-divider>
      <v-card-text class="mx-auto py-0" dense>
        <v-row class="pa-0">
          <v-col>
            <v-card-text class="textSize">
              {{getExerciseName(i)}}
            </v-card-text>
          </v-col>
          <div>
            <v-col><v-card-text class="textSize">{{exercise.limit}} {{exercise.limitType}}</v-card-text></v-col>
          </div>
        </v-row>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CycleCard",
  props: {
    cycle: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
  }),
  methods: {
    getExerciseName(id) {
      return "Ejercicio " + id
    }
  }
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