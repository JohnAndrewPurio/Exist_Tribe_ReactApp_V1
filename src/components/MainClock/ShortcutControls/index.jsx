import { useDispatch, useSelector } from 'react-redux'

import ToolTip from '../../ToolTip'

import { ButtonGroup, IconButton, } from '@material-ui/core'
import { useStyles } from './styles'

import { levels, bedtimeSoundModes, NIGHT_LIGHT_TEXT, WAKE_LIGHT_TEXT, SOUND_TEXT } from '../../../constants'
import { 
    bedtimeSoundAction, nightLightBrightnessLevelAction, nightLightStatusAction, wakeLightBrightnessLevelAction, wakeLightStatusAction 
} from '../../../redux/actions/sleepConfiguration'

/**
* Shortcuts for Night Light, Wake Light, and Audio Controls
* @param {Object} props - Passed props by the parent component
* @param {Object} props.bedtimeSoundModesIcons - Contains the JSX elements of icons to Display for the Sound Shortcuts
* @param {Object} props.nightLightIcons - Contains the JSX elements of icons to Display for the Night Light Shortcut
* @param {Object} props.wakeLightIcons - Contains the JSX elements of icons to Display for the Wake Light Shortcut
* @returns MaterialUiButtonGroup- Container of the digital clock and the shortcut controls
**/
export default function ShortcutControls({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const nightLightBrightnessLevel = useSelector(state => state.sleepConfiguration.nightLightBrightnessLevel)
    const wakeLightBrightnessLevel = useSelector(state => state.sleepConfiguration.wakeLightBrightnessLevel)
    const bedtimeSoundMode = useSelector(state => state.sleepConfiguration.bedtimeSoundMode)
    const nightLightOn = useSelector(state => state.sleepConfiguration.nightLightOn)
    const wakeLightOn = useSelector(state => state.sleepConfiguration.wakeLightOn)

    const brightnessAdjust = (light, state) => {
        const nextLevel = levels.indexOf(light === 'nightLight' ? nightLightBrightnessLevel : wakeLightBrightnessLevel) + 1
        const levelValue = nextLevel === levels.length ? 0 : nextLevel

        if (light === 'nightLight') {
            if (!state)
                dispatch( nightLightStatusAction(true) )

            dispatch( nightLightBrightnessLevelAction(levelValue) )
        }

        if (light === 'wakeLight') {
            if (!state)
                dispatch( wakeLightStatusAction(true) )

            dispatch( wakeLightBrightnessLevelAction(levelValue) )
        }
    }

    const toggleBackgroundSound = () => {
        let bedtimeSoundIndex = bedtimeSoundModes.indexOf(bedtimeSoundMode) + 1

        if (bedtimeSoundIndex === bedtimeSoundModes.length)
            bedtimeSoundIndex = 0

        dispatch( 
            bedtimeSoundAction( bedtimeSoundModes[bedtimeSoundIndex] ) 
        )
    }

    return (
        <ButtonGroup variant="contained" className={classes.shortcutControlsGroup} >
            <ToolTip title={NIGHT_LIGHT_TEXT} >
                <IconButton onClick={() => brightnessAdjust('nightLight', nightLightOn)}>
                    {nightLightIcons[nightLightBrightnessLevel]}
                </IconButton>
            </ToolTip>
            <ToolTip title={WAKE_LIGHT_TEXT} >
                <IconButton onClick={() => brightnessAdjust('wakeLight', wakeLightOn)} >
                    {wakeLightIcons[wakeLightBrightnessLevel]}
                </IconButton>
            </ToolTip>
            <ToolTip title={SOUND_TEXT} >
                <IconButton
                    onClick={toggleBackgroundSound}
                >
                    {
                        bedtimeSoundModesIcons[bedtimeSoundMode]
                    }
                </IconButton>
            </ToolTip>
        </ButtonGroup>
    )
}
