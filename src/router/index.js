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
        path: '/favorites',
        name: 'Favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
    },
    {
        path: '/myrutines',
        name: 'MyRutines',
        component: () => import(/* webpackChunkName: "myrutines" */ '../views/MyRutines.vue')
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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router