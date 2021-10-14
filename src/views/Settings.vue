<template>
  <v-container fluid>
    <v-row class="text-h5 ma-3">
      <h1>Editar perfil</h1>
    </v-row>
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
                <v-file-input @change="PreviewImage" v-show="false" id="file-upload" v-model="image" />
                <v-btn>
                  <label @change="PreviewImage" for="file-upload">Actualizar foto de perfil</label>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="8"
                  sm="6"
                  md="3"
              >
                <v-text-field
                    v-model="name"
                    outlined
                    clearable
                    label="Nombre"
                />
              </v-col>
              <v-col
                  cols="8"
                  sm="6"
                  md="3"
              >
                <v-text-field
                    v-model="lastname"
                    outlined
                    label="Apellido"
                    clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="8"
                  sm="6"
                  md="3"
              >
                <v-autocomplete
                    ref="gender"
                    v-model="gender"
                    :items="['Masculino', 'Femenino', 'Prefiero no indicar']"
                    label="Genero"
                    placeholder="Select..."
                    required
                    outlined
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <button type="submit" class="bg-green-400 p-5 text-white" style="margin-left:15px">
                Modificar datos
              </button>
            </v-row>
            <v-row>
              <button @click="logout" class="bg-green-400 p-5 text-white" style="margin-left:15px">
                Salir de la cuenta
              </button>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<style>
.profilepic {
  position: absolute;
  right: 15px;
  border-radius: 50%;
  border: 1px solid white;
}
</style>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {ModifyCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Settings',

  data: () => ({
    name: "Juan Ignacio Garcia Matwieiszyn",
    lastname: "Juan Ignacio Garcia Matwieiszyn",
    image: [],
    username: "juano",
    email: "juanigarcia@itba.edu.ar",
    gender: "Masculino",
    age: 20,
    password: '',
    preview: null,
    passwordConfirmation: '',
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
      $logout: 'logout',
    }),
    async logout() {
      await this.$logout()
      await router.push('/')
      await router.go()
    },
    async login(e) {
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
        if (this.password !== this.passwordConfirmation) {
          this.error = true
          return
        }

        this.image = URL.createObjectURL(this.image)
        const credentials = new ModifyCredentials(this.name, this.lastname, this.gender, await this.$getCurrentUser.birthdate, this.image, this.metadata)
        await this.$modify({credentials})
        await router.push('/')
        await router.go()
      } catch (error) {
        this.error = true
        this.errorMsg = error // TODO: beautify this output
        this.password = ''
      }
    },
    async getData() {
      let user = await this.$getCurrentUser
      this.name = user.firstName
      this.lastname = user.lastName
      this.image = user.avatarUrl
      this.gender = user.gender
    }
  },
  async beforeMount() {
    await this.getData()
  },

}
</script>
