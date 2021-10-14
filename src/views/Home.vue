<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Recientes</h1>
      </v-row>

      <v-row fluid>
        <RoutinesCardsGrid :routines="recent" />
      </v-row>

      <v-row class="text-h5 ma-3 mt-15">
        <h1>Todas las rutinas</h1>
      </v-row>

      <v-row fluid>
        <RoutinesCardsGrid :routines="routines" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid"
import {mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    RoutinesCardsGrid,
  },
  data: () => ({
    recent: [],
    recent_empty: true,
    routines: [],
    routines_empty: true,
  }),
  methods: {
    ...mapActions('routine', {
      $getRecent: 'getPage',
      $getRoutines: 'getPage',
    }),
    async getRecent() {
      try {
        let result = await this.$getRoutines( {pageNumber: 0, pageSize:50});
        this.recent_empty = result.totalCount === 0
        this.recent = result.content
      } catch(e) {
        alert(e)
      }
    },
    async getRoutines() {
      try {
        let result = await this.$getRoutines( {pageNumber: 0, pageSize:50});
        this.routines_empty = result.totalCount === 0
        this.routines = result.content
      } catch(e) {
        alert(e)
      }
    },
  },
  beforeMount() {
    this.getRecent();
    this.getRoutines();
  },
}
</script>

<style scoped>

</style>