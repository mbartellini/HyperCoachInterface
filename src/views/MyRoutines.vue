<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Mis ejercicios</h1>
      </v-row>
      <v-row class="text-h6 ma-3 pt-5">
        <p>
          ¡Estas son las rutinas que creaste!
        </p>
        <v-spacer></v-spacer>
        <v-btn
            tile
            large
            class="rounded-lg"
            color="success"
            :to="{name: 'EditRoutine', params: {
              id: null
            }}"
        ><v-icon left outlined> mdi-plus </v-icon>
          <div class="text-decoration-underline">Crear</div>
        </v-btn>
      </v-row>
      <v-row fluid>
        <RoutinesCardsGrid :routines="myRoutines" />
      </v-row>
    </v-container>
  </div>
</template>



<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid";

export default {
  name: 'MyRoutines',

  components: {
    RoutinesCardsGrid,
  },

  data: () => ({
    myRoutines: [
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
