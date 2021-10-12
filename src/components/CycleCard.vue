<template>
  <v-card
      elevation="6"
      max-width="500"
      class="rounded-card pb-3"
  >
    <v-card-title class = "d-flex justify-space-around flex-xs-column flex-sm-column flex-md-row secondary mb-3 white--text">
      <p class="my-0">{{routineCycle.order}}. {{routineCycle.name}}</p>
      <v-spacer/>
      <p class="my-0">Repeticiones: {{routineCycle.repetitions}}</p>
    </v-card-title>

    <v-row
        v-for="(exercise, i) in cyclesExercises.content"
        :key="i"
    >
      <v-divider class="mx-5"></v-divider>
      <v-card-text class="mx-auto py-0" dense>
        <v-row class="pa-0">
          <v-col>
            <v-card-text class="textSize">
              {{exercise.exercise.name}}
            </v-card-text>
          </v-col>
          <div>
            <v-col v-if="exercise.duration"><v-card-text class="textSize">{{exercise.duration}} segundos</v-card-text></v-col>
            <v-col v-else><v-card-text class="textSize">{{exercise.repetitions}} repeticiones</v-card-text></v-col>
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
    routineId: {
      type: Number,
      required: true,
    },
    cycleId: {
      type: Number,
      required: true,
    }
  },
  data: () => ({
    routineCycle: {
      "id": 1,
      "name": "Fast Warmup",
      "detail": "Fast Warmup",
      "type": "warmup",
      "order": 1,
      "repetitions": 1,
      "metadata": null,
    },
    cyclesExercises: {
      "totalCount": 1,
      "orderBy": "order",
      "direction": "asc",
      "content": [
        {
          "exercise": {
            "id": 1,
            "name": "A",
            "detail": "Fast Warmup",
            "type": "warmup",
            "date": 1620062203228,
            "order": 1
          },
          "order": 1,
          "duration": null,
          "repetitions": 1,
          "metadata": null
        },
        {
          "exercise": {
            "id": 1,
            "name": "B",
            "detail": "Fast Warmup",
            "type": "warmup",
            "date": 1620062203228,
            "order": 1
          },
          "order": 2,
          "duration": 30,
          "repetitions": 1,
          "metadata": null
        },
        {
          "exercise": {
            "id": 1,
            "name": "C",
            "detail": "Fast Warmup",
            "type": "warmup",
            "date": 1620062203228,
            "order": 1
          },
          "order": 3,
          "duration": 30,
          "repetitions": 1,
          "metadata": null
        }
      ],
      "size": 10,
      "page": 0,
      "isLastPage": true
    }
  }),
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