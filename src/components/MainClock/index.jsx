import { useEffect, useState } from 'react'

import { Brightness2Outlined, Brightness7, MusicNoteOutlined } from '@material-ui/icons'
import { ButtonGroup, IconButton, Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export default function MainClock() {
    const classes = useStyles()

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
                        <ButtonGroup variant="contained" className={classes.shortcutControlsGroup} aria-label="text primary button group">
                            <IconButton>
                                <Brightness2Outlined className={classes.shortcutControls} />
                            </IconButton>
                            <IconButton>
                                <Brightness7 className={classes.shortcutControls} />
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

    console.log(minutes)

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