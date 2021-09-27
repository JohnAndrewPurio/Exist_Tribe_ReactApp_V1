import { makeStyles, Slider, withStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },

    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },

    active: {},

    valueLabel: {
      left: 'calc(-50% + 4px)',
    },

    track: {
      height: 8,
      borderRadius: 4,
    },

    rail: {
      height: 8,
      borderRadius: 4,
    }

  })(Slider)

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
    },

    timePickerPaper: {
        // backgroundColor: theme.palette.primary.contrastText,
        padding: theme.spacing(2)
    }
}))