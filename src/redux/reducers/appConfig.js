import { SET_DARK_THEME } from "../action_types/appConfig"

const initState = {
    darkTheme: true
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[SET_DARK_THEME] = setDarkTheme

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function setDarkTheme(state, payload) {
    return {...state, darkTheme: payload}
}