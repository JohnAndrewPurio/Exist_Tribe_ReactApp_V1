import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width: 275,
        display: 'flex',
        justifyContent: 'flex-start'
    },

    hidden: {
        display: 'none'
    },

    placeHolder: {
        transform: 'scale(1)'
    }
}))