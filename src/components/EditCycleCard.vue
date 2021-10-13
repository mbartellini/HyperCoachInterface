<template>
    <v-card
        elevation="6"
        max-width="500"
        class="rounded-card pb-3"
    >
      <v-card-title class = "pb-0 d-flex justify-space-around flex-xs-column flex-sm-column flex-md-row secondary mb-3 white--text">
        <v-container>
          <v-row>
            <v-text-field
                dense
                v-model="cycle.name"
                outlined
                clearable
                label="Título del ciclo"
                color="white"
                class="pb-n10"
            />
          </v-row>
          <v-row>
            <div class="d-flex justify-space-between">
              <p class="my-0">Repeticiones: </p>
              <div class="pa-0 ma-0">
                <v-text-field
                    fluid
                    v-model="cycle.repetitions"
                    outlined
                    clearable
                    width="50"
                    type="number"
                    label="Cantidad de repeticiones"
                    class="ma-0"
                    color="white"
                />
              </div>
            </div>
          </v-row>
        </v-container>
      </v-card-title>

      <v-row
          v-for="(exercise, i) in cycle.exercises"
          :key="i"
          class="pa-0 my-0"
      >
        <v-divider class="mx-5"></v-divider>
        <v-card-text class="mx-auto py-0" dense>
          <v-row class="my-0 pa-3">
              <v-text-field
                  dense
                  v-model="exercise.name"
                  outlined
                  clearable
                  label="Ejercicio"
                  class="mx-3"
              />
          </v-row>
          <v-row class="my-0 pa-3">
            <v-text-field
                dense
                v-model="exercise.limit"
                outlined
                clearable
                label="Cantidad"
                class="mt-3 mb-0 ml-3"
            />
            <v-select
                dense
                v-model="exercise.limitType"
                :items="selRepOrDur"
                outlined
                label="Tipo"
                class="mt-3 mb-0 ml-3"
            />
          </v-row>
        </v-card-text>
      </v-row>
      <v-row>

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
    },
    cycle: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    selRepOrDur: [
      { hint: 'repeticiones', option: 'repetitions' },
      { hint: 'segundos', option: 'duration' },
    ],
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
</style>