import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/LoginQuestions',
        name: 'LoginQuestions',
        component: () => import(/* webpackChunkName: "LoginQuestions" */ '../views/LoginQuestions.vue')
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
    },
    {
        path: '/myroutines',
        name: 'MyRoutines',
        component: () => import(/* webpackChunkName: "myroutines" */ '../views/MyRoutines.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    },
    {
        path: '/information',
        name: 'Info',
        component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
