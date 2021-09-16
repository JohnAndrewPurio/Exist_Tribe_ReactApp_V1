import NavBar from '../NavBar'
import BedtimeSettings from '../BedtimeSettings'
import SideDrawer from '../SideDrawer'

import { useHistory } from 'react-router-dom'

import { Fab } from '@material-ui/core'
import { NightsStayOutlined } from '@material-ui/icons'
import { useStyles } from './styles'

export default function Home() {
    const classes = useStyles()
    const history = useHistory()

    const startBedtime = () => {
        history.push('/startBedtime')
    }

    return (
        <>
            <NavBar />
            <SideDrawer />
            <BedtimeSettings defaultSetting={true} />
            <Fab
                className={classes.fab}
                variant="extended"
                color="primary"
                onClick={startBedtime}
            >
                <NightsStayOutlined className={classes.extendedIcon} />
                Start Bedtime
            </Fab>
        </>
    )
}
