import { STORE_CODE } from '../action_types/withingsApi'

export const storeCode = (payload) => ({
    type: STORE_CODE,
    payload
})

export const authenticateApp = (endpoint) => {
    return async (dispatch, getState) => {
        const { withingsApi } = getState()
        const { code } = withingsApi

        const formObj = {
            'action': 'requesttoken',
            'client_id': '070de25f2c3e9006d85cc1d4db9799b635f17903c6468efbfa1ba554ff4a8bfe',
            'client_secret': 'c1fbe20870f71495553cccf264df62a88aae51d18bd47e74d98903a1f72c07dc',
            'grant_type': 'authorization_code',
            code,
            'redirect_uri': 'http://localhost:3000'
        }

        try {
            const config = {
                method: 'POST',
                body: new URLSearchParams(formObj)
            }

            console.log(config)

            const fetchedData = await fetch(endpoint, config)
            const jsonData = await fetchedData.json()

            console.log(jsonData)
        } catch(error) {
            console.log(error)
        }
    }
}