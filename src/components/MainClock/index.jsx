import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ButtonGroup, IconButton, Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

import { levels, bedtimeSoundModes } from '../../constants'
import { bedtimeSoundAction, nightLightBrightnessLevelAction, nightLightStatusAction, wakeLightBrightnessLevelAction, wakeLightStatusAction } from '../../redux/actions/sleepConfiguration'

export default function MainClock({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
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
            if(!state)
                dispatch( nightLightStatusAction(true) )

            dispatch(nightLightBrightnessLevelAction(levelValue))
        }
        
        if (light === 'wakeLight') {
            if(!state)
                dispatch( wakeLightStatusAction(true) )

            dispatch(wakeLightBrightnessLevelAction(levelValue))
        }
    }

    const toggleBackgroundSound = () => {
        let bedtimeSoundIndex = bedtimeSoundModes.indexOf(bedtimeSoundMode) + 1

        if (bedtimeSoundIndex === bedtimeSoundModes.length)
            bedtimeSoundIndex = 0

        dispatch(bedtimeSoundAction(bedtimeSoundModes[bedtimeSoundIndex]))
    }

    return (
        <Paper elevation={3} className={classes.paper} >
            <Grid container>
                <Grid item className={classes.containerBlock} xs={12} >
                    <Grid container alignItems="center" justifyContent="center">
                        <CurrentHour />
                        <Typography variant="h3">:</Typography>
                        <CurrentMinutes />
                        <TimeOfDay />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <ButtonGroup variant="contained" className={classes.shortcutControlsGroup} >
                            <IconButton onClick={() => brightnessAdjust('nightLight', nightLightOn)}>
                                {nightLightIcons[nightLightBrightnessLevel]}
                            </IconButton>
                            <IconButton onClick={() => brightnessAdjust('wakeLight', wakeLightOn)} >
                                {wakeLightIcons[wakeLightBrightnessLevel]}
                            </IconButton>
                            <IconButton
                                onClick={toggleBackgroundSound}
                            >
                                {
                                    bedtimeSoundModesIcons[bedtimeSoundMode]
                                }
                            </IconButton>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

function CurrentHour() {
    const [hours, setHours] = useState(new Date(Date.now()).getHours())

    useEffect(() => {
        const timer = setInterval(() => {
            setHours(new Date(Date.now()).getHours())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    console.log(hours)

    return (
        <Typography variant="h3">
            {`0${String(hours > 12 ? hours - 12 : hours === 0 ? 12 : hours)}`.substr(-2)}
        </Typography>
    )
}

function CurrentMinutes() {
    const [minutes, setMinutes] = useState(new Date(Date.now()).getMinutes())

    useEffect(() => {
        const timer = setInterval(() => {
            setMinutes(new Date(Date.now()).getMinutes())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <Typography variant="h3">
            {`0${String(minutes)}`.substr(-2)}
        </Typography>
    )
}

function TimeOfDay() {
    const classes = useStyles()
    const date = new Date(Date.now())
    const [timeOfDay, setTimeOfDay] = useState(date.getHours() < 12 ? 'AM' : 'PM')

    useEffect(() => {
        const timer = setInterval(() => {
            const currentHours = new Date(Date.now()).getHours()
            setTimeOfDay(currentHours < 12 ? 'AM' : 'PM')
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <Typography className={classes.timeOfDay} variant="h3" >
            {timeOfDay}
        </Typography>
    )
}