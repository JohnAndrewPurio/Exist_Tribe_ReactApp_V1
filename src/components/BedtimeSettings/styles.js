import { InputBase, makeStyles, withStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export const useStyles = makeStyles((theme) => ({
    accordionMenu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },

    chip: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(6)
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
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
        // alignItems: 'center'
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