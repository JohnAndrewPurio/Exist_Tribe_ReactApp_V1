import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AudioItem from '../AudioItem'

import { List } from '@material-ui/core'
import { NIGHT_TIME_SOUND, audioFiles } from '../../../constants'
import { setCurrentAudioPlayingAction } from '../../../redux/actions/appConfig'
import { nightTimeAudioAction, toggleSoundSelectorAction, wakeTimeAudioAction } from '../../../redux/actions/sleepConfiguration'

let timer = null

/**
 * Maps the available audio filenames and handle the click event of each item and test pause/play
 * @param {Object} props - props passed by the parent component 
 * @param {Array<string>} props.fileNames - array of available audio filenames
 * @param {string} props.settingName - either wakeTimeSound or nightTimeSound
 * @returns MaterialUIList - contains Audio Items that can be selected or tested
 */
export default function ItemsList({ settingName }) {
    const dispatch = useDispatch()
    const currentAudioPlaying = useSelector(state => state.appConfig.currentAudioPlaying)

    const handleListItemClick = (audioName) => {
        const audioAction = settingName === NIGHT_TIME_SOUND ? nightTimeAudioAction : wakeTimeAudioAction

        if (currentAudioPlaying) {
            currentAudioPlaying.targetAudio.pause()
            dispatch(setCurrentAudioPlayingAction(null))
        }

        dispatch(
            audioAction(audioName)
        )
        dispatch(
            toggleSoundSelectorAction(null)
        )
    }

    const testCurrentAudio = (audioName) => {
        if (currentAudioPlaying !== null)
            currentAudioPlaying.targetAudio.pause()

        if (!audioName) {
            dispatch(setCurrentAudioPlayingAction(null))

            return
        }

        const targetAudio = new Audio(audioFiles[audioName])

        dispatch(setCurrentAudioPlayingAction({
            targetAudio, audioName
        }))
    }

    const resetAudio = (targetAudio) => {
        dispatch(setCurrentAudioPlayingAction(null))
        targetAudio.pause()
    }

    useEffect(() => {
        if (timer !== null) {
            clearTimeout(timer)
            timer = null
        }

        if (!currentAudioPlaying)
            return

        const { targetAudio } = currentAudioPlaying
        targetAudio.play()

        timer = setTimeout(() => {
            resetAudio(targetAudio)
        }, 10000)

        // eslint-disable-next-line
    }, [currentAudioPlaying])

    return (
        <List component="nav" aria-label="secondary mailbox folder">
            {
                Object.keys(audioFiles).map((audioName) => (
                    <AudioItem
                        key={audioName}
                        audioName={audioName}
                        handleListItemClick={handleListItemClick}
                        testCurrentAudio={testCurrentAudio}
                    />
                ))
            }
        </List>
    )
}