import { useDispatch, useSelector } from 'react-redux'

import ToolTip from '../ToolTip'
import camelCaseToUpperCase from '../../utils/camelCaseToUpperCase'

import {
    Accordion, AccordionDetails, AccordionSummary, Button, Chip, Divider,
    Grid, IconButton, Paper, Slider, Typography
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
import { PrettoSlider, useStyles } from './styles'

import { levels, WAKE_TIME_SOUND, NIGHT_TIME_SOUND, WAKE_LIGHT, NIGHT_LIGHT } from '../../constants'
import { handleAccordionExpanded } from '../../redux/actions/bedtime'
import {
    nightLightBrightnessAction, nightLightBrightnessLevelAction, nightLightStatusAction,
    nightTimeSoundVolumeAction, nightTimeSoundVolumeLevelAction,
    toggleSoundSelectorAction,
    wakeLightBrightnessAction, wakeLightBrightnessLevelAction, wakeLightStatusAction,
    wakeTimeAction,
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
    const classes = useStyles()
    const dispatch = useDispatch()
    const wakeTime = useSelector(state => state.sleepConfiguration.wakeTime)

    const handleDateChange = (date) => {
        dispatch(wakeTimeAction(date))
    }

    return (
        <Paper elevation={2} className={classes.timePickerPaper} >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    color="primary"
                    inputVariant="outlined"
                    margin="normal"
                    id={label}
                    label={label}
                    value={wakeTime}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </Paper>
    )
}

function SleepAmountSlider({ label, value, offset }) {
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

function WakeOrSleepTimeSelection() {
    const classes = useStyles()
    const wakeTime = useSelector(state => state.sleepConfiguration.wakeTime)
    const futureDate = new Date(wakeTime).getTime()
    const currentDate = Date.now()
    const offset = 60 * 60 * 1000
    const value = Math.round(
        (futureDate - currentDate) / offset
    )

    return (
        <Grid container>
            <Grid item xs={12} >
                <Grid container justifyContent="center">
                    <Paper className={classes.containerBlock} >
                        <TimePicker label="Wake Time" />

                        <SectionDivider sectionName="Sleep Time in Hours" />
                        <SleepAmountSlider 
                            label="sleepHours" 
                            value={value}      
                            offset={offset}                      
                        />

                        {/* Not working yet */}
                        {/* <SectionDivider sectionName="Minutes" />
                        <SleepAmountSlider label="sleepMinutes" /> */}
                        <Chip className={classes.chip} size="small" label={`${value} hours`} color="primary" />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
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
    // const soundSelector = useSelector(state => state.sleepConfiguration[`${settingName}Selector`])

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
