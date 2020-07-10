

import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { Bar, Line } from 'react-chartjs-2'


const Charts = (props) => {

  const { confirmed, recovered, deaths } = props.data

  //const summaryData = props.data

  const [dailyStatisticsData, setdailyStatisticsData] = useState({})

  useEffect(() => {
    const fetchDailyDataFromAPI = async () =>
    {
      const initialDailyData = await fetchDailyData()
      setdailyStatisticsData(initialDailyData)
    }

    fetchDailyDataFromAPI()
  }, [])

  const lineChart = (
    dailyStatisticsData[0] ? (
      <Line
        data={{
          labels: dailyStatisticsData.map(( { date }) => date ),
          datasets:[{
            data: dailyStatisticsData.map((data) => data.confirmed),
            label: 'Infected Cases',
            borderColor: '#3232FA',
            fill:true
          }, {
            data: dailyStatisticsData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(240, 26,26 0.8)',
            fill: true,
          },
        ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `World Stats` },
        }}
      />
    ) :null
    );
  return (
    <div className={styles.gridContainer}>
      <Grid container spacing={3} justify="center" >

        <Grid item xs={12} md={6} >
        { barChart }
        </Grid>
        <Grid item xs={12} md={6} >
        { lineChart}
        </Grid>
      </Grid>
    </div>
  )
}

export default Charts