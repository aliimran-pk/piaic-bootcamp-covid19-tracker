import React, { useState, useEffect, useContext } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { GlobalContext } from '../context/GlobalContext';

import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const getCountries = async() => {
    try {
        const { data: {countries} } = await Axios.get(`${url}/countries`);        
        return countries.map((country) => country);
    } catch(error) {
        console.log(error);
    }
}

/*
function handleCountryChange(e)
{
    alert(e);
    const testRecord = {
        total_cases: 1000,
        total_unresolved: 2000,
        total_recovered: 3000,
        total_deaths: 5000
    };

    //setRecord(testRecord);

   //const[record,setRecord] = useContext(GlobalContext);
}
*/
const CountryDropdown = () => {
   
   // const[updatedRecords,setUpdatedRecord] = useState();
   /*
   const testRecord = {
    total_cases: 1000,
    total_unresolved: 2000,
    total_recovered: 3000,
    total_deaths: 5000
    };
*/
    const[record,setRecord] = useContext(GlobalContext);
    console.log(record);
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
  
    const onCountryChangeHandler = evnt => {
        //alert(evnt.target.value);
       // setRecord(testRecord);
       fetchCountryData(evnt.target.value);
       
    };

    async function fetchCountryData(countryId)
    {
        console.log("CountryId: " +countryId);
        let url = countryId.length > 0 ? 'https://api.thevirustracker.com/free-api?countryTotal='+ countryId : 'https://api.thevirustracker.com/free-api?global=stats';
        const apiResponse = await fetch(url);            
       // console.log("API Data: ", apiResponse);
      // setDataLoading(true);
        let apiJsonData = await apiResponse.json();
        console.log(apiJsonData);
        let updateRecord = countryId.length > 0 ? apiJsonData.countrydata[0]:apiJsonData.results[0];
        setRecord(updateRecord);    
    }

    useEffect(() => {
        const fetchApi = async() => {
            setFetchedCountries(await getCountries());
        }
       
       fetchApi();
    }, [setFetchedCountries]);

  


    return(
        <div>
           <p> Select Country </p>
            <FormControl>
                <NativeSelect onChange={onCountryChangeHandler}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country.iso2}>{country.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryDropdown;