import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Close, PlayArrow, Pause } from '@material-ui/icons'
import { useStyles } from './styles'

import { setPauseTime, setTimePaused, startBedtime } from '../../redux/actions/bedtime'

let timer

/**
 * App Bar when in bedtime has session(bedtime has started)
 * @returns {JSX} MaterialUIAppBar
 */
export default function SleepBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const bedtimeStart = useSelector(state => state.bedtime.bedtimeStart)
    const pauseTime = useSelector(state => state.bedtime.pauseTime)
    const timePaused = useSelector(state => state.bedtime.timePaused)

    const [timeSinceStart, setTimeSinceStart] = useState(0)

    const pauseOrPlayTimer = () => {
        if (!pauseTime) {
            dispatch(setPauseTime(Date.now()))

            return
        }

        const timeBetweenPauseAndPlay = (Date.now() - pauseTime) / 1000
        let amountOfTimePaused = timePaused

        if (!amountOfTimePaused)
            amountOfTimePaused = 0

        dispatch(
            setTimePaused( amountOfTimePaused + timeBetweenPauseAndPlay )
        )

        dispatch(
            setPauseTime( null )
        )
    }

    const stopBedtime = () => {
        dispatch( 
            startBedtime(null) 
        )

        history.push('/')
    }

    const incrementTimer = () => {
        const paused = !!pauseTime
        const currentTimeDiff = ( Date.now() - bedtimeStart ) / 1000

        if (!paused)
            setTimeSinceStart(() => currentTimeDiff - timePaused)
    }

    useEffect(() => {
        return () => {
            clearInterval(timer)
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!pauseTime && bedtimeStart) {
            timer = setInterval(incrementTimer, 1000)

            return
        }

        clearInterval(timer)
        // eslint-disable-next-line
    }, [pauseTime])

    useEffect(() => {
        if (!bedtimeStart) {
            dispatch( 
                startBedtime( Date.now() ) 
            )
            
            return
        }
        
        timer = setInterval( incrementTimer, 1000 )
        // eslint-disable-next-line
    }, [bedtimeStart])

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                {/* Calculated Sleep Time */}
                <Typography variant="h6" className={classes.title}>
                    {convertSecondsToHoursAndMinutes(timeSinceStart)}
                </Typography>

                {/* Pause/Play Button */}
                <IconButton
                    onClick={pauseOrPlayTimer}
                >
                    {!!pauseTime ? <PlayArrow className={classes.iconButtonColor} /> : <Pause className={classes.iconButtonColor} />}
                </IconButton>

                {/* Stop Bedtime Button */}
                <IconButton
                    onClick={stopBedtime}
                >
                    <Close className={classes.iconButtonColor} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

function convertSecondsToHoursAndMinutes(seconds) {
    const hours = Math.floor( seconds / 3600 )
    const minutes = Math.floor( ( seconds - hours * 3600 ) / 60 )
    // const remainingSeconds = Math.floor(seconds - hours * 3600 - minutes * 60)

    // Timer with seconds included
    // return `${('0' + String(hours)).substr(-2)}:${('0' + String(minutes)).substr(-2)}:${('0' + String(remainingSeconds)).substr(-2)}`

    return `${('0' + String(hours)).substr(-2)}:${('0' + String(minutes)).substr(-2)}`
}

