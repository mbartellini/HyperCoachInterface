import { Api } from './api.js'

export { RoutineApi, Routine }

class RoutineApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ''}`
    }

    static async add(routine, controller) {
        return await Api.post(RoutineApi.getUrl(), true, routine, controller)
    }

    static async modify(routine, controller) {
        return await Api.put(RoutineApi.getUrl(routine.id), true, routine, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(RoutineApi.getUrl(id), true, controller)
    }

    static async get(id, controller) {
        return await Api.get(RoutineApi.getUrl(id),true,  controller)
    }

    static async getPage(pageNumber=0, pageSize=10, controller) {
        return await Api.get(RoutineApi.getUrl('?' + 'page=' + pageNumber + '&size=' + pageSize), true, controller)
    }

    static async getMyRoutinesPage(pageNumber=0, pageSize=10, controller) {
        return await Api.get(`${Api.baseUrl}/users/current/routines` + '?' + 'page=' + pageNumber + '&size=' + pageSize, true, controller)
    }

}

class Routine {
    constructor(id, name, detail, difficulty, categoryID, metadata) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.detail = detail;
        this.isPublic = true;
        this.difficulty = difficulty;
        this.category = {id: categoryID};
        this.metadata = metadata;
    }
}
