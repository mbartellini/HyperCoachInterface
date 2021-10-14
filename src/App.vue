<template>
  <v-app>
    <TopBar />
    <SideBar />

    <v-main id="main">
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import router from './router/index.js';
import SideBar from '@/components/SideBar';
import TopBar from "@/components/TopBar";

export default {
  name: 'App',

  components: {
    TopBar,
    SideBar
  },

  data: () => ({
    router,
    sideBarRoutes : [
      'Home',
      'Favorites',
      'MyRoutines',
      'Search',
      'Settings',
      'Info',
      'Login',
      'LoginQuestions',
    ],
    selectedItem: null,
    profileRoute: 'Profile',
    username: 'Juani Garcia',
  }),

  methods: {
  }
};
</script>

<style scoped>
#main {
  /*background: url('https://s1.1zoom.me/b5050/585/Texture_Brick_Wall_White_545270_2560x1440.jpg') no-repeat center center fixed !important;*/
  background-size: cover;
}
</style>