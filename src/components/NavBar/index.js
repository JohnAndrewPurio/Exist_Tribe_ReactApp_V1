import { useDispatch, useSelector } from 'react-redux'

import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core'
import { Brightness4, Menu } from '@material-ui/icons'
import { useStyles } from './styles'

import { setDarkThemeAction, toggleSideDrawerAction } from '../../redux/actions/appConfig'

export default function NavBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const darkTheme = useSelector(state => state.appConfig.darkTheme)
    const sideDrawer = useSelector(state => state.appConfig.sideDrawer)

    const handleSideDrawerMenu = () => {
        dispatch( toggleSideDrawerAction(!sideDrawer) )
    }

    const handleToggleDarkTheme = () => {
        dispatch( setDarkThemeAction(!darkTheme) )
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleSideDrawerMenu}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    REST Node
                </Typography>

                <Tooltip title="Toggle Dark Mode">
                    <IconButton
                        onClick={handleToggleDarkTheme}
                        aria-label="toggle dark mode"
                    >
                        <Brightness4 />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}
