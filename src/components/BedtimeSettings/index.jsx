import { useSelector } from 'react-redux'

import AccordionMenu from './AccordionMenu'
import LightAdjustments from './LightAdjustments'
import SectionDivider from './SectionDivider'
import SoundAdjustments from './SoundAdjustments'
import WakeOrSleepTimeSelection from './WakeOrSleepTimeSelection'

import { Grid, Paper, Typography } from '@material-ui/core'
import { Brightness2Outlined,ExpandMore, WbSunnyOutlined } from '@material-ui/icons'
import { useStyles } from './styles'

import { WAKE_TIME_SOUND, NIGHT_TIME_SOUND, WAKE_LIGHT, NIGHT_LIGHT } from '../../constants'

/**
* Displays all the available settings that the user can configure
* @param {Object} props - Passed props by the parent component
* @param {boolean} props.defaultSetting - True if it is the default settings at Home(Main Dashboard) else false(Settings Drawer)
* @return {JSX} MaterialUiGrid - Container of all the settings to configure volume levels, brightness levels and other stuff
**/
export default function BedtimeSettings({ defaultSetting }) {
    const classes = useStyles()

    const accordionExpanded = useSelector(state => state.bedtime.accordionExpanded)

    const nightLightBrightnessLevel = useSelector(state => state.sleepConfiguration.nightLightBrightnessLevel)
    const nightTimeSoundVolumeLevel = useSelector(state => state.sleepConfiguration.nightTimeSoundVolumeLevel)
    const nightLightOn = useSelector(state => state.sleepConfiguration.nightLightOn)

    const wakeLightBrightnessLevel = useSelector(state => state.sleepConfiguration.wakeLightBrightnessLevel)
    const wakeTimeSoundVolumeLevel = useSelector(state => state.sleepConfiguration.wakeTimeSoundVolumeLevel)
    const wakeLightOn = useSelector(state => state.sleepConfiguration.wakeLightOn)

    const sleepConfigurations = [
        {
            divider: true,
            name: 'Sleep Amount'
        },

        {
            name: "wakeOrSleepTime",
            content: <WakeOrSleepTimeSelection />,
            icon: <ExpandMore className={classes.icon} />,
            summary: "Wake Or Sleep Time"
        },

        {
            divider: true,
            name: 'Sleep Sounds'
        },

        {
            name: NIGHT_TIME_SOUND,
            content: <SoundAdjustments settingName={NIGHT_TIME_SOUND} iconState={nightTimeSoundVolumeLevel} />,
            icon: <ExpandMore className={classes.icon} />,
            summary: "Night Time Sound"
        },

        {
            name: WAKE_TIME_SOUND,
            content: <SoundAdjustments settingName={WAKE_TIME_SOUND} iconState={wakeTimeSoundVolumeLevel} />,
            icon: <ExpandMore className={classes.icon} />,
            summary: "Wake Time Sound"
        },

        {
            name: 'Sleep Lights',
            divider: true
        },

        {
            name: NIGHT_LIGHT,
            content: <LightAdjustments settingName={NIGHT_LIGHT} iconState={nightLightBrightnessLevel} />,
            icon: <Brightness2Outlined className={classes.icon} />,
            light: nightLightOn,
            summary: "Night Light"
        },

        {
            name: WAKE_LIGHT,
            content: <LightAdjustments settingName={WAKE_LIGHT} iconState={wakeLightBrightnessLevel} />,
            icon: <WbSunnyOutlined className={classes.icon} />,
            light: wakeLightOn,
            summary: "Wake Light"
        }
    ]

    return (
        <Grid container className={classes.drawer} >
            <Grid item xs={12} className={classes.itemBlock} >
                <Grid container justifyContent="center">
                    <Paper className={classes.soundSettings} elevation={2}>
                        {
                            defaultSetting ? <Typography variant="h6" className={classes.contrastText} >Default Configurations</Typography>
                                : <></>
                        }
                        {
                            sleepConfigurations.map(config => {
                                const { name } = config

                                if (config.divider) {
                                    return (
                                        <SectionDivider key={name} sectionName={name} />
                                    )
                                }

                                return (
                                    <AccordionMenu
                                        key={name}
                                        config={config}
                                        expanded={accordionExpanded}
                                        lightOn={config.light}
                                    />
                                )
                            }

                            )
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}