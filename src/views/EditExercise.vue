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
          <v-btn tile class="rounded-lg" large color="success" :to="{ name: 'EditExercise', params: { id: id } }" >
            <v-icon dark>mdi-content-save</v-icon>
            <div class="text-decoration-underline"> Guardar </div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
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
  methods: {
    ...mapActions('exercise', {
      $getExercise: 'get',
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result)
    },
    async getExercise() {
      console.log("AAAAAA")
      try {
        await this.$getExercise(this.sport.id);
        this.setResult(this.sport)
      } catch(e) {
        alert(e)
      }
    },
  data: () => ({
    exercise: this.id !== null ? this.getExercise() : {
      name: 'AHAHAH',
      detail: 'BHBHBH',
      metadata: {
        img_src: 'CHCHCH',
      },
    },
    result: null,
    name: this.id == null ? '' : 'Nombre',
    detail: this.id == null ? '' : 'Detalle',
    img_src: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720",
  }),
  },
}
</script>

<style scoped>

</style>



