import React, { useState , useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from "react-countup";
import moment from "moment";



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

    const[globalData,setGlobalData] = useState({});
    const [dataLoading,setDataLoading] = useState(false);
    
    const dateMsg = " As of " +  moment().format("DD-MM-YYYY hh:mm:ss");
    useEffect(() => {
        async function fetchGlobalApiData()
        {
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');            
           // console.log("API Data: ", apiResponse);
           setDataLoading(true);
            let apiJsonData = await apiResponse.json();
            delete apiJsonData.results[0].source;
            setGlobalData(apiJsonData.results[0]);            
            //console.log(apiJsonData);
            setDataLoading(false);
        }
        fetchGlobalApiData();
    },[])


  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Typography variant="h2" gutterBottom style = {{color: 'darkgrey'}}>      
          <CountUp start={0} end={globalData && isNaN(globalData.total_cases ) ? 0 : globalData.total_cases} duration={1.75} separator="," />
        </Typography>
        <div className={typeGraphyclasses.root}>
          <Typography variant="body1" gutterBottom style = {{color: 'darkgrey'}}>
          GLOBAL COUNT  {dateMsg}
          </Typography>
        </div> 
      </Paper>
      
      <Paper elevation={3} >
        <Typography variant="h2" gutterBottom style = {{color: 'Blue'}} > 
         <CountUp start={0} end={globalData && isNaN(globalData.total_unresolved) ? 0 : globalData.total_unresolved} duration={1.75} separator="," />
        </Typography>
        <div className={typeGraphyclasses.root}>
          <Typography variant="body1" gutterBottom  style = {{color: 'Blue'}}>
              TOTAL ACTIVE {dateMsg}
          </Typography>
        </div> 
        </Paper>
      
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Green'}}>
      <CountUp start={0} end={globalData && isNaN(globalData.total_recovered) ? 0 : globalData.total_recovered} duration={1.75} separator="," />
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom style = {{color: 'Green'}}>
            TOTAL RECOVERED  {dateMsg}
        </Typography>
      </div> 
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Red'}}>
      <CountUp start={0} end={globalData && isNaN(globalData.total_deaths) ? 0 : globalData.total_deaths} duration={1.75} separator="," />
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom style = {{color: 'Red'}}> 
            TOTAL FATALLITIES {dateMsg}
        </Typography>
      </div> 
      </Paper>

    </div>
  );
}
