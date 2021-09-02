import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        overflow: 'hidden',
        height: '90vh',

        '& > *': {
            margin: theme.spacing(2)
        }
    }
}))