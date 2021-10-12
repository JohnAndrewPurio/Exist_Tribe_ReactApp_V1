import {
  useSelector
} from 'react-redux'

import AudioSelectDialog from './components/AudioSelectDialog'
import Bedtime from './components/Bedtime'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'

export default function App() {
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
