import { Button, Grid } from '@material-ui/core'
import { useStyles } from './styles'

export default function StatusStrip({ type, icon, text, toggledOn, }) {
    const classes = useStyles()
    const buttonColor = type === 'night' ? 'primary': 'secondary.light'

    return (
        <Grid item xs={12} className={!toggledOn ? classes.hidden: classes.placeHolder}>
            <Grid container justifyContent="center">
                <Button 
                    variant="contained" 
                    color={buttonColor} 
                    className={classes.button} 
                    startIcon={icon} 
                >
                    {text}
                </Button>
            </Grid>
        </Grid>
    )
}
