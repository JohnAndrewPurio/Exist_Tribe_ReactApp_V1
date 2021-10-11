/**
 * TODO: Music/Audio Player with the following features
 * 1) Music/Audio Name Displayed as a Typography Text
 * 2) Pause/Play Button using IconButton
 * 3) Exit Button which closes the Audio Player
 * 
 * Bonus:
 *  Animate the appearance and disappearance of the Audio Player
 */
import { useSelector } from 'react-redux'

import AudioControls from './AudioControls'

import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'


/**
 * Creates an Audio Player which displays the current Audio Playing with Pause/Play toggle and an Exit Button
 * @returns MaterialUIGrid
 */
export default function AudioPlayer() {
    const classes = useStyles()
    const currentAudioPlaying = useSelector(state => state.bedtime.currentAudioPlaying)
    const currentAudioRef = useSelector(state => state.bedtime.currentAudioRef)

    return (
        <>
            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <Typography variant="h6" className={classes.musicName}>
                        {
                            currentAudioPlaying || 'No Sound Selected'
                        }
                    </Typography>
                </Grid>
            </Grid>
            {
                currentAudioRef &&
                <Grid item className={classes.containerBlock} xs={12}>
                    <Grid container justifyContent="center">
                        <AudioControls currentAudio={currentAudioRef} />
                    </Grid>
                </Grid>
            }
        </>
    )
}