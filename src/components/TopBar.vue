<template>
  <v-app-bar app clipped-left class="secondary">
    <v-img src="@/assets/hci.png" alt="Logo" :max-height="50" :max-width="50" />
    <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
    <v-app-bar-title class="title" >Hyper Coach Interface</v-app-bar-title>
    <router-link class="profile" :to="{name: profileRoute}">
      {{username}}
    </router-link>
    <figure>
      <router-link class="profile" :to="{name: profileRoute}" >
        <img src="@/assets/Juani.jpeg" :height="32" :width="32" class="profilepic" alt="Profile picture"/>
      </router-link>
    </figure>
  </v-app-bar>

</template>

<script>

export default {
  name: "TopBar",

  data: () => ({
    profileRoute: 'Profile',
    username: 'Juani Garcia',
  }),
}
</script>

<style scoped>
.title {
  color: white;
  font-weight: bolder;
  padding: 10px;
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