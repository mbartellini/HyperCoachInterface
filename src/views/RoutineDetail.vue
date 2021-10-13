<template>
  <v-container fluid>
    <v-row class="justify-left mb-3">
      <GoBackButton/>
    </v-row>
    <v-row class="ma-3 mb-5 justify-center align-start">
      <v-col class="d-flex justify-xs-center justify-sm-center justify-md-center"
          xs="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
      >
        <v-card dense elevation="10" class="d-inline-flex justify-center rounded-xl">
          <v-img
              class="justify-center ma-auto"
              lazy-src="@/assets/loading.gif"
              width="500px"
              :alt="routine.detail"
              :src="routine.metadata.imgSrc"
              contain
          ></v-img>
        </v-card>
      </v-col>
      <v-col
          class="ml-10 mt-2"
          xs="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
      >
        <v-row class="d-flex align-center">
           <h1 class="increment">{{ routine.name }}</h1>
          <v-spacer/>
          <div class="mx-2">
            <v-btn
                round
                outline
                icon
            >
              <v-icon
                  color="secondary"
                  size="30px"
              > mdi-share-variant-outline </v-icon>
            </v-btn>
            <v-btn
                round
                outline
                icon
                @click="is_fav = !is_fav"
            >
              <v-icon
                  color="secondary"
                  size="30px"
              >{{is_fav ? 'mdi-star' : 'mdi-star-outline'}}</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-divider class="my-5"/>
        <v-row dense class="ma-0 pa-0">
          <v-col dense class="ma-0 pa-0">
            <v-row dense>
            <h4 class="text">{{routine.metadata.duration}} min.</h4>
            </v-row>
            <v-row dense>
            <h4 class="text">{{routine.difficulty}}</h4>
            </v-row>
            <v-row dense>
              <h4 class="text">{{'hola'}}</h4>
            </v-row>
            <v-row dense>
              <h4 class="text">{{'hola'}}</h4>
            </v-row>
            <v-row dense>
              <h4 class="text">{{'hola'}}</h4>
            </v-row>
            <v-row dense>
              <div v-if="routine.metadata.equipment">
                <h4 class="text">Requiere equipamiento.</h4>
              </div>
              <div v-else>
                <h4 class="text">No requiere equipamiento.</h4>
              </div>
              <v-spacer/>
              <div class="mx-2">
                <v-btn
                    class="rounded-lg"
                    color="red"
                >
                  <v-icon left>
                    mdi-delete
                  </v-icon>
                  <div class="text-decoration-underline">
                    Eliminar rutina
                  </div>
                </v-btn>
              </div>
            </v-row>
          </v-col>
        </v-row>
       </v-col>
      </v-row>
    <v-row class="d-flex justify-center">
      <v-col
          v-for="(cycle, i) in routineCycles.content"
          :key="i"
          class="pa-lg-10 pa-lg-10"
          xs="12"
          sm="12"
          md="12"
          lg="5"
          xl="4"
      >
        <CycleCard :routine-id="routine.id" :cycle-id="cycle.id" class="ma-auto"></CycleCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import store from "@/store";
import CycleCard from "../components/CycleCard";
import GoBackButton from "../components/GoBackButton";

export default {
  name: 'RoutineDetail',
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  components: {
    CycleCard,
    GoBackButton
  },
  data: () => ({
    is_fav: false,
    routine: {
      "id": 1,
      "name": "7 x 4 Challenge",
      "detail": "Full Body 7 x 4 Challenge",
      "date": 1602646871112,
      "score": 5,
      "isPublic": true,
      "difficulty": "rookie",
      "user": {
        "id": 1,
        "username": "johndoe",
        "gender": "male",
        "avatarUrl": "https://flic.kr/p/3ntH2u",
        "date": 1602139940660,
        "lastActivity": 1602646870971
      },
      "category": {
        "id": 1,
        "name": "Full Body",
        "detail": "Full Body"
      },
      "metadata": {
        "imgSrc": "data:image/jpeg;base64,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",
        "duration": 30,
        equipment: true,
      },
    },
    routineCycles: {
      "totalCount": 1,
      "orderBy": "id",
      "direction": "asc",
      "content": [
        {
          "id": 1,
          "name": "Fast Warmup",
          "detail": "Fast Warmup",
          "type": "warmup",
          "order": 1,
          "repetitions": 1,
          "metadata": null
        },
        {
          "id": 1,
          "name": "Fast Warmup",
          "detail": "Fast Warmup",
          "type": "warmup",
          "order": 1,
          "repetitions": 1,
          "metadata": null
        },
        {
          "id": 1,
          "name": "Fast Warmup",
          "detail": "Fast Warmup",
          "type": "warmup",
          "order": 1,
          "repetitions": 1,
          "metadata": null
        },
        {
          "id": 1,
          "name": "Fast Warmup",
          "detail": "Fast Warmup",
          "type": "warmup",
          "order": 1,
          "repetitions": 1,
          "metadata": null
        },
        {
          "id": 1,
          "name": "Fast Warmup",
          "detail": "Fast Warmup",
          "type": "warmup",
          "order": 1,
          "repetitions": 1,
          "metadata": null
        },
      ],
      "size": 10,
      "page": 0,
      "isLastPage": true
    },
    cycleExercises: {
      "totalCount": 1,
      "orderBy": "order",
      "direction": "asc",
      "content": [
        {
          "exercise": {
            "id": 1,
            "name": "Fast Warmup",
            "detail": "Fast Warmup",
            "type": "warmup",
            "date": 1620062203228,
            "order": 1
          },
          "order": 1,
          "duration": 30,
          "repetitions": 1,
          "metadata": null
        }
      ],
      "size": 10,
      "page": 0,
      "isLastPage": true
    },
    exercise: {
      "id": 1,
      "name": "Jumping Jacks",
      "detail": "Jumping Jacks",
      "type": "exercise",
      "date": 1620062203228,
      "metadata": null
    },
  }),
  // computed: {
  //   routine() {
  //     return store.routines.find(
  //         routine => routine.id === this.id
  //     )
  //   }
  // }
}
</script>

<style scoped>
h4.text{
  font-weight: normal;
  font-size: medium;
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