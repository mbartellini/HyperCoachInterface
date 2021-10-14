import {SportApi} from "../sport";

export default {
    namespaced: true,
    state: {
        exercises: []
    },
    getters: {
        findIndex(state) {
            return (query) => {
                return state.exercises.findIndex(exercise => exercise.id === query.id)
            }
        },
    },
    mutations: {
        push(state, sport) {
            state.exercises.push(sport)
        },
        replace(state, index, sport) {
            state.exercises[index] = sport
        },
        splice(state, index) {
            state.exercises.splice(index, 1)
        },
        replaceAll(state, sports) {
            state.exercises = sports
        }
    },
    actions: {
        async create({getters, commit}, sport) {
            const result = await SportApi.add(sport)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, sport) {
            const result = await SportApi.modify(sport)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, sport) {
            await SportApi.delete(sport.id)
            const index = getters.findIndex(sport)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, sport) {
            const index = getters.findIndex(sport)
            if (index >= 0)
                return state.exercises[index]

            const result = await SportApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await SportApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }
    },
}