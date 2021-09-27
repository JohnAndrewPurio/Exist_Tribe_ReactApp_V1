import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark
    },
    
    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },

    iconButtonColor: {
        color: theme.palette.primary.contrastText
    },
}))