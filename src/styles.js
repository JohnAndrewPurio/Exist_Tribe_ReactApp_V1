import { createTheme } from '@material-ui/core/styles'
import { store } from './redux/store'

export const theme = createTheme({
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
    },

    type: store.getState().appConfig.darkTheme ? 'dark': 'light'
})