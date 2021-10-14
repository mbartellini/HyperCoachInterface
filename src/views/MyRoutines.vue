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
        <RoutinesCardsGrid :routines="routines" />
      </v-row>
    </v-container>
  </div>
</template>



<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid";
import {mapActions} from "vuex";

export default {
  name: 'MyRoutines',

  components: {
    RoutinesCardsGrid,
  },

  data: () => ({
    routines: [],
    routines_empty: true,
  }),
  methods: {
    ...mapActions('routine', {
      $getMyRoutines: 'getMyRoutines',
    }),
    async getMyRoutines() {
      try {
        let result = await this.$getMyRoutines( {pageNumber: 0, pageSize:50});
        this.routines_empty = result.totalCount === 0
        this.routines = result.content
      } catch(e) {
        alert(e)
      }
    },
  },
  beforeMount() {
    this.getMyRoutines();
  },
}
</script>
