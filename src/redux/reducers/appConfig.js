import { SET_CURRENT_AUDIO_PLAYING, SET_DARK_THEME, TOGGLE_SIDE_DRAWER } from "../action_types/appConfig"

const initState = {
    currentAudioPlaying: null,
    darkTheme: true,
    sideDrawer: false
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[SET_CURRENT_AUDIO_PLAYING] = setCurrentAudioPlaying
    selector[SET_DARK_THEME] = setDarkTheme
    selector[TOGGLE_SIDE_DRAWER] = toggleSideDrawer

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function setCurrentAudioPlaying(state, payload) {
    return {...state, currentAudioPlaying: payload}
}

function setDarkTheme(state, payload) {
    return {...state, darkTheme: payload}
}

function toggleSideDrawer(state, payload) {
    return {...state, sideDrawer: payload}
}