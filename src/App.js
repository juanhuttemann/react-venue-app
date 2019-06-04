import React from 'react';
import Header from './components/Header'
import './resources/styles.css'

import Featured from './components/featured'
import VenueInfo from './components/venueInfo'
import Highlight from './components/highlights'

const App = ()=> {
  return (
    <div className="App" style={{ height:"1500px", background: 'cornflowerblue'}}>
      <Header/>
      <Featured/>
      <VenueInfo/>
      <Highlight/>
    </div>
  );
}

export default App;
 