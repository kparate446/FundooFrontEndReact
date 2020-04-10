import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Router from './Router/Router';
// function App() {
//   return (
//     <div className="App">
// <Router/>
//      </div>
//   );
// }

export default class App extends React.Component {
  render() {
      return (
          <div>
<Router/>        
  </div>
      );
  }
}

// export default App;