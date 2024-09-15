import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/global.css'
import Rectangle from './components/Rectangle/Rectangle';
import { Container } from './components/containers/Container';
import { BackgroundContainer } from './components/containers/BackgroundContainer';

const  App: React.FC  = () =>{
  return (
    <Container>
      <BackgroundContainer>
        <h1 className="primary-text"> This is my CSS Project</h1>

      </BackgroundContainer>
    </Container>
  );
}

export default App;
