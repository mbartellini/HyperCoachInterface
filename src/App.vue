<template>
  <v-app>
    <v-app-bar app clipped-left class="secondary">
      <v-img src="@/assets/hci.png" alt="Logo" :max-height="50" :max-width="50" />
      <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
      <v-app-bar-title class="title" >Hyper Coach Interface</v-app-bar-title>
      <router-link class="profile" :to="{name: profileRoute}">{{username}}</router-link>
      <figure>
        <router-link class="profile" :to="{name: profileRoute}" >
          <img src="@/assets/Juani.jpeg" :height="32" :width="32" class="profilepic" alt="Profile picture"/>
        </router-link>
      </figure>
    </v-app-bar>

    <v-navigation-drawer
        app
        clipped
        permanent
        class="primary"
        :width="200"
    >
      <v-list nav dense>
        <v-list-item-group mandatory v-model="selectedItem" active-class="secondary">
          <v-list-item v-for="(route, i) in sideBarRoutes" :key="i" :to="{name: route}" exact>
            <!-- <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon> -->
              <v-list-item-content >
                <v-list-item-title class="sidebar-option" v-text="route"/>
              </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view :key="$route.path" />
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
    selectedItem: null,
    profileRoute: 'Profile',
    username: 'Juani Garcia',
  }),

  methods: {
  }
};

</script>

<style scoped>
.title {
  color: white;
  font-weight: bolder;
  padding: 10px;
}

.sidebar-option {
  color: white;
  font-size: larger;
}

.profile {
  color: white;
  text-decoration: underline;
  position: absolute;
  right: 46px;
  padding: 10px;
}

.profilepic {
  position: absolute;
  right: 15px;
  border-radius: 50%;
  border: 1px solid white;
}

</style>