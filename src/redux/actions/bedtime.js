import { 
    HANDLE_ACCORDION_EXPANDED, RESET_BEDTIME_STATE, SET_DEFAULT_CONFIGURATIONS, SET_PAUSE_TIME, SET_TIME_PAUSED, START_BEDTIME, TOGGLE_BEDTIME_DRAWER 
} from "../action_types/bedtime"

export const handleAccordionExpanded = (payload) => ({
    type: HANDLE_ACCORDION_EXPANDED,
    payload
})

export const resetBedtimeState = (payload) => ({
    type: RESET_BEDTIME_STATE,
    payload
})

export const setDefaultConfigurations = (payload) => ({
    type: SET_DEFAULT_CONFIGURATIONS,
    payload
})

export const setPauseTime = (payload) => ({
    type: SET_PAUSE_TIME,
    payload
})

export const setTimePaused = (payload) => ({
    type: SET_TIME_PAUSED,
    payload
})

export const startBedtime = (payload) => ({
    type: START_BEDTIME,
    payload
})

export const toggleBedtimeDrawer = (payload) => ({
    type: TOGGLE_BEDTIME_DRAWER,
    payload
})