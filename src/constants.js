export const containerBlockWidth = 350
export const levels = ['low', 'medium', 'high']
export const stops = [ 1, 51 ]

export const sliderStops = {
    low: 0,
    medium: 50,
    high: 100
}

export const bedtimeSoundModes = [
    'mute', 'both', 'nightTime', 'wakeTime'
]

export const NIGHT_LIGHT = 'nightLight'
export const NIGHT_TIME_SOUND = 'nightTimeSound'
export const WAKE_LIGHT = 'wakeLight'
export const WAKE_TIME_SOUND = 'wakeTimeSound'

export const NIGHT_LIGHT_TEXT = 'Night Light'
export const WAKE_LIGHT_TEXT = 'Wake Light'
export const SOUND_TEXT = 'Background Sound'

export const withingsAuthEndpoint = 'https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=070de25f2c3e9006d85cc1d4db9799b635f17903c6468efbfa1ba554ff4a8bfe&scope=user.activity&redirect_uri=http://localhost:3000&state=test'
// "node-red-contrib-uibuilder": "file:../../node_modules/node-red-contrib-uibuilder"