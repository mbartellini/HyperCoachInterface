<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Mis ejercicios</h1>
      </v-row>
      <v-row class="text-h6 ma-3 pt-5">
        <p>
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
  }),
  methods: {
    ...mapActions('exercise', {
      $getExercises: 'getAll',
    }),
    async getExercises() {
      try {
        const result = await this.$getExercises();
        this.exercises = result.content
      } catch(e) {
        alert(e)
      }
    },
  },
  created() {
    this.getExercises();
  }
}
</script>

<style scoped>

</style>