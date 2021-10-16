<template>
    <v-card
        elevation="6"
        max-width="200"
        class="rounded-card"
        :to="{ name: 'ExerciseDetail', params: {
          id: exercise.id
        }}"
    >
      <v-img
          lazy-src="@/assets/hci.png"
          :src="img_src"
          height="114px"
      ></v-img>  <!-- Make it variable so that it does not break in small screens. -->
      <v-card-title class="justify-center" max-width="200">
        {{ exercise.name }}
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: {
    exercise: Object,
  },
  data: () => ({
    img_src: ''
  }),
  methods: {
    getImg() {
      if (this.exercise.metadata) {
        if (this.exercise.metadata.img_src !== "") {
          this.img_src = this.exercise.metadata.img_src
        }
      }
    }
  },
  beforeMount() {
    this.getImg()
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin: 10px;
}
</style>