import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

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
  vuetify,
  render: h => h(App),
  theme: {
    themes: {
        primary: '#8e8e8f',
        secondary: '#8e8e8f',
        anchor: '#8e8e8f',
    },
  },
}).$mount('#app')
