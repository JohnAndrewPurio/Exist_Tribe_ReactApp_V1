import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        padding: theme.spacing(1),
        display: "flex",
        height: "100%"
    },
    secondaryContainer: {
        flex: 1
    },
    primaryHeaderText: {
        fontWeight: "600",
        marginBottom: theme.spacing(1)
    },
    secondaryHeaderText: {
        fontSize: "1.1rem"
    }
}))