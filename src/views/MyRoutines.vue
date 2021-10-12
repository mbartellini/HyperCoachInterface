<template>
  <div>
    <h1>MyRoutines</h1>
    <v-container fluid >
      <v-row dense >
        <v-col v-for="(routine, i) in my_routines" :key="i">
          <RoutineCard :routine="routine"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import RoutineCard from '@/components/RoutineCard'

export default {
  name: 'MyRoutines',

  components: {
    RoutineCard
  },

  data: () => ({
  }),

  computed: {
    my_routines() {
      return [
        { title: 'Abdominales', img_src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Tren Superior', img_src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
        { title: 'Piernas', img_src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Yoga', img_src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
        { title: 'Brazos', img_src: '../assets/arms.jpg' }
      ]
    }
  }
}
</script>
