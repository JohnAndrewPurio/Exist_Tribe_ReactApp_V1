/**
 * TODO: Create a Button Group for the Audio Controls which will consist of the following IconButtons:
 * 1) Rewind || Previous 
 * 2) Pause/Play
 * 3) Forward || Next
 */
import { useState } from 'react'

import ToolTip from '../../ToolTip'

import { ButtonGroup, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'
import { useStyles } from './styles'

export default function AudioControls() {
    const classes = useStyles()
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePausePlay = (state, toggleState) => {
        toggleState(!state)
    }

    return (
        <ButtonGroup variant="contained" className={classes.audioControlsGroup} >
            <ToolTip title="Previous" >
                <IconButton>
                    <SkipPrevious />
                </IconButton>
            </ToolTip>
            <ToolTip title={ isPlaying ? "Play": "Pause" }>
                <IconButton
                    onClick={() => togglePausePlay( isPlaying, setIsPlaying )}
                >
                    {
                        !isPlaying ? <PlayArrow />: <Pause />
                    }
                </IconButton>
            </ToolTip>
            <ToolTip title="Next">
                <IconButton>
                    <SkipNext />
                </IconButton>
            </ToolTip>
        </ButtonGroup>
    )
}
