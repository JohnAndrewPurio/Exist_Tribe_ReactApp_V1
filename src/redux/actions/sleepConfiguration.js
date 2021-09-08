import { NIGHT_TIME_SOUND_VOLUME } from '../action_types/sleepConfiguration'

export const nightTimeSoundVolumeAction = (payload) => ({
    type: NIGHT_TIME_SOUND_VOLUME,
    payload
})