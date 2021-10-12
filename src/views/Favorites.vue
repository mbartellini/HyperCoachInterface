<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Favoritos</h1>
      </v-row>
      <div v-if="favorites">
        <v-row class="text-h6 ma-3 pt-5">
          <p>
            ¡Estas son las rutinas que marcaste como favoritas!
          </p>
        </v-row>

        <v-row fluid>
          <RoutinesCardsGrid :routines="favorites" />
        </v-row>
      </div>

      <div v-else>
        <v-row class="text-h6 ma-3 pt-5">
          <p>
            Todavía no marcaste ninguna rutina como favorita. <router-link :to="{name: 'Home'}">¿Querés explorarlas para encontrar la indicada?</router-link>
          </p>
        </v-row>
      </div>

    </v-container>
  </div>
</template>



<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid";

export default {
  name: 'Favorites',

  components: {
    RoutinesCardsGrid,
  },

  data: () => ({
  }),

  computed: {
    favorites() {
      return [
        { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
        { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
        { title: 'Brazos', img_src: '../assets/arms.png' }
      ]
    }
  }
}
</script>