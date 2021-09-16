import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../../constants'

export const useStyles = makeStyles((theme) => ({
    chip: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(6)
    },
    
    containerBlock: {
        width: containerBlockWidth,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
        // alignItems: 'center'
    },
}))