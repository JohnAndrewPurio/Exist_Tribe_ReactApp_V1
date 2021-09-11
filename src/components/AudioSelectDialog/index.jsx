import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dialog, DialogTitle, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Drafts, Inbox } from '@material-ui/icons'
// import { useStyles } from './styles'

import { toggleWakeTimeSelectorAction } from '../../redux/actions/sleepConfiguration'

export default function AudioSelectDialog({ settingName }) {
    // const classes = useStyles()
    const dispatch = useDispatch()
    const soundSelected = useSelector(state => state.sleepConfiguration.soundSelector)
    const [selectedIndex, setSelectedIndex] = useState(1)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }

    const handleClose = () => {
        dispatch(toggleWakeTimeSelectorAction(null))
    }

    console.log(settingName, soundSelected)

    return (
        <Dialog
            onClose={handleClose}
            open={soundSelected === settingName}
        >
            <DialogTitle
                id="simple-dialog-title"
            >
                Title
            </DialogTitle>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <Drafts />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        </Dialog>
    )
}
