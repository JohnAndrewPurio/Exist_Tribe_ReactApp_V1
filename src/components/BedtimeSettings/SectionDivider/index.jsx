import { Divider, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export default function SectionDivider({ sectionName }) {
    const classes = useStyles()

    return (
        <div className={classes.sectionDivider} >
            <Typography variant="h6" className={classes.sectionText} >{sectionName}</Typography>
            <Divider className={classes.divider} />
        </div>
    )
}