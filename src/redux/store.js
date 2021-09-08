// import { createStore } from "redux"
import { combineReducers, createStore, applyMiddleware } from "redux" // For troubleshooting, comment out when sending to production
import logger from 'redux-logger' // For troubleshooting, comment out when sending to production
import thunk from 'redux-thunk'

import bedtime from "./reducers/bedtime"
import sleepConfiguration from "./reducers/sleepConfiguration"

const reducers = combineReducers({
    bedtime, sleepConfiguration
})

export const store = createStore(reducers, applyMiddleware(logger, thunk)) // For troubleshooting, comment out when sending to production
// export const store = createStore( reducer )
