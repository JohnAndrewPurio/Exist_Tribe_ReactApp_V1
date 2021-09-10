import { Tooltip } from '@material-ui/core'

export default function ToolTip({ children, title }) {
    console.log(title)
    
    return (
        <Tooltip arrow placement="bottom" title={title}>
            {
                children
            }
        </Tooltip>
    )
}
