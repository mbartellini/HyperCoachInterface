<template>
  <div class="flex items-center justify-center h-screen">
    <h1>Registro</h1>
    <div class="sm:w-1/2">
      <div class="p-5 w-4/5 mx-auto text-left font-raleway">
        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
        <form @submit="login">
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Nombre</h3>
            <input type="text" v-model="firstname"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Apellido</h3>
            <input type="text" v-model="lastname"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Gender</h3>
            <input type="text" v-model="gender"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">E-mail</h3>
            <input type="email" v-model="email"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">fecha de nacimiento</h3>
            <input type="date" v-model="date"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Username</h3>
            <input type="text" v-model="username"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Imagen</h3>
            <v-file-input @change="PreviewImage" v-show="false" id="file-upload" v-model="image"/>
            <v-img :src="preview" :height="200" :width="200" class="profilepic" alt="Profile picture"></v-img>
            <v-btn>
              <label @change="PreviewImage" for="file-upload">Subir foto</label>
            </v-btn>
          </div>
          <div class="my-5" id="password">
            <h3 class="text-left font-bold mb-5 font-montserrat">Password</h3>
            <input type="password" v-model="password">
          </div>

          <button type="submit" :disabled="password.length < 3" class="bg-green-400 p-5 text-white">
            Registrarse
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
import {RegisterCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Login',

  data() {
    return {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      gender: '',
      date: '',
      email: '',
      preview: null,
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
        this.date = new Date(this.date.toString()).getTime()
        this.image = URL.createObjectURL(this.image)
        const credentials = new RegisterCredentials(this.username, this.password, this.firstName, this.lastName, this.gender, this.date, this.email, this.phone, this.image, this.metadata)
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
  position: absolute;
  right: 15px;
  border-radius: 50%;
  border: 1px solid white;
}

</style>
