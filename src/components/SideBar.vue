<template>
  <v-navigation-drawer
      app
      clipped
      permanent
      class="primary"
      :width="200"
  >
    <v-list nav dense>
      <v-list-item-group mandatory v-model="selectedItem" active-class="secondary">
        <v-list-item v-for="(route, i) in sideBarRoutes" :key="i" :to="{name: route.name}" exact>
<!--          <v-list-item-icon>-->
<!--            <v-icon v-text="route.icon"></v-icon>-->
<!--          </v-list-item-icon>-->
          <v-list-item-content >
            <v-list-item-title class="sidebar-option" v-text="route.name"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',

  data:() => ({
    sideBarRoutes : [
      {name: 'Home', icon: ''},
      {name: 'Favorites', icon:''},
      {name: 'MyRoutines', icon: ''},
      {name: 'Search', icon: ''},
      {name: 'Settings', icon: ''},
      {name: 'Info', icon: ''},
    ],
    selectedItem: null,
  })
}
</script>

<style scoped>

.sidebar-option {
  color: white;
  text-align: center;
}

</style>