import React from 'react';
import './App.css';
import Welcome from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Movie  from './Components/Movie'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Welcome></Welcome>
        <Route exact path='/' component={Home} />
        <Route path='/Movie/:Name' render={() => <Movie/>} />
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
