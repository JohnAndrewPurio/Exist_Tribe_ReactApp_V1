import { useDispatch } from 'react-redux'

import VolumeSlider from '../VolumeSlider'
import ToolTip from '../../ToolTip'

import { Chip, Grid, IconButton, Paper } from '@material-ui/core'
import { 
    Brightness1Outlined, Brightness2Outlined, Brightness3Outlined, Brightness4Outlined, Brightness5Outlined, Brightness6Outlined,
    SettingsBrightness 
} from '@material-ui/icons'
import { useStyles } from './styles'

import camelCaseToUpperCase from '../../../utils/camelCaseToUpperCase'
import { levels, WAKE_LIGHT, NIGHT_LIGHT } from '../../../constants'
import { nightLightBrightnessLevelAction, wakeLightBrightnessLevelAction } from '../../../redux/actions/sleepConfiguration'

/**
* Displays a brightness slider along with an icon button shortcut to adjust light levels
* @param {Object} props - Passed props by the parent component
* @param {string} props.settingName - Value either 'nightLight' or 'wakeLight'
* @param {string} props.iconState - Value of 'muted', 'low', 'medium', 'high'
* @return {JSX} MaterialUiPaper - Container of the slider and button shortcut
**/
export default function LightAdjustments({ settingName, iconState }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const nightLightIcons = {
        muted: <SettingsBrightness className={classes.icon} />,
        low: <Brightness3Outlined className={classes.icon} />,
        medium: <Brightness2Outlined className={classes.icon} />,
        high: <Brightness1Outlined className={classes.icon} />,
    }

    const wakeLightIcons = {
        muted: <SettingsBrightness className={classes.icon} />,
        low: <Brightness4Outlined className={classes.icon} />,
        medium: <Brightness6Outlined className={classes.icon} />,
        high: <Brightness5Outlined className={classes.icon} />,
    }

    const icons = settingName === NIGHT_LIGHT ? nightLightIcons : wakeLightIcons

    const brightnessAdjust = () => {
        const nextLevel = levels.indexOf(iconState) + 1
        const levelValue = nextLevel === levels.length ? 0 : nextLevel

        if (settingName === NIGHT_LIGHT)
            dispatch(nightLightBrightnessLevelAction(levelValue))

        if (settingName === WAKE_LIGHT)
            dispatch(wakeLightBrightnessLevelAction(levelValue))
    }

    return (
        <Paper className={classes.containerBlock} >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    <ToolTip title={camelCaseToUpperCase(settingName)}>
                        <IconButton onClick={brightnessAdjust} >
                            {icons[iconState]}
                        </IconButton>
                    </ToolTip>
                </Grid>
                <Grid item xs={9}>
                    <VolumeSlider settingName={settingName} />
                </Grid>
            </Grid>

            <Chip 
                className={classes.chip} 
                size="small" 
                label={iconState === 'muted' ? 'AUTO': iconState.toUpperCase()} 
                color="primary" 
            />
        </Paper>
    )
}