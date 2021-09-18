import { makeStyles } from './styles'
import { containerBlockWidth } from '../../../constants'

export const useStyles = makeStyles((theme) => ({
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