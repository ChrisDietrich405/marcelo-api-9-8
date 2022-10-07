import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TreasuryYieldDataProps } from "../model";
interface ITreasuryData {
  data: TreasuryYieldDataProps[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export default function TreasuryYieldChart({ data }: ITreasuryData) {
  const chartData = {
    labels: data.map((item) => {
      return item.date;
    }),
    datasets: [
      {
        label: "Treasury Yield",
        data: data.map((item) => {
          return new Number(item.value);
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={chartData} />;
}
