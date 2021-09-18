import { useSelector } from 'react-redux'

import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Pause, PlayArrow } from '@material-ui/icons'

import { audioFileNames } from '../../../constants'

export default function AudioItem({ fileName, handleListItemClick, currentIndex, testCurrentAudio }) {
    const currentAudioPlaying = useSelector(state => state.appConfig.currentAudioPlaying)
    const play = fileName
    const pause = null
    const testParam = currentAudioPlaying && currentIndex === currentAudioPlaying.index ? pause: play 

    return (
        <ListItem
            button
            onClick={() => handleListItemClick(currentIndex)}
        >
            <ListItemText primary={audioFileNames[currentIndex]} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="play"
                    onClick={() => testCurrentAudio(testParam, currentIndex)}
                >
                    {
                        testParam ?
                            <PlayArrow />
                            : <Pause />
                    }
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}