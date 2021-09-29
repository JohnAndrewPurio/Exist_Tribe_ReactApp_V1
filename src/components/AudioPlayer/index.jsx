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

import { audioFiles } from '../../constants'

/**
 * Creates an Audio Player which displays the current Audio Playing with Pause/Play toggle and an Exit Button
 * @returns MaterialUIGrid
 */
export default function AudioPlayer() {
    const classes = useStyles()
    const nightTimeAudio = useSelector(state => state.sleepConfiguration.nightTimeAudio)
    const wakeTimeAudio = useSelector(state => state.sleepConfiguration.wakeTimeAudio)

    console.log('Night Time Audio:')
    console.log( audioFiles[nightTimeAudio] )
    console.log('Wake Time Audio:')
    console.log(wakeTimeAudio)

    return (
        <>
            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <Typography variant="h6" className={classes.musicName}>
                        Music Name
                    </Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.containerBlock} xs={12}>
                <Grid container justifyContent="center">
                    <AudioControls />
                </Grid>
            </Grid>
        </>
    )
}