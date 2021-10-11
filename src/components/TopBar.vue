<template>
  <v-app-bar app clipped-left class="secondary align-center">
    <v-img src="@/assets/hci.png" alt="Logo" :max-height="50" :max-width="50" />
    <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
    <v-app-bar-title class="title" >Hyper Coach Interface</v-app-bar-title>
    <v-spacer/>
    <div v-if="username"> <!-- Logged in -->
      <router-link class="profile" :to="{name: profileRoute}">
        {{username}}
      </router-link>
      <figure >
        <router-link class="profilepic" :to="{name: profileRoute}" >
          <img :src="profile_pic" :height="32" :width="32" class="profilepic" alt="Profile picture"/>
        </router-link>
      </figure>
    </div>
    <div v-else> <!-- Not logged in -->
      <router-link :to="{name: 'Login'}">
        Iniciar sesión /
      </router-link>
      <router-link :to="{name: 'Registration'}" >
        Registrarse
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopBar",

  data: () => ({
    profileRoute: 'Profile',
    username: 'Juan',
    profile_pic: "@/assets/Juani.jpeg",
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
  right: 80px;
  padding: 10px;
}

.profilepic {
  position: absolute;
  right: 10px;
  border-radius: 50%;
  border: 1px solid white;
}

</style>