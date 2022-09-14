import React, { useEffect, useState } from "react";
//https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo

interface CompanyState {
    Name: string; 
    Symbol: string;
    Description: string; 
    Country: string;
    Exchange: string
}

const CompanyOverview = () => {
  const [company, setCompany] = useState<CompanyState | null>(null)
  const [symbolQuery, setSymbolQuery] = useState<string>("")
  
  const fetchCompanyOverview = async () => {
    if(symbolQuery) {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbolQuery}&apikey=${
        import.meta.env.VITE_ALPHAVANTAGE_KEY
      }`
    );
    const data = await response.json()
    setCompany(data)
    } else {
        alert("big problems")
    }
  };

  return <div>
    <input type="text" value={symbolQuery} onChange={(e) => setSymbolQuery(e.target.value)} />
    <button onClick={fetchCompanyOverview}>search company</button>
    <h2>{company?.Name}</h2>
  </div>;
};

export default CompanyOverview;
