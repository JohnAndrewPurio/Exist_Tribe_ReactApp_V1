import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
    Brightness1Outlined, Brightness2Outlined, Brightness3Outlined, 
    Brightness4Outlined, Brightness5Outlined, Brightness6Outlined, 
    MusicNoteOutlined 
} from '@material-ui/icons'
import { ButtonGroup, IconButton, Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

import { levels } from '../../constants'
import { nightLightBrightnessLevelAction, wakeLightBrightnessLevelAction } from '../../redux/actions/sleepConfiguration'

export default function MainClock() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const nightLightBrightnessLevel = useSelector(state => state.sleepConfiguration.nightLightBrightnessLevel)
    const wakeLightBrightnessLevel = useSelector(state => state.sleepConfiguration.wakeLightBrightnessLevel)

    const nightLightIcons = {
        low: <Brightness3Outlined className={classes.shortcutControls} />,
        medium: <Brightness2Outlined className={classes.shortcutControls} />,
        high: <Brightness1Outlined className={classes.shortcutControls} />,
    }

    const wakeLightIcons = {
        low: <Brightness4Outlined className={classes.shortcutControls} />,
        medium: <Brightness6Outlined className={classes.shortcutControls} />,
        high: <Brightness5Outlined className={classes.shortcutControls} />,
    }

    const brightnessAdjust = (light) => {
        const nextLevel = levels.indexOf(light === 'nightLight' ? nightLightBrightnessLevel: wakeLightBrightnessLevel) + 1
        const levelValue = nextLevel === levels.length ? 0: nextLevel 

        if(light === 'nightLight') 
            dispatch( nightLightBrightnessLevelAction( levelValue ) )

        if(light === 'wakeLight') 
            dispatch( wakeLightBrightnessLevelAction( levelValue ) )
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
                            <IconButton onClick={ () => brightnessAdjust('nightLight') }>
                                { nightLightIcons[nightLightBrightnessLevel] }
                            </IconButton>
                            <IconButton onClick={ () => brightnessAdjust('wakeLight') } >
                                { wakeLightIcons[wakeLightBrightnessLevel] } 
                            </IconButton>
                            <IconButton>
                                <MusicNoteOutlined className={classes.shortcutControls} />
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
            const currentHours = new Date( Date.now() ).getHours()
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