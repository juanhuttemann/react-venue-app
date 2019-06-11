import React from 'react';
import Header from './components/header/'
import './resources/styles.css'

import {Element} from 'react-scroll'


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
      <Element name="featured">
        <Featured/>
      </Element>
      <Element name="venueInfo">
        <VenueInfo/>
      </Element>
      <Element name="highlights">
        <Highlight/>
      </Element>
      <Element name="pricing">
        <Pricing/>
      </Element>
      <Element name="location">
        <Location/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
 