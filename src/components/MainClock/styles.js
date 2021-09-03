import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: containerBlockWidth,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },

    shortcutControls: {
        color: theme.palette.primary.contrastText
    },

    shortcutControlsGroup: {
        backgroundColor: theme.palette.primary.dark
    },

    timeOfDay: {
        margin: theme.spacing(1)
    },

    containerBlock: {
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    }
}))