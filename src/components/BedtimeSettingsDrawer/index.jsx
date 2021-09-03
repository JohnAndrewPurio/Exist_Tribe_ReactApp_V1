import { useDispatch, useSelector } from 'react-redux'

import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Paper, SwipeableDrawer, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
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

    console.log('accordion:', accordionExpanded)

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
                <Typography>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

function AccordionMenuContent() {
    return (
        <Grid container>
            
        </Grid>
    )
}