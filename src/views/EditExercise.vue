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
              counter="100"
              :rules="nameRules"
              required
              label="Nombre del ejercicio"
              class="mb-0 pb-0"
          />
        </v-row>
        <v-divider class="my-5" />
        <v-row class="ma-auto">
        <v-text-field
          v-model="exercise.detail"
          dense
          counter="200"
          :rules="detailRules"
          outlined
          clearable
          label="Detalle del ejercicio"
        />
        </v-row>
        <v-row class="justify-end">
          <v-btn
              type="button"
              tile
              class="rounded-lg"
              large
              color="success"
              @click="save"
          >
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
                  {{error? 'Reintentar' : 'Ver todos mis ejercicios'}}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
    </form>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import GoBackButton from "../components/GoBackButton";
import router from "@/router";

export default {
  name: "EditExercise",
  dialog: true,
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
    dialog: false,
    preview: '',
    image: null,
    exercise: {
      name: '',
      detail: '',
      type: 'exercise',
      metadata: {
        img_src: "",
      },
    },
    nameRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => (v && v.length <= 100) ||
          "Maximo 100 caracteres",],
    detailRules: [
      (v) => (v.length <= 200) ||
          "Maximo 200 caracteres",],
    error: true,
    errorMsg: 'Ha ocurrido un error.',
    successMsg: 'Ejercicio creado correctamente.',
    errorDetails: 'Revise que los datos ingresados son correctos.',
  }),
  methods: {
    handleImage() {
      if (this.image) {
        if (this.image.size > 1024 * 50) {
          this.errorDetails = "La imagen ingresada es demasiado grande."
          this.dialog = true
          return
        }
        this.PreviewImage();
        const aux = this.getImg();
        aux.then(data => this.exercise.metadata.img_src = data);
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
    ...mapActions('exercise', {
      $postExercise: 'create',
      $getExercise: 'get',
      $putExercise: 'modify',
    }),
    async getExercise() {
      try {
        this.exercise = {id: this.id}
        this.exercise = await this.$getExercise(this.exercise);
        this.preview = this.exercise.metadata.img_src
      } catch(e) {
        console.log(e)
      }
    },
    async postExercise() {
      if (this.exercise.detail >= 200 || this.exercise.name <= 0 || this.exercise.name > 100)
        return
      try {
        this.exercise = await this.$postExercise(this.exercise)
        this.error = false
      } catch(error) {
        this.error = true
        if (error.message) {
          this.errorDetails = error.message
        } else if (error.details) {
          this.errorDetails = error.details[0]
        } else if (error.description) {
          this.errorDetails = error.description
        } else {
          this.errorDetails = error
        }// TODO: beautify this output
      }
    },
    async putExercise() {
      if (this.exercise.detail >= 200 || this.exercise.name <= 0 || this.exercise.name > 100)
        return
      try {
        this.exercise = await this.$putExercise(this.exercise)
        this.error = false
      } catch(error) {
        this.error = true
        if (error.message) {
          this.errorDetails = error.message
        } else if (error.details) {
          this.errorDetails = error.details[0]
        } else if (error.description) {
          this.errorDetails = error.description
        } else {
          this.errorDetails = error
        }// TODO: beautify this output
      }
    },
     save() {
      this.handleImage()
      if (this.newExercise) {
        this.postExercise()
      } else {
        this.putExercise()
      }
      this.dialog = true
    },
    finishDialog() {
      this.dialog = false
      if(!this.error) {
        router.push('/my_exercises')
      }
    },
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



