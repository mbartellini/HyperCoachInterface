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
         mdi-close
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
                :src="routine.img_src"
                contain
            ></v-img>
        </v-col>

       <v-col
           cols="6"
       >
         <h1>{{ routine.title }}</h1>

       </v-col>
      </v-row>
    <v-row>

      <v-col
          v-for="cycle in routine.cycles"
          :key="(routine.title, cycle.position)"
          cols="12"
      >
        <CycleCard :info="cycle" class="ma-auto"></CycleCard>
      </v-col>

    </v-row>
  </v-container>
</template>



<script>
import store from "@/store";
import CycleCard from "../components/CycleCard";

export default {
  name: 'RoutineDetail',

  components: {
    CycleCard
  },

  data: () => ({

  }),
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  computed: {
    routine() {
      return store.routines.find(
          routine => routine.id === this.id
      )
    }
  }
}
</script>
