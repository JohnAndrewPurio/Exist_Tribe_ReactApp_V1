import { 
    BEDTIME_SOUND, NIGHT_LIGHT_STATUS, WAKE_LIGHT_STATUS,
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_LIGHT_BRIGHTNESS_LEVEL, 
    NIGHT_TIME_AUDIO, NIGHT_TIME_SOUND_VOLUME, NIGHT_TIME_SOUND_VOLUME_LEVEL, RESET_TO_DEFAULT,
    SELECT_WAKE_TIME_SOUND, TOGGLE_SOUND_SELECTOR, 
    WAKE_LIGHT_BRIGHTNESS, WAKE_LIGHT_BRIGHTNESS_LEVEL, 
    WAKE_TIME, WAKE_TIME_AUDIO, WAKE_TIME_SOUND_VOLUME, WAKE_TIME_SOUND_VOLUME_LEVEL
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

export const nightTimeAudioAction = (payload) => ({
    type: NIGHT_TIME_AUDIO,
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

export const resetToDefaultAction = (payload) => ({
    type: RESET_TO_DEFAULT,
    payload
})

export const selectWakeTimeSoundAction = (payload) => ({
    type: SELECT_WAKE_TIME_SOUND,
    payload
})

export const toggleSoundSelectorAction = (payload) => ({
    type: TOGGLE_SOUND_SELECTOR,
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

export const wakeTimeAction = (payload) => ({
    type: WAKE_TIME,
    payload
})

export const wakeTimeAudioAction = (payload) => ({
    type: WAKE_TIME_AUDIO,
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