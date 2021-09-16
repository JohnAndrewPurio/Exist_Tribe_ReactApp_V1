import { useDispatch } from 'react-redux'

import { wakeTimeAction } from '../../../redux/actions/sleepConfiguration'
import { PrettoSlider } from './styles'

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
            // min={ label === 'sleepHours' ? 4: 0 } // Facing some issue in the computation
            // max={ label === 'sleepHours' ? 12: 59 }
            min={4}
            max={12}
        />
    )
}