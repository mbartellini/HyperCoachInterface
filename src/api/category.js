import { Api } from './api.js'

export { CategoryApi, Category }

class CategoryApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/categories${ slug ? `/${slug}` : ''}`
    }

    static async add(sport, controller) {
        return await Api.post(CategoryApi.getUrl(), true, sport, controller)
    }

    static async modify(sport, controller) {
        return await Api.put(CategoryApi.getUrl(sport.id), true, sport, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(CategoryApi.getUrl(id), true, controller)
    }

    static async get(id, controller) {
        return await Api.get(CategoryApi.getUrl(id),true,  controller)
    }

    static async getAll(controller) {
        return await Api.get(CategoryApi.getUrl(), true, controller)
    }
}

class Category {
    constructor(id, name, detail) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.detail = detail;
    }
}
