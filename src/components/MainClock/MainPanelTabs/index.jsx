import { useState } from 'react'

import { Tab, Tabs } from '@material-ui/core'

export default function MainPanelTabs() {
    const [value, setValue] = useState(0)

    const handleChangeValue = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Tabs value={value} onChange={handleChangeValue} aria-label="dashboard tabs">
            <Tab label="Clock" />
            <Tab label="Sound" />
        </Tabs>
    )
}
