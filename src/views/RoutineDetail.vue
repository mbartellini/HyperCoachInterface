<template>
  <v-container fluid>
    <v-row class="justify-left mb-3">
      <GoBackButton/>
    </v-row>
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
          ></v-img>
        </v-card>
      </v-col>
      <v-col
          class="ml-10 mt-2"
          xs="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
      >
        <v-row class="d-flex align-center">
           <h1 class="increment">{{ routine.name }}</h1>
          <v-spacer/>
          <div class="mx-2">
            <v-btn
                icon
            >
              <v-icon
                  color="secondary"
                  size="30px"
              > mdi-share-variant-outline </v-icon>
            </v-btn>
            <v-btn
                icon
                @click="favButton()"
            >
              <v-icon
                  color="secondary"
                  size="30px"
              >{{is_fav ? 'mdi-star' : 'mdi-star-outline'}}</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-divider class="my-5"/>
        <v-row dense class="ma-0 pa-0">
          <v-col dense class="ma-0 pa-0">
            <v-row dense>
              <div>
                <v-col>
                  <h4 class="text" >Dificultad: {{routine.difficulty ? translate(routine.difficulty) : "Esta rutina no tiene dificultad"}}</h4>
                  <h4 class="text" >Detalle: {{routine.detail ? routine.detail : "Esta rutina no tiene detalle"}}</h4>
                  <h4 class="text" >Categoría: {{routine.category ? (routine.category.name ? routine.category.name : "Sin categoría") : "Sin categoría"}}</h4>
                  <h4 class="text">{{routine.metadata && routine.metadata.equipment ? "Requiere equipamiento." : "No requiere equipamiento."}}</h4>
                </v-col>
              </div>
            </v-row>
            <v-row v-show="is_owner" class="justify-space-between">
              <v-btn tile class="rounded-lg" large color="error" @click="deleteRoutine()">
                <v-icon dark>mdi-delete</v-icon>
                <div class="text-decoration-underline">
                  Eliminar
                </div>
              </v-btn>
              <v-btn tile class="rounded-lg" large color="success" :to="{ name: 'EditRoutine', params: { id: id } }" >
                <v-icon dark>mdi-content-save</v-icon>
                <div class="text-decoration-underline">
                  Editar
                </div>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
       </v-col>
      </v-row>
    <v-row class="d-flex justify-center" v-if="routine.metadata">
      <v-col
          v-for="(cycle, i) in routine.metadata.cycles"
          :key="i"
          class="pa-lg-10 pa-lg-10"
          xs="12"
          sm="12"
          md="12"
          lg="5"
          xl="4"
      >
        <CycleCard :cycle="cycle" :exercises="exercises" class="ma-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";
import CycleCard from "../components/CycleCard";
import GoBackButton from "../components/GoBackButton";

export default {
  name: 'RoutineDetail',
  props: {
    id: {
      type: Number,
      required: false,
    }
  },
  components: {
    CycleCard,
    GoBackButton
  },
  data: () => ({
    exercises: [],
    favorites: [],
    is_fav: false,
    llave: false,
    preview: '',
    routine: {
      name: '',
      detail: '',
      isPublic: true,
      category: { id: 1 , name: "placeholder", detail: "placeholder"},
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
                id: 0,
                limit: 5,
                limitType: 'repetitions',
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
          {
            name: "Ciclo principal",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
          {
            name: "Ciclo de enfriamiento",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
        ],
      },
    },
  }),
  methods: {
    ...mapActions('routine', {
      $getRoutine: 'get',
      $deleteRoutine: 'delete',
    }),
    async getRoutine() {
      try {
        this.routine = {id: this.id}
        this.routine = await this.$getRoutine(this.routine);
        this.preview = this.routine.metadata.img_src
      } catch(e) {
        console.log(e)
      }
    },
    async deleteRoutine() {
      try {
        await this.$deleteRoutine(this.routine);
      } catch(e) {
        console.log(e)
      }
      await this.$router.push({name: 'MyRoutines'})
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
    ...mapActions('favorite', {
      $getFavorites: 'getPage',
      $postFavorite: 'create',
      $deleteFavorite: 'delete',
    }),
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
    }),
    inFavorites(list, id) {
      for (let i in list) {
        if (list[i].id === id)
          return true
      }
      return false
    },
    async getFavorites() {
      try {
        let result = await this.$getFavorites({pageNumber: 0, pageSize:50})
        this.favorites = result.content
        this.is_fav = this.inFavorites(this.favorites, this.id)
      } catch(e) {
        console.log(e)
      }
    },
    async favButton() {
      try {
        if (this.is_fav) {
          await this.$deleteFavorite(this.routine)
        } else {
          await this.$postFavorite(this.routine)
        }
        this.is_fav = !this.is_fav
      } catch(e) {
        console.log(e)
      }
    },
    async is_owner() {
      return this.routine.user.id === await this.$getCurrentUser().id
    },
    translate(difficulty) {
      switch (difficulty) {
        case 'beginner': return 'Principiante'
        case 'intermediate': return 'Intermedio'
        case 'advanced': return 'Avanzado'
      }
      return difficulty
    }
  },
  async beforeMount() {
    await this.getExercises()
    await this.getFavorites()
    if (this.id !== null) {
      await this.getRoutine()
    }
  },
}
</script>

<style scoped>
h4.text{
  font-weight: normal;
  font-size: medium;
}
h4.text2 {
  font-weight: normal;
  font-size: medium;
}
v-icon.margin-left {
  margin-left: 70px;
}
h1.increment{
  font-size: 225%;
}
</style>