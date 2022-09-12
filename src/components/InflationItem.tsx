import React, { useState } from "react";


import inflationModel from "../inflationModel";

interface InflationItemProps {
  inflationData: inflationModel;
}

const InflationItem = ({ inflationData }: InflationItemProps) => {

  return (
    <div>
       
      <h2>{inflationData.name}</h2>
      <p>{inflationData.unit}</p>
      {inflationData.interval}
      {inflationData.data.map((item) => {
        return <p>{item.date}</p>;
      })}
    </div>
  );
};

export default InflationItem;
