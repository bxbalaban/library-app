import React from 'react';
import './global.css';
import Form from './pages/formPage'
import Navbar from "./pages/navbar"


const App=()=> {
  return (
      <div>
        <Navbar></Navbar>
        <Form></Form>
      </div>
  );  
}

export default App;
