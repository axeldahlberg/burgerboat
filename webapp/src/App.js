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
  flex-flow: column nowrap;
  min-width: 411px;
  
  width: 100%;
  
  justify-content: center;
  background: black;
  align-items: center;
  
`;

const Header = styled.section`
`;

const MidPage = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  flex-direction: column;
`;

function App() { 
  return ( 
    <>
      <Navigation/>
      <Page>
        <VideoHero />
        <AboutUs />
        <MenuFlyer language={'en'} />
        <ImageCarousel />
      </Page>
      <Footer />
      
    </>
  )
}

/*
<BoatMap />
<BoatInformation />
<Timeline />
*/
export default App;


