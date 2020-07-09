import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Records from './Records';
import CountryDropDown from './CountryDropDown';

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
            <Records />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
              Country Data
              <CountryDropDown />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
