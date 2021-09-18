import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AudioItem from '../AudioItem'

import { List } from '@material-ui/core'
import { NIGHT_TIME_SOUND } from '../../../constants'
import { setCurrentAudioPlayingAction } from '../../../redux/actions/appConfig'
import { nightTimeAudioAction, toggleSoundSelectorAction, wakeTimeAudioAction } from '../../../redux/actions/sleepConfiguration'

let timer = null

export default function ItemsList({ fileNames, settingName }) {
    const dispatch = useDispatch()
    const currentAudioPlaying = useSelector(state => state.appConfig.currentAudioPlaying)

    const handleListItemClick = (index) => {
        const audioAction = settingName === NIGHT_TIME_SOUND ? nightTimeAudioAction : wakeTimeAudioAction

        if(currentAudioPlaying) {
            currentAudioPlaying.targetAudio.pause()
            dispatch( setCurrentAudioPlayingAction(null) )
        }

        dispatch( audioAction(fileNames[index]) )
        dispatch( toggleSoundSelectorAction(null) )
    }

    const testCurrentAudio = (targetAudio, index) => {
        if(currentAudioPlaying !== null)
            currentAudioPlaying.targetAudio.pause()

        if (!targetAudio) {
            dispatch( setCurrentAudioPlayingAction(null) )

            return
        }

        targetAudio = new Audio(targetAudio)
        dispatch(setCurrentAudioPlayingAction({
            targetAudio, index
        }))
    }

    const resetAudio = (targetAudio) => {
        dispatch( setCurrentAudioPlayingAction(null) )
        targetAudio.pause()
    }

    useEffect(() => {
        if(timer !== null) {
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
                fileNames.map((fileName, index) => (
                    <AudioItem
                        key={fileName}
                        fileName={fileName}
                        currentIndex={index}
                        handleListItemClick={handleListItemClick}
                        testCurrentAudio={testCurrentAudio}
                    />
                ))
            }
        </List>
    )
}