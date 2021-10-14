import Vue from 'vue'
import App from './App.vue'
import security from './api'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import {mapGetters} from "vuex";

Vue.config.productionTip = false

Vue.use(Vuesax, {
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'#8e8e8f'
  }
})

new Vue({
  security,
  vuetify,
  router,
  async beforeCreate() {
    await this.$store.dispatch('security/initialize')
  },
  computed: {
    ...mapGetters({
      $isLoggedIn: 'isLoggedIn',
    })
  },
  render: h => h(App)
}).$mount('#app')
