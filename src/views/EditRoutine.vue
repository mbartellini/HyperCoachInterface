<template>
  <v-container fluid>
    <v-row class="justify-left mb-3">
      <GoBackButton/>
    </v-row>
    <form @submit="save()">
      <v-row class="ma-3 mb-5 justify-center align-start">
        <v-col class="d-flex justify-xs-center justify-sm-center justify-md-center"
               xs="12"
               sm="12"
               md="12"
               lg="4"
               xl="4"
        >
          <v-card dense elevation="10" class="d-inline-flex justify-center rounded-xl">
            <v-img
                class="justify-center ma-auto"
                lazy-src="@/assets/loading.gif"
                width="500px"
                :alt="routine.detail"
                :src="routine.metadata.img_src"
                contain
            >
              <v-btn fab class="primary">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-img>
          </v-card>
        </v-col>
        <v-col
            xs="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
        >
          <v-row dense class="mt-5">
            <v-text-field
                dense
                v-model="routine.name"
                outlined
                clearable
                label="Título de la rutina"
            />
          </v-row>
          <v-row dense class="ma-0 pb-0 d-flex justify-space-between">
            <v-col cols="6" class="py-0 pl-0 ma-0 justify-space-between">
              <v-text-field
                  dense
                  v-model="routine.metadata.duration"
                  outlined
                  disabled
                  label="Duración (mins)"
              />
            </v-col>
            <v-col cols="6" class="pr-0 py-0 ma-0 justify-space-between">
              <v-select
                  v-model="routine.difficulty"
                  :hint="`${routine.difficulty.hint}`"
                  :items="difficultiesAvailable"
                  item-text="hint"
                  item-value="name"
                  label="Dificultad"
                  dense
                  outlined
                  persistent-hint
                  return-object
                  single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row dense class="my-0 py-0">
            <v-checkbox
                v-model="routine.equipment"
                label="Requiere equipamiento"
                class="my-0 py-0"
            ></v-checkbox>
          </v-row>
          <v-row class="justify-end">
            <v-btn type="submit" tile class="rounded-lg" large color="success">
              <v-icon dark>mdi-content-save</v-icon>
              <div class="text-decoration-underline"> Guardar </div>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-content-center">
        <v-col
            v-for="(cycle, i) in routine.metadata.cycles"
            :key="i"
            class="pa-lg-10 pa-lg-10 d-flex align-content-center justify-center"
            cols="12"
        >
          <v-row fluid class="d-flex justify-center">
            <v-col cols="1">
              <v-btn fab color="error" class="d-flex justify-center" @click="deleteCycle(i)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
            <v-col xl="4" lg="6" md="8" sm="9" xs="9">
              <EditCycleCard :cycle="cycle" :exercises="exercises" class="ma-auto"></EditCycleCard>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

      <v-row class="d-flex justify-center align-content-center">
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
                      outlined
                      disabled
                      label="Nuevo ciclo"
                      color="white"
                      class="pb-n10"
                  />
                </v-row>
              </v-container>
            </v-card-title>

            <v-card-actions class="d-flex justify-center align-content-center">
              <v-btn center outlined icon @click="addCycle()">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-row>

    </form>

  </v-container>
</template>

<script>
import {Routine} from "@/api/routine"
import {mapActions} from 'vuex'
import GoBackButton from "../components/GoBackButton";
import EditCycleCard from "../components/EditCycleCard";

export default {
  name: "EditRoutine",
  props: {
    id: {
      type: Number,
      required: false,
    }
  },
  components: {
    GoBackButton,
    EditCycleCard,
  },
  data: () => ({
    testCycle: {
      name: "Ciclo",
      repetitions: 1,
      exercises: [
        {
          id: 0,
          limit: 5,
          limitType: 'repeticiones',
        },
        {
          id: 0,
          limit: 5,
          limitType: 'repeticiones',
        },
        {
          id: 0,
          limit: 5,
          limitType: 'repeticiones',
        },
      ]
    },
    newRoutine: true,
    exercises: [],
    routine: {
      name: '',
      detail: '',
      isPublic: true,
      category: { id: 1 },
      difficulty: { name: 'beginner', hint: 'Principiante', },
      metadata: {
        img_src: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
        duration: 0,
        equipment: false,
        cycles: [
          {
            name: "Ciclo de calentamiento",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
            ]
          },{
            name: "Ciclo principal",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
            ]
          },{
            name: "Ciclo de enfriamiento",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: 0,
                limit: 5,
                limitType: 'repeticiones',
              },
            ]
          },
        ],
      },
    },
  }),
  methods: {
    ...mapActions('routine', {
      $postRoutine: 'create',
      $getRoutine: 'get',
      $putRoutine: 'modify',
    }),
    addCycle() {
      this.routine.metadata.cycles.push(
          Object.assign({}, this.testCycle)
      )
    },
    deleteCycle(index) {
      if (this.routine.metadata.cycles.length > 3)
        this.routine.metadata.cycles.splice(index, 1)
    },
    async getRoutine() {
      try {
        let routine = {id: this.id}
        let result = await this.$getRoutine(routine)
        if (!result.content)
          this.routine = result
      } catch(e) {
        alert(e)
      }
    },
    async postRoutine() {
      try {
        let routine = new Routine(null, this.routine.name, this.routine.detail, this.routine.difficulty.name, 1, this.routine.metadata)
        this.routine = await this.$postRoutine(routine)
      } catch(e) {
        alert(e)
      }
    },
    async putRoutine() {
      try {
        let routine = new Routine(this.routine.id, this.routine.name, this.routine.detail, this.routine.difficulty.name, 1, this.routine.metadata)
        this.routine = await this.$putRoutine(routine)
      } catch(e) {
        alert(e)
      }
    },
    save() {
      alert(JSON.stringify(this.routine))
      /*
      if (this.newRoutine) {
        this.postRoutine()
      } else {
        this.putRoutine()
      }
      this.$router.push({name: 'MyRoutines'})*/
    },
    ...mapActions('exercise', {
      $getExercises: 'getAll',
    }),
    async getExercises() {
      try {
        let result = await this.$getExercises();
        this.exercises = result.content
      } catch(e) {
        alert(e)
      }
    },
  },
  computed: {
    difficultiesAvailable() {
      return [
          {
            name: 'beginner',
            hint: 'Principiante',
          },{
        name: 'intermediate',
          hint: 'Intermedio',
        },{
        name: 'advanced',
          hint: 'Avanzado',
        },
      ]
    },
  },
  async created() {
    await this.getExercises();
    if (this.id != null) {
      this.newRoutine = false
      await this.getRoutine()
      for (let i in this.difficultiesAvailable) {
        if (this.difficultiesAvailable[i].name === this.routine.difficulty) {
          this.routine.difficulty = this.difficultiesAvailable[i]
          break
        }
      }
    }
  },
}
</script>

<style scoped>

</style>



