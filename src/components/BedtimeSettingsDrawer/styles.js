import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    itemBlock: {
        padding: theme.spacing(1)
    },

    containerBlock: {
        width: 350,
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    }

}))