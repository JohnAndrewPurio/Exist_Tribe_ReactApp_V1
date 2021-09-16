import { useDispatch, useSelector } from 'react-redux'

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Brightness4, Menu } from '@material-ui/icons'
import { useStyles } from './styles'

import { setDarkThemeAction } from '../../redux/actions/appConfig'

export default function NavBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const darkTheme = useSelector(state => state.appConfig.darkTheme)

    const handleToggleDarkTheme = () => {
        dispatch( setDarkThemeAction(!darkTheme) )
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    REST Node
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                <IconButton
                    onClick={handleToggleDarkTheme}
                >
                    <Brightness4 />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
