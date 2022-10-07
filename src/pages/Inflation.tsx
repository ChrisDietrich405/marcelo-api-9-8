import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import InflationItem from "../components/InflationItem";
import { InflationChart } from "../components/InflationChart";
import InflationTable from "../components/InflationTable";

import inflationModel from "../inflationModel";

const Inflation = () => {
  const [inflationData, setInflationData] = useState<inflationModel | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const fetchInflation = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://www.alphavantage.co/query?function=INFLATION&apikey=demo"
    );
    setInflationData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInflation();
  }, []);

  return (
    <div>
      {inflationData && <InflationChart data={inflationData.data} />}
      {loading && (
        <ReactLoading type="bubbles" color="blue" height={667} width={375} />
      )}
      {inflationData && <InflationItem inflationData={inflationData} />}
      {inflationData && <InflationTable inflationData={inflationData.data} /> }
    </div>
  );
};

export default Inflation;
