import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Grid, Paper, Slider, SwipeableDrawer, Typography
} from '@material-ui/core'
import { ExpandMore, VolumeMute } from '@material-ui/icons'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { useStyles } from './styles'

import { handleAccordionExpanded, toggleBedtimeDrawer } from '../../redux/actions/bedtime'

const sleepConfigurations = [
    {
        name: 'Sleep Amount Configuration',
        divider: true
    },

    {
        name: "wakeOrSleepTime",
        summary: "Wake Or Sleep Time",
        details: "Some settings",
        content: <WakeOrSleepTimeSelection />
    },

    {
        name: 'Sleep Sounds Configuration',
        divider: true
    },

    {
        name: "nightTimeSound",
        summary: "Night Time Sound",
        details: "Some settings",
        content: <SoundAdjustments />
    },

    {
        name: "wakeTimeSound",
        summary: "Wake Time Sound",
        details: "Some settings",
        content: <SoundAdjustments />
    },

    {
        name: 'Sleep Lights Configuration',
        divider: true
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

    const { name, details, summary, content } = config

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
                expandIcon={<ExpandMore />}
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