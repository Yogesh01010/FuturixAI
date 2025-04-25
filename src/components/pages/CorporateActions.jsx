import React, { useState } from "react";

const CorporateActions = () => {
  const [activeTab, setActiveTab] = useState("Board Meetings");

  const tabs = ["Board Meetings", "AGM", "Dividends", "Bonus", "Split", "Rights"];

  const renderContent = () => {
    if (activeTab === "Board Meetings") {
      return (
        <div className="bg-[#161B22] rounded-md overflow-hidden">
          <div className="grid grid-cols-2 border-b border-gray-700 py-3 px-4 font-semibold">
            <div>Meeting Date</div>
            <div>Purpose</div>
          </div>
          {Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-2 py-3 px-4 border-b border-gray-800 text-sm"
            >
              <div>25-01-28</div>
              <div>Quaterly Results</div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="bg-[#161B22] rounded-md p-4 text-gray-400 text-sm">
          No data available for {activeTab}.
        </div>
      );
    }
  };

  return (
    <div className="bg-[#0F1115] text-white p-8">
      <h2 className="text-2xl font-semibold mb-6">Corporate Actions</h2>

      <div className="flex space-x-6 border-b border-gray-700 pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? "text-white font-semibold border-b-2 border-white"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default CorporateActions;
