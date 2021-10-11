<template>
  <v-container>

    <h1>Recientes</h1>

    <v-container fluid >
      <v-row dense >
        <v-col
            v-for="card in cards"
            :key="card.title"
        >

          <RoutineCard :img_src="card.src">{{card.title}}</RoutineCard>


        </v-col>
      </v-row>
    </v-container>

    <h1>Todas las rutinas</h1>


    <v-container fluid>
      <v-row
          v-for="n in 3"
          :key="n"
          dense>
        <v-col
            v-for="card in cards"
            :key="card.title"
        >

          <RoutineCard :img_src="card.src">{{card.title}}</RoutineCard>


        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>



<script>
import RoutineCard from '../components/RoutineCard'

export default {
  name: 'Home',

  components: {
    RoutineCard,
  },

  data: () => ({
    cards: [
      { title: 'Abdominales', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', src: '@/assets/arms.png' }
    ],
  }),
}
</script>
