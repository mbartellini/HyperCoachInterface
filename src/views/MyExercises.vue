<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Mis ejercicios</h1>
      </v-row>
      <v-row class="text-h6 ma-3 pt-5">
        <p v-show="is_empty">
          Aún no has creado ejercicios. ¡Tocá el botón de crear para comenzar!
        </p>
        <p v-show="!is_empty">
          ¡Estos son los ejercicios que creaste!
        </p>
        <v-spacer></v-spacer>
        <v-btn
            class="rounded-lg"
            color="success"
            :to="{name: 'EditExercise', params: {
              id: null
            }}"
        ><v-icon left outlined> mdi-plus </v-icon>
          <div class="text-decoration-underline">Crear</div>
        </v-btn>
      </v-row>
      <v-row fluid>
        <ExercisesCardsGrid :exercises="exercises" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ExercisesCardsGrid from '../components/ExercisesCardsGrid'

export default {
  name: "MyExercises.vue",
  components: {
    ExercisesCardsGrid,
  },
  data: () => ({
    exercises: [],
    is_empty: true,
  }),
  methods: {
    ...mapActions('exercise', {
      $getExercises: 'getAll',
    }),
    async getExercises() {
      try {
        let result = await this.$getExercises();
        this.is_empty = result.totalCount === 0
        this.exercises = result.content
      } catch(e) {
        alert(e)
      }
    },
  },
  beforeMount() {
    this.getExercises();
  }
}
</script>

<style scoped>

</style>