//e6288f14f6msh5914240bcd1e9bfp1407abjsn3cbd6935548c

import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reactLogo from './assets/react.svg'

import TreasuryYield from './pages/TreasuryYield'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Inflation from './pages/Inflation';

import './App.css'

function App() {

 

  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/treasury-yield" element={<TreasuryYield />}/>
      <Route path="/inflation" element={<Inflation />}/>
       
      
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App
