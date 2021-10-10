<template>
      <div class="flex items-center justify-center h-screen">
        <h1>INICIAR SESIÓN</h1>
        <div class="sm:w-1/2">
          <div class="p-5 w-4/5 mx-auto text-left font-raleway">
            <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
            <form @submit="login">
              <div class="my-5">
                <h1 class="text-left font-bold mb-5 font-montserrat">Username</h1>
                <input type="text" v-model="username"/>
              </div>
              <div class="my-5" id="password">
                <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>
                <input type="password" v-model="password">
              </div>

              <button type="submit" :disabled="password.length < 3" class="bg-green-400 p-5 text-white">
                Iniciar Sesión
              </button>
              <p class="my-2">
                <router-link to="" >Olvidaste tu contraseña?</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
</template>
<script>

import {mapState, mapGetters, mapActions} from 'vuex'
import {Credentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Login',

  data() {
    return {
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
        const credentials = new Credentials(this.username, this.password)
        await this.$login({credentials, rememberMe: true })
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
</style>