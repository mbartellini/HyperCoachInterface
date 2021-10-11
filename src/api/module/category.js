import {CategoryApi} from "../category";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        findIndex(state) {
            return (category) => {
                return state.items.findIndex(item => item.id === category.id)
            }
        },
    },
    mutations: {
        push(state, category) {
            state.items.push(category)
        },
        replace(state, index, category) {
            state.items[index] = category
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, category) {
            state.items = category
        }
    },
    actions: {
        async create({getters, commit}, category) {
            const result = await CategoryApi.add(category)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, category) {
            const result = await CategoryApi.modify(category)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, category) {
            await CategoryApi.delete(category.id)
            const index = getters.findIndex(category)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, category) {
            const index = getters.findIndex(category)
            if (index >= 0)
                return state.items[index]

            const result = await CategoryApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await CategoryApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }
    },
}