import { useDispatch, useSelector } from 'react-redux'

import ItemsList from './ItemsList'

import { Dialog, DialogContent, DialogTitle, Divider } from '@material-ui/core'
import { useStyles } from './styles'

import { toggleSoundSelectorAction } from '../../redux/actions/sleepConfiguration'

import camelCaseToUpperCase from '../../utils/camelCaseToUpperCase'

export default function AudioSelectDialog({ settingName }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const soundSelected = useSelector(state => state.sleepConfiguration.soundSelector)

    const handleClose = () => {
        dispatch(toggleSoundSelectorAction(null))
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
                {
                    camelCaseToUpperCase(settingName || 'sound')
                }
            </DialogTitle>
            <Divider />
            <DialogContent>
                <ItemsList
                    settingName={settingName}
                />
            </DialogContent>
        </Dialog>
    )
}