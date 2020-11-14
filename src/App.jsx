import React from 'react'; 
import './App.css'
import Home from './components/Home1'
import AppRouter from './components/router'




class App extends React.Component{
  render(){
    return(
      <div> 
        <AppRouter/>
        
      </div>
    )
  }
}

export default App;
