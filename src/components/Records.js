import React, { useEffect , useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

import Record from './Record';


export default function Records() {
  
    
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
    },[])
  
  return (
    <Record />
    );
}
