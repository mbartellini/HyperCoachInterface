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
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    type="submit"
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
                  Has iniciado sesión correctamente.
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="success"
                      text
                      :to="{name: 'Home'}"
                      class="text-decoration-underline"
                  >
                    Volver al inicio
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn
                class="ma-2 text-decoration-underline"
                plain
                @click="sendHome"
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
      error: false,
      errorMsg: `An error occurred, please try again`
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
      try {
        const credentials = new LoginCredentials(this.username, this.password)
        await this.$login({credentials, rememberMe: true})

      } catch (error) {
        this.error = true
        this.errorMsg = error // TODO: beautify this output
        this.password = ''
      }
    },
    sendHome() {
      router.push('/')
      router.go()
    }
  }
}
</script>

<style scoped>

input[type="text"] { padding: 2px; border: 4px solid gray }
input[type="password"] { padding: 2px; border: 4px solid gray }

</style>
