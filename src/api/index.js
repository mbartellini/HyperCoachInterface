import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/api/module/security';
import sport from '@/api/module/sport';
import exercise from '@/api/module/exercise'
import category from '@/api/module/category'
import routine from '@/api/module/routine'
import favorite from '@/api/module/favorite'

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
    sport,
    exercise,
    category,
    routine,
    favorite,
  }
})
