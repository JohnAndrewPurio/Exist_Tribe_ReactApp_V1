import { NIGHT_TIME_SOUND_VOLUME } from '../action_types/sleepConfiguration'

const initState = {
    nightTimeSoundVolume: 0
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    
    selector[NIGHT_TIME_SOUND_VOLUME] = nightTimeSoundVolume

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function nightTimeSoundVolume(state, payload) {
    return {...state, nightTimeSoundVolume: payload}
}