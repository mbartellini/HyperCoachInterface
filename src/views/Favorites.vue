<template>
  <div>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Favoritos</h1>
      </v-row>
      <div v-if="!favorites_empty">
        <v-row class="text-h6 ma-3 pt-5">
          <p>
            ¡Estas son las rutinas que marcaste como favoritas!
          </p>
        </v-row>

        <v-row fluid>
          <RoutinesCardsGrid :routines="favorites" />
        </v-row>
      </div>

      <div v-else>
        <v-row class="text-h6 ma-3 pt-5">
          <p>
            Todavía no marcaste ninguna rutina como favorita. <router-link :to="{name: 'Home'}">¿Querés explorarlas para encontrar la indicada?</router-link>
          </p>
        </v-row>
      </div>

    </v-container>
  </div>
</template>



<script>
import RoutinesCardsGrid from "../components/RoutinesCardsGrid";
import {mapActions} from "vuex";

export default {
  name: 'Favorites',

  components: {
    RoutinesCardsGrid,
  },
  data: () => ({
    favorites: [],
    favorites_empty: true,
  }),
  methods: {
    ...mapActions('favorite', {
      $getFavorites: 'getPage',
    }),
    async getFavorites() {
      try {
        let result = await this.$getFavorites({pageNumber: 0, pageSize:50});
        this.favorites_empty = result.totalCount === 0
        this.favorites = result.content
      } catch(e) {
        console.log(e)
      }
    },
  },
  async created() {
    await this.getFavorites();
  },
}
</script>