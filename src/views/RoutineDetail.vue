<template>
  <v-container>
    <v-row class="ma-5">
      <v-btn
          class="my-3 white--text"
          color = "#8e8e8f"
          elevation="3"
          fab
      >
        <v-icon>
         mdi-plus
        </v-icon>
      </v-btn>
    </v-row>
     <v-row>
        <v-col
            cols="6"
        >
            <v-img
                class="ma-auto"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="200"
                :src="card.src"
                contain
            ></v-img>
        </v-col>

       <v-col
           cols="6"
       >
         <h1>Rutina de brazos</h1>

       </v-col>
      </v-row>
    <v-row>

      <v-col
          v-for="cycle in card.cycles"
          :key="cycle.position"
          cols="12"
      >
        <CycleCard></CycleCard>
      </v-col>

    </v-row>
  </v-container>
</template>



<script>
import CycleCard from "../components/CycleCard";

export default {
  name: 'RoutineDetail',

  components: {
    CycleCard
  },

  data: () => ({
    card:
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

  }),
}
</script>
