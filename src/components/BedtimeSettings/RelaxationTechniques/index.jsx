import ToolTip from '../../ToolTip'

import { Chip, IconButton, Grid, Paper } from '@material-ui/core'
import { useStyles } from './styles'

export default function RelaxationTechniques() {
    const classes = useStyles()

    return (
        <Paper className={classes.containerBlock}>
            {/* <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    <ToolTip title={camelCaseToUpperCase(settingName)}>
                        <IconButton onClick={brightnessAdjust} >
                            {icons[iconState]}
                        </IconButton>
                    </ToolTip>
                </Grid>
                <Grid item xs={9}>
                    <VolumeSlider settingName={settingName} />
                </Grid>
            </Grid>

            <Chip 
                className={classes.chip} 
                size="small" 
                label={iconState === 'muted' ? 'AUTO': iconState.toUpperCase()} 
                color="primary" 
            /> */}
        </Paper>
    )
}
