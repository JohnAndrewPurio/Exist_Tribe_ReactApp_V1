import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    shortcutControls: {
        color: theme.palette.primary.contrastText
    },

    shortcutControlsGroup: {
        backgroundColor: theme.palette.primary.dark
    }
}))