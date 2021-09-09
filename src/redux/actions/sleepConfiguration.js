import { 
    BEDTIME_SOUND, NIGHT_LIGHT_STATUS, WAKE_LIGHT_STATUS,
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_LIGHT_BRIGHTNESS_LEVEL, 
    NIGHT_TIME_SOUND_VOLUME, NIGHT_TIME_SOUND_VOLUME_LEVEL,
    WAKE_LIGHT_BRIGHTNESS, WAKE_LIGHT_BRIGHTNESS_LEVEL, 
    WAKE_TIME_SOUND_VOLUME, WAKE_TIME_SOUND_VOLUME_LEVEL
} from '../action_types/sleepConfiguration'

export const bedtimeSoundAction = (payload) => ({
    type: BEDTIME_SOUND,
    payload
})

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

export const nightLightStatusAction = (payload) => ({
    type: NIGHT_LIGHT_STATUS,
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

export const wakeLightStatusAction = (payload) => ({
    type: WAKE_LIGHT_STATUS,
    payload
})

export const wakeTimeSoundVolumeAction = (payload) => ({
    type: WAKE_TIME_SOUND_VOLUME,
    payload
})

export const wakeTimeSoundVolumeLevelAction = (payload) => ({
    type: WAKE_TIME_SOUND_VOLUME_LEVEL,
    payload
})