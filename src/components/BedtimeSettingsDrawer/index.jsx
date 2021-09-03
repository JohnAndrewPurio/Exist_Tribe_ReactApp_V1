import { useDispatch, useSelector } from 'react-redux'

import {
    Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Grid, Paper, Slider, SwipeableDrawer, Typography
} from '@material-ui/core'
import { ExpandMore, VolumeMute } from '@material-ui/icons'
import { useStyles } from './styles'

import { handleAccordionExpanded, toggleBedtimeDrawer } from '../../redux/actions/bedtime'

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
                    <Grid item xs={12} className={classes.itemBlock}>
                        <Grid container justifyContent="center">
                            <WakeOrSleepTimeSelection />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={classes.itemBlock} >
                        <Grid container justifyContent="center">
                            <Paper className={classes.soundSettings} elevation={2}>
                                <AccordionMenu
                                    name="nightTimeSound"
                                    summary="Night Time Sound"
                                    details="Some settings"
                                    expanded={accordionExpanded}
                                />
                                <AccordionMenu
                                    name="wakeTimeSound"
                                    summary="Wake Time Sound"
                                    details="Some settings"
                                    expanded={accordionExpanded}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
        </>
    )
}

function WakeOrSleepTimeSelection() {
    const classes = useStyles()

    return (
        <Paper className={classes.containerBlock} elevation={2} >
            <Button variant="contained" color="primary">
                Wake Time
            </Button>

            <Button variant="contained" color="primary">
                Sleep Time
            </Button>
        </Paper>
    )
}

function AccordionMenu({ name, details, expanded, summary }) {
    const classes = useStyles()
    const dispatch = useDispatch()

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
                <AccordionMenuContent />
            </AccordionDetails>
        </Accordion>
    )
}

function AccordionMenuContent() {
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