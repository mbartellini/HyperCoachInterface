import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/api/module/security';
import sport from '@/api/module/sport';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    security,
    sport
  }
})