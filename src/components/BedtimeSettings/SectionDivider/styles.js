import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: theme.palette.primary.contrastText
    },

    sectionDivider: {
        marginTop: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2)
    },

    sectionText: {
        opacity: 0.8
    }
}))