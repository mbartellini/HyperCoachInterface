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
              :alt="exercise.detail"
              :src="exercise.metadata.img_src"
              contain
          >
            <v-btn fab class="primary">
              <v-icon>mdi-pencil</v-icon>
            </v-btn></v-img>
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
          <v-text-field
              v-model="exercise.name"
              hide-details
              dense
              outlined
              clearable
              label="Nombre del ejercicio"
              class="mb-0 pb-0"
          />
        </v-row>
        <v-divider class="my-5" />
        <v-row class="ma-auto">
        <v-text-field
          v-model="exercise.detail"
          dense
          outlined
          clearable
          label="Detalle del ejercicio"
        />
        </v-row>
        <v-row class="justify-end">
          <v-btn type="submit" tile class="rounded-lg" large color="success" @click="save()" :to="{ name: 'EditExercise', params: { id: id } }" >
            <v-icon dark>mdi-content-save</v-icon>
            <div class="text-decoration-underline"> Guardar </div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    </form>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import GoBackButton from "../components/GoBackButton";

export default {
  name: "EditExercise",
  props: {
    id: {
      type: Number,
      required: false,
    }
  },
  components: {
    GoBackButton,
  },
  data: () => ({
    newExercise: true,
    exercise: {
      name: '',
      detail: '',
      type: 'exercise',
      metadata: {
        img_src: "https://lh3.googleusercontent.com/proxy/f63tfbox7hHYf6sHyBVRJ129TSpSezZf57vNp28ZYQ5dl_FTPDZ6J4sXBr5qC5b1Unii8XjpcZcmOpNgps3zTricFnhrKDJlr5GDRzOlTTCidWLbErg_eJ3HE5LBk-7xGHlwQLqkGKVA8kjZsLdXvO0",
      },
    },
  }),
  methods: {
    ...mapActions('exercise', {
      $postExercise: 'create',
      $getExercise: 'get',
    }),
    async getExercise() {
      try {
        this.exercise = {id: this.id}
        this.exercise = await this.$getExercise(this.exercise);
        this.exercise.metadata = {img_src: "https://lh3.googleusercontent.com/proxy/f63tfbox7hHYf6sHyBVRJ129TSpSezZf57vNp28ZYQ5dl_FTPDZ6J4sXBr5qC5b1Unii8XjpcZcmOpNgps3zTricFnhrKDJlr5GDRzOlTTCidWLbErg_eJ3HE5LBk-7xGHlwQLqkGKVA8kjZsLdXvO0"}
      } catch(e) {
        alert(e)
      }
    },
    async postExercise() {
      try {
        this.exercise = await this.$postExercise(this.exercise)
      } catch(e) {
        alert(e)
      }
    },
    save() {
      if (this.newExercise) {
        this.postExercise(this.exercise)
      } else {
        alert("S")
      }
    }
  },
  created() {
    if (this.id) {
      this.newExercise = false
      this.getExercise()
    }
  }
}
</script>

<style scoped>

</style>



