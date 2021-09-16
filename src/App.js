// import { useEffect } from 'react'
import {
  // useDispatch, 
  useSelector
} from 'react-redux'

import AudioSelectDialog from './components/AudioSelectDialog'
import Bedtime from './components/Bedtime'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'

// import { theme } from './styles'

// import { uiBuilderInit, uiBuilderAddListener, uiBuilderSend } from './scenes/uiBuilderReact'
// import {
//   CONTROL_MESSAGE, ON_MESSAGE, RECEIVED_CONTROL_MESSAGES, RECEIVED_MESSAGES_COUNT,
//   SENT_CONTROL_MESSAGE, SENT_CONTROL_MESSAGES_COUNT, SENT_MESSAGE, SENT_MESSAGES_COUNT, IO_CONNECTED, SERVER_TIME_OFFSET
// } from './scenes/uiBuilderReactEvents'

// import {
//   controlMessageAction, ioConnectedAction, onMessageAction, receivedControlMessagesAction, receivedMessagesCountAction,
//   sentControlMessageAction, sentControlMessagesCountAction, sentMessageAction, sentMessagesCountAction, serverTimeOffsetAction
// } from './redux/actions/nodeRedIntegration'

// import { INIT_REST_NODE_CLIENT, START_BEDTIME } from './scenes/nodeRedTopics'

export default function App() {
  // const dispatch = useDispatch()
  // const startBedtime = useSelector(state => state.bedtime.bedtimeStart)
  const accordionExpanded = useSelector(state => state.bedtime.accordionExpanded)
  const darkTheme = useSelector(state => state.appConfig.darkTheme)

  const theme = createTheme({
    typography: {
      fontFamily: ['Georgia', 'Open Sans'].join(',')
    },

    palette: {
      primary: {
        light: '#cddcbc',
        main: '#80aa55',
        dark: '#406916',
        contrastText: '#f3f1f1',
      },

      secondary: {
        light: '#f3f1f1',
        main: '#bfbfbf',
        dark: '#999999',
        contrastText: '#3b4422',
      },

      type: darkTheme ? 'dark': 'light'
    }
  })

  // // uibuilder event listeners callbacks
  // const onMessage = (payload) => {
  //   dispatch(onMessageAction(payload))
  // }

  // const controlMessage = (payload) => {
  //   dispatch(controlMessageAction(payload))
  // }

  // const receivedControlMessages = (payload) => {
  //   dispatch(receivedControlMessagesAction(payload))
  // }

  // const receivedMessagesCount = (payload) => {
  //   dispatch(receivedMessagesCountAction(payload))
  // }

  // const sentControlMessage = (payload) => {
  //   dispatch(sentControlMessageAction(payload))
  // }

  // const sentControlMessagesCount = (payload) => {
  //   dispatch(sentControlMessagesCountAction(payload))
  // }

  // const sentMessage = (payload) => {
  //   dispatch(sentMessageAction(payload))
  // }

  // const sentMessagesCount = (payload) => {
  //   dispatch(sentMessagesCountAction(payload))
  // }

  // const ioConnected = (payload) => {
  //   dispatch(ioConnectedAction(payload))
  // }

  // const serverTimeOffset = (payload) => {
  //   dispatch(serverTimeOffsetAction(payload))
  // }

  // useEffect(() => {
  //   // Initialize uibuilder on mount of the App
  //   uiBuilderInit()

  //   // Add the listeneres to be used 
  //   uiBuilderAddListener(ON_MESSAGE, onMessage)
  //   uiBuilderAddListener(CONTROL_MESSAGE, controlMessage)
  //   uiBuilderAddListener(RECEIVED_CONTROL_MESSAGES, receivedControlMessages)
  //   uiBuilderAddListener(RECEIVED_MESSAGES_COUNT, receivedMessagesCount)
  //   uiBuilderAddListener(SENT_CONTROL_MESSAGE, sentControlMessage)
  //   uiBuilderAddListener(SENT_CONTROL_MESSAGES_COUNT, sentControlMessagesCount)
  //   uiBuilderAddListener(SENT_MESSAGE, sentMessage)
  //   uiBuilderAddListener(SENT_MESSAGES_COUNT, sentMessagesCount)
  //   uiBuilderAddListener(IO_CONNECTED, ioConnected)
  //   uiBuilderAddListener(SERVER_TIME_OFFSET, serverTimeOffset)

  //   // Initialize REST Node Server in Node-Red
  //   setTimeout(() => {
  //     uiBuilderSend({
  //       topic: INIT_REST_NODE_CLIENT,
  //       payload: 'Andrew' // Change to username or any human-readable unique identifier
  //     })

  //   }, 1000)

  //   // eslint-disable-next-line
  // }, [])

  // useEffect(() => {
  //   uiBuilderSend({
  //     topic: START_BEDTIME,
  //     payload: startBedtime
  //   })

  // }, [startBedtime])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/startBedtime" component={Bedtime} />
        <Route path="/" component={Home} />
      </Switch>

      <AudioSelectDialog settingName={accordionExpanded} />
    </ThemeProvider>
  )
}
