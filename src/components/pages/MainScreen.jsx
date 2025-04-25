// File: components/StockCard.jsx
import React, { useState } from "react";
import StockChart from "../Charts/StockChart";
import StockStats from "../Charts/StockStats";

const MainScreen = () => {
  // State to track the selected time range
  const [selectedRange, setSelectedRange] = useState("1W");

  // State to manage whether to show the full text or truncated text
  const [showFullText, setShowFullText] = useState(false);

  // Function to handle button click
  const handleButtonClick = (range) => {
    setSelectedRange(range);
  };

  // Toggle text visibility
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="min-h-screen w-full h-full bg-gray-950 text-white flex items-center justify-center ">
      <div className="bg-gray-950 text-white p-6 md:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-1">
          <img
            src="data:image/png;base64,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"
            alt="Apple"
            className="w-15 h-13"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              AAPL <span className="text-gray-400 font-medium">Apple Inc.</span>
            </h2>
            <p className="text-2xl font-semibold">
              $25,901 <span className="text-green-500 text-sm">+0.27%</span>
            </p>
            <p className="text-sm text-gray-400">
              28 January, 4:00pm EST | Market Open
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-6">
          {showFullText
            ? "Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 &amp; 1,438.75. Cipla has given -4.55% in this year &amp; -0.87% in the last 5 days. Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 &amp; 1,438.75. Cipla has given -4.55% in this year &amp; -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sector average."
            : "Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 &amp; 1,438.75. Cipla has given -4.55% in this year &amp; -0.87% in the last 5 days."}
          <span
            onClick={toggleText}
            className="text-blue-400 cursor-pointer"
          >
            {showFullText ? " show less" : " see more"}
          </span>
        </p>

        {/* Chart Placeholder */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-black/20 rounded-lg flex items-center justify-center text-gray-400 min-h-[300px]">
            <div>
              <div className="flex w-130 h-60">
                <StockChart />
              </div>
              <div className="flex space-x-3 items-center justify-center">
                {["1W", "1M", "3M", "1Y", "All"].map((label) => (
                  <button
                    key={label}
                    onClick={() => handleButtonClick(label)} // Handle button click
                    className={`px-4 py-1.5 rounded-full text-sm ${
                      selectedRange === label
                        ? "bg-green-500 text-white"
                        : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <StockStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
