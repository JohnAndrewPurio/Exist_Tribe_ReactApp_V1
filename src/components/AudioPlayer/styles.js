import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    containerBlock: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },

    musicName: {
        margin: theme.spacing(2),
    },
    
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}))