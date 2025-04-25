import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartConfig } from './chartConfig';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

export default function StockChart() {
  return (
    <div className="bg-gray-900 h-70 w-full rounded-lg p-2">
      <Line data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
}
