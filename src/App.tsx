import React from 'react';
import './global.css';
import Form from './pages/formPage'
import Navbar from "./pages/navbar"
import Main from "./pages/mainPage"


const App=()=> {
  return (
      <div>
        <Navbar></Navbar>
        <Main></Main>
        <Form></Form>
      </div>
  );  
}

export default App;
