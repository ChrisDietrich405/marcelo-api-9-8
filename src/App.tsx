//e6288f14f6msh5914240bcd1e9bfp1407abjsn3cbd6935548c

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TreasuryYield from "./pages/TreasuryYield";
import Home from "./pages/Home";
import Inflation from "./pages/Inflation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";

import "./App.css";
import CompanyOverview from "./pages/CompanyOverview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treasury-yield" element={<TreasuryYield />} />
            <Route path="/inflation" element={<Inflation />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
