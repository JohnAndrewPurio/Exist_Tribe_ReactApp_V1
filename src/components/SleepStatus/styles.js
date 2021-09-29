import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    parentContainer: {
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '0.5em'
    },
    
    paper: {
        width: containerBlockWidth,
        height: 325,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    }
}))