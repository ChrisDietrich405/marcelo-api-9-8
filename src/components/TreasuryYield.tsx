import React, { useEffect, useState } from "react";
import axios from "axios";
// https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=5year&apikey=QOGY5T96XZC5V97S

interface TreasuryYieldDataProps {
  date: string;
  value: string;
}

interface TreasuryYieldProps {
  data: TreasuryYieldDataProps[];
  interval: string;
  name: string;
  unit: string;
}

const intervals = ["daily", "weekly", "monthly"];

const TreasuryYield = () => {
  const [treasuryData, setTreasuryData] = useState<TreasuryYieldProps | null>(
    null
  );
  const [selectedInterval, setSelectedInterval] = useState<string>("")


  const fetchTreasuryInfo = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=${selectedInterval}&maturity=5year&apikey=${
        import.meta.env.VITE_ALPHAVANTAGE_KEY
      }`
    );
    console.log(response);
    setTreasuryData(response.data);
  };

    useEffect(() => {
      fetchTreasuryInfo();
    }, [selectedInterval]);

  return (
    <div>
      <h4>What is your time frame?</h4>
      {selectedInterval}
      <select onChange={(e) => setSelectedInterval(e.target.value)}>
        <option></option>
        {intervals.map((timeRange) => {
          return (
            <>
              <option value={timeRange} >{timeRange}</option>
            </>
          );
        })}

        {/* <option value="text 1">text 1</option>
        <option value="text 3">text 2</option>
        <option value="text 3">text 3</option> */}
      </select>

      <h2>{treasuryData?.name}</h2>
      <p>{treasuryData?.interval}</p>
      <p>{treasuryData?.unit}</p>
      {treasuryData?.data.map((item) => {
        return <p>{item.date}</p>;
      })}
    </div>
  );
};

export default TreasuryYield;
