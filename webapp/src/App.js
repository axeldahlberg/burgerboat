import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import VideoBackground from './components/VideoBackground';

//import { ReactComponent as X }  from './icon/burgerboatsvg.svg';

//import BurgerBoatNav, { NavBar, NavItem  } from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() { 
  return ( 
  <>
    <VideoBackground/>
    <Switch>
      
    </Switch>
    </>
  )
}
/*
<Route exact path="/" component={}/>
      <Route path="/map" component={}/>
      */

/*
function BurgerBoatNavBar(){
  return (
    <nav>
      <ul><li><Link to="/">HOME</Link></li></ul>
      <ul><li><Link to="/about">ABOUT</Link></li></ul>
    </nav>
  )
}
*/

export default App;


/*

<NavBar>
      <NavItem icon=""/>
      <NavItem icon=""/>
      <NavItem icon=""/>
    </NavBar>
    */
