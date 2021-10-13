import { useSelector } from 'react-redux'

import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Pause, PlayArrow } from '@material-ui/icons'

export default function AudioItem({ audioName, handleListItemClick, testCurrentAudio }) {
    const currentAudioPlaying = useSelector(state => state.appConfig.currentAudioPlaying)
    const play = audioName
    const pause = null
    const testParam = currentAudioPlaying && audioName === currentAudioPlaying ? pause : play

    return (
        <ListItem
            button
            onClick={() => handleListItemClick(audioName)}
        >
            <ListItemText primary={audioName} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="play"
                    onClick={() => testCurrentAudio( testParam )}
                >
                    {
                        !testParam ?
                            <Pause />
                        : !currentAudioPlaying ?
                            <PlayArrow />
                        : <></>

                    }
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}