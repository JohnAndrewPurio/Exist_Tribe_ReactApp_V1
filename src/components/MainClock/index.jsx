import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToolTip from '../ToolTip'

import { ButtonGroup, IconButton, Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

import { levels, bedtimeSoundModes, NIGHT_LIGHT_TEXT, WAKE_LIGHT_TEXT, SOUND_TEXT } from '../../constants'
import { bedtimeSoundAction, nightLightBrightnessLevelAction, nightLightStatusAction, wakeLightBrightnessLevelAction, wakeLightStatusAction } from '../../redux/actions/sleepConfiguration'

let timerInterval = 0

export default function MainClock({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
    const [time, setTime] = useState( new Date().toLocaleTimeString() )
    const dispatch = useDispatch()

    const nightLightBrightnessLevel = useSelector(state => state.sleepConfiguration.nightLightBrightnessLevel)
    const wakeLightBrightnessLevel = useSelector(state => state.sleepConfiguration.wakeLightBrightnessLevel)
    const bedtimeSoundMode = useSelector(state => state.sleepConfiguration.bedtimeSoundMode)
    const nightLightOn = useSelector(state => state.sleepConfiguration.nightLightOn)
    const wakeLightOn = useSelector(state => state.sleepConfiguration.wakeLightOn)

    const brightnessAdjust = (light, state) => {
        const nextLevel = levels.indexOf(light === 'nightLight' ? nightLightBrightnessLevel : wakeLightBrightnessLevel) + 1
        const levelValue = nextLevel === levels.length ? 0 : nextLevel

        if (light === 'nightLight') {
            if (!state)
                dispatch(nightLightStatusAction(true))

            dispatch(nightLightBrightnessLevelAction(levelValue))
        }

        if (light === 'wakeLight') {
            if (!state)
                dispatch(wakeLightStatusAction(true))

            dispatch(wakeLightBrightnessLevelAction(levelValue))
        }
    }

    const toggleBackgroundSound = () => {
        let bedtimeSoundIndex = bedtimeSoundModes.indexOf(bedtimeSoundMode) + 1

        if (bedtimeSoundIndex === bedtimeSoundModes.length)
            bedtimeSoundIndex = 0

        dispatch(bedtimeSoundAction(bedtimeSoundModes[bedtimeSoundIndex]))
    }

    useEffect(() => {
        timerInterval = setInterval(() => {
            setTime( () => new Date().toLocaleTimeString() )
        }, 1000)

        return () => {
            clearInterval(timerInterval)
        }
    }, []) 

    return (
        <Paper elevation={3} className={classes.paper} >
            <Grid container>
                <Grid item className={classes.containerBlock} xs={12} >
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography variant="h3">{ time }</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <ButtonGroup variant="contained" className={classes.shortcutControlsGroup} >
                            <ToolTip title={NIGHT_LIGHT_TEXT} >
                                <IconButton onClick={() => brightnessAdjust('nightLight', nightLightOn)}>
                                    {nightLightIcons[nightLightBrightnessLevel]}
                                </IconButton>
                            </ToolTip>
                            <ToolTip title={WAKE_LIGHT_TEXT} >
                                <IconButton onClick={() => brightnessAdjust('wakeLight', wakeLightOn)} >
                                    {wakeLightIcons[wakeLightBrightnessLevel]}
                                </IconButton>
                            </ToolTip>
                            <ToolTip title={SOUND_TEXT} >
                                <IconButton
                                    onClick={toggleBackgroundSound}
                                >
                                    {
                                        bedtimeSoundModesIcons[bedtimeSoundMode]
                                    }
                                </IconButton>
                            </ToolTip>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}