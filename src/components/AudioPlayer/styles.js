import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    containerBlock: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        transition: 'all 1s ease-in-out'
    },
    
    paper: {
        backgroundColor: theme.palette.primary.main
    },

    text: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    }
}))