import { Api } from './api.js'

export { UserApi, LoginCredentials, RegisterCredentials }

class UserApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/users${ slug ? `/${slug}` : ''}`
    }

    static async login(credentials, controller) {
        return await Api.post(UserApi.getUrl('login'), false, credentials, controller)
    }

    static async register(credentials, controller) {
        return await Api.post(UserApi.getUrl(''), false, credentials, controller)
    }

    static async modify(credentials, controller) {
        return await Api.put(UserApi.getUrl('current'), true, credentials, controller)
    }

    static async logout(controller) {
        await Api.post(UserApi.getUrl('logout'), true, controller)
    }

    static async get(controller) {
        return Api.get(UserApi.getUrl('current'), true, controller)
    }
}

class LoginCredentials {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

class RegisterCredentials {
    constructor(username, password, firstName, lastName, gender, birthdate, email, phone, avatarUrl, metadata) {
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.birthdate = birthdate
        this.email = email
        this.phone = phone
        this.avatarUrl = avatarUrl
        this.metadata = metadata
    }
}

export class ModifyCredentials {
    constructor(firstName, lastName, gender, birthdate, avatarUrl, metadata) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.phone = ''
        this.birthdate = birthdate
        this.phone = ''
        this.avatarUrl = avatarUrl
        this.metadata = metadata
    }
}