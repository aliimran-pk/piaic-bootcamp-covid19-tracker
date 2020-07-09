import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
//import { getCountries } from '../../api';
//import styles from './CountryDropdown.module.css';

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

function handleCountryChange(e)
{
    alert(e);
}
const CountryDropdown = () => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setFetchedCountries(await getCountries());
        }
       
       fetchApi();
    }, [setFetchedCountries]);

    return(
        <div>
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country.iso2}>{country.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryDropdown;