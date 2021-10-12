<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Favoritos</h1>
      </v-row>
      <v-row class="text-h6 ma-3 pt-5">
        <p>
          ¡Estas son las rutinas que marcaste como favoritas!
        </p>
      </v-row>

      <v-row dense justify="space-between">
        <v-col
            v-for="(routine, i) in favorites"
            :key="i"
            xs="12"
            sm="12"
            md="3"
            lg="2"
            xl="2"
        >
          <RoutineCard :routine="routine"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import RoutineCard from '@/components/RoutineCard'

export default {
  name: 'Favorites',

  components: {
    RoutineCard,
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