import {FavoriteApi} from "../favorite";

export default {
    namespaced: true,
    state: {
        favorites: []
    },
    getters: {
        findIndex(state) {
            return (routine) => {
                for (let i = 0; i < state.favorites.length; i++) {
                    if (state.favorites[i].id === routine.id)
                        return i
                }
                return false;
            }
        },
    },
    mutations: {
        push(state, routine) {
            state.favorites.push(routine)
        },
        replace(state, index, routine) {
            state.favorites[index] = routine
        },
        splice(state, index) {
            state.favorites.splice(index, 1)
        },
        replaceAll(state, routines) {
            state.favorites = routines
        }
    },
    actions: {
        async create({getters, commit}, routine) {
            const result = await FavoriteApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async delete({getters, commit}, routine) {
            await FavoriteApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index && index >= 0)
                commit('splice', index)
        },
        async getPage({commit}, {pageNumber, pageSize}) {
            const result = await FavoriteApi.getPage(pageNumber, pageSize)
            commit('replaceAll', result.content)
            return result
        },
    },
}