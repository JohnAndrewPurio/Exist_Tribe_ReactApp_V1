import { useEffect, useState } from 'react'

import AudioPlayer from '../AudioPlayer'
import ShortcutControls from './ShortcutControls'

import { Grid, Paper, Tab, Tabs, Typography, useTheme } from '@material-ui/core'
import { AccessTime, Audiotrack, Flare } from '@material-ui/icons'
import { useStyles } from './styles'
import SwipeableViews from 'react-swipeable-views'

let timerInterval = 0

/**
* Displays an available configuration to the user in which the user can freely change its values
* @param {Object} props - Passed props by the parent component
* @param {Object} props.bedtimeSoundModesIcons - Contains the JSX elements of icons to Display for the Sound Shortcuts
* @param {Object} props.nightLightIcons - Contains the JSX elements of icons to Display for the Night Light Shortcut
* @param {Object} props.wakeLightIcons - Contains the JSX elements of icons to Display for the Wake Light Shortcut
* @returns MaterialUiPaper - Container of the digital clock and the shortcut controls
**/
export default function MainClock({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = useState(1)

    const handleChangeValue = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    return (
        <Paper elevation={5} className={classes.paper} >
            <Tabs
                value={value}
                onChange={handleChangeValue}
                aria-label="dashboard tabs"
                centered
            >
                <Tab icon={<Flare />} aria-label="Light" />
                <Tab icon={<AccessTime />} aria-label="Main Controls" />
                <Tab icon={<Audiotrack />} aria-label="Sound" />
            </Tabs>

            <Grid container className={classes.parentContainer} justifyContent="center" >
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Clock
                            bedtimeSoundModesIcons={bedtimeSoundModesIcons}
                            nightLightIcons={nightLightIcons}
                            wakeLightIcons={wakeLightIcons}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Clock
                            bedtimeSoundModesIcons={bedtimeSoundModesIcons}
                            nightLightIcons={nightLightIcons}
                            wakeLightIcons={wakeLightIcons}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <AudioPlayer />
                    </TabPanel>
                </SwipeableViews>
            </Grid>
        </Paper >
    )
}

function Clock({ bedtimeSoundModesIcons, nightLightIcons, wakeLightIcons }) {
    const classes = useStyles()
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        timerInterval = setInterval(() => {
            setTime(() => new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(timerInterval)
        }
    }, [])

    return (
        <>
            <Grid item className={classes.containerBlock} xs={12} >
                <Grid container alignItems="center" justifyContent="center">
                    <Typography variant="h3">{time}</Typography>
                </Grid>
            </Grid>

            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <ShortcutControls
                        bedtimeSoundModesIcons={bedtimeSoundModesIcons}
                        nightLightIcons={nightLightIcons}
                        wakeLightIcons={wakeLightIcons}
                    />
                </Grid>
            </Grid>
        </>
    )
}

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    )
}