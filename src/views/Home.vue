<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Recientes</h1>
      </v-row>

      <v-row fluid>
        <RoutinesCardsGrid :routines="recent" />
      </v-row>

      <v-row class="text-h5 ma-3 mt-15">
        <h1>Todas las rutinas</h1>
      </v-row>

      <v-row fluid>
        <RoutinesCardsGrid :routines="all" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid"

export default {
  name: 'Home',
  components: {
    RoutinesCardsGrid,
  },
  data: () => ({
    recent: [
      { id: 1, title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { id: 1, title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { id: 1, title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { id: 1, title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { id: 1, title: 'Brazos', img_src: '../assets/arms.jpg' }
    ],

    all: [
      { id: 1, title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { id: 1, title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { id: 1, title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { id: 1, title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { id: 1, title: 'Brazos', img_src: '../assets/arms.jpg' },
      { id: 1, title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { id: 1, title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { id: 1, title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { id: 1, title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { id: 1, title: 'Brazos', img_src: '../assets/arms.jpg' },
      { id: 1, title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { id: 1, title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { id: 1, title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { id: 1, title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { id: 1, title: 'Brazos', img_src: '../assets/arms.jpg' },
    ],
  }),
}
</script>

<style scoped>

</style>