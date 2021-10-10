<template>
  <div>
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" class="input" />
      <label for="password">Username</label>
      <input v-model="password" type="password" id="password" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store.js"

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    }
  },
  method: {
    login() {
      // authenticate
      store.user = this.username;
      this.$router.push("/user");
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>