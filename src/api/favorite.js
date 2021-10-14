import { Api } from './api.js'

export { FavoriteApi }

class FavoriteApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/favourites${ slug ? `/${slug}` : ''}`
    }

    static async add(routine, controller) {
        return await Api.post(FavoriteApi.getUrl(routine.id), true, routine, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(FavoriteApi.getUrl(id), true, controller)
    }

    static async getPage(pageNumber=0, pageSize=10, controller) {
        return await Api.get(FavoriteApi.getUrl('?' + 'page=' + pageNumber + '&size=' + pageSize), true, controller)
    }

}