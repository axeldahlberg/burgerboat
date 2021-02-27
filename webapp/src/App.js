import React from 'react';

import './App.css';
import VideoHero from './components/VideoHero';
import Navigation from './components/Navigation';

import Footer from './components/Footer';

import styled from 'styled-components/macro';
//import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Page = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 360px;
`;

const Header = styled.section`
`;


function App() { 
  return ( 
    <>
      <Page>
        <Navigation/>
        <Header>
          Axel
        </Header>
        <VideoHero />
      </Page>
      
    </>
  )
}

export default App;


