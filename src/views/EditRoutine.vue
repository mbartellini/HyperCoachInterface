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
                lazy-src="@/assets/hci.png"
                width="500px"
                :alt="routine.detail"
                :src="preview"
                contain
            >
              <v-file-input @change="handleImage" v-show="false" id="file-upload" v-model="image" />
              <v-btn fab class="primary">
                <label for="file-upload"><v-icon >mdi-pencil</v-icon></label>
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
              <v-select
                  v-model="routine.category"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Categoría"
                  dense
                  outlined
                  persistent-hint
                  return-object
                  single-line
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
                v-model="routine.metadata.equipment"
                label="Requiere equipamiento"
                class="my-0 py-0"
            ></v-checkbox>
          </v-row>
          <v-row class="justify-end">
            <v-btn type="button" @click="save" tile class="rounded-lg" large color="success">
              <v-icon dark>mdi-content-save</v-icon>
              <div class="text-decoration-underline"> Guardar </div>
            </v-btn>
            <v-dialog
                v-model="dialog"
                width="500"
                persistent
            >
              <v-card>
                <v-card-title class="text-h5">
                  {{error? errorMsg : successMsg}}
                </v-card-title>

                <v-card-text
                    v-show="error"
                >
                  {{errorDetails}}
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                      :color="error? 'error' : 'success'"
                      text
                      @click="finishDialog"
                  >
                    {{error? 'Reintentar' : 'Ver todas mis rutinas'}}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
import router from "@/router";

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
    newRoutine: true,
    exercises: [],
    preview: '',
    image: null,
    dialog: false,
    error: true,
    errorMsg: 'Ha ocurrido un error.',
    successMsg: 'Rutina creada correctamente.',
    errorDetails: 'Hay campos obligatorios sin completar.',
    categories: [],
    routine: {
      name: '',
      detail: '',
      isPublic: true,
      category: { id: 1 },
      difficulty: { name: 'beginner', hint: 'Principiante', },
      metadata: {
        img_src: '@/assets/hci.png',
        duration: 0,
        equipment: false,
        cycles: [
          {
            name: "Ciclo de calentamiento",
            repetitions: 1,
            exercises: [
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
            ]
          },{
            name: "Ciclo principal",
            repetitions: 1,
            exercises: [
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
            ]
          },{
            name: "Ciclo de enfriamiento",
            repetitions: 1,
            exercises: [
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
                limit: 5,
                limitType: 'repeticiones',
              },
              {
                id: { id: 1 },
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
    handleImage() {
      if (this.image) {
        this.PreviewImage();
        const aux = this.getImg();
        aux.then(data => this.routine.metadata.img_src = data);
      }
    },
    PreviewImage() {
      this.preview = URL.createObjectURL(this.image)
    },
    getImg() {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    ...mapActions('routine', {
      $postRoutine: 'create',
      $getRoutine: 'get',
      $putRoutine: 'modify',
    }),
    addCycle() {
      this.handleImage()
      this.routine.metadata.cycles.push({
        name: "Ciclo de calentamiento",
        repetitions: 1,
        exercises: [
          {
            id: { id: 1 },
            limit: 5,
            limitType: 'repeticiones',
          },
          {
            id: { id: 1 },
            limit: 5,
            limitType: 'repeticiones',
          },
          {
            id: { id: 1 },
            limit: 5,
            limitType: 'repeticiones',
          },
        ]
      })
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
        console.log(e)
      }
    },
    async postRoutine() {
      try {
        let routine = new Routine(null, this.routine.name, this.routine.detail, this.routine.difficulty.name, this.routine.category.id, this.routine.metadata)
        // alert(JSON.stringify(routine))
        this.routine = await this.$postRoutine(routine)
        this.error = false
      } catch(e) {
        console.log(e)
      }
    },
    async putRoutine() {
      try {
        let routine = new Routine(this.routine.id, this.routine.name, this.routine.detail, this.routine.difficulty.name, this.routine.category.id, this.routine.metadata)
        this.routine = await this.$putRoutine(routine)
        this.error = false
      } catch(e) {
        console.log(e)
      }
    },
    save(e) {
      e.preventDefault()
      // TODO: Handle default like registration, login, exercises.
      this.handleImage()
      for (let c in this.routine.metadata.cycles) {
        for (let e in this.routine.metadata.cycles[c].exercises) {
          this.routine.metadata.cycles[c].exercises[e].id = this.routine.metadata.cycles[c].exercises[e].id.id
        }
      }
      if (this.newRoutine) {
        this.postRoutine()
      } else {
        this.putRoutine()
      }
      this.dialog = true
    },
    finishDialog() {
      this.dialog = false
      if(!this.error) {
        router.push('/my_routines')
      }
    },
    ...mapActions('exercise', {
      $getExercises: 'getAll',
    }),
    async getExercises() {
      try {
        let result = await this.$getExercises();
        this.exercises = result.content
      } catch(e) {
        console.log(e)
      }
    },
    ...mapActions('category', {
      $getCategories: 'getAll',
    }),
    async getCategories() {
      try {
        let result = await this.$getCategories()
        this.categories = result.content
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    difficultiesAvailable() {
      return [
        {
          name: 'beginner',
          hint: 'Principiante',
        },
        {
          name: 'intermediate',
          hint: 'Intermedio',
        },
        {
          name: 'advanced',
          hint: 'Avanzado',
        },
      ]
    },
  },
  async created() {
    await this.getExercises();
    await this.getCategories();
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
  async beforeMount() {
    await this.getExercises();
    await this.getCategories();
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



