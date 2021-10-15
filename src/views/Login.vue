<template>
  <div class="text-center">
    <v-container fluid>
      <v-row class="justify-left mb-3">
        <GoBackButton/>
      </v-row>
      <v-sheet
          class="px-7 pt-7 pb-4 mt-5 text-center d-inline-block rounded-lg"
          outlined
          elevation="10"
      >
        <div class="text-h6 mb-4">
          Iniciar sesión
        </div>
        <form @submit="login">
          <v-text-field
              v-model="username"
              outlined label="Usuario"
              clearable />

          <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Contraseña"
              outlined
              @click:append="show = !show"
          />
          <div class="text-decoration-underline">
            <v-dialog
                v-model="dialog"
                width="500"
                persistent
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    type="button"
                    @click="login"
                    class="ma-2 text-decoration-underline"
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                >
                  Iniciar sesión
                </v-btn>
              </template>

              <v-card class="align-content-center">
                <v-card-title
                    class="text-h5">
                  {{error? errorMsg : successMsg}}
                </v-card-title>
                <v-card-text
                    v-show="error"
                >
                  Detalles: {{errorDetails}}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      :color="error? 'error' : 'success'"
                      text
                      @click="finishDialog"
                      class="text-decoration-underline"
                  >
                    {{error? 'Reintentar' : 'Volver al inicio'}}
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn
                class="ma-2 text-decoration-underline"
                plain
                :to="{name: 'Registration'}"
            >
              Registrarme
            </v-btn>
          </div>
        </form>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>


import {mapState, mapGetters, mapActions} from 'vuex'
import {LoginCredentials} from "@/api/user";
import router from "@/router";
import GoBackButton from "@/components/GoBackButton";

export default {
  name: 'Login',
  components: {
    GoBackButton,
  },

  data() {
    return {
      dialog: false,
      show: false,
      username: '',
      password: '',
      error: true,
      errorMsg: 'Ha ocurrido un error.',
      errorDetails: 'Revise que los datos ingresados son correctos.',
      successMsg: 'Has iniciado sesión correctamente.',
      entireError: null
    }
  },
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
    ...mapActions('security', {
      $login: 'login',
      $logout: 'logout',
    }),
    async login(e) {
      e.preventDefault()
      if (this.username.length <= 0 || this.username.length > 50 || this.password.length <= 0 || this.password.length > 50)
        return
      try {
        const credentials = new LoginCredentials(this.username, this.password)
        await this.$login({credentials, rememberMe: true})
        this.error = false
      } catch (error) {
        this.error = true
        if (error.message) {
          this.errorDetails = error.message
        } else if (error.details) {
          this.errorDetails = error.details[0]
        } else if (error.description) {
          this.errorDetails = error.description
        } else {
          this.errorDetails = error
        }
        this.password = ''
      }
    },
    finishDialog() {
      this.dialog = false
      if (!this.error) {
        router.push('/')
        router.go(0)
      }
    },
  }
}
</script>

<style scoped>

input[type="text"] { padding: 2px; border: 4px solid gray }
input[type="password"] { padding: 2px; border: 4px solid gray }

</style>
