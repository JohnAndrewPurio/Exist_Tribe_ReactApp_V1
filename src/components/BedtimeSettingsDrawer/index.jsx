import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Grid, Paper, Slider, SwipeableDrawer, Typography
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

import { levels } from '../../constants'
import { handleAccordionExpanded, toggleBedtimeDrawer } from '../../redux/actions/bedtime'
import { 
    nightLightBrightnessAction, nightLightBrightnessLevelAction, 
    nightTimeSoundVolumeAction, nightTimeSoundVolumeLevelAction,
    wakeLightBrightnessAction, wakeLightBrightnessLevelAction, wakeTimeSoundVolumeAction 
} from '../../redux/actions/sleepConfiguration'

export default function BedtimeSettingsDrawer() {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const accordionExpanded = useSelector(state => state.bedtime.accordionExpanded)
    const drawerState = useSelector(state => state.bedtime.bedtimeDrawerExpanded)
    const nightLightBrightnessLevel = useSelector(state => state.sleepConfiguration.nightLightBrightnessLevel)
    const nightTimeSoundVolumeLevel = useSelector(state => state.sleepConfiguration.nightTimeSoundVolumeLevel)
    const wakeLightBrightnessLevel = useSelector(state => state.sleepConfiguration.wakeLightBrightnessLevel)
    const wakeTimeSoundVolumeLevel = useSelector(state => state.sleepConfiguration.wakeTimeSoundVolumeLevel)

    const sleepConfigurations = [
        {
            divider: true,
            name: 'Sleep Amount Configuration'
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
            name: 'Sleep Sounds Configuration'
        },
    
        {
            name: "nightTimeSound",
            content: <SoundAdjustments settingName="nightTimeSound" iconState={nightTimeSoundVolumeLevel} />,
            details: "Some settings",
            icon: <ExpandMore className={classes.icon} />,
            summary: "Night Time Sound"
        },
    
        {
            name: "wakeTimeSound",
            content: <SoundAdjustments settingName="wakeTimeSound" iconState={wakeTimeSoundVolumeLevel} />,
            details: "Some settings",
            icon: <ExpandMore className={classes.icon} />,
            summary: "Wake Time Sound"
        },
    
        {
            name: 'Sleep Lights Configuration',
            divider: true
        },
    
        {
            name: "nightLight",
            content: <LightAdjustments settingName="nightLight" iconState={nightLightBrightnessLevel} />,
            details: "Some settings",
            icon: <Brightness2Outlined className={classes.icon} />,
            summary: "Night Light"
        },
    
        {
            name: "wakeLight",
            content: <LightAdjustments settingName="wakeLight" iconState={wakeLightBrightnessLevel} />,
            details: "Some settings",
            icon: <WbSunnyOutlined className={classes.icon} />,
            summary: "Wake Light"
        }
    ]


    const toggleDrawer = (open) => {
        if (open === undefined)
            open = !drawerState

        dispatch(toggleBedtimeDrawer(open))
    }

    return (
        <>
            <SwipeableDrawer
                anchor="bottom"
                open={drawerState}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <Grid container className={classes.drawer} >
                    <Grid item xs={12} className={classes.itemBlock} >
                        <Grid container justifyContent="center">
                            <Paper className={classes.soundSettings} elevation={2}>
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
                                            />
                                        )
                                    }

                                    )
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
        </>
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

function TimePicker({ label }) {
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

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

function AccordionMenu({ config, expanded }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { name, summary, content, icon } = config

    const accordionHandler = (targetAccordion) => {
        // Collapse the target accordion if it is already Expanded
        if (targetAccordion === expanded)
            targetAccordion = null

        dispatch(handleAccordionExpanded(targetAccordion))
    }

    return (
        <Accordion
            className={classes.accordionMenu}
            expanded={expanded === name}
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
        const levelValue = nextLevel === levels.length ? 0: nextLevel 

        if(settingName === 'nightTimeSound') 
            dispatch( nightTimeSoundVolumeLevelAction( levelValue ) )

        // Replace tomorrow
        if(settingName === 'wakeTimeSound') 
            dispatch( wakeLightBrightnessLevelAction( levelValue ) )
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Paper className={classes.containerBlock} >
                        <Grid item>
                            <IconButton onClick={volumeAdjust}>
                                {volumeIcons[iconState]}
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <VolumeSlider settingName={settingName} />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

function VolumeSlider({ settingName }) {
    const dispatch = useDispatch()
    const currentSliderValue = useSelector(state => {
        console.log(settingName)

        return state.sleepConfiguration[ 
            // Checks if the value to be retrieved is Brightness or Volume
            RegExp('Light').test(settingName) ? `${settingName}Brightness`
                :  `${settingName}Volume`
        ]
    })

    const sliderValueHandler = (event, value) => {
        switch(settingName) {
            case 'nightTimeSound':
                dispatch( nightTimeSoundVolumeAction(value) )
                break

            case 'wakeTimeSound':
                dispatch( wakeTimeSoundVolumeAction(value) )
                break

            case 'wakeLight':
                dispatch( wakeLightBrightnessAction(value) )
                break

            case 'nightLight':
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

    const icons = settingName === 'nightLight' ? nightLightIcons: wakeLightIcons

    const brightnessAdjust = () => {
        const nextLevel = levels.indexOf(iconState) + 1
        const levelValue = nextLevel === levels.length ? 0: nextLevel 

        if(settingName === 'nightLight') 
            dispatch( nightLightBrightnessLevelAction( levelValue ) )

        if(settingName === 'wakeLight') 
            dispatch( wakeLightBrightnessLevelAction( levelValue ) )
    }

    return (
        <Paper className={classes.containerBlock} >
            <Grid item>
                <IconButton onClick={brightnessAdjust} >
                    {icons[iconState]}
                </IconButton>
            </Grid>
            <Grid item xs>
                <VolumeSlider settingName={settingName} />
            </Grid>
        </Paper>
    )
}