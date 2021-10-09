<template>
  <v-app>
    <v-app-bar app clipped-left class="secondary">
      <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title class="title">Hyper Coach Interface</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app clipped class="primary">

      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" active-class="active">
          <v-list-item v-for="route in sideBarRoutes" :key="route" :to="{name: route}">
            <!-- <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon> -->

              <v-list-item-content>
                <v-list-item-title v-text="route"/>
              </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
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
    selectedItem: 0,
  }),
};

</script>

<style scoped>
.active{

}
.title{
  color: white;
  font-weight: bolder;
  padding-left:20px;
}
</style>