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
      { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', img_src: '../assets/arms.jpg' }
    ],

    all: [
      { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', img_src: '../assets/arms.jpg' },
      { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', img_src: '../assets/arms.jpg' },
      { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', img_src: '../assets/arms.jpg' },
    ],
  }),
}
</script>

<style scoped>

</style>