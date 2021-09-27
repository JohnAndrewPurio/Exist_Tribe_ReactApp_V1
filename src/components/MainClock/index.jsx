import { useEffect, useState } from 'react'

import AudioPlayer from '../AudioPlayer'
import ShortcutControls from './ShortcutControls'

import { Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

let timerInterval = 0

/**
* Displays an available configuration to the user in which the user can freely change its values
* @param {Object} props - Passed props by the parent component
* @param {Object} props.bedtimeSoundModesIcons - Contains the JSX elements of icons to Display for the Sound Shortcuts
* @param {Object} props.nightLightIcons - Contains the JSX elements of icons to Display for the Night Light Shortcut
* @param {Object} props.wakeLightIcons - Contains the JSX elements of icons to Display for the Wake Light Shortcut
* @return {JSX} MaterialUiPaper - Container of the digital clock and the shortcut controls
**/
export default function MainClock({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        timerInterval = setInterval(() => {
            setTime(() => new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(timerInterval)
        }
    }, [])

    return (
        <Paper elevation={3} className={classes.paper} >
            <Grid container alignItems="center" >
                <Grid item className={classes.containerBlock} xs={12} >
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography variant="h3">{time}</Typography>
                    </Grid>
                </Grid>

                <AudioPlayer />

                <Grid item className={classes.containerBlock} xs={12}>
                    <Grid container justifyContent="center">
                        <ShortcutControls
                            bedtimeSoundModesIcons={bedtimeSoundModesIcons}
                            nightLightIcons={nightLightIcons}
                            wakeLightIcons={wakeLightIcons}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}