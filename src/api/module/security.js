import {UserApi} from "../user";
import {Api} from "../api";

const SECURITY_TOKEN_KEY = 'security-token'

export default {
    name: 'security',
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        isLoggedIn(state) {
            return state.token != null
        },
        async getCurrentUser(state) {
            if (state.user) {
                console.log(state.user.firstName)
                return state.user
            }

            const result = await UserApi.get()
            state.user = result
            return result
        }
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
            return result
        },
        async register({dispatch}, {credentials, rememberMe}) {
            const result = await UserApi.register(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
            return result
        },
        async modify({dispatch}, {credentials, rememberMe}) {
            const result = await UserApi.modify(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
            return result
        },
        async logout({dispatch}) {
            console.log("ja")
            dispatch('removeToken')
            dispatch('removeUser')
            try {
                await UserApi.logout()
            } catch (e) {
                console.log(e)
            }
            console.log("jas")
        },
    },
}