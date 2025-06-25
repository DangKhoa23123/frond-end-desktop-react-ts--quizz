export enum Route {
    home = '/',
    login = '/login',
    signup = '/signup',
}

export function routes() {
    return {
        [Route.home]: undefined,
        [Route.login]: undefined,
        [Route.signup]: undefined,
    }
}