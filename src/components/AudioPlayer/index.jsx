/**
 * TODO: Music/Audio Player with the following features
 * 1) Music/Audio Name Displayed as a Typography Text
 * 2) Pause/Play Button using IconButton
 * 3) Exit Button which closes the Audio Player
 * 
 * Bonus:
 *  Animate the appearance and disappearance of the Audio Player
 */
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import AudioControls from './AudioControls'

import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

import { audioFiles } from '../../constants'

/**
 * Creates an Audio Player which displays the current Audio Playing with Pause/Play toggle and an Exit Button
 * @returns MaterialUIGrid
 */
export default function AudioPlayer() {
    const classes = useStyles()
    const audioRef = useRef()
    const nightTimeAudio = useSelector(state => state.sleepConfiguration.nightTimeAudio)
    const wakeTimeAudio = useSelector(state => state.sleepConfiguration.wakeTimeAudio)
    const nightTimeSoundVolume = useSelector(state => state.sleepConfiguration.nightTimeSoundVolume)

    useEffect(() => {
        if(audioRef.current)
            audioRef.current.volume = nightTimeSoundVolume / 100
    }, [ nightTimeSoundVolume ])

    return (
        <>
            {
                nightTimeAudio 
                && <audio 
                        ref={ audioRef }
                        src={ audioFiles[nightTimeAudio] } 
                        loop 
                    />
            }
            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <Typography variant="h6" className={classes.musicName}>
                        {
                            nightTimeAudio || 'No Sound Selected'
                        }
                    </Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <AudioControls currentAudio={audioRef} />
                </Grid>
            </Grid>
        </>
    )
}