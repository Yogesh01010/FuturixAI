import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:59PM", ST1: 3000, ST2: 2800, ST3: 2900 },
  { time: "11:59PM", ST1: 3200, ST2: 3100, ST3: 3150 },
  { time: "12:59AM", ST1: 3500, ST2: 3000, ST3: 3250 },
  { time: "1:59AM", ST1: 3700, ST2: 3400, ST3: 3300 },
  { time: "2:59AM", ST1: 3900, ST2: 3200, ST3: 3100 },
  { time: "3:59AM", ST1: 4200, ST2: 3600, ST3: 3700 },
  { time: "4:59AM", ST1: 4100, ST2: 3900, ST3: 4000 },
  { time: "5:59AM", ST1: 4500, ST2: 3800, ST3: 4200 },
  { time: "6:59AM", ST1: 5000, ST2: 4100, ST3: 4400 },
  { time: "7:59AM", ST1: 5200, ST2: 4300, ST3: 4600 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E2633] text-white px-3 py-1 rounded shadow text-sm">
        ${payload[0].value.toFixed(3)}
      </div>
    );
  }
  return null;
};

const VolumeTrendsChart = () => {
  return (
    <div className="bg-[#0A0F1A] text-white p-6 shadow-md">
      <h2 className="text-white font-semibold text-xl mb-4">Volume Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="time" stroke="#A0AEC0" />
          <YAxis stroke="#A0AEC0" domain={[2000, 6500]} tickCount={6} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="circle"
            wrapperStyle={{ paddingBottom: 20 }}
          />
          <Line
            type="monotone"
            dataKey="ST1"
            stroke="#FF00B8"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="ST2"
            stroke="#00C6FF"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="ST3"
            stroke="#FFC300"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolumeTrendsChart;