<template>
  <v-app-bar app clipped-left class="secondary align-center">
    <v-img src="@/assets/hci.png" alt="Logo" min-width="100" min-height="100" max-height="100" max-width="100"/>
    <!-- <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" /> -->
    <v-app-bar-title class="title" >Hyper Coach Interface</v-app-bar-title>
    <v-spacer/>
    <div v-if="username"> <!-- Logged in -->
      <router-link class="loginprompt" :to="{name: profileRoute}">
        {{username}}
      </router-link>
<!--      <v-img class="profilepic" src="@/assets/Juani.jpeg" />-->

<!--      <figure >-->
<!--        <router-link class="profilepic" :to="{name: profileRoute}" >-->
<!--          <img :src="profile_pic" :height="32" :width="32" class="profilepic" alt="Profile picture"/>-->
<!--        </router-link>-->
<!--      </figure>-->
    </div>
    <div v-else> <!-- Not logged in -->
      <router-link class="loginprompt" :to="{name: 'Login'}">
        Iniciar sesión /
      </router-link>
      <router-link class="loginprompt" :to="{name: 'Registration'}" >
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
    username: 'juanigarcia',
    profile_pic: "@/assets/Juani.jpeg",
  }),
}
</script>

<style scoped>
.title {
  color: white;
  font-weight: bolder;
}

.profilepic {
  margin-right: 100px;
  border-radius: 50%;
  border: 1px solid white;
  height: 32px;
  width: 32px;
}

.loginprompt {
  color: white;
}

</style>