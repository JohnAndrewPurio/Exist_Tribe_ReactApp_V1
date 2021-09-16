import { useSelector } from 'react-redux'

import SectionDivider from '../SectionDivider'
import SleepAmountSlider from '../SleepAmountSlider'
import TimePicker from '../TimePicker'

import { Chip, Grid, Paper } from '@material-ui/core'
import { useStyles } from './styles'

export default function WakeOrSleepTimeSelection() {
    const classes = useStyles()
    const wakeTime = useSelector(state => state.sleepConfiguration.wakeTime)
    const futureDate = new Date(wakeTime).getTime()
    const currentDate = Date.now()
    const offset = 60 * 60 * 1000
    const value = Math.round(
        (futureDate - currentDate) / offset
    )

    return (
        <Grid container>
            <Grid item xs={12} >
                <Grid container justifyContent="center">
                    <Paper className={classes.containerBlock} >
                        <TimePicker label="Wake Time" />

                        <SectionDivider sectionName="Sleep Time in Hours" />
                        <SleepAmountSlider 
                            label="sleepHours" 
                            value={value}      
                            offset={offset}                      
                        />

                        {/* Not working yet */}
                        {/* <SectionDivider sectionName="Minutes" />
                        <SleepAmountSlider label="sleepMinutes" /> */}
                        <Chip className={classes.chip} size="small" label={`${value} hours`} color="primary" />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
