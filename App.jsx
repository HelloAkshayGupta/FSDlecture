import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';


function App() {
  const [store,setStore]=useState("");
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          
          <Route path="/login" element={<Login regDataLogin={store} />}>
          </Route>
          <Route path="/registration" element={<Registration regdata={setStore} />}>

          </Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

