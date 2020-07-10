
/*

Steps to add the project into Github 

1) create new repo  piaic-bootcamp-covid19-tracker from  git destop

2) put path till bootcamp folder  /home/ubuntu/myvscode/piaicbootcamp

3) cd /home/ubuntu/myvscode/piaicbootcamp
   npx create-react-app piaic-bootcamp-covid19-tracker

   4) Install Material UI in the project folder
      yarn add @material-ui/core 
      yarn add @material-ui/icons
      npm install fontsource-roboto
      yarn add react-countup
      npm install --save moment react-moment
      yarn add axios
      yarn add react-chartjs-2 chart.js

  5) push repository

https://thevirustracker.com/api


 Note: 
 
 1) if a repository is created in github then use clone option in Gitdestop and give the folder to it
 2) if folder is already exists the reomve git folder from it use local repository option


*/
import React from 'react';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
      <GlobalProvider>
       <Header />
       <MainGrid />
       </GlobalProvider>
  );
}

export default App;

/*
class App extends React.Component{

  render() {

    return(<div className="App">
    hello from class
    <Header />
    </div> 
    );
  }

}

export default App;

*/