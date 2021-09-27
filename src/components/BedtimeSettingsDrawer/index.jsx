import { useDispatch, useSelector } from 'react-redux'

import BedtimeSettings from '../BedtimeSettings'
import { SwipeableDrawer } from '@material-ui/core'

import { toggleBedtimeDrawer } from '../../redux/actions/bedtime'

/**
 * Shows the Bedtime Settings in a Swipeable Drawer from the Bottom
 * @returns {JSX} MaterialUISwipeableDrawer
 */
export default function BedtimeSettingsDrawer() {
    const dispatch = useDispatch()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const drawerState = useSelector(state => state.bedtime.bedtimeDrawerExpanded)

    const toggleDrawer = (open) => {
        if (open === undefined)
            open = !drawerState

        dispatch(toggleBedtimeDrawer(open))
    }

    return (
        <>
            <SwipeableDrawer
                anchor="bottom"
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={drawerState}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <BedtimeSettings defaultSetting={false} />
            </SwipeableDrawer>
        </>
    )
}