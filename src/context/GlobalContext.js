import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {

    const [record, setRecord] = useState({});
    /*
    const [record, setRecord] = useState({
        total_cases: 1000,
        total_unresolved: 2000,
        total_recovered: 3000,
        total_deaths: 5000
    });
    */
   
        return (
        <GlobalContext.Provider value={
            [record,setRecord]}>
            {props.children}
        </GlobalContext.Provider>
    );
 
};