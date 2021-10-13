<template>
  <v-container>
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
              lazy-src="@/assets/loading.gif"
              width="500px"
              :alt="exercise.detail"
              :src="exercise.metadata.img_src"
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
        <v-row class="d-flex align-center mx-0 mb-1">
           <h1 class="increment">{{ exercise.name }}</h1>
          <v-spacer/>
          <div class="mx-2">
            <v-btn
                rounded
                icon
                large
            >
              <v-icon
                  color="secondary"
                  size="30px"
              > mdi-share-variant-outline </v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-divider />
        <v-row class="ma-auto">
          <p class="text-h6">
            {{ exercise.detail }}
          </p>
        </v-row>
        <v-row class="justify-space-between">
          <v-btn tile class="rounded-lg" large color="error">
            <v-icon dark>mdi-delete</v-icon>
            <div class="text-decoration-underline">
              Eliminar
            </div>
          </v-btn>
          <v-btn tile class="rounded-lg" large color="success" :to="{ name: 'EditExercise', params: { id: id } }" >
            <v-icon dark>mdi-content-save</v-icon>
            <div class="text-decoration-underline">
              Editar
            </div>
          </v-btn>
        </v-row>
       </v-col>
      </v-row>

  </v-container>

</template>

<script>
import GoBackButton from "../components/GoBackButton";

export default {
  name: 'ExerciseDetail',
  props: {
    id: {
      type: Number,
      required: false,
    }
  },
  components: {
    GoBackButton
  },
  data: () => ({
    is_fav: false,
    exercise: {
      "id": 1,
      "name": "Jumping Jacks",
      "detail": "Jumping Jacks",
      "type": "exercise",
      "date": 1620062203228,
      "metadata": {
        img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
      }
    },
  }),
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
h1.increment{
  font-size: 225%;
}
</style>