import React from 'react';
import './global.css';
import Form from './pages/formPage'

const App=()=> {
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
      <Form></Form>
      
    </h1>
  );  
}

export default App;
