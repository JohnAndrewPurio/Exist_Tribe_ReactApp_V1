import { useDispatch, useSelector } from 'react-redux'

import SideDrawerList from '../SideDrawerList'

import { SwipeableDrawer } from '@material-ui/core'

import { toggleSideDrawerAction } from '../../redux/actions/appConfig'

export default function SideDrawer() {
    const dispatch = useDispatch()
    const sideDrawer = useSelector(state => state.appConfig.sideDrawer)

    const handleSideDrawer = (state) => {
        dispatch( toggleSideDrawerAction(state) )
    }

    return (
        <SwipeableDrawer
            anchor="left"
            open={sideDrawer}
            onClose={() => handleSideDrawer(false)}
            onOpen={() => handleSideDrawer(true)}
        >
            <SideDrawerList />
        </SwipeableDrawer>
    )
}
