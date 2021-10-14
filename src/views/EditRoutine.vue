<template>
  <v-container fluid>
    <v-row class="justify-left mb-3">
      <GoBackButton/>
    </v-row>
    <v-row class="ma-3 mb-5 justify-space-around align-center">
      <v-col class="d-flex justify-xs-center justify-sm-center justify-md-center"
             xs="12"
             sm="12"
             md="12"
             lg="4"
             xl="4"
      >
        <v-row fluid cols="12">
        <v-card dense elevation="10" class="d-inline-flex justify-center rounded-xl">
          <v-img
              class="justify-center ma-auto"
              lazy-src="@/assets/loading.gif"
              width="500px"
              :src="routine.metadata.img_src"
              contain
          >

            <v-btn fab class="primary">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-img>
        </v-card>
        </v-row>
      </v-col>
      <v-col
          xs="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
      >
        <v-row class="mt-5">
          <v-text-field
              dense
              v-model="routine.name"
              outlined
              clearable
              label="Título de la rutina"
          />
        </v-row>
        <v-row class="ma-0 d-flex justify-space-between">
          <v-col cols="6" class="ma-0 justify-space-between">
            <v-text-field
                v-model="routine.metadata.duration"
                outlined
                disabled
                label="Duración (mins)"
            />
          </v-col>
          <v-col cols="6">
            <v-autocomplete
                v-model="routine.difficulty"
                :items="difficultiesAvailable"
                label="Dificultad"
                placeholder="Elegir..."
                required
                outlined
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-checkbox
              v-model="routine.equipment"
              label="Requiere equipamiento"
          ></v-checkbox>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-content-center">
      <v-col
          v-for="(cycle, i) in routine.metadata.cycles"
          :key="i"
          class="pa-lg-10 pa-lg-10 d-flex align-content-center justify-center"
          cols="12"
      >
        <v-row fluid class="d-flex justify-center">
          <v-col cols="2">
            <v-btn fab color="error" class="d-flex justify-center" @click="deleteCycle(i)">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="10">
            <EditCycleCard :routine-id="routine.id" :cycle-id="cycle.id" :cycle="cycle" class="ma-auto"></EditCycleCard>
          </v-col>
        </v-row>
      </v-col>

    </v-row>

    <v-btn rounded dark large x-large color="success" fixed right bottom>
      <v-icon dark>mdi-content-save</v-icon>
      Guardar
    </v-btn>
  </v-container>
</template>

<script>
import GoBackButton from "../components/GoBackButton";
import EditCycleCard from "../components/EditCycleCard";

export default {
  name: "EditRoutine",
  props: {
    id: {
      type: Number,
      required: false,
    }
  },
  components: {
    GoBackButton,
    EditCycleCard,
  },
  data: () => ({
    routine: {
      name: 's',
      detail: 'b',
      isPublic: true,
      category: {id: 1},
      difficulty: 'rookie',
      metadata: {
        img_src: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
        duration: 0,
        equipment: false,
        cycles: [
          {
            name: "Ciclo 1",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                limit: 5,
                limitType: 'repetitions',
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
          {
            name: "Ciclo 1",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
          {
            name: "Ciclo 1",
            repetitions: 1,
            exercises: [
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
              {
                id: 0,
                repetitions: 5,
                duration: 30,
              },
            ]
          },
        ],
      }
    },

  }),
  methods: {
    deleteCycle(index) {
      alert(index)
    }
  },
  computed: {
    difficultiesAvailable: [
      {
        name: 'rookie',
        hint: 'novicia',
      },{
        name: 'beginner',
        hint: 'principiante',
      },{
        name: 'intermediate',
        hint: 'intermedia',
      },{
        name: 'advanced',
        hint: 'avanzada',
      },{
        name: 'expert',
        hint: 'experta',
      },
    ],
  },
}
</script>

<style scoped>

</style>



