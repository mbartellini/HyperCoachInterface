<template>
    <v-container fluid>
      <v-row fluid class="ma-0 d-flex align-content-space-around flex-wrap justify-left">
        <v-col
            v-for="(routine, i) in routines"
            :key="i"
            class="ma-0 mb-5 pa-0"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
        >
          <RoutineCard :routine="routine"/>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import RoutineCard from "./RoutineCard";

export default {
  name: "RoutinesCardsGrid",
  props: {
    routines: {
      type: Array,
      required: true,
    },
  },
  components: {
    RoutineCard,
  },
}
</script>

<style scoped>

</style>