// import { createStore } from "redux"
import { createStore, applyMiddleware } from "redux" // For troubleshooting, comment out when sending to production
import logger from 'redux-logger' // For troubleshooting, comment out when sending to production
import reducer from "./reducer"
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(logger, thunk)) // For troubleshooting, comment out when sending to production
// export const store = createStore( reducer )
