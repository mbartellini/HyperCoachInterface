<template>
  <v-app-bar app clipped-left class="secondary py-0" :key="reload">
    <v-container fluid fill-height>
      <v-row class="align-center">
        <button
            @click="goHome"
        >
          <v-avatar
              class="mr-10"
              color="white"
              size="50"
          >
            <v-img alt="Logo de Hyper Coach Interface" src="@/assets/hci.png"/>
          </v-avatar>
        </button>
          <v-toolbar-title class="white--text font-weight-bold text-lg-h4 text-md-h4">Hyper Coach Interface</v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-show="username != null">
          <v-card flat class="d-flex align-center justify-center pa-1" color="transparent" :to="profileRoute">
            <p class="ma-3 hidden-sm-and-down white--text text-decoration-underline">{{username}}</p>
            <v-avatar
                size="50"
            >
              <v-img :alt="`Foto de perfil de ${username}`" :src="profile_pic"></v-img>
            </v-avatar>
          </v-card>
        </div>
        <div v-show="username == null">
          <v-card flat class="d-flex align-center justify-center pa-1" color="transparent">
            <router-link class="ma-2 hidden-sm-and-down white--text" :to="{name: 'Login'}">Iniciar Sesión</router-link>
            <p class="ma-2 hidden-sm-and-down white--text">/</p>
            <router-link class="ma-2 hidden-sm-and-down white--text" :to="{name: 'Registration'}">Registrarme</router-link>
            <button @click="goLogin">
              <v-avatar
                  size="50"
              >
                <v-icon large color="white">
                  mdi-account-circle
                </v-icon>
              </v-avatar>
            </button>
          </v-card>
        </div>
      </v-row>
    </v-container>

  </v-app-bar>

</template>


<script>
import {mapGetters} from 'vuex'
import router from "@/router";


export default {

  name: "TopBar",

  data: () => ({
    profileRoute: '/Profile',
    username: null,
    reload: false,
    profile_pic: "@/assets/Juani.jpeg",
  }),

  computed: {
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn',
      $getCurrentUser: 'getCurrentUser',
    }),
  },

  methods: {
    async getCurrent() {
      if (this.$isLoggedIn) {
        let aux = await this.$getCurrentUser
        if (!aux) {
          return null;
        }
        this.profile_pic = aux.metadata.img_src
        this.username = aux.firstName
        return aux;
      }
      return null;
    },
    goHome() {
      router.push('/')
    },
    goLogin() {
      router.push('/login')
    },
  },

  beforeMount() {
    this.getCurrent()
  },

  beforeUpdate() {
    this.getCurrent()
  },

  beforeRouteUpdate() {
    this.getCurrent()
  },

  beforeRouteEnter() {
    this.getCurrent()
  }

}
</script>

<style scoped>

</style>
