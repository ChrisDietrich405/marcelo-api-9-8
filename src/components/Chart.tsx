import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { TreasuryYieldProps } from '../model';
import { TreasuryYieldDataProps } from "../model"

interface ChartProps {
    data: TreasuryYieldDataProps[]
}

export default function Chart({data} : ChartProps) {
    const chartData = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [2,3,4,5,5,6,7,7],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };
    return <Line options={options} data={chartData} />;
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
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [2,3,4,5,5,6,7,7],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
      
//     ],
//   };
  