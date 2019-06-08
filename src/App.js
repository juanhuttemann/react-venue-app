import React from 'react';
import Header from './components/header/'
import './resources/styles.css'

import Featured from './components/featured'
import VenueInfo from './components/venueInfo'
import Highlight from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/footer'

const App = ()=> {
  return (
    <div className="App" style={{ height:"1500px", background: 'cornflowerblue'}}>
      <Header/>
      <Featured/>
      <VenueInfo/>
      <Highlight/>
      <Pricing/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
 