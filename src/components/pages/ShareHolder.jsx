import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const dataSets = {
  FII: [
    { name: "Mar 2021", value: 30 },
    { name: "Mar 2022", value: 60 },
    { name: "Mar 2023", value: 40 },
    { name: "Mar 2024", value: 55 },
  ],
  MF: [
    { name: "Mar 2021", value: 20 },
    { name: "Mar 2022", value: 50 },
    { name: "Mar 2023", value: 45 },
    { name: "Mar 2024", value: 60 },
  ],
  Promoter: [
    { name: "Mar 2021", value: 70 },
    { name: "Mar 2022", value: 65 },
    { name: "Mar 2023", value: 75 },
    { name: "Mar 2024", value: 80 },
  ],
  Other: [
    { name: "Mar 2021", value: 15 },
    { name: "Mar 2022", value: 25 },
    { name: "Mar 2023", value: 30 },
    { name: "Mar 2024", value: 35 },
  ],
};

const insights = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
];

const Card = ({ children, className }) => (
  <div className={`bg-[#161B22] rounded-2xl shadow p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const ShareholdingDashboard = () => {
  const [activeTab, setActiveTab] = useState("FII");

  return (
    <div className="bg-[#0A0F1A] text-white p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Donut Chart Section */}
      <Card className="flex flex-col items-center">
        <h2 className="text-white font-semibold mb-4">Shareholding</h2>
        <div className="relative flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
              <circle
                className="text-[#3fbf9b]"
                strokeWidth="3"
                strokeDasharray="10, 90"
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="15.9155"
                stroke="currentColor"
              />
              <circle
                className="text-[#5A8DEE]"
                strokeWidth="3"
                strokeDasharray="25, 75"
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="15.9155"
                stroke="currentColor"
                transform="rotate(36 18 18)"
              />
              <circle
                className="text-[#7A98FF]"
                strokeWidth="3"
                strokeDasharray="20, 80"
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="15.9155"
                stroke="currentColor"
                transform="rotate(108 18 18)"
              />
              <circle
                className="text-[#9AB8FF]"
                strokeWidth="3"
                strokeDasharray="15, 85"
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="15.9155"
                stroke="currentColor"
                transform="rotate(180 18 18)"
              />
              <circle
                className="text-[#AED0FF]"
                strokeWidth="3"
                strokeDasharray="30, 70"
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="15.9155"
                stroke="currentColor"
                transform="rotate(252 18 18)"
              />
            </svg>
          </div>
          <div className="ml-6 space-y-1 text-sm">
            <div className="flex items-center gap-2 text-[#3fbf9b]">● C1 X%</div>
            <div className="flex items-center gap-2 text-[#5A8DEE]">● C1 X%</div>
            <div className="flex items-center gap-2 text-[#7A98FF]">● C1 X%</div>
            <div className="flex items-center gap-2 text-[#9AB8FF]">● C1 X%</div>
            <div className="flex items-center gap-2 text-[#AED0FF]">● C1 X%</div>
          </div>
        </div>
      </Card>

      {/* Bar Chart Section */}
      <Card>
        <div className="flex gap-6 mb-4">
          {Object.keys(dataSets).map((tab) => (
            <button
              key={tab}
              className={`pb-1 font-semibold ${
                activeTab === tab ? "text-white border-b-2 border-white" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataSets[activeTab]}>
            <XAxis dataKey="name" stroke="#A0AEC0" />
            <YAxis hide />
            <Bar dataKey="value" fill="#5A8DEE" barSize={30} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Shareholding Insights Section */}
      <Card>
        <h2 className="text-white font-semibold mb-4">Shareholding Insights</h2>
        <ul className="space-y-4">
          {insights.map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#3fbf9b] mt-1">●</span>
              <p className="text-sm text-white">{text}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ShareholdingDashboard;
