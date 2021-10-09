<template>
  <v-app>
    <v-app-bar app clipped-left class="secondary">
      <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title>Hyper Coach Interface</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app
                         class="primary"
                         clipped
    >
      <router-link :to="{ name: 'Home'}">Home</router-link> |
      <router-link :to="{ name: 'MyRoutines'}">MyRoutines</router-link>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

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
      'MyRoutines',
      'Search',
      'Settings',
      'Info'
    ],
  }),
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
