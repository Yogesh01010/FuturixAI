import React from 'react';
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';

const donutData = [
  { name: 'Strong Buy', value: 25, color: '#16a34a' },
  { name: 'Buy', value: 35, color: '#4ade80' },
  { name: 'Hold', value: 20, color: '#d1d5db' },
  { name: 'Sell', value: 10, color: '#f87171' },
  { name: 'Strong Sell', value: 10, color: '#ef4444' },
];

const barData = [
  { day: 'M', strongBuy: 5, buy: 5, hold: 5, sell: 9, strongSell: 9 },
  { day: 'T', strongBuy: 6, buy: 6, hold: 6, sell: 5, strongSell: 10 },
  { day: 'W', strongBuy: 2, buy: 2, hold: 2, sell: 3, strongSell: 6 },
  { day: 'T', strongBuy: 10, buy: 1, hold: 5, sell: 7, strongSell: 10 },
  { day: 'F', strongBuy: 7, buy: 3, hold: 3, sell: 7, strongSell: 13 },
];

const colors = {
  strongBuy: '#16a34a',
  buy: '#4ade80',
  hold: '#d1d5db',
  sell: '#f87171',
  strongSell: '#ef4444',
};

function ForecastDashboard() {
  const total = donutData.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  return (
    <div className=" bg-[#0f172a] text-white p-6">
      <h2 className="text-white text-2xl font-bold mb-6">Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Donut Chart + Legend Side-by-Side */}
        <div className="bg-[#1e293b] p-6 rounded-xl">
          <h3 className="text-white font-semibold mb-4">Analyst Estimates</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-52 h-52">
              <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                {donutData.map((slice, index) => {
                  const dashArray = (slice.value / total) * 100;
                  const dashOffset = 100 - startAngle;
                  const segment = (
                    <circle
                      key={index}
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke={slice.color}
                      strokeWidth="3"
                      strokeDasharray={`${dashArray} ${100 - dashArray}`}
                      strokeDashoffset={dashOffset}
                    />
                  );
                  startAngle += dashArray;
                  return segment;
                })}
              </svg>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-[#0f172a] rounded-full"></div>
            </div>
            <ul className="ml-6 space-y-2 text-sm">
              {donutData.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-[#1e293b] p-6 rounded-xl">
          <h3 className="text-white font-semibold mb-4">Recommendation Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <XAxis dataKey="day" stroke="#ccc" />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar dataKey="strongBuy" stackId="a" fill={colors.strongBuy} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="strongBuy" position="top" fill="#fff" />
              </Bar>
              <Bar dataKey="buy" stackId="a" fill={colors.buy} />
              <Bar dataKey="hold" stackId="a" fill={colors.hold} />
              <Bar dataKey="sell" stackId="a" fill={colors.sell} />
              <Bar dataKey="strongSell" stackId="a" fill={colors.strongSell} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ForecastDashboard;