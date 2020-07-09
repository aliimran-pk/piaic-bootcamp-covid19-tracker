import React, { useState , useEffect , useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from "react-countup";
import moment from "moment";
import Record from './Record';


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

export default function Records() {
  
    
    

    const[record,setRecord] = useContext(GlobalContext);
   
    
    
    
  

    useEffect(() => {
        
      async function fetchGlobalApiData()
        {
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');            
           // console.log("API Data: ", apiResponse);
          // setDataLoading(true);
            let apiJsonData = await apiResponse.json();
            delete apiJsonData.results[0].source;
            setRecord(apiJsonData.results[0]);            
            //console.log(apiJsonData);
           // setDataLoading(false);
        }
        fetchGlobalApiData();
    },[])
  
  return (
    <Record />
    );
}
