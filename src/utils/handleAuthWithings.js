export default function handleAuthWithings() {
    const response_type = 'code'
    const client_id = '070de25f2c3e9006d85cc1d4db9799b635f17903c6468efbfa1ba554ff4a8bfe'
    const scope = 'user.activity'
    const redirect_uri = 'http://localhost:3000'
    const state = 'home'
    const authEndpoint = 'https://account.withings.com/oauth2_user/authorize2'

    const url = new URL(authEndpoint)
    const params = {
        response_type, client_id, scope, redirect_uri, state
    }

    url.search = new URLSearchParams(params).toString()

    return url
}