<template>
  <v-form>
    <v-container>
      <v-row class="text-h5 ma-3">
        <h1>Buscar</h1>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            sm="6"
            class="mt-2"
        >
          <v-text-field
              v-model="last"
              label="Buscar"
              prepend-inner-icon="mdi-magnify"
              solo-inverted
              class="ma-2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            sm="6"
            class="text"
        >
          <h3>Filtrar por:</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="4"
            sm="3"
        >
          <v-select
              :items="difficulty"
              label="Dificultad"
              class="ma-2"
              solo-inverted
          >
          </v-select>
        </v-col>
        <v-col
            cols="4"
            sm="3"
        >
          <v-select
              :items="categories"
              label="Categorias"
              class="ma-2"
              solo-inverted
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row
          v-for="n in 3"
          :key="n"
          dense
      >
        <v-col
            v-for="card in cards"
            :key="card.title"
        >
          <RoutineCard :img_src="card.src">{{card.title}}</RoutineCard>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style>
.text{
  margin-left: 10px;
  margin-top: -20px;
}
</style>

<script>

import RoutineCard from '../components/RoutineCard'

export default {
  name: 'Search',

  components: {
    RoutineCard,
  },

  data: () => ({
    last: null,
    cards: [
      { title: 'Abdominales', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      { title: 'Tren Superior', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Piernas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Yoga', src: 'https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg'},
      { title: 'Brazos', src: '../assets/arms.jpg' }
    ],
    difficulty: ['Principiante', 'Intermedio','Avanzado'],
    categories: ['Aerobico', 'Piernas', 'Tren inferior', 'Tren superior', 'Yoga', 'Funcional'],
  }),
}
</script>
