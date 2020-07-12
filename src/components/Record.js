import React, {useEffect,useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

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

export default function Record() {
    //const[record,setRecord] = useContext(GlobalContext);
    const dateMsg = " As of " +  moment().format("DD-MM-YYYY hh:mm:ss");
    const classes = useStyles();
    const typeGraphyclasses = useStylesTypography();

    const[record,setRecord] = useContext(GlobalContext);
    console.log(record);
  
    useEffect(() => {
        
      async function fetchGlobalApiData()
        {
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');            
           // console.log("API Data: ", apiResponse);
           //setDataLoading(true);
            let apiJsonData = await apiResponse.json();
            delete apiJsonData.results[0].source;
            setRecord(apiJsonData.results[0]);            
            //console.log(apiJsonData);
            //setDataLoading(false);
        }
          fetchGlobalApiData();
    },);

    //const [dataLoading,setDataLoading] = useState(false);
    console.log(record); 
  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Typography variant="h2" gutterBottom style = {{color: 'darkgrey'}}>      
          <CountUp start={0} end={record && isNaN(record.total_cases ) ? 0 : record.total_cases} duration={1.75} separator="," />
        </Typography>
        <div className={typeGraphyclasses.root}>
          <Typography variant="body1" gutterBottom style = {{color: 'darkgrey'}}>
          GLOBAL COUNT  {dateMsg}
          </Typography>
        </div> 
      </Paper>
      
      <Paper elevation={3} >
        <Typography variant="h2" gutterBottom style = {{color: 'Blue'}} > 
         <CountUp start={0} end={record && isNaN(record.total_serious_cases) ? 0 : record.total_serious_cases} duration={1.75} separator="," />
        </Typography>
        <div className={typeGraphyclasses.root}>
          <Typography variant="body1" gutterBottom  style = {{color: 'Blue'}}>
              TOTAL SERIOUS CASES {dateMsg}
          </Typography>
        </div> 
        </Paper>
      
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Green'}}>
      <CountUp start={0} end={record && isNaN(record.total_recovered) ? 0 : record.total_recovered} duration={1.75} separator="," />
      </Typography>
      <div className={typeGraphyclasses.root}>
        <Typography variant="body1" gutterBottom style = {{color: 'Green'}}>
            TOTAL RECOVERED  {dateMsg}
        </Typography>
      </div> 
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h2" gutterBottom style = {{color: 'Red'}}>
      <CountUp start={0} end={record && isNaN(record.total_deaths) ? 0 : record.total_deaths} duration={1.75} separator="," />
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
