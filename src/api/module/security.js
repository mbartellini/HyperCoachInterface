import {UserApi} from "../user";
import {Api} from "../api";

const SECURITY_TOKEN_KEY = 'security-token'

export default {
    name: 'security',
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        isLoggedIn(state) {
            return state.token != null
        },
        async getCurrentUser(state) {
            if (state.user) {
                return state.user
            }

            const result = await UserApi.get()
            state.user = result
            return result
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        initialize({commit}) {
            const token = localStorage.getItem(SECURITY_TOKEN_KEY)
            if (token) {
                commit('setToken', token)
                Api.token = token
            }
        },
        updateToken({commit}, {token, rememberMe}) {
            if (rememberMe)
                localStorage.setItem(SECURITY_TOKEN_KEY, token)
            commit('setToken', token)
            Api.token = token
        },
        updateUser({commit}, {user}) {
            commit('setUser', user)
        },
        removeToken({commit}) {
            localStorage.removeItem(SECURITY_TOKEN_KEY)
            commit('setToken', null)
            Api.token = null
        },
        removeUser({commit}) {
            commit('setUser', null)
        },
        async login({dispatch}, {credentials, rememberMe}) {
            const result = await UserApi.login(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
            dispatch('updateUser', { user: result})
            return result
        },
        async register({dispatch}, {credentials, rememberMe}) {
            const result = await UserApi.register(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
            return result
        },
        async modify({dispatch}, {credentials}) {
            const result = await UserApi.modify(credentials)
            dispatch('updateUser', { user: await UserApi.get() })
            return result
        },
        async logout({dispatch}) {
            dispatch('removeToken')
            dispatch('removeUser')
            try {
                await UserApi.logout()
            } catch (e) {
                console.log(e)
            }
        },
    },
}