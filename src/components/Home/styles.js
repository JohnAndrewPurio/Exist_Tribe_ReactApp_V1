import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    extendedIcon: {
        marginRight: theme.spacing(1),
    },

    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
    }
}))