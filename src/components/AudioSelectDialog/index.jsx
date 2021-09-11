// Will fix the test audio pause and play

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Dialog, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText
} from '@material-ui/core'
import { PlayArrow } from '@material-ui/icons'
import { useStyles } from './styles'

import { nightTimeAudioAction, toggleWakeTimeSelectorAction, wakeTimeAudioAction } from '../../redux/actions/sleepConfiguration'

import { audioFileNames, NIGHT_TIME_SOUND } from '../../constants'
import DeepMeditation from '../../audio/DeepMeditation.mp3'
import QuietMorning from '../../audio/QuietMorning.mp3'
import QuietTime from '../../audio/QuietTime.mp3'
import Tranquility from '../../audio/Tranquility.mp3'

import camelCaseToUpperCase from '../../utils/camelCaseToUpperCase'

const audioFiles = [
    DeepMeditation, QuietMorning, QuietTime, Tranquility
]

export default function AudioSelectDialog({ settingName }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const soundSelected = useSelector(state => state.sleepConfiguration.soundSelector)
    const [currentAudio, setCurrentAudio] = useState(null)

    const handleClose = () => {
        dispatch(toggleWakeTimeSelectorAction(null))
    }

    const handleCurrentAudio = (targetAudio) => {
        if (targetAudio)
            targetAudio = new Audio(targetAudio)

        setCurrentAudio(targetAudio)
    }

    return (
        <Dialog
            onClose={handleClose}
            open={settingName && soundSelected === settingName}
        >
            <DialogTitle
                className={classes.dialogTitle}
                id="sound-title"
            >
                Select {camelCaseToUpperCase(settingName || 'sound')}
            </DialogTitle>
            <Divider />
            <DialogContent>
                <ItemsList
                    fileNames={audioFiles}
                    handleCurrentAudio={handleCurrentAudio}
                    currentAudio={currentAudio}
                    settingName={settingName}
                />
            </DialogContent>
        </Dialog>
    )
}

function ItemsList({ fileNames, handleCurrentAudio, currentAudio, settingName }) {
    const dispatch = useDispatch()
    const [selectedIndex, setSelectedIndex] = useState(null)

    const handleListItemClick = (event, index) => {
        const audioAction = settingName === NIGHT_TIME_SOUND ? nightTimeAudioAction : wakeTimeAudioAction

        console.log(settingName)

        setSelectedIndex(index)
        dispatch( audioAction(fileNames[index]) )
    }

    return (
        <List component="nav" aria-label="secondary mailbox folder">
            {
                fileNames.map((fileName, index) => (
                    <AudioItem
                        key={fileName}
                        fileName={fileName}
                        currentAudio={currentAudio}
                        handleCurrentAudio={handleCurrentAudio}
                        selectedIndex={selectedIndex}
                        index={index}
                        handleListItemClick={handleListItemClick}
                    />
                ))
            }
        </List>
    )
}

function AudioItem({ currentAudio, fileName, handleCurrentAudio, selectedIndex, index, handleListItemClick }) {
    const testAudio = (targetAudio) => {
        handleCurrentAudio(targetAudio)
    }

    useEffect(() => {
        if (currentAudio) {
            currentAudio.play()

            setTimeout(() => {
                currentAudio.pause()
                handleCurrentAudio(null)
            }, 10000)
        }

        // eslint-disable-next-line
    }, [currentAudio])

    return (
        <ListItem
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
        >
            <ListItemText primary={audioFileNames[index]} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="play"
                    onClick={() => testAudio(fileName)}
                >
                    <PlayArrow />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}