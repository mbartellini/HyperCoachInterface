<template>
  <v-app>
    <!--    <v-navigation-drawer-->
    <!--        app-->
    <!--        disable-resize-watcher-->
    <!--        permanent-->
    <!--    >-->
    <!--    </v-navigation-drawer>-->


    <v-app-bar app clipped-left class="secondary">
      <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title color="white">Hyper Coach Interface</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app
                         class="primary"
                         clipped
    >

    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
      </v-container>
    </v-main>

    <!-- <v-footer app> -->
    <!-- -->
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
import router from './router/index.js';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    router,
    sideBarRoutes : [
      'Home',
      'Favorites',
      'MyRutines',
      'Search',
      'Settings',
      'Info'
    ],
  }),
};

</script>

<style scoped>
#app {
  background: lightgrey;
}
</style>