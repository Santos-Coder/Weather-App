import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Navbar from '../src/Components/navbar/nav'
import Weather from '../src/Components/weather/weather'
import Intro from '../src/Components/intro/intro'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Route exact path="/" component={Intro} />
        <Route path="/weather" component={Weather} />
      </BrowserRouter>

    </div>
  );
}

export default App;
