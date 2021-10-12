<template>
  <v-container>
    <v-col
        cols="12"
        sm="6"
        class="py-2"
    >
      <h1 class="increase">Ajustes</h1>
      <h3 class = "margin" style="margin-bottom: 10px">Privacidad</h3>
      <div>
        <h4 class="font-weight-regular" style="margin-bottom: 10px">Visibilidad del perfil</h4>
        <v-btn-toggle v-model="toggle_exclusive">
          <v-btn>
            <span class="hidden-sm-and-down">Publico</span>
          </v-btn>
          <v-btn>
            <span class="hidden-sm-and-down">Amigos</span>
          </v-btn>
          <v-btn>
            <span class="hidden-sm-and-down">Solo yo</span>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-col>
  </v-container>
</template>

<style scoped>
  h1.increase {
    font-size : 200%;
  }
  h3.margin {
    margin-top: 10px;
  }
</style>

<script>
export default {
  name: 'Settings',

  components: {
  },

  data: () => ({
  }),
}
</script>
