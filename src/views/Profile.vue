<template>
  <v-container fluid>
    <v-row class="text-h5 ma-3">
      <h1>Perfil</h1>
    </v-row>
    <v-row class="text-h6 ma-3 pt-5">
      <p>
        Aquí puedes ver y modificar tu información personal.
      </p>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="2" offset="5">
        <div>
          <v-avatar
              color="primary"
              size="150"
          >
            <v-img
                :src="require('../assets/Juani.jpeg')"
                class="mx-auto"
                max-width="150"
                height="150"
                rounded
            />
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="2" style="margin-top: 15px">
        <v-btn
            class = "my-3 white--text rounded-lg"
            color="success"
            elevation = "3"
            large
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          <div class="text-decoration-underline">
            Editar perfil
          </div>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center my-5">
        <h2>Nombre</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{user.name}} </p>
        </v-card>
        <h2>Usuario</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{user.username}} </p>
        </v-card>
        <h2>E-mail</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{user.email}} </p>
        </v-card>
        <h2>Sexo</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{user.sex}} </p>
        </v-card>
        <h2>Edad</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{user.age}} </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" offset="5" justify="center">
        <v-btn
            class = "mx-md-auto rounded-lg mt-5"
            color="error"
            elevation = "3"
            large
            @click="logout"
        >
          <v-icon left>
            mdi-arrow-left-bold-box-outline
          </v-icon>
          <v-spacer/>
          <div class="text-decoration-underline">
            Cerrar sesión
          </div>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import router from "@/router";
import {mapGetters, mapState} from "vuex";

export default {
  name: 'Profile',

  data: () => ({
    user: {
      name: "Juan Ignacio Garcia Matwieiszyn",
      username: "juano",
      email: "juanigarcia@itba.edu.ar",
      sex: "Por favor",
      age: 20,
    },
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
    async logout() {
      await this.$logout()
      await router.push('/')
      await router.go()
    },
  }
}
</script>
