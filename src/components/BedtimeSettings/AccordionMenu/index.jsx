import { useDispatch } from 'react-redux'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'

import { NIGHT_LIGHT, WAKE_LIGHT } from '../../../constants'
import { handleAccordionExpanded } from '../../../redux/actions/bedtime'
import { nightLightStatusAction, wakeLightStatusAction } from '../../../redux/actions/sleepConfiguration'

/**
* Displays an available configuration to the user in which the user can freely change its values
* @param {Object} props - Passed props by the parent component
* @param {Object} props.config - Contains the essential information of the current configuration to be displayed
* @param {string} props.expanded - State which contains the name of the current expanded accordion
* @param {boolean} props.lightOn - A boolean if the state being configured is about the lights else undefined
* @return {JSX} MaterialUiGrid - Container of the slider and button shortcut
**/
export default function AccordionMenu({ config, expanded, lightOn }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { name, summary, content, icon } = config

    const wakeLightOn = useSelector(state => state.sleepConfiguration.wakeLightOn)
    const nightLightOn = useSelector(state => state.sleepConfiguration.nightLightOn)


    const accordionHandler = (targetAccordion) => {
        if (lightOn !== undefined && name === WAKE_LIGHT) {
            dispatch(wakeLightStatusAction(!lightOn))
            targetAccordion = null
        }

        if (lightOn !== undefined && name === NIGHT_LIGHT) {
            dispatch(nightLightStatusAction(!lightOn))
            targetAccordion = null
        }

        // Collapse the target accordion if it is already Expanded
        if (targetAccordion === expanded)
            targetAccordion = null

        dispatch(handleAccordionExpanded(targetAccordion))
    }

    const getAccordionStyle = () => {
        switch (name) {
            case WAKE_LIGHT:
                if (wakeLightOn) {
                    return { border: '5px solid white' }
                }
                break;
            case NIGHT_LIGHT:
                if (nightLightOn) {
                    return { border: '5px solid white' }
                }
                break;
            default:
                return {}
        }
        return {}
    }

    return (
        <Accordion
            className={classes.accordionMenu}
            expanded={lightOn === undefined ? expanded === name : lightOn}
            onChange={() => accordionHandler(name)}
            style={getAccordionStyle()}
        >
            <AccordionSummary
                expandIcon={icon}
            >
                <Typography className={classes.upperCase} variant="subtitle1">
                    {summary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {content}
            </AccordionDetails>
        </Accordion>
    )
}