<template>
  <v-navigation-drawer
      app
      clipped
      permanent
      class="primary"
      :width="230"
  >
    <v-list nav dense>
      <v-list-item-group mandatory v-model="selectedItem" active-class="secondary font-weight-bold">
        <v-list-item v-for="(route, i) in sideBarRoutes" :key="i" :to="{name: route.route}" exact>
          <v-list-item-icon>
            <v-icon
                color="white"
            >{{route.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content height="20" >
            <v-list-item-title class="sidebar-option py-1 text-lg-h6"> {{route.name}} </v-list-item-title>
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
      {name: 'Inicio', route: 'Home', icon: 'mdi-home'},
      {name: 'Favoritos', route: 'Favorites', icon:'mdi-star'},
      {name: 'Mis rutinas', route: 'MyRoutines', icon: 'mdi-folder'},
      {name: 'Mis ejercicios', route: 'MyExercises', icon: 'mdi-weight-lifter'},
      {name: 'Perfil', route: 'Profile', icon: 'mdi-account'},
      {name: '[Iniciar]', route: 'Initialization', icon: 'mdi-restart'},
    // TODO: make active icon to only have outline.
    ],
    selectedItem: null,
  })
}
</script>

<style scoped>

.sidebar-option {
  color: white;
}

v-icon {
  color: white;
}
</style>