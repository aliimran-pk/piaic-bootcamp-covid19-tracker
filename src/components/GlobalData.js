import React, { useState , useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        height: theme.spacing(16),
    },
  }));

export default function GlobalData() {
  
    const classes = useStyles();
    const typeGraphyclasses = useStylesTypography();

    const[GlobalData,setGlobalData] = useState();

    useEffect(() => {
        async function fetchGlobalApiData()
        {
            const apiResponse = await fetch('https://thevirustracker.com/free-api?global=stats', { mode: 'no-cors' });
            //const apiResponse  = await fetch("https://c19stats.now.sh/api/countries");
            console.log("API Data: ", apiResponse);
            const apiJsonData = apiResponse.json();
            //alert(apiJsonData);
            setGlobalData(apiJsonData);            
        }
        fetchGlobalApiData();
    },[])

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom>
        1000
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom>
            Global Count
        </Typography>
      </div> 
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Blue'}} > 
        1000
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom  style = {{color: 'Blue'}}>
            Active
        </Typography>
      </div> 
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Green'}}>
        1000
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom style = {{color: 'Green'}}>
            Recovered
        </Typography>
      </div> 
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Red'}}>
        1000
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom style = {{color: 'Red'}}> 
            Fatallities
        </Typography>
      </div> 
      </Paper>

    </div>
  );
}
