import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rectangle from './components/Rectangle/Rectangle';
import {Greet} from './components/Test/Greet';
import {Person} from './components/Test/Person';
import {PersonList} from  './components/Test/Persons';
import {Status} from './components/Test/Status';
import {Heading} from './components/Test/Heading';
import { Oscar } from './components/Test/Oscar';
import { Button } from './components/Test/Button';
import { Container } from './components/Test/Container';
import {LoggedIn} from './components/State/LoggedIn'
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

const  App: React.FC  = () =>{
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (

  <div className="scrollable" >
    
      <Greet name = 'Busy Man' messageCount={20} isLoggedIn={true}/>
      <Person name = {personName}/>
      <PersonList nameList = {nameList}/>
      <Status status = 'loading'/>
      <Heading> This is very cool</Heading>
      <Oscar> 
        <Heading> Oscar Goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {console.log('Button Clicked', event)}}/>
      <Container styles={{border:'1px solid black'}}/>
      <LoggedIn />

      <ThemeContextProvider ><Box/></ThemeContextProvider>
      <UserContextProvider> <User/></UserContextProvider>
  </div>
  );
}

export default App;
