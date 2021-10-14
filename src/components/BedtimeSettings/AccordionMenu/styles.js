import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    accordionMenu: {
        backgroundColor: theme.palette.primary.main,
        // background: 'linear-gradient(180deg, rgba(243,241,241,1) 0%, rgba(123,150,94,1) 60%, rgba(64,105,22,1) 100%);',
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        borderRadius: "4px",
        marginBottom: theme.spacing(1),
        transition: "border 200ms ease-out"
        // border: `5px solid ${theme.palette.primary.dark}`
    },
    
    upperCase: {
        textTransform: 'uppercase'
    }
}))