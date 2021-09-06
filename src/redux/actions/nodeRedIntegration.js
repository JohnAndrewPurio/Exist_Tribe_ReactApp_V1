import { CONTROL_MESSAGE_ACTION, IO_CONNECTED, ON_MESSAGE_ACTION, RECEIVED_CONTROL_MESSAGES, RECEIVED_MESSAGES_COUNT, SENT_CONTROL_MESSAGE, 
    SENT_CONTROL_MESSAGES_COUNT, SENT_MESSAGE, SENT_MESSAGES_COUNT, SERVER_TIME_OFFSET, SET_NODE_RED_ENDPOINT 
} from '../action_types/nodeRedIntegration'

export const controlMessageAction = (payload) => ({
    type: CONTROL_MESSAGE_ACTION,
    payload
})

export const ioConnectedAction = (payload) => ({
    type: IO_CONNECTED,
    payload
})

export const onMessageAction = (payload) => ({
    type: ON_MESSAGE_ACTION,
    payload
})

export const receivedControlMessagesAction = (payload) => ({
    type: RECEIVED_CONTROL_MESSAGES,
    payload
})

export const receivedMessagesCountAction = (payload) => ({
    type: RECEIVED_MESSAGES_COUNT,
    payload
})

export const sentControlMessageAction = (payload) => ({
    type: SENT_CONTROL_MESSAGE,
    payload
})

export const sentMessageAction = (payload) => ({
    type: SENT_MESSAGE,
    payload
})

export const sentMessagesCountAction = (payload) => ({
    type: SENT_MESSAGES_COUNT,
    payload
})

export const sentControlMessagesCountAction = (payload) => ({
    type: SENT_CONTROL_MESSAGES_COUNT,
    payload
})

export const serverTimeOffsetAction = (payload) => ({
    type: SERVER_TIME_OFFSET,
    payload
})

export const setNodeRedEndpoint = (payload) => ({
    type: SET_NODE_RED_ENDPOINT,
    payload
})