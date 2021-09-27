import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    badgeIcon: {
        transform: 'scale(0.6)',
        color: theme.palette.primary.contrastText
    },

    root: {
        padding: theme.spacing(1),
        overflow: 'hidden',
        // height: '90vh',

        '& > *': {
            margin: theme.spacing(1)
        }
    },

    shortcutControls: {
        color: theme.palette.primary.contrastText
    },

    swipeUp: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        animation: `$swipeUpAnimation 1.8s ${theme.transitions.easing.easeInOut} infinite`
    },

    '@keyframes swipeUpAnimation': {
        '0%': {
            transform: 'translateY(0)',
            opacity: 1
        },

        '80%, 100%': {
            transform: 'translateY(-50%)',
            opacity: 0
        }
    }
}))