import { Badge } from '@material-ui/core'
import { MusicNoteOutlined } from '@material-ui/icons'
import { useStyles } from './styles'

/**
* Displays a small badge on the shortcut button of Audio adjustments 
* @param {Object} props - Passed props by the parent component
* @param {JSX} props.badge - Contains the icon to display
* @return {JSX} MaterialUiBadge- Container of the digital clock and the shortcut controls
**/
export default function SoundBadge({ badge }) {
    const classes = useStyles()

    const anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'right',
    }

    return (
        <Badge badgeContent={badge} anchorOrigin={anchorOrigin} >
            <MusicNoteOutlined className={classes.shortcutControls} />
        </Badge>
    )
}