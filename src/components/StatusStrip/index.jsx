import { Button, Grid } from '@material-ui/core'
import { useStyles } from './styles'

export default function StatusStrip({ type, icon, text }) {
    const classes = useStyles()
    const buttonColor = type === 'night' ? 'primary': 'secondary'

    return (
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Button variant="contained" color={buttonColor} className={classes.button} startIcon={icon} >
                    {text}
                </Button>
            </Grid>
        </Grid>

    )
}
