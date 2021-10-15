<template>
    <v-card
        elevation="6"
        max-width="500"
        class="rounded-card pb-3"
    >
      <v-card-title class = "pb-0 d-flex justify-space-around flex-xs-column flex-sm-column flex-md-row mb-3 grey">
        <v-container>
          <v-row>
            <v-text-field
                dense
                v-model="cycle.name"
                outlined
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
                    dense
                    v-model="cycle.repetitions"
                    outlined
                    width="50"
                    type="number"
                    label="Cantidad de repeticiones"
                    min="0"
                    class="ma-0 py-0"
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
          <v-row class="py-0 pt-3 my-0 pa-3">
            <v-autocomplete
                v-model="exercise.id"
                :hint="`${exercise.name}`"
                :items="exercises"
                item-text="name"
                item-value="id"
                label="Ejercicio*"
                dense
                outlined
                required
                return-object
                single-line
            ></v-autocomplete>
          </v-row>
          <v-row class="py-0 my-0 pa-3">
            <v-text-field
                dense
                v-model="exercise.limit"
                outlined
                label="Cantidad"
                type="number"
                min="0"
                class="mt-3 mb-0 ml-1"
            />
            <v-autocomplete
              v-model="exercise.limitType"
              :items="selRepOrDur"
              item-text="hint"
              item-value="id"
              label="Duración"
              dense
              outlined
              return-object
              single-line
              class="mt-3 mb-0 ml-3"
          />
          </v-row>
        </v-card-text>
      </v-row>
      <v-card-actions>
        <v-btn outlined icon @click="deleteExercise()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn outlined icon @click="addExercise()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
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
    exercises: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    selRepOrDur: [
      { hint: 'repeticiones', name: 'repetitions' },
      { hint: 'segundos', name: 'duration' },
    ],
  }),
  methods: {
    addExercise() {
      this.cycle.exercises.push({
        id: 0,
        limit: 5,
        limitType: { hint: 'repeticiones', name: 'repetitions' },
      })
    },
    deleteExercise() {
      if (this.cycle.exercises.length > 1)
        this.cycle.exercises.pop()
    }
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>