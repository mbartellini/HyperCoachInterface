import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
