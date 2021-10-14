import {CategoryApi} from "../category";

export default {
    namespaced: true,
    state: {
        categories: []
    },
    getters: {
        findIndex(state) {
            return (category) => {
                for (let i = 0; i < state.categories.length; i++) {
                    if (state.categories[i].id === category.id)
                        return i
                }
                return false;
            }
        },
    },
    mutations: {
        push(state, category) {
            state.categories.push(category)
        },
        replace(state, index, category) {
            state.categories[index] = category
        },
        splice(state, index) {
            state.categories.splice(index, 1)
        },
        replaceAll(state, categories) {
            state.categories = categories
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
            const preview = await CategoryApi.getPage(0, 1)
            const pageSize = Math.max(preview.totalCount, 1)
            const result = await CategoryApi.getPage(0, pageSize, controller)
            commit('replaceAll', result.content)
            return result
        }
    },
}