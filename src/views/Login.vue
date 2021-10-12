<template>
  <div>
    <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
    <v-container fluid>
      <v-col cols="8" sm="6" md="3" align="center" offset="4">
        <h1>Iniciar sesión</h1>
      </v-col>
      <form @submit="login">
<!--            <h1 class="text-left font-bold mb-5 font-montserrat">Username</h1>-->
<!--            <input type="text" v-model="username"/>-->
        <v-col cols="8" sm="6" md="3" align="center" offset="4">
          <v-text-field outlined label="Usuario" clearable></v-text-field>
        </v-col>
<!--            <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>-->
<!--            <input type="password" v-model="password">-->
        <v-col cols="8" sm="6" md="3" align="center" offset="4">
          <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Contraseña"
              outlined
              @click:append="show = !show"
          ></v-text-field>
        </v-col>
<!--          <button type="submit" :disabled="password.length < 3" class="bg-green-400 p-5 text-white">-->
<!--            Iniciar Sesión-->
<!--          </button>-->
        <v-col cols="2" offset="4" align="center">
        <v-btn class="primary no-uppercase" rounded @click="login"> Iniciar sesión </v-btn>
          <p class="my-2">
            <router-link to="" >Olvidaste tu contraseña?</router-link>
          </p>
        </v-col>
<!--        TODO: center this properly.      -->
      </form>
    </v-container>
  </div>
</template>
<script>


import {mapState, mapGetters, mapActions} from 'vuex'
import {LoginCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Login',

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

 .no-uppercase {
   text-transform: none;

 }

</style>
