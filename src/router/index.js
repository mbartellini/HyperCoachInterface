import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store.js'

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
        path: '/register',
        name: 'Registration',
        component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
    },
    {
        path: '/LoginQuestions',
        name: 'LoginQuestions',
        component: () => import(/* webpackChunkName: "login_questions" */ '../views/LoginQuestions.vue')
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
    },
    {
        path: '/myroutines',
        name: 'MyRoutines',
        component: () => import(/* webpackChunkName: "my_routines" */ '../views/MyRoutines.vue')
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
        path: '/routine/:id',
        name: 'RoutineDetail',
        props: ({params}) => ({id: Number.parseInt(params.id, 10) || 0}),
        component: () => import(/* webpackChunkName: "routine_detail" */ '../views/RoutineDetail.vue'),
        beforeEnter: (to, from, next) => {
            const exists = store.routines.find(
                routine => routine.id === to.params.id
            )
            if (exists) {
                next()
            } else {
                next({name: 'NotFound'})
            }
        },
    },
    {
        path: 'loginprompt',
        name: 'LoginPrompt',
        component: () => import(/* webpackChunkName: "login_prompt" */ '../views/LoginPrompt')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
    },
    {
        path: '/notfound',
        alias: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "not_found" */ '../views/NotFound.vue')
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth) && !store.user) {
        next({name: "LoginPrompt", query: { redirect: to.fullPath }});
    } else {
        next();
    }
});

export default router
