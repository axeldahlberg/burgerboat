import React from 'react';

import './App.css';
import VideoBackground from './components/VideoBackground';
import BurgerBoatNavigation from './components/BurgerBoatNavigation';






//import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() { 
  return ( 
    <>
      <VideoBackground>
        <BurgerBoatNavigation/>
      </VideoBackground>
    </>
  )
}

export default App;


