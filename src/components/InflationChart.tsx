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
import { IData } from "../inflationModel"

interface IInflationData {
  data: IData[];
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

export function InflationChart({data} : IInflationData) {
    const chartdata = {
        labels: data.map((item) => {
            return item.date
        }),
        datasets: [
          {
            label: "Inflation",
            data: data.map((item) => {
                return item.value
            }),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
    }
  return <Line options={options} data={chartdata} />;
}
