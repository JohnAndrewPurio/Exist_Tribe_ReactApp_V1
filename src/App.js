import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Bedtime from './components/Bedtime'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './styles'

export default function App() {
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
