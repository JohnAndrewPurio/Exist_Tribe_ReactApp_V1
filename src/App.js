import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Bedtime from './components/Bedtime'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './styles'

import { uiBuilderInit, uiBuilderAddListener, uiBuilderSend } from './scenes/uiBuilderReact'
import { 
  CONTROL_MESSAGE, ON_MESSAGE, RECEIVED_CONTROL_MESSAGES, RECEIVED_MESSAGES_COUNT,
  SENT_CONTROL_MESSAGE, SENT_CONTROL_MESSAGES_COUNT, SENT_MESSAGE, SENT_MESSAGES_COUNT, IO_CONNECTED, SERVER_TIME_OFFSET
} from './scenes/uiBuilderReactEvents'

import { controlMessageAction, ioConnectedAction, onMessageAction, receivedControlMessagesAction, receivedMessagesCountAction, 
  sentControlMessageAction, sentControlMessagesCountAction, sentMessageAction, sentMessagesCountAction, serverTimeOffsetAction 
} from './redux/actions/nodeRedIntegration'

export default function App() {
  const dispatch = useDispatch()

  // uibuilder event listeners callbacks
  const onMessage = (payload) => {
    dispatch( onMessageAction(payload) )
  }

  const controlMessage = (payload) => {
    dispatch( controlMessageAction(payload) )
  }

  const receivedControlMessages = (payload) => {
    dispatch( receivedControlMessagesAction(payload) )
  }

  const receivedMessagesCount = (payload) => {
    dispatch( receivedMessagesCountAction(payload) )
  }

  const sentControlMessage = (payload) => {
    dispatch( sentControlMessageAction(payload) )
  }

  const sentControlMessagesCount = (payload) => {
    dispatch( sentControlMessagesCountAction(payload) )
  }

  const sentMessage = (payload) => {
    dispatch( sentMessageAction(payload) )
  }

  const sentMessagesCount = (payload) => {
    dispatch( sentMessagesCountAction(payload) )
  }

  const ioConnected = (payload) => {
    dispatch( ioConnectedAction(payload) )
  }

  const serverTimeOffset = (payload) => {
    dispatch( serverTimeOffsetAction(payload) )
  }

  useEffect(() => {
    // Initialize uibuilder on mount of the App
    uiBuilderInit()

    // Add the listeneres to be used 
    uiBuilderAddListener(ON_MESSAGE, onMessage)
    uiBuilderAddListener(CONTROL_MESSAGE, controlMessage)
    uiBuilderAddListener(RECEIVED_CONTROL_MESSAGES, receivedControlMessages)
    uiBuilderAddListener(RECEIVED_MESSAGES_COUNT, receivedMessagesCount)
    uiBuilderAddListener(SENT_CONTROL_MESSAGE, sentControlMessage)
    uiBuilderAddListener(SENT_CONTROL_MESSAGES_COUNT, sentControlMessagesCount)
    uiBuilderAddListener(SENT_MESSAGE, sentMessage)
    uiBuilderAddListener(SENT_MESSAGES_COUNT, sentMessagesCount)
    uiBuilderAddListener(IO_CONNECTED, ioConnected)
    uiBuilderAddListener(SERVER_TIME_OFFSET, serverTimeOffset)

    // Test Send command to uibuilder
    setTimeout(() => {
      uiBuilderSend({ 
        topic: 'uibuilderfe', 
        payload: 'I am a message sent from the uibuilder front end' 
      })
    }, 2000)

    // eslint-disable-next-line
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/startBedtime" component={Bedtime} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  )
}