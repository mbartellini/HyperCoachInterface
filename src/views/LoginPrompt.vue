<template>
  <div class="text-center">
    <v-sheet
        class="px-7 pt-7 pb-4 mt-5 text-center d-inline-block rounded-lg"
        outlined
        elevation="10"
    >
      <div class="text-h6 mb-4">
        No has iniciado sesión :(
      </div>
      <div class="text-body-2 mb-4">
        Para acceeder a esta funcionalidad debes iniciar sesión.
      </div>

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
            :to="{name: 'Registration'}"
        >
          Registrarme
        </v-btn>
      </div>
    </v-sheet>
  </div>
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

</style>