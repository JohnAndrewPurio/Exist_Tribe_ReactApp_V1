import { 
    NIGHT_LIGHT_BRIGHTNESS, NIGHT_LIGHT_BRIGHTNESS_LEVEL, 
    NIGHT_TIME_SOUND_VOLUME, NIGHT_TIME_SOUND_VOLUME_LEVEL,
    WAKE_LIGHT_BRIGHTNESS, WAKE_LIGHT_BRIGHTNESS_LEVEL, 
    WAKE_TIME_SOUND_VOLUME, WAKE_TIME_SOUND_VOLUME_LEVEL
} from '../action_types/sleepConfiguration'

const levels = ['low', 'medium', 'high']
const stops = [ 34, 67 ]
const sliderStops = {
    low: 33,
    medium: 67,
    high: 100
}

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
    
    selector[NIGHT_LIGHT_BRIGHTNESS] = nightLightBrightness
    selector[NIGHT_LIGHT_BRIGHTNESS_LEVEL] = nightLightBrightnessLevel
    selector[NIGHT_TIME_SOUND_VOLUME] = nightTimeSoundVolume
    selector[NIGHT_TIME_SOUND_VOLUME_LEVEL] = nightTimeSoundVolumeLevel
    selector[WAKE_TIME_SOUND_VOLUME] = wakeTimeSoundVolume
    selector[WAKE_TIME_SOUND_VOLUME_LEVEL] = wakeTimeSoundVolumeLevel
    selector[WAKE_LIGHT_BRIGHTNESS] = wakeLightBrightness
    selector[WAKE_LIGHT_BRIGHTNESS_LEVEL] = wakeLightBrightnessLevel

    if(!selector[type]) 
        return {...state}

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

function nightLightBrightnessLevel(state, payload) {
    const currentLevel = levels[payload]

    return {...state, nightLightBrightnessLevel: currentLevel, nightLightBrightness: sliderStops[currentLevel] }
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