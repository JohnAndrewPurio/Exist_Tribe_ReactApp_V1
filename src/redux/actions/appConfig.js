import { SET_DARK_THEME, TOGGLE_SIDE_DRAWER } from '../action_types/appConfig'

export const setDarkThemeAction = (payload) => ({
    type: SET_DARK_THEME,
    payload
})

export const toggleSideDrawerAction = (payload) => ({
    type: TOGGLE_SIDE_DRAWER,
    payload
})