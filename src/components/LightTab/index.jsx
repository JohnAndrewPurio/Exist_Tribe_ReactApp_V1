import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";


export default function LightTab() {

    const classes = useStyles()

    return(
        <Grid container className={classes.mainContainer}>
            <Typography variant="h5" className={classes.primaryHeaderText}>Light Settings</Typography>
            <Grid container className={classes.secondaryContainer}>
                <Typography variant="body" className={classes.secondaryHeaderText}>Night Light</Typography>
            </Grid>
            <Grid container className={classes.secondaryContainer}>
                <Typography variant="body" className={classes.secondaryHeaderText}>Wake Light</Typography>
            </Grid>
        </Grid>
    )
}