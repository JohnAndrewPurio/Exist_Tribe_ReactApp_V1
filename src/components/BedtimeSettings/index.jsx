import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToolTip from '../ToolTip'
import camelCaseToUpperCase from '../../utils/camelCaseToUpperCase'

import {
    Accordion, AccordionDetails, AccordionSummary, Chip, Divider, IconButton, Grid, Paper, Slider, Typography
} from '@material-ui/core'
import {
    Brightness1Outlined, Brightness2Outlined, Brightness3Outlined,
    Brightness4Outlined, Brightness5Outlined, Brightness6Outlined,
    ExpandMore,
    VolumeDown, VolumeMute, VolumeUp,
    WbSunnyOutlined
} from '@material-ui/icons'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { useStyles } from './styles'

import { levels, WAKE_TIME_SOUND, NIGHT_TIME_SOUND, WAKE_LIGHT, NIGHT_LIGHT } from '../../constants'
import { handleAccordionExpanded } from '../../redux/actions/bedtime'
import {
    nightLightBrightnessAction, nightLightBrightnessLevelAction, nightLightStatusAction,
    nightTimeSoundVolumeAction, nightTimeSoundVolumeLevelAction,
    wakeLightBrightnessAction, wakeLightBrightnessLevelAction, wakeLightStatusAction,
    wakeTimeSoundVolumeAction, wakeTimeSoundVolumeLevelAction
} from '../../redux/actions/sleepConfiguration'

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
            details: "Some settings",
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
            details: "Some settings",
            icon: <ExpandMore className={classes.icon} />,
            summary: "Night Time Sound"
        },

        {
            name: WAKE_TIME_SOUND,
            content: <SoundAdjustments settingName={WAKE_TIME_SOUND} iconState={wakeTimeSoundVolumeLevel} />,
            details: "Some settings",
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
            details: "Some settings",
            icon: <Brightness2Outlined className={classes.icon} />,
            light: nightLightOn,
            summary: "Night Light"
        },

        {
            name: WAKE_LIGHT,
            content: <LightAdjustments settingName={WAKE_LIGHT} iconState={wakeLightBrightnessLevel} />,
            details: "Some settings",
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

function SectionDivider({ sectionName }) {
    const classes = useStyles()

    return (
        <div className={classes.sectionDivider} >
            <Typography variant="h6" className={classes.sectionText} >{sectionName}</Typography>
            <Divider className={classes.divider} />
        </div>
    )
}

function TimePicker({ label }) {
    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                id={label}
                label={label}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

function WakeOrSleepTimeSelection() {
    return (
        <Paper>
            <Grid container justifyContent="center" >
                <TimePicker label="Wake Time" />
                <TimePicker label="Sleep Time" />
            </Grid>
        </Paper>
    )
}

function AccordionMenu({ config, expanded, lightOn }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { name, summary, content, icon } = config

    const accordionHandler = (targetAccordion) => {
        if (lightOn !== undefined && name === WAKE_LIGHT) {
            dispatch(wakeLightStatusAction(!lightOn))
            targetAccordion = null
        }

        if (lightOn !== undefined && name === NIGHT_LIGHT) {
            dispatch(nightLightStatusAction(!lightOn))
            targetAccordion = null
        }

        // Collapse the target accordion if it is already Expanded
        if (targetAccordion === expanded)
            targetAccordion = null

        dispatch(handleAccordionExpanded(targetAccordion))
    }

    return (
        <Accordion
            className={classes.accordionMenu}
            expanded={lightOn === undefined ? expanded === name : lightOn}
            onChange={() => accordionHandler(name)}
        >
            <AccordionSummary
                expandIcon={icon}
            >
                <Typography className={classes.upperCase} variant="subtitle1">
                    {summary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {content}
            </AccordionDetails>
        </Accordion>
    )
}

function SoundAdjustments({ settingName, iconState }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const volumeIcons = {
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

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Paper className={classes.containerBlock} >
                        <Grid item>
                            <ToolTip title={camelCaseToUpperCase(settingName)}>
                                <IconButton onClick={volumeAdjust}>
                                    {volumeIcons[iconState]}
                                </IconButton>
                            </ToolTip>
                        </Grid>
                        <Grid item xs>
                            <VolumeSlider settingName={settingName} />
                        </Grid>

                        <Chip className={classes.chip} size="small" label={iconState.toUpperCase()} color="primary" />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

function VolumeSlider({ settingName }) {
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
                dispatch(nightTimeSoundVolumeAction(value))
                break

            case WAKE_TIME_SOUND:
                dispatch(wakeTimeSoundVolumeAction(value))
                break

            case WAKE_LIGHT:
                dispatch(wakeLightBrightnessAction(value))
                break

            case NIGHT_LIGHT:
                dispatch(nightLightBrightnessAction(value))
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
            marks
            onChange={sliderValueHandler}
            value={currentSliderValue}
        />
    )
}

function LightAdjustments({ settingName, iconState }) {
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
            <Grid item>
                <ToolTip title={camelCaseToUpperCase(settingName)}>
                    <IconButton onClick={brightnessAdjust} >
                        {icons[iconState]}
                    </IconButton>
                </ToolTip>
            </Grid>
            <Grid item xs>
                <VolumeSlider settingName={settingName} />
            </Grid>

            <Chip className={classes.chip} size="small" label={iconState.toUpperCase()} color="primary" />
        </Paper>
    )
}
