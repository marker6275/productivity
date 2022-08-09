import React from 'react';
import Timer from './Timer';
import Youtube from './Youtube/Youtube.js';
import './App.css';
import Cloud from './images/cloud.png';
import TV from './images/tv.jpg';
import Kirby from './images/kirby.jpg';

function App() {
  return (
    <div className="App">
      <img src={Cloud} className="cloud" alt="cloud"/> 
      <img src={TV} className="tv" alt="tv"/>
      <img src={Kirby} className="kirby" alt="kirby"/>
      <Timer/>
      <Youtube/>
        <p className="great">
          You're wonderful!
        </p>
      <p className="ily">
        I love you :3
      </p>
    </div>
  )
}

export default App;