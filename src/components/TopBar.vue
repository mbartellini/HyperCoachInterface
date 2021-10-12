<template>
  <v-app-bar app clipped-left class="secondary py-0" :key="reload">
    <button @click="logout">PRESS</button>
    <v-container fluid fill-height>
      <v-row class="align-center">
        <v-avatar
            class="mr-10"
            color="white"
            size="50"
        >
          <v-img alt="Logo de Hyper Coach Interface" src="@/assets/HCI.png"/>
        </v-avatar>
        <v-toolbar-title class="white--text font-weight-bold text-lg-h4 text-md-h4">Hyper Coach Interface</v-toolbar-title>

        <v-spacer></v-spacer>


        <v-card v-if="username" flat class="d-flex align-center justify-center pa-1" color="transparent" :to="profileRoute">
          <p class="ma-3 hidden-sm-and-down white--text">{{username}}</p>
          <v-avatar
              size="50"
          >
            <v-img :alt="'Foto de perfil de {{username}}'" src="@/assets/Juani.jpeg"></v-img>
          </v-avatar>
        </v-card>
        <v-card v-else flat class="d-flex align-center justify-center pa-1" color="transparent">
          <router-link class="ma-2 hidden-sm-and-down white--text" :to="{name: 'Login'}">Iniciar Sesión</router-link>
          <p class="ma-2 hidden-sm-and-down white--text">/</p>
          <router-link class="ma-2 hidden-sm-and-down white--text" :to="{name: 'Registration'}">Registrarme</router-link>
          <v-avatar
              size="50"
          >
            <v-icon large color="white">
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-card>
      </v-row>
    </v-container>

  </v-app-bar>

</template>


<script>
import {mapGetters, mapActions} from 'vuex'


export default {

  name: "TopBar",

  data: () => ({
    profileRoute: 'Profile',
    username: null,
    reload: false,
    profile_pic: "@/assets/Juani.jpeg",
  }),

  computed: {
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
  },

  methods: {
    ...mapActions('security', {
      $logout: 'logout',
      $getCurrentUser: 'getCurrentUser',
    }),
    async logout() {
      console.log("2")
      await this.$logout()
      this.username = null
      this.reload = !this.reload
    },
    async getCurrent() {
      console.log("1")
      if (this.$isLoggedIn) {
        let aux = await this.$getCurrentUser()
        if (!aux) {
          return null;
        }
        this.profile_pic = aux.avatarUrl
        this.username = aux.firstName
        return aux;
      }
      return null;
    },
  },

  beforeMount() {
    this.getCurrent()
  },

  beforeUpdate() {
    this.getCurrent()
  }

}
</script>

<style scoped>

</style>
