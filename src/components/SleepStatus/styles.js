import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: containerBlockWidth,
        height: 350,
        padding: theme.spacing(2)
    }
}))