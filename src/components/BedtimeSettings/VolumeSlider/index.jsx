import { useDispatch, useSelector } from 'react-redux'

import { Slider } from '@material-ui/core'

import {  NIGHT_LIGHT, NIGHT_TIME_SOUND, WAKE_LIGHT, WAKE_TIME_SOUND } from '../../../constants'
import { 
    nightLightBrightnessAction, nightTimeSoundVolumeAction, wakeLightBrightnessAction, wakeTimeSoundVolumeAction 
} from '../../../redux/actions/sleepConfiguration'

export default function VolumeSlider({ settingName }) {
    const dispatch = useDispatch()
    const currentSliderValue = useSelector(state => {
        return state.sleepConfiguration[
            // Checks if the value to be retrieved is Brightness or Volume
            RegExp('Light').test(settingName) ? `${settingName}Brightness`
                : `${settingName}Volume`
        ]
    })

    const sliderValueHandler = (event, value) => {
        switch (settingName) {
            case NIGHT_TIME_SOUND:
                dispatch( nightTimeSoundVolumeAction(value) )
                break

            case WAKE_TIME_SOUND:
                dispatch( wakeTimeSoundVolumeAction(value) )
                break

            case WAKE_LIGHT:
                dispatch( wakeLightBrightnessAction(value) )
                break

            case NIGHT_LIGHT:
                dispatch( nightLightBrightnessAction(value) )
                break

            default:
                return
        }

    }

    return (
        <Slider
            w={150}
            color="primary"
            defaultValue={0}
            aria-labelledby="volume-slider"
            step={1}
            valueLabelDisplay="auto"
            onChange={sliderValueHandler}
            value={currentSliderValue}
        />
    )
}