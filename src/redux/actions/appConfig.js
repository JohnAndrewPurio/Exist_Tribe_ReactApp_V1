import { SET_CURRENT_AUDIO_PLAYING, SET_DARK_THEME, TOGGLE_SIDE_DRAWER } from '../action_types/appConfig'

export const setCurrentAudioPlayingAction = (payload) => ({
    type: SET_CURRENT_AUDIO_PLAYING,
    payload
})

export const setDarkThemeAction = (payload) => ({
    type: SET_DARK_THEME,
    payload
})

export const toggleSideDrawerAction = (payload) => ({
    type: TOGGLE_SIDE_DRAWER,
    payload
})