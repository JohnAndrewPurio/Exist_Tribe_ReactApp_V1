import { START_BEDTIME } from "../action_types/bedtime"

const initState = {
    bedtimeStart: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[START_BEDTIME] = startBedtime

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function startBedtime(state, payload) {
    return {...state, bedtimeStart: payload}
}