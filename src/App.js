/*

1) create new repo  piaic-bootcamp-covid19-tracker from  git destop
2) put path till bootcamp folder  /home/ubuntu/myvscode/piaicbootcamp
3) cd /home/ubuntu/myvscode/piaicbootcamp
   npx create-react-app piaic-bootcamp-covid19-tracker
4)  


---------------------

1) Create sample react app
  npx create-react-app piaic-covid19

2) Install Material UI in the project folder
  yarn add @material-ui/core 
  yarn add @material-ui/icons
  npm install fontsource-roboto
  

*/
import React from 'react';
import Header from './components/Header';

function App() {
  return (
       <Header />
    
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