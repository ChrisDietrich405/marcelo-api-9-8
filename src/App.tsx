import { useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TreasuryYield from "./pages/TreasuryYield";
import Home from "./pages/Home";
import Inflation from "./pages/Inflation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";

import CompanyOverview from "./pages/CompanyOverview";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import { loginReducer, initialState } from "./reducer/loginReducer";

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar state={state} dispatch={dispatch} />

        {state.isLoggedIn && (
          <aside>
            <Sidebar state={state} dispatch={dispatch}/>
          </aside>
        )}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treasury-yield" element={<TreasuryYield />} />
            <Route path="/inflation" element={<Inflation />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login state={state} dispatch={dispatch}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
