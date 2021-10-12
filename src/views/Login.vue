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
          <v-btn
              class="ma-2"
              color="primary"
              :to="{name: 'Login'}"
          >
            Iniciar sesión
          </v-btn>

          <v-btn
              class="ma-2"
              plain
              outlined
              :to="{name: 'Registration'}"
          >
            Registrarme
          </v-btn>
        </div>
        <div class="text-decoration-underline">
          <v-btn
              class="ma-2"
              plain
              fab
              :to="{name: 'Registration'}"
          >
            Olvidé mi contraseña
          </v-btn>
        </div>
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
      $isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
      $login: 'login',
      $logout: 'logout',
    }),
    async login(e) {
      e.preventDefault()
      try {
        const credentials = new LoginCredentials(this.username, this.password)
        await this.$login({credentials, rememberMe: true})
        await router.push('/')
      } catch (error) {
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

</style>
