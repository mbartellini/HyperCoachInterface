<template>
  <v-container fluid>
    <v-row class="text-h5 ma-3">
      <h1>Iniciar</h1>
    </v-row>
  </v-container>
</template>



<script>
import {mapActions} from "vuex";
import {Category} from "@/api/category";

export default {
  name: 'Initialization',

  data: () => ({
    success: false,
    target: ['HIT', 'Cardio', 'Calistenia', 'Fisicoculturismo'],
    categories: [],
  }),
  computed: {
  },
  methods: {
    ...mapActions('category', {
      $postCategory: 'create',
      $getCategories: 'getAll',
    }),
    async getCategories() {
      try {
        let result = await this.$getCategories()
        this.categories = result.content
      } catch (e) {
        alert(e)
      }
    },
    async postCategory(categoryName) {
      try {
        let category = new Category(null, categoryName, "")
        await this.$postCategory(category)
        alert(JSON.stringify(category))
      } catch (e) {
        alert(e)
      }
    },
  },
  async created() {
    await this.getCategories()
    let alreadyCreated = []
    for (let i in this.categories) {
      alreadyCreated.push(this.categories[i].name)
    }
    for(let cat in this.target) {
      if (! alreadyCreated.includes(this.target[cat])) {
        await this.postCategory(this.target[cat])
      }
    }
    this.$router.push({name: 'Home'})
  },

}
</script>
