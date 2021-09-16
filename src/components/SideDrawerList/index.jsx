import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

import { useStyles } from './styles'

export default function SideDrawerList() {
    const classes = useStyles()

    return (
        <List className={classes.list} >
            <ListItem button>
                <ListItemText>Withings Mat</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button>
                <ListItemText>Raspberry Pi</ListItemText>
            </ListItem>
        </List>
    )
}
