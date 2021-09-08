import { 
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_LIGHT_BRIGHTNESS_LEVEL, 
    NIGHT_TIME_SOUND_VOLUME, NIGHT_TIME_SOUND_VOLUME_LEVEL,
    WAKE_LIGHT_BRIGHTNESS, WAKE_LIGHT_BRIGHTNESS_LEVEL, WAKE_TIME_SOUND_VOLUME 
} from '../action_types/sleepConfiguration'

export const nightLightBrightnessAction = (payload) => ({
    type: NIGHT_LIGHT_BRIGHTNESS,
    payload
})

export const nightLightBrightnessLevelAction = (payload) => ({
    type: NIGHT_LIGHT_BRIGHTNESS_LEVEL,
    payload
})

export const nightTimeSoundVolumeAction = (payload) => ({
    type: NIGHT_TIME_SOUND_VOLUME,
    payload
})

export const nightTimeSoundVolumeLevelAction = (payload) => ({
    type: NIGHT_TIME_SOUND_VOLUME_LEVEL,
    payload
})

export const wakeLightBrightnessAction = (payload) => ({
    type: WAKE_LIGHT_BRIGHTNESS,
    payload
})

export const wakeLightBrightnessLevelAction = (payload) => ({
    type: WAKE_LIGHT_BRIGHTNESS_LEVEL,
    payload
})

export const wakeTimeSoundVolumeAction = (payload) => ({
    type: WAKE_TIME_SOUND_VOLUME,
    payload
})