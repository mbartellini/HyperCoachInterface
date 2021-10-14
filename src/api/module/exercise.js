import { ExerciseApi } from "../exercise";

export default {
    namespaced: true,
    state: {
        exercises: []
    },
    getters: {
        findIndex(state) {
            return (exercise) => {
                for (let i = 0; i < state.exercises.length; i++) {
                    if (state.exercises[i].id === exercise.id)
                        return i
                }
                return false;
            }
        },
    },
    mutations: {
        push(state, exercise) {
            state.exercises.push(exercise)
        },
        replace(state, index, exercise) {
            state.exercises[index] = exercise
        },
        splice(state, index) {
            state.exercises.splice(index, 1)
        },
        replaceAll(state, exercises) {
            state.exercises = exercises
        }
    },
    actions: {
        async create({getters, commit}, exercise) {
            const result = await ExerciseApi.add(exercise)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, exercise) {
            const result = await ExerciseApi.modify(exercise)
            const index = getters.findIndex(result)
            if (index && index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, exercise) {
            await ExerciseApi.delete(exercise.id)
            const index = getters.findIndex(exercise)
            if (index && index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, exercise) {
            const index = getters.findIndex(exercise)
            if (index && index >= 0)
                return state.exercises[index]

            const result = await ExerciseApi.get(exercise.id)
            commit('push', result)
            return result
        },
        async getPage({commit}, {pageNumber, pageSize}) {
            const result = await ExerciseApi.getPage(pageNumber, pageSize)
            commit('replaceAll', result.content)
            return result
        },
        async getAll({commit}, controller) {
            const preview = await ExerciseApi.getPage(0, 1)
            let pageSize = Math.max(preview.totalCount, 1)
            const result = await ExerciseApi.getPage(0, pageSize, controller)
            commit('replaceAll', result.content)
            return result
        }
    },
}