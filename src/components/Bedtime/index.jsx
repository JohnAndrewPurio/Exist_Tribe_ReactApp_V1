import { useDispatch } from 'react-redux'

import BedtimeSettingsDrawer from '../BedtimeSettingsDrawer'
import MainClock from '../MainClock'
import SleepBar from '../SleepBar'
import SleepStatus from '../SleepStatus'
import SoundBadge from './SoundBadge'

import { IconButton, Grid } from '@material-ui/core'
import { 
    Brightness1Outlined, Brightness2Outlined, Brightness3Outlined,
    Brightness4Outlined, Brightness5Outlined, Brightness6Outlined,
    KeyboardArrowUp, MusicNoteOutlined, MusicOffOutlined, SettingsBrightness,
    WbSunnyOutlined 
} from '@material-ui/icons'
import { useStyles } from './styles'

import { toggleBedtimeDrawer } from '../../redux/actions/bedtime'

/**
 * 
 * @returns 
 */
export default function Bedtime() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const bedtimeDrawerHandler = (open) => {
        dispatch(toggleBedtimeDrawer(open))
    }

    const bedtimeSoundModesIcons = {
        mute: <MusicOffOutlined className={classes.shortcutControls} />,
        both: <MusicNoteOutlined className={classes.shortcutControls} />,
        nightTime: (
            <SoundBadge
                badge={<Brightness2Outlined className={classes.badgeIcon} />}
            />
        ),
        wakeTime: (
            <SoundBadge
                badge={<WbSunnyOutlined className={classes.badgeIcon} />}
            />
        ),
    }

    const nightLightIcons = {
        muted: <SettingsBrightness className={classes.shortcutControls} />,
        low: <Brightness3Outlined className={classes.shortcutControls} />,
        medium: <Brightness2Outlined className={classes.shortcutControls} />,
        high: <Brightness1Outlined className={classes.shortcutControls} />,
    }

    const wakeLightIcons = {
        muted: <SettingsBrightness className={classes.shortcutControls} />,
        low: <Brightness4Outlined className={classes.shortcutControls} />,
        medium: <Brightness6Outlined className={classes.shortcutControls} />,
        high: <Brightness5Outlined className={classes.shortcutControls} />,
    }

    return (
        <>
            <SleepBar />

            <Grid container justifyContent="center" className={classes.root} >
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <MainClock 
                            bedtimeSoundModesIcons={bedtimeSoundModesIcons} 
                            nightLightIcons={nightLightIcons}
                            wakeLightIcons={wakeLightIcons}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <SleepStatus 
                            bedtimeSoundModesIcons={bedtimeSoundModesIcons} 
                            nightLightIcons={nightLightIcons}
                            wakeLightIcons={wakeLightIcons}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container alignItems="center" direction="column" >
                        <IconButton
                            onClick={() => bedtimeDrawerHandler(true)}
                        >
                            <KeyboardArrowUp
                                className={classes.swipeUp}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <BedtimeSettingsDrawer />
        </>
    )
}