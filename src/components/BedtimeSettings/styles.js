import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    accordionMenu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },

    chip: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3)
    },

    divider: {
        backgroundColor: theme.palette.primary.contrastText
    },

    icon: {
        color: theme.palette.primary.contrastText
    },

    sectionDivider: {
        marginTop: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2)
    },

    sectionText: {
        opacity: 0.8
    },

    soundSettings: {
        width: containerBlockWidth,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    },

    containerBlock: {
        width: containerBlockWidth,
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
        alignItems: 'center'
    },

    drawer: {
        // maxHeight: 1.5 * containerBlockWidth,
        overflowY: 'auto'
    },

    itemBlock: {
        padding: theme.spacing(1)
    },

    muteButton: {
        position: 'relative',
        left: 0,
        top: -5
    },

    upperCase: {
        textTransform: 'uppercase'
    },

    contrastText: {
        color: theme.palette.primary.contrastText
    }

}))