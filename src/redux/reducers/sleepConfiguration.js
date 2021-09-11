import { 
    BEDTIME_SOUND, NIGHT_LIGHT_STATUS, WAKE_LIGHT_STATUS,
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_LIGHT_BRIGHTNESS_LEVEL, 
    NIGHT_TIME_AUDIO, NIGHT_TIME_SOUND_VOLUME, NIGHT_TIME_SOUND_VOLUME_LEVEL,
    SELECT_WAKE_TIME_SOUND, TOGGLE_WAKE_TIME_SOUND_SELECTOR,
    WAKE_LIGHT_BRIGHTNESS, WAKE_LIGHT_BRIGHTNESS_LEVEL, 
    WAKE_TIME_AUDIO, WAKE_TIME_SOUND_VOLUME, WAKE_TIME_SOUND_VOLUME_LEVEL
} from '../action_types/sleepConfiguration'

import { levels, stops, sliderStops } from '../../constants'

const initState = {
    bedtimeSoundMode: 'mute',

    nightLightBrightness: 0,
    nightLightBrightnessLevel: 'low',
    nightLightOn: false,
    
    nightTimeAudio: null,
    nightTimeSoundVolume: 0,
    nightTimeSoundVolumeLevel: 'low',

    wakeLightBrightness: 0,
    wakeLightBrightnessLevel: 'low',
    wakeLightOn: false,
    
    soundSelector: null,

    wakeTimeAudio: null,
    wakeTimeSound: null,
    wakeTimeSoundVolume: 0,
    wakeTimeSoundVolumeLevel: 'low'
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    
    selector[BEDTIME_SOUND] = bedtimeSound

    selector[NIGHT_TIME_AUDIO] = nightTimeAudio
    selector[NIGHT_LIGHT_BRIGHTNESS] = nightLightBrightness
    selector[NIGHT_LIGHT_BRIGHTNESS_LEVEL] = nightLightBrightnessLevel
    selector[NIGHT_LIGHT_STATUS] = nightLightStatus
    selector[NIGHT_TIME_SOUND_VOLUME] = nightTimeSoundVolume
    selector[NIGHT_TIME_SOUND_VOLUME_LEVEL] = nightTimeSoundVolumeLevel

    selector[SELECT_WAKE_TIME_SOUND] = selectWakeTimeSound
    selector[TOGGLE_WAKE_TIME_SOUND_SELECTOR] = toggleWakeTimeSoundSelector

    selector[WAKE_TIME_AUDIO] = wakeTimeAudio
    selector[WAKE_LIGHT_BRIGHTNESS] = wakeLightBrightness
    selector[WAKE_LIGHT_BRIGHTNESS_LEVEL] = wakeLightBrightnessLevel
    selector[WAKE_LIGHT_STATUS] = wakeLightStatus
    selector[WAKE_TIME_SOUND_VOLUME] = wakeTimeSoundVolume
    selector[WAKE_TIME_SOUND_VOLUME_LEVEL] = wakeTimeSoundVolumeLevel

    if(!selector[type]) 
        return {...state}

    return selector[type](state, payload)
}

function bedtimeSound(state, payload) {
    return {...state, bedtimeSoundMode: payload}
}

function nightLightBrightness(state, payload) {
    let count = 3
    let currentLevel = ''

    for(count = 0; count < stops.length; count++) {
        if(payload < stops[count])
            break
    }
    
    currentLevel = levels[count]

    return {...state, nightLightBrightness: payload, nightLightBrightnessLevel: currentLevel}
}

function nightLightBrightnessLevel(state, payload) {
    const currentLevel = levels[payload]

    return {...state, nightLightBrightnessLevel: currentLevel, nightLightBrightness: sliderStops[currentLevel] }
}

function nightTimeAudio(state, payload) {
    return {...state, nightTimeAudio: payload}
}

function nightTimeSoundVolume(state, payload) {
    let count = 3
    let currentLevel = ''

    for(count = 0; count < stops.length; count++) {
        if(payload < stops[count])
            break
    }
    
    currentLevel = levels[count]

    return {...state, nightTimeSoundVolume: payload, nightTimeSoundVolumeLevel: currentLevel}
}

function nightTimeSoundVolumeLevel(state, payload) {
    const currentLevel = levels[payload]

    return {...state, nightTimeSoundVolumeLevel: currentLevel, nightTimeSoundVolume: sliderStops[currentLevel] }
}

function nightLightStatus(state, payload) {
    return {...state, nightLightOn: payload}
}

function selectWakeTimeSound(state, payload) {
    return {...state, wakeTimeSound: payload}
}

function toggleWakeTimeSoundSelector(state, payload) {
    return {...state, soundSelector: payload}
}

function wakeLightBrightness(state, payload) {
    let count = 3
    let currentLevel = ''

    for(count = 0; count < stops.length; count++) {
        if(payload < stops[count])
            break
    }
    
    currentLevel = levels[count]

    return {...state, wakeLightBrightness: payload, wakeLightBrightnessLevel: currentLevel}
}

function wakeLightBrightnessLevel(state, payload) {
    const currentLevel = levels[payload]

    return {...state, wakeLightBrightnessLevel: currentLevel, wakeLightBrightness: sliderStops[currentLevel] }
}

function wakeLightStatus(state, payload) {
    return {...state, wakeLightOn: payload}
}

function wakeTimeAudio(state, payload) {
    return {...state, wakeTimeAudio: payload}
}

function wakeTimeSoundVolume(state, payload) {
    let count = 3
    let currentLevel = ''

    for(count = 0; count < stops.length; count++) {
        if(payload < stops[count])
            break
    }

    currentLevel = levels[count]

    return {...state, wakeTimeSoundVolume: payload, wakeTimeSoundVolumeLevel: currentLevel}
}

function wakeTimeSoundVolumeLevel(state, payload) {
    const currentLevel = levels[payload]

    return {...state, wakeTimeSoundVolumeLevel: currentLevel, wakeTimeSoundVolume: sliderStops[currentLevel] }
}