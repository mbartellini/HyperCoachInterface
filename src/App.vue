<template>
  <v-app>
    <v-navigation-drawer
        app
        disable-resize-watcher
        permanent
    >
    </v-navigation-drawer>
  <SideBar/>

    <v-app-bar
        app
        color="#8e8e8f"
    >
    </v-app-bar>

    <v-main app>
        <RoutineDetail/>
    </v-main>

  </v-app>
</template>

<script>

import SideBar from "@/components/SideBar";
import RoutineDetail from "./views/RoutineDetail";


export default {
  name: 'App',

  components: {
    RoutineDetail,
   // Profile,
    SideBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-main{
  background: url(https://www.pixelstalk.net/wp-content/uploads/2016/04/Grey-backgrounds-free-download.jpg) grey;
}


</style>