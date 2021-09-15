import { STORE_CODE } from '../action_types/withingsApi'

const initState = {
    code: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    
    selector[STORE_CODE] = storeCode

    if(!selector[type]) 
        return {...state}

    return selector[type](state, payload)
}

function storeCode(state, payload) {
    return {...state, code: payload}
}