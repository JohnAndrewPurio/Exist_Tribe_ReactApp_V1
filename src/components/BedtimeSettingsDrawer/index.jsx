import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Grid, Paper, Slider, SwipeableDrawer, Switch, Typography
} from '@material-ui/core'
import { Brightness2Outlined, ExpandMore, VolumeMute, WbSunnyOutlined } from '@material-ui/icons'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { useStyles } from './styles'

import { handleAccordionExpanded, toggleBedtimeDrawer } from '../../redux/actions/bedtime'

const sleepConfigurations = [
    {
        divider: true,
        name: 'Sleep Amount Configuration'
    },

    {
        name: "wakeOrSleepTime",
        content: <WakeOrSleepTimeSelection />,
        details: "Some settings",
        icon: <ExpandMore />,
        summary: "Wake Or Sleep Time"
    },

    {
        divider: true,
        name: 'Sleep Sounds Configuration'
    },

    {
        name: "nightTimeSound",
        content: <SoundAdjustments />,
        details: "Some settings",
        icon: <ExpandMore />,
        summary: "Night Time Sound"
    },

    {
        name: "wakeTimeSound",
        content: <SoundAdjustments />,
        details: "Some settings",
        icon: <ExpandMore />,
        summary: "Wake Time Sound"
    },

    {
        name: 'Sleep Lights Configuration',
        divider: true
    },

    {
        name: "nightLight",
        content: <LightAdjustments />,
        details: "Some settings",
        icon: <Brightness2Outlined />,
        summary: "Night Light"
    },

    {
        name: "wakeLight",
        content: <LightAdjustments />,
        details: "Some settings",
        icon: <WbSunnyOutlined />,
        summary: "Wake Light"
    },

]

export default function BedtimeSettingsDrawer() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const drawerState = useSelector(state => state.bedtime.bedtimeDrawerExpanded)
    const accordionExpanded = useSelector(state => state.bedtime.accordionExpanded)

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

                                        if(config.divider) {
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
            <Typography variant="h6" className={classes.sectionText} >{ sectionName }</Typography>
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

    const { name, details, summary, content, icon } = config

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

function SoundAdjustments() {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Paper className={classes.containerBlock} >
                        <Grid item>
                            <IconButton>
                                <VolumeMute />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <VolumeSlider />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

function VolumeSlider() {
    return (
        <Slider
            w={150}
            color="primary"
            defaultValue={0}
            aria-labelledby="volume-slider"
            step={1}
            valueLabelDisplay="auto"
            marks
        />

    )
}

function LightAdjustments() {
    return (
        <>
            Test
        </>
    )
}