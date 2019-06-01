import React from 'react';
import Header from './components/Header'
import './resources/styles.css'
import Featured from './components/featured'

const App = ()=> {
  return (
    <div className="App" style={{ height:"1500px", background: 'cornflowerblue'}}>
      <Header/>
      <Featured/>
    </div>
  );
}

export default App;
 