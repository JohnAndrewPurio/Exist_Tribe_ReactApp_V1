import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: containerBlockWidth,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
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
    }
}))