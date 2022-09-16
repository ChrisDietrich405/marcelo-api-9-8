import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import BasicSelect from "../components/BasicSelect";
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

const intervals = [
  { value: "daily", text: "Daily" },
  { value: "weekly", text: "Weekly" },
  { value: "monthly", text: "Monthly" },
];

const maturity = [
  { value: "3month", text: "3 months" },
  { value: "2year", text: "2 years" },
  { value: "5year", text: "5 years" },
  { value: "7year", text: "7 years" },
  { value: "10year", text: "10 years" },
  { value: "30year", text: "30 years" },
];

const TreasuryYield = () => {
  const [treasuryData, setTreasuryData] = useState<TreasuryYieldProps | null>(
    null
  );
  const [selectedInterval, setSelectedInterval] = useState<string>("");
  const [selectedMaturity, setSelectedMaturity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTreasuryInfo = async () => {
    if (selectedInterval && selectedMaturity) {
      setLoading(true);
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=${selectedInterval}&maturity=${selectedMaturity}&apikey=${
          import.meta.env.VITE_ALPHAVANTAGE_KEY
        }`
      );

      console.log(response);
      setTreasuryData(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTreasuryInfo();
  }, [selectedInterval, selectedMaturity]);

  return (
    <div>
      {loading && (
        <ReactLoading type="bars" color="blue" height={667} width={375} />
      )}
      <BasicSelect
        question="What is your time frame"
        label="time frame"
        options={intervals}
        setSelectedValue={setSelectedInterval}
      />
      <BasicSelect
        question="What is your choice of maturity"
        label="maturity time"
        options={maturity}
        setSelectedValue={setSelectedMaturity}
      />
      <h2>{treasuryData?.name}</h2>
      <p>{treasuryData?.interval}</p>
      <p>{treasuryData?.unit}</p>
      {treasuryData?.data.map((item) => {
        return (
          <p>
            {item.date}-{item.value}
          </p>
        );
      })}
    </div>
  );
};

export default TreasuryYield;
