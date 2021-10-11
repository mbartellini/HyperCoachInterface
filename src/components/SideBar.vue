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
        <v-list-item v-for="(route, i) in sideBarRoutes" :key="i" :to="{name: route.route}" exact>
<!--          <v-list-item-icon>-->
<!--            <v-icon v-text="route.icon"></v-icon>-->
<!--          </v-list-item-icon>-->
          <v-list-item-content class="my-3" height="20" >
            <v-list-item-title class="sidebar-option text-h6 py-1"> {{route.name}} </v-list-item-title>
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
      {name: 'Inicio', route: 'Home', icon: ''},
      {name: 'Favoritos', route: 'Favorites', icon:''},
      {name: 'Mis rutinas', route: 'MyRoutines', icon: ''},
      {name: 'Buscar', route: 'Search', icon: ''},
      {name: 'Configuración', route: 'Settings', icon: ''},
      {name: 'Info', route: 'Info', icon: ''},
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