<template>
  <v-card
      elevation="24"
      class="mx-auto mt-5"
      width="550"
      rounded
  >
    <v-card-title class="justify-center" > Parece que no iniciaste sesión :(</v-card-title>
    <v-card-text class="text-center">
      Para acceder a esta funcionalidad primero debe registrarse o iniciar sesión.
    </v-card-text>
    <v-list>
      <v-list-item>
        <v-btn class="primary no-uppercase" rounded @click="login"> Iniciar sesión </v-btn>
      </v-list-item>
      <v-list-item >
        <router-link to="Login"> Registrarse </router-link>
      </v-list-item>
    </v-list>
    <!--  TODO: fix button centering  -->
  </v-card>
</template>

<script>

export default {
  name: "LoginPrompt",
  methods: {
    login() {
      this.$router.push("Login")
    }
  }
}
</script>

<style scoped>
.no-uppercase {
  text-transform: none;
}
</style>