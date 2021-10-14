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
        <ExercisesCardsGrid :exercises="myExercises" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ExercisesCardsGrid from '../components/ExercisesCardsGrid'

export default {
  name: "MyExercises.vue",
  components: {
    ExercisesCardsGrid,
  },

  data: () => ({
    myExercises: [
      {
        "id": 1,
        "name": "Jumping Jacks",
        "detail": "Jumping Jacks",
        "type": "exercise",
        "date": 1620062203228,
        "metadata": {
          img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
        }
      },
      {
        "id": 1,
        "name": "Jumping Jacks",
        "detail": "Jumping Jacks",
        "type": "exercise",
        "date": 1620062203228,
        "metadata": {
          img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
        }
      },
      {
        "id": 1,
        "name": "Jumping Jacks",
        "detail": "Jumping Jacks",
        "type": "exercise",
        "date": 1620062203228,
        "metadata": {
          img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
        }
      },
      {
        "id": 1,
        "name": "Jumping Jacks",
        "detail": "Jumping Jacks",
        "type": "exercise",
        "date": 1620062203228,
        "metadata": {
          img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
        }
      },
    ]
  }),
}
</script>

<style scoped>

</style>