import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    text: {
        textAlign: 'center',
        padding: theme.spacing(2),
}
}));

export default () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={2} >
                    Je recherche...
                </Grid>
                <Grid item xs={10}>
                    <form noValidate autoComplete="off">
                        <TextField label="... une ville, un code postal" />
                    </form>
                </Grid>

            </Grid>
        </div>
    );
}
