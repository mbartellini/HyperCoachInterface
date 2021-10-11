import { Api } from './api.js'

export { RoutineApi, Routine }

class RoutineApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ''}`
    }

    static async add(sport, controller) {
        return await Api.post(RoutineApi.getUrl(), true, sport, controller)
    }

    static async modify(sport, controller) {
        return await Api.put(RoutineApi.getUrl(sport.id), true, sport, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(RoutineApi.getUrl(id), true, controller)
    }

    static async get(id, controller) {
        return await Api.get(RoutineApi.getUrl(id),true,  controller)
    }

    static async getAll(controller) {
        return await Api.get(RoutineApi.getUrl(), true, controller)
    }
}

class Routine {
    constructor(id, name, detail) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.detail = detail;
    }
}
