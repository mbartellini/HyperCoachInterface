<template>
  <v-container>
    <v-row>
      <GoBackButton/>
    </v-row>
    <v-row>
      <v-col
          cols="6"
      >
        <v-img
            class="ma-auto"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            src="@/assets/arms.png"
            contain
        ></v-img>
      </v-col>
      <v-col
          cols="6"
      >
        <v-row>
          <h1 class="increment">{{ routine.title }}</h1>
          <v-icon
              color="secondary"
              size="30px"
              style="margin-left: 80px"
          > mdi-share-variant-outline </v-icon>
          <v-icon
              color="secondary"
              size="30px"
              style="margin-left: 25px"
          > mdi-star-outline </v-icon>
        </v-row>
        <v-row>
          <h4 class="text">{{routine.description.duration}} min.</h4>
          <h4 class="text" style="margin-left: 70px">{{routine.description.difficulty}}</h4>
          <div style="margin-top: 20px">
            <v-icon style="margin-left: 70px"> mdi-heart </v-icon>
          </div>
          <h4 class="text">{{routine.description.likes}}</h4>
        </v-row>
        <v-row>
          <h4 class="text">{{routine.description.goal}}</h4>
          <h4 class="text" style="margin-left: 70px">{{routine.description.muscles}}</h4>
          <div v-if="routine.description.equipment">
            <h4 class="text" style="margin-left: 70px">Requiere equipamiento</h4>
          </div>
          <div v-else>
            <h4 class="text" style="margin-left: 70px">No requiere equipamiento</h4>
          </div>
        </v-row>
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

<style>
  h4.text{
    font-weight: normal;
    font-size: medium;
    margin-top: 20px;
  }
  h4.text2 {
    font-weight: normal;
    font-size: medium;
  }
  v-icon.margin-left {
    margin-left: 70px;
  }
  h1.increment{
    font-size: 225%;
  }
</style>

<script>
// import store from "@/store";
import CycleCard from "../components/CycleCard";
import GoBackButton from "../components/GoBackButton";

export default {
  name: 'RoutineDetail',

  components: {
    CycleCard,
    GoBackButton
  },

  data: () => ({
    routine:
        { title: 'Rutina de brazos',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          description: {
            duration: 30,
            difficulty: 'Principiante',
            likes: 7700,
            goal: 'Tonificar músculos',
            muscles: 'Piernas',
            equipment: true,
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
            {
              position: 0,
              title: 'Ciclo principal',
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
            {
              position: 0,
              title: 'Ciclo final',
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
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  // computed: {
  //   routine() {
  //     return store.routines.find(
  //         routine => routine.id === this.id
  //     )
  //   }
  // }
}
</script>
