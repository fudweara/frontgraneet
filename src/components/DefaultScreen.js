import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Search from "./Search";
import DisplayCities from "./DisplayCities";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Search/></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <DisplayCities type={'metropole'}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <DisplayCities type={'outremer'}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
