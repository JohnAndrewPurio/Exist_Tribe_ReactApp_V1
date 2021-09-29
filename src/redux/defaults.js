import { sliderStops } from '../constants'

export const defaultSleepConfigurations = {
    bedtimeSoundMode: 'mute',

    nightLightFadeout: 30,
    nightLightBrightness: 25,
    nightLightBrightnessLevel: 'low',
    nightLightOn: false,
    
    nightTimeAudio: null,
    nightTimeSoundVolume: sliderStops['low'],
    nightTimeSoundVolumeLevel: 'low',

    wakeLightFadeout: 30,
    wakeLightBrightness: 25,
    wakeLightBrightnessLevel: 'low',
    wakeLightOn: false,
    
    soundSelector: null,

    wakeTime: new Date( Date.now() + 8 * 60 * 60 * 1000 ),
    wakeTimeAudio: null,
    wakeTimeSound: null,
    wakeTimeSoundVolume: sliderStops['low'],
    wakeTimeSoundVolumeLevel: 'low'
}