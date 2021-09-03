
import UserData from './scenes/UserData' // UI Builder Node Red Integration
import Bedtime from './components/Bedtime'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserData title="User Data" />
      <Switch>
        <Route path="/startBedtime" component={Bedtime} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  )
}

export default App