import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Close, PlayArrow, Pause } from '@material-ui/icons'
import { useStyles } from './styles'
import { startBedtime } from '../../redux/actions/bedtime'

export default function SleepBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [pausedTimer, setPausedTimer] = useState(false)
    const [timeSinceStart, setTimeSinceStart] = useState(0)

    const pauseOrPlayTimer = () => {
        setPausedTimer((prev) => !prev)
    }

    const stopBedtime = () => {
        dispatch(startBedtime(null))
        history.push('/')
    }

    const incrementTimer = () => {
        const paused = pausedTimer

        if (!paused)
            setTimeSinceStart( prev => prev + 1 )
    }

    useEffect(() => {
        dispatch(startBedtime(Date.now()))

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const timer = setInterval(incrementTimer, 1000)

        return () => {
            clearInterval(timer)
        }

        // eslint-disable-next-line
    }, [pausedTimer])

    return (
        <AppBar position="static">
            <Toolbar>

                {/* Calculated Sleep Time */}
                <Typography variant="h6" className={classes.title}>
                    { convertSecondsToHoursAndMinutes(timeSinceStart) }
                </Typography>

                {/* Pause/Play Button */}
                <IconButton
                    onClick={pauseOrPlayTimer}
                >
                    {pausedTimer ? <PlayArrow /> : <Pause />}
                </IconButton>

                {/* Stop Bedtime Button */}
                <IconButton
                    onClick={stopBedtime}
                >
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

function convertSecondsToHoursAndMinutes(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor( ( seconds - hours * 3600 ) / 60 )

    return `${ ('0' + String(hours)).substr(-2) }:${ ('0' + String(minutes)).substr(-2) }`
}

