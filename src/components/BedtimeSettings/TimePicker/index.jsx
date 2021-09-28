import { useDispatch, useSelector } from 'react-redux'

import { Paper } from '@material-ui/core'
import { useStyles } from './styles'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { wakeTimeAction } from '../../../redux/actions/sleepConfiguration'

export default function TimePicker({ label }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wakeTime = useSelector(state => state.sleepConfiguration.wakeTime)

    const handleDateChange = (date) => {
        dispatch(wakeTimeAction(date))
    }

    return (
        <Paper elevation={2} className={classes.timePickerPaper}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    color='primary'
                    inputVariant="outlined"
                    margin="normal"
                    id={label}
                    label={label}
                    value={wakeTime}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </Paper>
    )
}