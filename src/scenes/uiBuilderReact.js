import { get, onChange, send, start } from 'node-red-contrib-uibuilder/front-end/src/uibuilderfe'

export function uiBuilderInit() {
    start()
}

export function getUiBuilderVersion() {
    return get('version')
}

export function uiBuilderAddListener(event, callback) {
    if(typeof event !== 'string')
        throw new Error('event parameter must be a string')

    if(typeof callback !== 'function')
        throw new Error('callback parameter must be a function')

    onChange(event, callback)
}

export function uiBuilderSend(message) {
    console.log(message)

    send(message)
}