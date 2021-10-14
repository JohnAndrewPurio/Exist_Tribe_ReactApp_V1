import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: containerBlockWidth,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText
    },

    parentContainer: {
        // border: `2px solid ${theme.palette.primary.contrastText}`,
        // borderRadius: '0.5em',
        height: 200,
        flexGrow: 1
    },

    shortcutControls: {
        color: theme.palette.primary.contrastText
    },

    timeOfDay: {
        margin: theme.spacing(1)
    },

    containerBlock: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        marginTop: theme.spacing(2)
    },

    clockContainer: {
        height: "100%"
    }
}))