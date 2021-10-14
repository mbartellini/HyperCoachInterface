<template>
    <v-container fluid>
      <v-row fluid class="ma-0 d-flex align-content-space-around flex-wrap justify-left">
        <v-col
            v-for="(exercise, i) in exercises"
            :key="i"
            class="ma-0 mb-5 pa-0"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
        >
          <ExerciseCard :exercise="exercise"/>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import ExerciseCard from "./ExerciseCard";

export default {
  name: "ExercisesCardsGrid",
  props: {
    exercises: {
      type: Array,
      required: true,
    },
  },
  components: {
    ExerciseCard,
  },
}
</script>

<style scoped>

</style>