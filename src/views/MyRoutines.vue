<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Mis rutinas</h1>
      </v-row>
      <v-row class="text-h6 ma-3 pt-5">
        <p v-if="!routines_empty">
          ¡Estas son las rutinas que creaste!
        </p>
        <p v-else>
          Aún no has creado rutinas. ¡Tocá el botón de crear para comenzar!
        </p>
        <v-spacer></v-spacer>
        <v-btn
            tile
            large
            class="rounded-lg"
            color="success"
            @click.stop="checkExercises"
        >
          <v-icon left outlined> mdi-plus </v-icon>
          <div class="text-decoration-underline">Crear</div>
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="500"
            persistent
        >
          <v-card>
            <v-card-title class="text-h5">
              ¡Parece que aún no has creado ejercicios!
            </v-card-title>

            <v-card-text
            >
              Para crear rutinas primero debes crear ejercicios.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  color="success"
                  text
                  class="text-decoration-underline"
                  :to="{name: 'EditExercise', params: {
                    id: null
                   }}"
              >
                Crear Ejercicios
              </v-btn>
              <v-btn
                  color="primary"
                  text
                  class="text-decoration-underline"
                  @click="dialog = !dialog"
              >
                Volver
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row fluid>
        <RoutinesCardsGrid :routines="routines" />
      </v-row>
    </v-container>
  </div>
</template>



<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid";
import {mapActions} from "vuex";
import router from "@/router";

export default {
  name: 'MyRoutines',

  components: {
    RoutinesCardsGrid,
  },

  data: () => ({
    dialog: false,
    noExerciseMsg: '',
    routines: [],
    routines_empty: true,
  }),
  methods: {
    ...mapActions('routine', {
      $getMyRoutines: 'getMyRoutines',
    }),
    ...mapActions('exercise', {
      $getExercises: 'getAll'
    }),
    async getMyRoutines() {
      try {
        let result = await this.$getMyRoutines( {pageNumber: 0, pageSize:50});
        this.routines_empty = result.totalCount === 0
        this.routines = result.content
      } catch(e) {
        console.log(e)
      }
    },
    async checkExercises() {
      try {
        let result = await this.$getExercises()
        if(result.totalCount === 0) {
          this.dialog = true
        } else {
          await router.push('/routine_edit')
        }
      } catch(e) {
        console.log(e)
      }
    }
  },

  beforeMount() {
    this.getMyRoutines();
  },
}
</script>
