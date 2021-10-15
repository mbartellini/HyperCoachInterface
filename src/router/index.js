import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/api/index.js'

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
        path: '/favorites',
        name: 'Favorites',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
    },
    {
        path: '/my_routines',
        name: 'MyRoutines',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "my_routines" */ '../views/MyRoutines.vue')
    },
    {
        path: '/my_exercises',
        name: 'MyExercises',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "my_exercises" */ '../views/MyExercises')
    },
    {
        path: '/search',
        name: 'Search',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    },
    {
        path: '/information',
        name: 'Info',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
    },
    {
        path: '/routine/:id',
        name: 'RoutineDetail',
        meta: { requiresAuth: true },
        props: ({params}) => ({id: Number.parseInt(params.id, 10) || 0}),
        component: () => import(/* webpackChunkName: "routine_detail" */ '../views/RoutineDetail.vue'),
        /* beforeEnter: (to, from, next) => {
            const exists = store.routines.find(
                routine => routine.id === to.params.id
            )
            if (exists) {
                next()
            } else {
                next({name: 'NotFound'})
            }
        }, */
    },
    {
        path: '/routine_edit/:id?',
        name: 'EditRoutine',
        meta: { requiresAuth: true },
        props: ({params}) => ({id: params.id === null ? null : Number.parseInt(params.id, 10) || 0}),
        component: () => import(/* webpackChunkName: "edit_routine" */ '../views/EditRoutine.vue'),
        /* beforeEnter: (to, from, next) => {
            const exists = store.routines.find(
                routine => routine.id === to.params.id
            )
            if (exists) {
                next()
            } else {
                next({name: 'NotFound'})
            }
        }, */
    },
    {
        path: '/exercise/:id',
        name: 'ExerciseDetail',
        meta: { requiresAuth: true },
        props: ({params}) => ({id: Number.parseInt(params.id, 10) || 0}),
        component: () => import(/* webpackChunkName: "exercise_detail" */ '../views/ExerciseDetail.vue'),
        /* beforeEnter: (to, from, next) => {
            const exists = store.routines.find(
                routine => routine.id === to.params.id
            )
            if (exists) {
                next()
            } else {
                next({name: 'NotFound'})
            }
        }, */
    },
    {
        path: '/exercise_edit/:id?',
        name: 'EditExercise',
        meta: { requiresAuth: true },
        props: ({params}) => ({id: params.id == null ? null : Number.parseInt(params.id, 10) || 0}),
        component: () => import(/* webpackChunkName: "edit_exercise" */ '../views/EditExercise.vue'),
        /* beforeEnter: (to, from, next) => {
            const exists = store.routines.find(
                routine => routine.id === to.params.id
            )
            if (exists) {
                next()
            } else {
                next({name: 'NotFound'})
            }
        }, */
    },
    {
        path: '/login_prompt',
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
        path: '/init',
        name: 'Initialization',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "init" */ '../views/Initialization.vue')
    },
    {
        path: '/not_found',
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

router.beforeResolve((to, from, next) => {
    if (to.matched.some(route => route.meta['requiresAuth']) && !store.getters['security/isLoggedIn']) {
        next({name: "LoginPrompt", query: { redirect: to.fullPath }});
    } else {
        next();
    }
});

export default router
