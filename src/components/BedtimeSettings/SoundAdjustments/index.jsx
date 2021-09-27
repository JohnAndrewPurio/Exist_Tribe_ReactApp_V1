import { useDispatch } from 'react-redux'

import ToolTip from '../../ToolTip'
import VolumeSlider from '../VolumeSlider'

import { Button, Chip, Grid, IconButton, Paper } from '@material-ui/core'
import { VolumeDown, VolumeMute, VolumeOff, VolumeUp } from '@material-ui/icons'
import { useStyles } from './styles'

import camelCaseToUpperCase from '../../../utils/camelCaseToUpperCase'
import { levels, NIGHT_TIME_SOUND, WAKE_TIME_SOUND } from '../../../constants'
import { 
    nightTimeSoundVolumeLevelAction, toggleSoundSelectorAction, wakeTimeSoundVolumeLevelAction 
} from '../../../redux/actions/sleepConfiguration'

/**
* Displays a volume slider along with an icon button shortcut to adjust audio levels
* @param {Object} props - Passed props by the parent component
* @param {string} props.settingName - Value either 'nightTimeSound' or 'wakeTimeSound'
* @param {string} props.iconState - Value of 'muted', 'low', 'medium', 'high'
* @returns {JSX} MaterialUiGrid - Container of the slider and button shortcut
**/
export default function SoundAdjustments({ settingName, iconState }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    // const soundSelector = useSelector(state => state.sleepConfiguration[`${settingName}Selector`])

    const volumeIcons = {
        muted: <VolumeOff className={classes.icon} />,
        low: <VolumeMute className={classes.icon} />,
        medium: <VolumeDown className={classes.icon} />,
        high: <VolumeUp className={classes.icon} />,
    }

    const volumeAdjust = () => {
        const nextLevel = levels.indexOf(iconState) + 1
        const levelValue = nextLevel === levels.length ? 0 : nextLevel

        if (settingName === NIGHT_TIME_SOUND)
            dispatch(nightTimeSoundVolumeLevelAction(levelValue))

        if (settingName === WAKE_TIME_SOUND)
            dispatch(wakeTimeSoundVolumeLevelAction(levelValue))
    }
 
    const toggleSoundSelector = () => {
        if (settingName === NIGHT_TIME_SOUND)
            dispatch(toggleSoundSelectorAction(NIGHT_TIME_SOUND)) // Update to toggleNightTimeSoundSelectorAction later

        if (settingName === WAKE_TIME_SOUND)
            dispatch(toggleSoundSelectorAction(WAKE_TIME_SOUND))
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center" >
                    <Paper elevation={2} className={classes.containerBlock}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={3}>
                                <ToolTip title={camelCaseToUpperCase(settingName)}>
                                    <IconButton onClick={volumeAdjust}>
                                        {volumeIcons[iconState]}
                                    </IconButton>
                                </ToolTip>
                            </Grid>
                            <Grid item xs={9}>
                                <VolumeSlider settingName={settingName} />
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={toggleSoundSelector}
                        >
                            Select Sound
                        </Button>
                        <Chip className={classes.chip} size="small" label={iconState.toUpperCase()} color="primary" />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
