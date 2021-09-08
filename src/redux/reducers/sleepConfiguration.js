import { NIGHT_LIGHT_BRIGHTNESS, NIGHT_TIME_SOUND_VOLUME, WAKE_LIGHT_BRIGHTNESS, WAKE_TIME_SOUND_VOLUME } from '../action_types/sleepConfiguration'

const levels = ['low', 'medium', 'high']
const stops = [ 34, 67 ]

const initState = {
    nightLightBrightness: 0,
    nightLightBrightnessLevel: 'low',

    nightTimeSoundVolume: 0,
    nightTimeSoundVolumeLevel: 'low',

    wakeLightBrightness: 0,
    wakeLightBrightnessLevel: 'low',
    
    wakeTimeSoundVolume: 0,
    wakeTimeSoundVolumeLevel: 'low'
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    
    selector[NIGHT_TIME_SOUND_VOLUME] = nightTimeSoundVolume
    selector[WAKE_TIME_SOUND_VOLUME] = wakeTimeSoundVolume
    selector[WAKE_LIGHT_BRIGHTNESS] = wakeLightBrightness
    selector[NIGHT_LIGHT_BRIGHTNESS] = nightLightBrightness

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
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