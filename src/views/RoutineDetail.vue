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
      { title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        description: {
          duration: 30,
          difficulty: 'Principiante',
          likes: 7700,
          goal: 'Tonificar músculos',
          muscles: 'Piernas',
          equipment: false,
          favourite: false,
        },
        cycles: [
          {
            position: 0,
            title: 'Ciclo de entrada en calor',
            exercises: [
              {
                position: 0,
                title: 'Sentadillas',
                duration: null,
                repetitions: 15,
              },
              {
                position: 1,
                title: 'Descanso',
                duration: 15,
                repetitions: null,
              },
              {
                position: 2,
                title: 'Sentadillas',
                duration: null,
                repetitions: 15,
              },
              {
                position: 3,
                title: 'Descanso',
                duration: 15,
                repetitions: null,
              }
            ]
          },
        ],
      },
    ],

  }),
}
</script>
