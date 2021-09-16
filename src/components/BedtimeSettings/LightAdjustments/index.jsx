import { useDispatch } from 'react-redux'

import VolumeSlider from '../VolumeSlider'
import ToolTip from '../../ToolTip'

import { Chip, Grid, IconButton, Paper } from '@material-ui/core'
import { 
    Brightness1Outlined, Brightness2Outlined, Brightness3Outlined, Brightness4Outlined, Brightness5Outlined, Brightness6Outlined 
} from '@material-ui/icons'
import { useStyles } from './styles'

import camelCaseToUpperCase from '../../../utils/camelCaseToUpperCase'
import { levels, WAKE_LIGHT, NIGHT_LIGHT } from '../../../constants'
import { nightLightBrightnessLevelAction, wakeLightBrightnessLevelAction } from '../../../redux/actions/sleepConfiguration'

export default function LightAdjustments({ settingName, iconState }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const nightLightIcons = {
        low: <Brightness3Outlined className={classes.icon} />,
        medium: <Brightness2Outlined className={classes.icon} />,
        high: <Brightness1Outlined className={classes.icon} />,
    }

    const wakeLightIcons = {
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

            <Chip className={classes.chip} size="small" label={iconState.toUpperCase()} color="primary" />
        </Paper>
    )
}