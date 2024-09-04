import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rectangle from './components/Rectangle/Rectangle';
import {Greet} from './components/Test/Greet';
import {Person} from './components/Test/Person';
import {PersonList} from  './components/Test/Persons';



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

  <div>
    
      <Greet name = 'Busy Man' messageCount={20} isLoggedIn={false}/>
      <Person name = {personName}/>
      <PersonList nameList = {nameList}/>
  </div>
  );
}

export default App;
