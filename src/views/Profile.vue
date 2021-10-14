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
                :src="image"
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
            @click = "edit"
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
          <p class="text-center"> {{firstname}} </p>
        </v-card>
        <h2>Apellido</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{lastname}} </p>
        </v-card>
        <h2>Usuario</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{username}} </p>
        </v-card>
        <h2>E-mail</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{email}} </p>
        </v-card>
        <h2>Sexo</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{gender}} </p>
        </v-card>
        <h2>Fecha de nacimiento</h2>
        <v-card
            elevation="2"
            class ="mx-md-auto"
            height="40"
            width="400"
        >
          <p class="text-center"> {{birthdate}} </p>
        </v-card>
        <v-col @click="logout" cols="3" offset="5" class="mx-md-auto">
          <v-btn
              class = "mx-md-auto rounded-lg mt-5"
              color="error"
              elevation = "3"
              large
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
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import router from "@/router";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: 'Profile',

  data: () => ({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      gender: "",
      image: null,
      birthdate: "",
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
    ...mapActions('security', {
      $logout: 'logout',
    }),
    async logout() {
      await this.$logout()
      await router.push('/')
      await router.go()
    },

    async getData() {
      let user = await this.$getCurrentUser
      this.firstname = user.firstName
      this.lastname = user.lastName
      this.username = user.username
      this.image = user.metadata.img_src
      this.gender = user.gender
      if (this.gender === 'other') {
        this.gender = "Prefiero no indicar"
      } else if (this.gender === 'male') {
        this.gender = "Masculino"
      } else if (this.gender === 'female') {
        this.gender = "Femenino"
      } else {
        this.gender = ''
      }
      this.email = user.email
      this.birthdate = new Date(user.birthdate).toLocaleDateString()
    },

    async edit () {
      await router.push('/settings')
    }
  },


  async beforeMount() {
    await this.getData()
  },

}
</script>
