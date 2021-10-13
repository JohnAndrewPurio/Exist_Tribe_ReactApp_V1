import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AudioSelectDialog from '../AudioSelectDialog'
import NavBar from '../NavBar'
import BedtimeSettings from '../BedtimeSettings'
import SideDrawer from '../SideDrawer'

import { useHistory } from 'react-router-dom'

import { Fab } from '@material-ui/core'
import { NightsStayOutlined } from '@material-ui/icons'
import { useStyles } from './styles'

import { setCurrentAudioRef } from '../../redux/actions/bedtime'
import { audioFiles } from '../../constants'

export default function Home() {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const audioRef = useRef()
    const accordionExpanded = useSelector(state => state.bedtime.accordionExpanded)
    const currentAudioPlaying = useSelector(state => state.bedtime.currentAudioPlaying)

    const startBedtime = () => {
        history.push('/startBedtime')
    }

    useEffect(() => {
        console.log('Current Audio:')
        console.log(currentAudioPlaying)

        if(!currentAudioPlaying) {
            dispatch( setCurrentAudioRef(null) )

            return
        }

        if (audioRef.current)
            dispatch( setCurrentAudioRef(audioRef) )

        // eslint-disable-next-line 
    }, [ currentAudioPlaying ])

    return (
        <>
            {
                currentAudioPlaying
                && <audio
                    ref={audioRef}
                    src={audioFiles[currentAudioPlaying]}
                    loop
                />
            }

            <NavBar />
            <SideDrawer />
            <BedtimeSettings defaultSetting={true} />
            <Fab
                className={classes.fab}
                variant="extended"
                onClick={startBedtime}
                color='primary'
            >
                <NightsStayOutlined className={classes.extendedIcon} />
                Start Bedtime
            </Fab>
            
            <AudioSelectDialog settingName={accordionExpanded} />
        </>
    )
}
