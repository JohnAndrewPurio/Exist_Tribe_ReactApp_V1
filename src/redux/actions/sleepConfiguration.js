import { 
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_TIME_SOUND_VOLUME, WAKE_LIGHT_BRIGHTNESS, WAKE_TIME_SOUND_VOLUME 
} from '../action_types/sleepConfiguration'

export const nightLightBrightnessAction = (payload) => ({
    type: NIGHT_LIGHT_BRIGHTNESS,
    payload
})

export const nightTimeSoundVolumeAction = (payload) => ({
    type: NIGHT_TIME_SOUND_VOLUME,
    payload
})

export const wakeLightBrightnessAction = (payload) => ({
    type: WAKE_LIGHT_BRIGHTNESS,
    payload
})

export const wakeTimeSoundVolumeAction = (payload) => ({
    type: WAKE_TIME_SOUND_VOLUME,
    payload
})