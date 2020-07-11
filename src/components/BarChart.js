import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { GlobalContext } from '../context/GlobalContext';

function BarChart() {
  // Use State
  const[record,setRecord] = useContext(GlobalContext);
  // Barchart
  const Barchart = (
    <Bar
      data={{
        labels: ["Total Cases","Serious", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "darkgrey",
              "blue",
              "green",
              "red"
            ],
            data: [record.total_cases, record.total_serious_cases,record.total_recovered,record.total_deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State` },
      }}
    />
  );

  return (
    <div >
      {Barchart}
    </div>
  );
}

export default BarChart;
