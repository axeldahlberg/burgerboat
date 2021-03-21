import React from 'react';

import { nanoid } from 'nanoid';

import './App.css';
import VideoHero from './components/VideoHero';
import Navigation from './components/Navigation';

import Footer from './components/Footer';

import styled from 'styled-components/macro';
import MenuFlyer from './components/MenuFlyer';
import ImageCarousel from './components/ImageCarousel';

import AboutUs from './components/AboutUs';
import BoatMap from './components/BoatMap';

import BoatInformation from './components/BoatInformation';
import Timeline from './components/Timeline';

//import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Page = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 360px;
  justify-content: center;
  
`;

const Header = styled.section`
`;

function App() { 
  return ( 
    <>
      <Page>
        <Navigation/>
        <VideoHero />
        <ImageCarousel/>
        <MenuFlyer language={'en'}/>
        <BoatMap />
        <AboutUs />
        <BoatInformation />
        <Timeline />
        <Footer />
      </Page>
      
    </>
  )
}

export default App;


