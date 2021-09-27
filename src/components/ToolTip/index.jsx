import { Tooltip } from '@material-ui/core'

/**
 * @param {*} children - Components that was wrapped by the ToolTip
 * @param {string} title  - Title or name of the tooltip
 * @returns {*} MaterialUITooltip
 */
export default function ToolTip({ children, title }) {
    return (
        <Tooltip arrow placement="bottom" title={title}>
            {
                children
            }
        </Tooltip>
    )
}
