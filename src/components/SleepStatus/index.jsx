import StatusStrip from '../StatusStrip'

import { Grid, Paper, Typography } from '@material-ui/core'
import { Brightness2Outlined, Brightness7 } from '@material-ui/icons'
import { useStyles } from './styles'

export default function SleepStatus() {
    const classes = useStyles()

    return (
        <Paper elevation={2} className={classes.paper} >
            <Typography variant="h6">Status: </Typography>

            <Grid container justifyContent="center" >
                <StatusStrip type="night" icon={<Brightness2Outlined />} text="Night light at 70%" />
                <StatusStrip type="day" icon={<Brightness7 />} text="Wake light at 70%" />
            </Grid>
        </Paper>
    )
}
