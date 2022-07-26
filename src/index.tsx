import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/formPage"
import Output from "./pages/outputPage"
import { Provider } from "react-redux"
import { store } from './state/store';
// import { store } from "./state/store"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form></Form>} />
        <Route path='/output' element={<Output></Output>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

