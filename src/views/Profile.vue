<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
      </v-col>
      <v-col cols="4">
        <div style="margin-top:70px">
          <v-avatar
              color="primary"
              size="300"
          >
            <v-img
                :src="require('../assets/Juani.jpeg')"
                class="mx-auto"
                max-width="300"
                height="300"
                rounded
            />
          </v-avatar>
        </div>
      </v-col>
        <v-col cols="4" style="margin-top: 15px">
          <v-btn
              class = "my-3 white--text"
              color="grey darken-1"
              elevation = "3"
              large
              rounded
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Editar perfil
          </v-btn>
        </v-col>
    </v-row>
    <v-col class="text-center">
      <h1>Nombre</h1>
      <v-card
          elevation="2"
          class ="ma-auto"
          height="40"
          width="400"
      >
        <subtitle-1 class="text-center"> {{user.name}} </subtitle-1>
      </v-card>
      <h1>Usuario</h1>
      <v-card
          elevation="2"
          class ="mx-md-auto"
          height="40"
          width="400"
      >
        <subtitle-1 class="text-center"> {{user.username}} </subtitle-1>
      </v-card>
      <h1>E-mail</h1>
      <v-card
          elevation="2"
          class ="mx-md-auto"
          height="40"
          width="400"
      >
        <subtitle-1 class="text-center"> {{user.email}} </subtitle-1>
      </v-card>
      <h1>Sexo</h1>
      <v-card
          elevation="2"
          class ="mx-md-auto"
          height="40"
          width="400"
      >
        <subtitle-1 class="text-center"> {{user.sex}} </subtitle-1>
      </v-card>
      <h1>Edad</h1>
      <v-card
          elevation="2"
          class ="mx-md-auto"
          height="40"
          width="400"
      >
        <subtitle-1 class="text-center"> {{user.age}} </subtitle-1>
      </v-card>
    </v-col>
  </v-container>
</template>


<script>

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
}
</script>
