import { CONTROL_MESSAGE_ACTION, IO_CONNECTED, ON_MESSAGE_ACTION, RECEIVED_CONTROL_MESSAGES, RECEIVED_MESSAGES_COUNT, SENT_CONTROL_MESSAGE, 
    SENT_CONTROL_MESSAGES_COUNT, SENT_MESSAGE, SENT_MESSAGES_COUNT, SERVER_TIME_OFFSET, SET_NODE_RED_ENDPOINT,
} from '../action_types/nodeRedIntegration'

const initState = {
    controlMessage: null,
    ioConnected: false,
    nodeRedEndpoint: null,
    receivedMessage: null,
    receivedControlMessages: null,
    receivedMessagesCount: 0,
    sentControlMessage: null,
    sentControlMessagesCount: 0,
    sentMessage: null,
    serverTimeOffset: 0,
    sentMessagesCount: 0
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[CONTROL_MESSAGE_ACTION] = controlMessage
    selector[IO_CONNECTED] = ioConnected
    selector[ON_MESSAGE_ACTION] = onMessage
    selector[RECEIVED_CONTROL_MESSAGES] = receivedControlMessages
    selector[RECEIVED_MESSAGES_COUNT] = receivedMessagesCount
    selector[SENT_CONTROL_MESSAGE] = sentControlMessage
    selector[SENT_CONTROL_MESSAGES_COUNT] = sentControlMessagesCount
    selector[SENT_MESSAGE] = sentMessage
    selector[SENT_MESSAGES_COUNT] = sentMessagesCount
    selector[SERVER_TIME_OFFSET] = serverTimeOffset
    selector[SET_NODE_RED_ENDPOINT] = setNodeRedEndpoint

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function controlMessage(state, payload) {
    return {...state, controlMessage: payload}
}

function ioConnected(state, payload) {
    return {...state, ioConnected: payload}
}

function onMessage(state, payload) {
    return {...state, receivedMessage: payload}
}

function receivedControlMessages(state, payload) {
    return {...state, receivedControlMessages: payload}
}

function receivedMessagesCount(state, payload) {
    return {...state, receivedMessagesCount: payload}
}

function sentControlMessage(state, payload) {
    return {...state, sentControlMessage: payload}
}

function sentMessage(state, payload) {
    return {...state, sentMessage: payload}
}

function sentControlMessagesCount(state, payload) {
    return {...state, sentControlMessagesCount: payload}
}

function sentMessagesCount(state, payload) {
    return {...state, sentMessagesCount: payload}
}

function serverTimeOffset(state, payload) {
    return {...state, serverTimeOffset: payload}
}

function setNodeRedEndpoint(state, payload) {
    return {...state, nodeRedEndpoint: payload}
}

