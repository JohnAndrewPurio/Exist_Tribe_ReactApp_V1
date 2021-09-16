import { SET_DARK_THEME, TOGGLE_SIDE_DRAWER } from "../action_types/appConfig"

const initState = {
    darkTheme: true,
    sideDrawer: false
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[SET_DARK_THEME] = setDarkTheme
    selector[TOGGLE_SIDE_DRAWER] = toggleSideDrawer

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function setDarkTheme(state, payload) {
    return {...state, darkTheme: payload}
}

function toggleSideDrawer(state, payload) {
    return {...state, sideDrawer: payload}
}