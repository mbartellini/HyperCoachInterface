<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            sm="6"
        >

          <v-text-field
              v-model="last"
              label="Buscar"
              prepend-inner-icon="mdi-magnify"
              solo-inverted
              rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <!--          No se como hacer para que quede mas chiquito-->
        <v-col
            cols="3"
            sm="6"
            md="2"
        >
          <v-text-field
              v-model="last"
              label="Filtrar"
              prepend-inner-icon="mdi-filter-variant"
              solo-inverted
              rounded
          ></v-text-field>
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
  }),
}
</script>
