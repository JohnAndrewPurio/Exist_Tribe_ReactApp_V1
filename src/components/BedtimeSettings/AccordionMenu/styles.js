import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    accordionMenu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    
    upperCase: {
        textTransform: 'uppercase'
    }
}))