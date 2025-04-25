import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const data = [
  { name: 'Mar 2021', value: 13.4 },
  { name: 'Mar 2022', value: 21.4 },
  { name: 'Mar 2023', value: 18.2 },
  { name: 'Mar 2024', value: 20.5 },
  { name: 'Mar 2024', value: 19.8 },
  { name: 'Mar 2024', value: 20.7 },
  { name: 'Mar 2024', value: 20.2 },
  { name: 'Mar 2024', value: 21.0 },
  { name: 'Mar 2024', value: 20.1 },
  { name: 'Mar 2024', value: 19.9 },
  { name: 'Mar 2024', value: 20.6 },
  { name: 'Mar 2024', value: 21.2 },
  { name: 'Mar 2024', value: 21.4 },
  { name: 'Mar 2024', value: 20.9 },
  { name: 'Mar 2024', value: 20.3 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 text-white text-xs  px-2 py-1 rounded">
        {payload[0].value.toFixed(1)}M
      </div>
    );
  }
  return null;
};

export default function VolumeTrends() {
  return (
    <div className="bg-[#111827] p-6 rounded-md">
      <h2 className="text-white text-lg font-semibold mb-4">Volume Trends</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          barSize={24}
          margin={{ top: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: 'white',
              fontSize: 12,
              dy: 10,
            }}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            fill="#4F8DF9"
            shape={({ x, y, width, height }) => {
              const radius = 12;
              return (
                <g>
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={radius}
                    ry={radius}
                    style={{ fill: '#4F8DF9' }}
                  />
                </g>
              );
            }}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => `${value.toFixed(1)}M`}
              fill="white"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
