/**
 * TODO: Music/Audio Player with the following features
 * 1) Music/Audio Name Displayed as a Typography Text
 * 2) Pause/Play Button using IconButton
 * 3) Exit Button which closes the Audio Player
 * 
 * Bonus:
 *  Animate the appearance and disappearance of the Audio Player
 */
import { useState } from 'react'

import { Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { Close, Pause, PlayArrow } from '@material-ui/icons'
import { useStyles } from './styles'

/**
 * Creates an Audio Player which displays the current Audio Playing with Pause/Play toggle and an Exit Button
 *  
 */
export default function AudioPlayer() {
    const classes = useStyles()
    const [isPlaying, setIsPlaying] = useState(false)
    const [hidden, setHidden] = useState(false)

    const gridStyle = {
        opacity: !hidden ? 1 : 0,
    }

    const togglePausePlay = (state, toggleState) => {
        toggleState(!state)
    }

    const hideMusicPlayer = (hide) => {
        hide(true)
    }

    return (
        <Grid item className={classes.containerBlock} xs={12} style={gridStyle}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container alignItems="center">
                    <Grid item xs={8}>
                        <Typography variant="h6" className={classes.text}>
                            Music Name
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            onClick={() => togglePausePlay(isPlaying, setIsPlaying)}
                        >
                            {
                                !isPlaying ? <PlayArrow />
                                    : <Pause />
                            }
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            onClick={() => hideMusicPlayer(setHidden)}
                        >
                            <Close />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

