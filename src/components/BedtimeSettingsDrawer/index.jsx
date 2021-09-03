import { useState } from 'react'

import { Button, Grid, Paper, SwipeableDrawer } from '@material-ui/core'
import { useStyles } from './styles'

export default function BedtimeSettingsDrawer() {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (drawerState) => {
        const toggleDrawerState = (prevState) => !prevState

        setDrawerOpen(
            drawerState !== undefined ? drawerState
                : toggleDrawerState
        )
    }

    return (
        <>
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <Grid container>
                    <Grid item xs={12} className={classes.itemBlock}>
                        <Grid container justifyContent="center">
                            <WakeOrSleepTimeSelection />
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
            <Button variant="contained">
                Wake Time
            </Button>

            <Button variant="contained">
                Sleep Time
            </Button>
        </Paper>
    )
}
