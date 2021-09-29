import { useDispatch } from 'react-redux'

import { wakeTimeAction } from '../../../redux/actions/sleepConfiguration'
import { PrettoSlider } from './styles'

/**
 * The slider in which the user can adjust sleep amount values
 * @param {Object} props - Passed props by the parent components 
 * @param {string} props.label - The text label of the slider
 * @param {number} props.value - A time value in hours (depends on the value of offset)
 * @param {number} props.offset - Divider to the current time in ms to achieve the desired time value (hours/minutes)
 * @returns MaterialUIPrettoSlider
 */
export default function SleepAmountSlider({ label, value, offset }) {
    const dispatch = useDispatch()

    const handleTimeChange = (event, selectedTimeValue) => {
        const wakeTime = new Date( Date.now() + offset * selectedTimeValue )

        dispatch( wakeTimeAction( wakeTime ) )
    }

    return (
        <PrettoSlider
            onChangeCommitted={handleTimeChange}
            valueLabelDisplay="auto"
            label={label}
            aria-label="sleep_amount"
            value={value}
            min={4}
            max={12}
        />
    )
}