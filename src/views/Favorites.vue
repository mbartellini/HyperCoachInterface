<template>
  <div>
  <h1>Favorites</h1>
    <v-container fluid >
      <v-row dense >
        <v-col v-for="(routine, i) in favorites" :key="i">
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
        { title: 'Abdominales', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Tren Superior', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
        { title: 'Piernas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Yoga', src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
        { title: 'Brazos', src: '../assets/arms.jpg' }
      ]
    }
  }
}
</script>
