import { useDispatch } from 'react-redux'

import BedtimeSettingsDrawer from '../BedtimeSettingsDrawer'
import MainClock from '../MainClock'
import SleepBar from '../SleepBar'
import SleepStatus from '../SleepStatus'

import { IconButton, Grid } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import { useStyles } from './styles'

import { toggleBedtimeDrawer } from '../../redux/actions/bedtime'

export default function Bedtime() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const bedtimeDrawerHandler = (open) => {
        dispatch(toggleBedtimeDrawer(open))
    }

    return (
        <>
            <SleepBar />

            <Grid container justifyContent="center" className={classes.root} >
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <MainClock />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <SleepStatus />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container alignItems="center" direction="column" >
                        <IconButton
                            className={classes.swipeUp}
                            onClick={() => bedtimeDrawerHandler(true)}
                        >
                            <KeyboardArrowUp />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <BedtimeSettingsDrawer />
        </>
    )
}
