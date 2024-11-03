import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/global.css'
import Rectangle from './components/Rectangle/Rectangle';
import { Container } from './components/containers/Container';
import { BackgroundContainer } from './components/containers/BackgroundContainer';
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer'

const  App: React.FC  = () =>{
  return (
    <Container>
      <BackgroundContainer>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </BackgroundContainer>
    </Container>
  );
}

export default App;
