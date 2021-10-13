<template>
  <div class="flex items-center justify-center h-screen">
    <h1>Registro</h1>
    (*): campos obligatorios.
    <div class="sm:w-1/2">
      <div class="p-5 w-4/5 mx-auto text-left font-raleway">
        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
        <form @submit="login">
          <v-row>
            <v-col>
              <div class="my-5">
                <v-row justify="center">
                  <v-col cols="8">
                    <v-img
                        :src="preview"
                        height="150"
                        width="150"
                        max-width="150"
                        max-height="150"
                        class="rounded-circle profilepic"
                        alt="Profile picture"/>
                  </v-col>
                <!-- TODO: center this -->
                </v-row>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-btn>
                      <label @change="PreviewImage" for="file-upload">Subir foto de perfil</label>
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
                        v-model="firstname"
                        outlined
                        clearable
                        label="Nombre*"
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
                          label="Apellido*"
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
                          label="Género*"
                          placeholder="Seleccionar..."
                          required
                          outlined
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                        cols="8"
                        sm="6"
                        md="3"
                    >
                      <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                      >
                        <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                              text
                              color="primary"
                              @click="menu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="date"
                              label="Fecha de nacimiento*"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              outlined
                          ></v-text-field>
                        </template>
                      </v-menu>
                    </v-col>
                  </v-row>
                <v-row>
                    <v-col
                        cols="12"
                        sm="10"
                        md="6"
                    >
                      <v-text-field
                          v-model="email"
                          outlined
                          label="E-mail*"
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
                    <v-file-input @change="PreviewImage" v-show="false" id="file-upload" v-model="image" style="margin: 0px"/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                      cols="8"
                      sm="6"
                      md="3"
                  >
                    <v-text-field
                        v-model="username"
                        outlined
                        label="Usuario*"
                        clearable
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="8"
                      sm="6"
                      md="3"
                  >
                    <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Contraseña*"
                        outlined
                        @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                      cols="8"
                      sm="6"
                      md="3"
                  >
                    <v-text-field
                        v-model="passwordConfirmation"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Confirmar contraseña*"
                        outlined
                        @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <button type="submit" :disabled="password.length < 3" class="bg-green-400 p-5 text-white" style="margin-left:15px">
                    Registrarse
                  </button>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {RegisterCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      preview: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      firstname: '',
      lastname: '',
      password: '',
      passwordConfirmation: '',
      menu: null,
      gender: ["Masculino","Femenino","Prefiero no indicar"],
      date: '',
      email: '',
      image: null,
      phone: '',
      metadata: null,
      error: false,
      errorMsg: `An error occurred, please try again`
    }
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    PreviewImage() {
      this.preview = URL.createObjectURL(this.image)
    },
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
      $register: 'register',
    }),
    async login(e) {
      e.preventDefault()
      try {
        console.log(this.date)
        this.date = new Date(this.date.toString()).getTime().toString()
        if (this.gender === "Prefiero no indicar") {
          this.gender = 'other'
        } else if (this.gender === "Masculino") {
          this.gender = 'male'
        } else if (this.gender === "Femenino") {
          this.gender = 'female'
        } else {
          this.gender = ''
        }
        if(this.password != this.passwordConfirmation){
          this.error = true
          return
        }
        console.log(this.gender)
        console.log(this.date)

        this.image = URL.createObjectURL(this.image)
        const credentials = new RegisterCredentials(this.username, this.password, this.firstname, this.lastname, this.gender, this.date, this.email, this.phone, this.image, this.metadata)
        console.log(JSON.stringify(credentials))
        await this.$register({credentials, rememberMe: true })
        await router.push('/')
      } catch(error) {
        this.error = true
        this.errorMsg = error // TODO: beautify this output
        this.password = ''
      }
    },
  }
}
</script>

<style scoped>

input[type="text"] { padding: 2px; border: 4px solid gray }
input[type="password"] { padding: 2px; border: 4px solid gray }
input[type="email"] { padding: 2px; border: 4px solid gray }
input[type="date"] { padding: 2px; border: 4px solid gray }

.profilepic {
  border-radius: 50%;
  outline: solid black 2px;
}

</style>
