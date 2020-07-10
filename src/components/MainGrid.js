import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Record from './Record';
import CountryDropDown from './CountryDropDown';
import BarChart from './BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 5,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Record />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
              <CountryDropDown />
          </Paper>
          <Paper className={classes.paper}>
              <BarChart />
          </Paper>

        </Grid>
      </Grid>
    </div>
  );
}
