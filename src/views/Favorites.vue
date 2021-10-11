<template>
  <div>
    <v-container>
      <h1 class="increase">Favoritos</h1>
    </v-container>
    <v-container fluid >
      <v-row dense >
        <v-col v-for="routine in favorites" :key="routine">
          <RoutineCard :img_src="routine.src">{{routine.title}}</RoutineCard>
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
