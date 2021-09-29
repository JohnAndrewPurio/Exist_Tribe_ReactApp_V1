import { useSelector } from 'react-redux'

import StatusStrip from '../StatusStrip'

import { Grid, Paper, Typography } from '@material-ui/core'
import { Brightness2Outlined, Brightness7 } from '@material-ui/icons'
import { useStyles } from './styles'

import { NIGHT_LIGHT, WAKE_LIGHT } from '../../constants'

export default function SleepStatus() {
    const classes = useStyles()
    const {
        bedtimeSoundMode,
        nightLightBrightnessLevel, nightLightOn,
        nightTimeSoundVolumeLevel,
        wakeLightBrightnessLevel, wakeLightOn,
        wakeTimeSoundVolumeLevel
    } = useSelector(state => state.sleepConfiguration)

    const statuses = [
        {
            type: 'night',
            name: NIGHT_LIGHT,
            toggledOn: nightLightOn,
            icon: <Brightness2Outlined />,
            text: `Night Light set to ${nightLightBrightnessLevel}`
        },

        {
            type: 'day',
            name: WAKE_LIGHT,
            toggledOn: wakeLightOn,
            icon: <Brightness7 />,
            text: `Wake Light set to ${wakeLightBrightnessLevel}`
        },

        {
            type: 'night',
            name: 'nightTime',
            toggledOn: bedtimeSoundMode === 'nightTime' || bedtimeSoundMode === 'both',
            icon: <Brightness2Outlined className={classes.icon} />,
            text: `Volume set to ${nightTimeSoundVolumeLevel}`
        },

        {
            type: 'day',
            name: 'wakeTime',
            toggledOn: bedtimeSoundMode === 'wakeTime' || bedtimeSoundMode === 'both',
            icon: <Brightness7 />,
            text: `Volume set to ${wakeTimeSoundVolumeLevel}`
        }
    ]

    return (
        <Paper elevation={1} className={classes.paper} >
            <Typography variant="h6">Status: </Typography>

            <Grid container justifyContent="center" >
                {
                    !statuses.some( status => !!status.toggledOn ) ? <Typography variant="h6">No available status</Typography>:
                    statuses.map(({ type, name, icon, text, toggledOn }) => (
                        <StatusStrip
                            key={name + 'status'}
                            type={type}
                            icon={icon}
                            text={text}
                            toggledOn={toggledOn}
                        />
                    ))
                }
            </Grid>
        </Paper>
    )
}
