import React from 'react';
import './global.css';
import Form from './pages/formPage'
import Navbar from "./pages/navbar"
import Main from "./pages/mainPage"
import Footer from "./pages/footer"


const App=()=> {
  return (
      <div style={{backgroundColor:"white"}}>
        <Navbar></Navbar>
        <Main></Main>
        <Form></Form>
        <Footer></Footer>
      </div>
  );  
}

export default App;
