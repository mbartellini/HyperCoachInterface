import {RoutineApi} from "../routine";

export default {
    namespaced: true,
    state: {
        routines: []
    },
    getters: {
        findIndex(state) {
            return (routine) => {
                for (let i = 0; i < state.routines.length; i++) {
                    if (state.routines[i].id === routine.id)
                        return i
                }
                return false;
            }
        },
    },
    mutations: {
        push(state, routine) {
            state.routines.push(routine)
        },
        replace(state, index, routine) {
            state.routines[index] = routine
        },
        splice(state, index) {
            state.routines.splice(index, 1)
        },
        replaceAll(state, routines) {
            state.routines = routines
        }
    },
    actions: {
        async create({getters, commit}, routine) {
            const result = await RoutineApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, routine) {
            const result = await RoutineApi.modify(routine)
            const index = getters.findIndex(result)
            if (index && index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, routine) {
            await RoutineApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index && index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, routine) {
            const index = getters.findIndex(routine)
            if (index && index >= 0)
                return state.routines[index]

            const result = await RoutineApi.get(routine.id)
            commit('push', result)
            console.log(result)
            return result
        },
        async getPage({commit}, {pageNumber, pageSize}) {
            const result = await RoutineApi.getPage(pageNumber, pageSize)
            commit('replaceAll', result.content)
            return result
        },
        async getMyRoutines({commit}, controller) {
            const preview = await RoutineApi.getMyRoutinesPage(0, 1)
            let pageSize = Math.max(preview.totalCount, 1)
            const result = await RoutineApi.getMyRoutinesPage(0, pageSize, controller)
            commit('replaceAll', result.content)
            return result
        }
    },
}