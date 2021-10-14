import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    list: {
        marginTop: theme.spacing(2),
        minWidth: 200
    }
}))