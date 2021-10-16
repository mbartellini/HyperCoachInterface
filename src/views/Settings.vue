<template>
  <v-container fluid>
    <v-row class="text-h5 ma-3">
      <h1>Editar perfil</h1>
    </v-row>
    <v-row class="text-h6 ma-3 pt-5">
      <p>
        Modificá tu información personal.
      </p>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="2" offset="5">
       <v-row class="text-center">
      <v-col cols="6">
        <div style="margin-top:40px">
          <v-avatar
              color="primary"
              size="250"
              style="margin-bottom: 10px"
          >
            <v-img
                :src="preview"
                class="mx-auto"
                max-width="250"
                height="250"
                rounded
            />
          </v-avatar>
        </div>
      </v-col>
    </v-row>
       <form @submit="login">
      <v-row>
        <v-col>
          <div class="my-5">
            <v-row>
              <v-col
                  class="align-content-center"
                  cols="8"
                  sm="6"
                  md="3"
              >
                <v-file-input @change="handleImage" v-show="false" id="file-upload" v-model="image" />
                <v-btn>
                  <label for="file-upload">Subir nueva foto de perfil</label>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  class="text-center my-5"
              >
                <v-text-field
                    v-model="name"
                    outlined
                    counter="50"
                    :rules="nameRules"
                    required
                    clearable
                    label="Nombre"
                />
                <v-text-field
                    v-model="lastname"
                    outlined
                    label="Apellido"
                    counter="50"
                    :rules="nameRules"
                    required
                    clearable
                ></v-text-field>
                <v-autocomplete
                    ref="gender"
                    v-model="gender"
                    :items="['Masculino', 'Femenino', 'Prefiero no indicar']"
                    label="Genero"
                    placeholder="Select..."
                    required
                    outlined
                ></v-autocomplete>
                <v-btn
                    type="button"
                    tile
                    class="rounded-lg"
                    large
                    color="success"
                    @click="login"
                    @click.stop="dialog = true"
                >
                  <v-icon dark>mdi-content-save</v-icon>
                  <div class="text-decoration-underline"> Guardar </div>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  class="text-center my-5"
              >
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
                        {{error? 'Reintentar' : 'Volver a mi perfil'}}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {ModifyCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Settings',

  data: () => ({
    error: true,
    errorMsg: 'Ha ocurrido un error.',
    successMsg: 'Tus cambios fueron guardados.',
    errorDetails: 'Revise que los datos ingresados son correctos.',
    dialog: false,
    name: "Juan Ignacio Garcia Matwieiszyn",
    lastname: "Juan Ignacio Garcia Matwieiszyn",
    image: null,
    username: "juano",
    email: "juanigarcia@itba.edu.ar",
    gender: "Masculino",
    nameRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => (v && v.length <= 50) ||
          "Maximo 50 caracteres",],
    age: 20,
    preview: null,
    metadata: {img_src: ""},
    menu: null,
  }),
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn',
      $getCurrentUser: 'getCurrentUser',
    })
  },
  methods: {
    PreviewImage() {
      this.preview = URL.createObjectURL(this.image)
    },
    ...mapActions('security', {
      $register: 'register',
      $modify: 'modify',
    }),
    handleImage() {
      if (this.image) {
        if (this.image.size > 1024 * 50) {
          this.errorDetails = "La imagen ingresada es demasiado grande."
          this.dialog = true
          return;
        }
        this.PreviewImage();
        const aux = this.getImg();
        aux.then(data => this.metadata = {img_src: data});
      }
    },
    getImg() {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async login(e) {
      this.handleImage()
      e.preventDefault()
      try {
        if (this.gender === "Prefiero no indicar") {
          this.gender = 'other'
        } else if (this.gender === "Masculino") {
          this.gender = 'male'
        } else if (this.gender === "Femenino") {
          this.gender = 'female'
        } else {
          this.gender = ''
        }
        if (this.gender === '' || this.name.length <= 0 || this.name.length > 50 || this.lastname.length <= 0 || this.lastname.length > 50) {
          return;
        }
        const credentials = new ModifyCredentials(this.name, this.lastname, this.gender, await this.$getCurrentUser.birthdate, "", this.metadata)
        await this.$modify({credentials})
        this.dialog = true
        this.error = false
      } catch (error) {
        this.error = true
        if (error.message) {
          this.errorMsg = error.message
        } else if (error.details) {
          this.errorMsg = error.details[0]
        } else if (error.description) {
          this.errorMsg = error.description
        } else {
          this.errorMsg = error
        }
        this.password = ''
      }
    },
    async getData() {
      let user = await this.$getCurrentUser
      this.name = user.firstName
      this.lastname = user.lastName
      this.preview = user.metadata.img_src
      this.metadata = user.metadata
      this.gender = user.gender
    },
    finishDialog() {
      this.dialog = false
      if(!this.error) {
        router.push('/profile')
        router.go(0)
      }
    },
  },

  async beforeMount() {
    await this.getData()
  },

}
</script>
